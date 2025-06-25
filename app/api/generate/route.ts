import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { GeneratorFormData } from '@/types/generator';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { productName, category, writingStyle } = await request.json() as GeneratorFormData;

    if (!productName || !category || !writingStyle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const prompt = `
Generate professional e-commerce content for a product with the following details:
- Product Name: ${productName}
- Category: ${category}
- Writing Style: ${writingStyle}

Please generate exactly 5 pieces of content in JSON format:

1. Product Title: A catchy, compelling title (max 60 characters)
2. Product Description: An engaging, benefit-focused description (100-150 words)
3. SEO Title: An SEO-optimized title for search engines (max 60 characters)
4. Meta Description: A search-friendly meta description (max 160 characters)
5. Call-to-Action: A conversion-focused CTA (5-10 words)

Requirements:
- Use ${writingStyle} tone throughout
- Focus on benefits over features
- Include relevant keywords for ${category}
- Make content compelling and conversion-focused
- Ensure all content is unique and engaging

Return ONLY a valid JSON object with these exact keys:
{
  "productTitle": "...",
  "productDescription": "...",
  "seoTitle": "...",
  "metaDescription": "...",
  "callToAction": "..."
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert copywriter specializing in e-commerce product descriptions. Generate compelling, SEO-optimized content that converts browsers into buyers. Always respond with valid JSON only."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content;
    
    if (!content) {
      return NextResponse.json(
        { error: 'No content generated' },
        { status: 500 }
      );
    }

    try {
      const parsedContent = JSON.parse(content);
      
      // Validate required fields
      const requiredFields = ['productTitle', 'productDescription', 'seoTitle', 'metaDescription', 'callToAction'];
      const missingFields = requiredFields.filter(field => !parsedContent[field]);
      
      if (missingFields.length > 0) {
        return NextResponse.json(
          { error: `Missing fields: ${missingFields.join(', ')}` },
          { status: 500 }
        );
      }

      return NextResponse.json(parsedContent);
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', content);
      return NextResponse.json(
        { error: 'Failed to parse generated content' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Generation error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
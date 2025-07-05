import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { GeneratorFormData } from '@/types/generator';
import { generateEmojiInstruction } from '@/lib/emoji-config';

export const runtime = 'nodejs';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract form data with emoji settings
    const { 
      productName, 
      category, 
      writingStyle,
      language = 'en',
      // NEW: Emoji control parameters
      useEmojis = true,
      emojiIntensity = 2
    } = body as GeneratorFormData & {
      useEmojis?: boolean;
      emojiIntensity?: number;
    };

    // Existing validation (preserved)
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

    // NEW: Generate emoji instruction based on settings
    const emojiInstruction = generateEmojiInstruction(useEmojis, emojiIntensity, category);

    // NEW: Language instruction based on selected language
    const languageInstruction = language === 'ua' 
      ? 'Generate all content in Ukrainian language (українська мова).'
      : 'Generate all content in English language.';

    // Enhanced prompt with emoji control
    const prompt = `
${languageInstruction}

Generate professional e-commerce content for a product with the following details:
- Product Name: ${productName}
- Category: ${category}
- Writing Style: ${writingStyle}
- Content Language: ${language === 'ua' ? 'Ukrainian' : 'English'}

${emojiInstruction}

Please generate exactly 5 pieces of content in JSON format:

1. Product Title: A catchy, compelling title (max 60 characters)
2. Product Description: An engaging, benefit-focused description (100-150 words)
3. SEO Title: An SEO-optimized title for search engines (max 60 characters)
4. Meta Description: A search-friendly meta description (max 160 characters)
5. Call-to-Action: A conversion-focused CTA (5-10 words)

Requirements:
- Use ${writingStyle} tone throughout
- Write ALL content in ${language === 'ua' ? 'Ukrainian language' : 'English language'}
- Focus on benefits over features
- Include relevant keywords for ${category}
- Make content compelling and conversion-focused
- Ensure all content is unique and engaging
${useEmojis ? `- Apply emoji strategy as specified above with intensity level ${emojiIntensity}` : '- NO emojis - use clean text only'}

Return ONLY a valid JSON object with these exact keys:
{
  "productTitle": "...",
  "productDescription": "...",
  "seoTitle": "...",
  "metaDescription": "...",
  "callToAction": "..."
}
`;

    // Existing OpenAI call (preserved)
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
      
      // Validate required fields (preserved)
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

// Handle preflight requests (preserved)
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

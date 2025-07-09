import { NextRequest, NextResponse } from 'next/server';
import { GeneratorFormData } from '@/types/generator';
import { generateEmojiInstruction } from '@/lib/emoji-config';
import { generateWithAssistant } from '@/lib/openai-assistant';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract form data with all parameters
    const { 
      productName, 
      category, 
      description,
      targetAudience,
      uniqueFeatures,
      pricePoint,
      writingStyle,
      language = 'en',
      market = 'US',
      emotionalTone,
      psychologicalTrigger,
      useEmojis = true,
      emojiIntensity = 2
    } = body as GeneratorFormData & {
      description?: string;
      targetAudience?: string;
      uniqueFeatures?: string;
      pricePoint?: string;
      market?: string;
      emotionalTone?: string;
      psychologicalTrigger?: string;
      useEmojis?: boolean;
      emojiIntensity?: number;
    };

    // Validation
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

    // Use Universal Assistant with fallback
    const result = await generateWithAssistant({
      productName,
      category,
      description,
      targetAudience,
      uniqueFeatures,
      pricePoint,
      style: writingStyle,
      language,
      market,
      emotionalTone,
      psychologicalTrigger,
      useEmojis,
      emojiIntensity
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Generation failed' },
        { status: 500 }
      );
    }

    // Log which method was used for analytics
    console.log(`✅ Content generated using: ${result.method}`);

    return NextResponse.json(result.data);

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
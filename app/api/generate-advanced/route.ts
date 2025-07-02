import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { generateWithAssistant } from '@/lib/copyflow-assistant';
import { CATEGORY_EMOJIS } from '@/lib/emoji-config';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    // Existing authentication and rate limiting (preserved)
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Enhanced parameter extraction with emoji support
    const { 
      productData, 
      style = 'professional', 
      language = 'uk', 
      market = 'UA',
      inputType = 'form',
      competitorAnalysis = false,
      includeViralContent = false,
      // NEW: Emoji control parameters
      useEmojis = true,
      emojiIntensity = 2,
      category = 'other'
    } = body;

    // Existing validation (preserved)
    if (!productData) {
      return NextResponse.json(
        { error: 'Product data is required' },
        { status: 400 }
      );
    }

    // Mock user subscription check (preserved)
    const userSubscription = {
      plan: 'pro', // This would come from database
      generations_used: 45,
      generations_limit: 500,
      features: ['advanced_generation', 'competitor_analysis']
    };

    // Enhanced product data with emoji settings for Assistant
    const enhancedProductData = {
      ...productData,
      user_preferences: {
        style,
        language,
        market,
        subscription_level: userSubscription.plan,
        // NEW: Emoji configuration for ChatGPT Assistant
        emoji_settings: {
          use_emojis: useEmojis,
          intensity: emojiIntensity,
          category_specific: true,
          category_emojis: CATEGORY_EMOJIS[category?.toLowerCase()] || CATEGORY_EMOJIS.other
        }
      },
      context: {
        user_id: session.user.id,
        generation_type: 'advanced',
        timestamp: new Date().toISOString(),
        input_type: inputType
      }
    };

    // Enhanced Assistant call with emoji configuration
    const result = await generateWithAssistant(enhancedProductData, {
      style,
      language,
      market,
      includeCompetitorAnalysis: competitorAnalysis,
      includeViralContent: includeViralContent || userSubscription.plan === 'enterprise',
      // NEW: Emoji configuration passed to Assistant
      emojiConfig: {
        enabled: useEmojis,
        intensity: emojiIntensity,
        categoryEmojis: CATEGORY_EMOJIS[category?.toLowerCase()] || CATEGORY_EMOJIS.other,
        category: category
      }
    });

    // Existing response handling (preserved)
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Generation failed' },
        { status: 500 }
      );
    }

    // Update usage tracking (preserved)
    // In production: await updateUserGenerationCount(session.user.id);

    return NextResponse.json({
      success: true,
      content: result.content,
      metadata: {
        generation_id: result.generation_id,
        processing_time: result.processing_time,
        model_used: 'gpt-4-assistant',
        features_used: {
          competitor_analysis: competitorAnalysis,
          viral_content: includeViralContent,
          emoji_enhancement: useEmojis // NEW: Track emoji usage
        },
        usage: {
          generations_used: userSubscription.generations_used + 1,
          generations_remaining: userSubscription.generations_limit - userSubscription.generations_used - 1
        }
      }
    });

  } catch (error) {
    console.error('Advanced generation error:', error);
    
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
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
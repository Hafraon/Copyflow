// ChatGPT Assistant Integration with Emoji Support
// This file handles the advanced generation using ChatGPT Assistant API

interface AssistantOptions {
  style: string;
  language: string;
  market: string;
  includeCompetitorAnalysis: boolean;
  includeViralContent: boolean;
  // NEW: Emoji configuration
  emojiConfig?: {
    enabled: boolean;
    intensity: number;
    categoryEmojis: string[];
    category: string;
  };
}

interface AssistantResult {
  success: boolean;
  content?: any;
  error?: string;
  generation_id?: string;
  processing_time?: number;
}

export async function generateWithAssistant(
  productData: any, 
  options: AssistantOptions
): Promise<AssistantResult> {
  try {
    const { emojiConfig } = options;
    
    // Build emoji instructions for ChatGPT Assistant
    const emojiInstructions = emojiConfig?.enabled ? `

EMOJI ENHANCEMENT INSTRUCTIONS for ChatGPT Assistant:
- Emoji Mode: ENABLED
- Intensity Level: ${emojiConfig.intensity} (1=minimal, 2=standard, 3=maximum)
- Category: ${emojiConfig.category}
- Category-specific emojis: ${emojiConfig.categoryEmojis?.slice(0, 8).join(' ')}

EMOJI STRATEGY:
- Use standard patterns: ✅ for benefits, 💰 for value, 🚚 for delivery, ⭐ for quality
- Apply category-specific emojis: ${emojiConfig.categoryEmojis?.slice(0, 4).join(' ')}
- Intensity guidelines:
  * Level 1: 3-5 emojis total, minimal usage
  * Level 2: 8-12 emojis, structured placement  
  * Level 3: 15-20+ emojis, high visual impact

Create engaging, scannable content that converts browsers into buyers!
    ` : `

EMOJI INSTRUCTIONS: NO EMOJIS
- Generate clean text without any emoji symbols
- Focus on compelling copy without visual elements
- Use strong action words and persuasive language
    `;

    // Enhanced Assistant prompt with emoji configuration
    const assistantPrompt = `
You are CopyFlow's advanced AI copywriter specializing in Ukrainian e-commerce.

PRODUCT DATA:
${JSON.stringify(productData, null, 2)}

GENERATION SETTINGS:
- Style: ${options.style}
- Language: ${options.language}
- Market: ${options.market}
- Competitor Analysis: ${options.includeCompetitorAnalysis ? 'ENABLED' : 'DISABLED'}
- Viral Content: ${options.includeViralContent ? 'ENABLED' : 'DISABLED'}

${emojiInstructions}

TASK: Generate comprehensive e-commerce content optimized for Ukrainian market.

OUTPUT FORMAT (JSON):
{
  "productTitle": "Compelling title (max 60 chars)",
  "productDescription": "Detailed description (100-150 words)",
  "seoTitle": "SEO-optimized title (max 60 chars)",
  "metaDescription": "Meta description (max 160 chars)",
  "callToAction": "Conversion CTA (5-10 words)",
  "features": ["Feature 1", "Feature 2", "Feature 3"],
  "benefits": ["Benefit 1", "Benefit 2", "Benefit 3"],
  "keywords": ["keyword1", "keyword2", "keyword3"]
}

Generate content that converts and ranks well in Ukrainian search results!
    `;

    // Simulate ChatGPT Assistant API call
    // In production, this would be actual Assistant API integration
    const startTime = Date.now();
    
    // Mock Assistant response with emoji-aware content
    const mockResponse = await simulateAssistantResponse(productData, options);
    
    const processingTime = Date.now() - startTime;

    return {
      success: true,
      content: mockResponse,
      generation_id: `gen_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      processing_time: processingTime
    };

  } catch (error) {
    console.error('Assistant generation error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Mock Assistant response for demonstration
async function simulateAssistantResponse(productData: any, options: AssistantOptions) {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const { emojiConfig } = options;
  const useEmojis = emojiConfig?.enabled ?? true;
  const intensity = emojiConfig?.intensity ?? 2;
  
  // Generate emoji-aware content based on settings
  const emojiPrefix = useEmojis ? getEmojisByIntensity(intensity, emojiConfig?.categoryEmojis) : '';
  
  return {
    productTitle: useEmojis 
      ? `${emojiPrefix.title} ${productData.name || 'Преміум продукт'} ⭐`
      : `${productData.name || 'Преміум продукт'} - Висока якість`,
    
    productDescription: generateDescription(productData, useEmojis, intensity, emojiConfig?.categoryEmojis),
    
    seoTitle: useEmojis
      ? `${emojiPrefix.seo} ${productData.name || 'Продукт'} | Купити в Україні ⭐`
      : `${productData.name || 'Продукт'} | Купити в Україні | Найкраща ціна`,
    
    metaDescription: useEmojis
      ? `${emojiPrefix.meta} Купуйте ${productData.name || 'продукт'} за найкращою ціною! ✅ Швидка доставка 🚚 Гарантія якості ⭐`
      : `Купуйте ${productData.name || 'продукт'} за найкращою ціною! Швидка доставка по Україні. Гарантія якості.`,
    
    callToAction: useEmojis ? '🛒 Замовити зараз!' : 'Замовити зараз',
    
    features: [
      useEmojis ? '✅ Преміум якість' : 'Преміум якість',
      useEmojis ? '🚚 Швидка доставка' : 'Швидка доставка',
      useEmojis ? '💯 Гарантія' : 'Офіційна гарантія'
    ],
    
    benefits: [
      useEmojis ? '💰 Економія коштів' : 'Економія коштів',
      useEmojis ? '⏰ Економія часу' : 'Економія часу',
      useEmojis ? '😊 Задоволення' : 'Повне задоволення'
    ],
    
    keywords: ['якість', 'доставка', 'гарантія', 'україна', 'купити']
  };
}

function getEmojisByIntensity(intensity: number, categoryEmojis?: string[]) {
  const category = categoryEmojis?.[0] || '⭐';
  
  switch (intensity) {
    case 1:
      return {
        title: '✅',
        seo: category,
        meta: '💰'
      };
    case 2:
      return {
        title: `✅ ${category}`,
        seo: `${category} 💰`,
        meta: `✅ ${category} 💰`
      };
    case 3:
      return {
        title: `🔥 ${category} ✅`,
        seo: `🔥 ${category} 💰 ✅`,
        meta: `🔥 ${category} ✅ 💰`
      };
    default:
      return {
        title: '✅',
        seo: '⭐',
        meta: '💰'
      };
  }
}

function generateDescription(productData: any, useEmojis: boolean, intensity: number, categoryEmojis?: string[]): string {
  const base = `${productData.name || 'Цей продукт'} - ідеальний вибір для тих, хто цінує якість та надійність.`;
  
  if (!useEmojis) {
    return `${base} Ми гарантуємо швидку доставку по всій Україні та офіційну гарантію. Замовляйте зараз за найкращою ціною!`;
  }
  
  const category = categoryEmojis?.[0] || '⭐';
  
  switch (intensity) {
    case 1:
      return `${base} ✅ Гарантована якість ${category} Швидка доставка ⭐ Найкраща ціна`;
    
    case 2:
      return `${base} ✅ Преміум якість ${category} Швидка доставка 🚚 Офіційна гарантія 💯 Найкраща ціна 💰 Задоволені клієнти ⭐`;
    
    case 3:
      return `🔥 ${base} ✅ Преміум якість ${category} Швидка доставка 🚚 Офіційна гарантія 💯 Найкраща ціна 💰 Задоволені клієнти ⭐ Топ продажів 🏆 Рекомендуємо 👍 Обмежена кількість ⏰`;
    
    default:
      return `${base} ✅ Якість ⭐ Доставка 💰 Ціна`;
  }
}
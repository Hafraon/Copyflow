import OpenAI from 'openai';
import { selectAssistant, logAssistantSelection } from './assistant-router';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface AssistantRequest {
  productName: string;
  category: string;
  description?: string;
  targetAudience?: string;
  uniqueFeatures?: string;
  pricePoint?: string;
  style: string;
  language: string;
  market: string;
  emotionalTone?: string;
  psychologicalTrigger?: string;
  useEmojis?: boolean;
  emojiIntensity?: number;
}

export interface AssistantRequest {
  productName: string;
  category: string;
  description?: string;
  targetAudience?: string;
  uniqueFeatures?: string;
  pricePoint?: string;
  style: string;
  language: string;
  market: string;
  emotionalTone?: string;
  psychologicalTrigger?: string;
  useEmojis?: boolean;
  emojiIntensity?: number;
}

export interface GenerationResponse {
  productTitle: string;
  productDescription: string;
  seoTitle: string;
  metaDescription: string;
  callToAction: string;
  bulletPoints: string[];
  keyFeatures: string[];
  viralContent: {
    tiktokHooks: string[];
    instagramCaptions: string[];
  };
  targetAudience: {
    primary: string;
    painPoints: string[];
    desires: string[];
  };
  emotionalHooks: string[];
  conversionTriggers: string[];
  competitorAdvantages: string[];
  trustSignals: string[];
  priceAnchor: string;
  urgencyElements: string[];
  socialProof: string[];
  tags: string[];
  amazonBackendKeywords: string;
}

interface AssistantResult {
  success: boolean;
  data?: GenerationResponse;
  error?: string;
  method: 'assistant' | 'chat' | 'error';
}

export async function generateWithAssistant(request: AssistantRequest): Promise<AssistantResult> {
  // Get assistant selection based on category
  const assistantSelection = selectAssistant(request.category);
  const fallbackChain = assistantSelection.fallbackChain;
  
  console.log(`🎯 Category: ${request.category}, Available assistants: ${fallbackChain.length}`);
  
  // Try each assistant in the fallback chain
  for (let i = 0; i < fallbackChain.length; i++) {
    const assistantId = fallbackChain[i];
    const isSpecialized = i === 0 && assistantSelection.specialized === assistantId && assistantId !== assistantSelection.universal;
    const assistantType = isSpecialized ? 'Specialized' : 'Universal';
    
    try {
      console.log(`Attempting generation with ${assistantType} Assistant API (${assistantId})...`);
      const assistantResult = await tryAssistantAPI(assistantId, request);
      if (assistantResult.success) {
        console.log(`✅ ${assistantType} Assistant API generation successful`);
        logAssistantSelection(request.category, assistantId, 'assistant');
        return { ...assistantResult, method: 'assistant' };
      }
      console.log(`⚠️ ${assistantType} Assistant API failed, trying next fallback...`);
    } catch (error) {
      console.error(`${assistantType} Assistant API error:`, error);
      console.log(`⚠️ ${assistantType} Assistant API error, trying next fallback...`);
    }
  }
  
  // If no assistants are configured or all failed, log and continue to Chat Completions
  if (fallbackChain.length === 0) {
    console.log('No Assistant IDs configured, using Chat Completions directly');
  } else {
    console.log('All Assistant APIs failed, falling back to Chat Completions');
  }

  // Fallback to Chat Completions API
  try {
    console.log('Using Chat Completions API...');
    const chatResult = await tryChatCompletions(request);
    if (chatResult.success) {
      console.log('✅ Chat Completions generation successful');
      logAssistantSelection(request.category, undefined, 'chat');
      return { ...chatResult, method: 'chat' };
    }
    console.error('❌ Both Assistant and Chat Completions failed');
    logAssistantSelection(request.category, undefined, 'error');
    return { success: false, error: 'Both generation methods failed', method: 'error' };
  } catch (error) {
    console.error('Chat Completions error:', error);
    logAssistantSelection(request.category, undefined, 'error');
    return { success: false, error: 'Generation failed', method: 'error' };
  }
}

async function tryAssistantAPI(assistantId: string, request: AssistantRequest): Promise<{ success: boolean; data?: GenerationResponse; error?: string }> {
  try {
    // Create a thread
    const thread = await openai.beta.threads.create();

    // Build the user message with all request parameters
    const userMessage = buildUserMessage(request);

    // Add message to thread
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: userMessage,
    });

    // Run the assistant with timeout
    const run = await Promise.race([
      openai.beta.threads.runs.create(thread.id, {
        assistant_id: assistantId,
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Assistant API timeout')), 30000)
      )
    ]) as OpenAI.Beta.Threads.Runs.Run;

    // Wait for completion with polling
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    
    const maxAttempts = 30; // 30 seconds max
    let attempts = 0;
    
    while (runStatus.status === 'in_progress' || runStatus.status === 'queued') {
      if (attempts >= maxAttempts) {
        throw new Error('Assistant run timeout');
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      attempts++;
    }

    if (runStatus.status === 'completed') {
      // Get the assistant's response
      const messages = await openai.beta.threads.messages.list(thread.id);
      const assistantMessage = messages.data.find(msg => msg.role === 'assistant');
      
      if (assistantMessage && assistantMessage.content[0]?.type === 'text') {
        const responseText = assistantMessage.content[0].text.value;
        
        // Parse JSON response
        try {
          const parsedResponse = JSON.parse(responseText);
          const validatedResponse = validateAndNormalizeResponse(parsedResponse);
          return { success: true, data: validatedResponse };
        } catch (parseError) {
          console.error('Failed to parse Assistant response:', parseError);
          return { success: false, error: 'Invalid response format from Assistant' };
        }
      }
    }

    return { success: false, error: `Assistant run failed with status: ${runStatus.status}` };
  } catch (error) {
    console.error('Assistant API error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Assistant API failed' };
  }
}

async function tryChatCompletions(request: AssistantRequest): Promise<{ success: boolean; data?: GenerationResponse; error?: string }> {
  try {
    const prompt = buildChatPrompt(request);

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert e-commerce copywriter specializing in product descriptions. Generate compelling, SEO-optimized content that converts browsers into buyers. Always respond with valid JSON only."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 2000,
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content;
    
    if (!content) {
      return { success: false, error: 'No content generated' };
    }

    try {
      const parsedContent = JSON.parse(content);
      const validatedResponse = validateAndNormalizeResponse(parsedContent);
      return { success: true, data: validatedResponse };
    } catch (parseError) {
      console.error('Failed to parse Chat Completions response:', content);
      return { success: false, error: 'Failed to parse generated content' };
    }
  } catch (error) {
    console.error('Chat Completions error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Chat Completions failed' };
  }
}

function buildUserMessage(request: AssistantRequest): string {
  const emojiInstruction = request.useEmojis 
    ? `Use emojis strategically (intensity level ${request.emojiIntensity || 2}: 1=minimal, 2=standard, 3=maximum)`
    : 'NO emojis - use clean text only';

  return `
Generate comprehensive e-commerce content for:

PRODUCT: ${request.productName}
CATEGORY: ${request.category}
STYLE: ${request.style}
LANGUAGE: ${request.language}
MARKET: ${request.market}

${request.description ? `DESCRIPTION: ${request.description}` : ''}
${request.targetAudience ? `TARGET AUDIENCE: ${request.targetAudience}` : ''}
${request.uniqueFeatures ? `UNIQUE FEATURES: ${request.uniqueFeatures}` : ''}
${request.pricePoint ? `PRICE POINT: ${request.pricePoint}` : ''}
${request.emotionalTone ? `EMOTIONAL TONE: ${request.emotionalTone}` : ''}
${request.psychologicalTrigger ? `PSYCHOLOGICAL TRIGGER: ${request.psychologicalTrigger}` : ''}

EMOJI INSTRUCTION: ${emojiInstruction}

Generate content that converts and ranks well. Return ONLY valid JSON with this exact structure:

{
  "productTitle": "Compelling title (max 60 chars)",
  "productDescription": "Detailed description (100-150 words)",
  "seoTitle": "SEO-optimized title (max 60 chars)",
  "metaDescription": "Meta description (max 160 chars)",
  "callToAction": "Conversion CTA (5-10 words)",
  "bulletPoints": ["Benefit 1", "Benefit 2", "Benefit 3"],
  "keyFeatures": ["Feature 1", "Feature 2", "Feature 3"],
  "viralContent": {
    "tiktokHooks": ["Hook 1", "Hook 2", "Hook 3"],
    "instagramCaptions": ["Caption 1", "Caption 2"]
  },
  "targetAudience": {
    "primary": "Primary audience description",
    "painPoints": ["Pain 1", "Pain 2", "Pain 3"],
    "desires": ["Desire 1", "Desire 2", "Desire 3"]
  },
  "emotionalHooks": ["Hook 1", "Hook 2", "Hook 3"],
  "conversionTriggers": ["Trigger 1", "Trigger 2", "Trigger 3"],
  "competitorAdvantages": ["Advantage 1", "Advantage 2", "Advantage 3"],
  "trustSignals": ["Signal 1", "Signal 2", "Signal 3"],
  "priceAnchor": "Value proposition statement",
  "urgencyElements": ["Element 1", "Element 2", "Element 3"],
  "socialProof": ["Proof 1", "Proof 2", "Proof 3"],
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "amazonBackendKeywords": "keyword1 keyword2 keyword3 keyword4 keyword5"
}
`;
}

function buildChatPrompt(request: AssistantRequest): string {
  return buildUserMessage(request); // Same prompt structure for consistency
}

function validateAndNormalizeResponse(response: any): GenerationResponse {
  // Ensure all required fields exist with proper defaults
  return {
    productTitle: response.productTitle || `${response.productName || 'Product'} - Premium Quality`,
    productDescription: response.productDescription || `High-quality ${response.productName || 'product'} with excellent features and benefits.`,
    seoTitle: response.seoTitle || `${response.productName || 'Product'} | Buy Online`,
    metaDescription: response.metaDescription || `Buy ${response.productName || 'product'} online. Fast delivery, great prices, satisfaction guaranteed.`,
    callToAction: response.callToAction || 'Buy Now',
    bulletPoints: Array.isArray(response.bulletPoints) ? response.bulletPoints : [
      'Premium quality materials',
      'Fast and reliable delivery',
      'Satisfaction guaranteed'
    ],
    keyFeatures: Array.isArray(response.keyFeatures) ? response.keyFeatures : [
      'High-quality construction',
      'User-friendly design',
      'Excellent value'
    ],
    viralContent: {
      tiktokHooks: response.viralContent?.tiktokHooks || [
        'You won\'t believe this product!',
        'This changed everything for me',
        'Why didn\'t I find this sooner?'
      ],
      instagramCaptions: response.viralContent?.instagramCaptions || [
        'Game-changer alert! 🚨',
        'Obsessed with this find ✨'
      ]
    },
    targetAudience: {
      primary: response.targetAudience?.primary || 'Quality-conscious consumers',
      painPoints: response.targetAudience?.painPoints || [
        'Looking for reliable products',
        'Want good value for money',
        'Need trustworthy brands'
      ],
      desires: response.targetAudience?.desires || [
        'High-quality products',
        'Great customer service',
        'Fast delivery'
      ]
    },
    emotionalHooks: Array.isArray(response.emotionalHooks) ? response.emotionalHooks : [
      'Feel confident in your choice',
      'Experience the difference',
      'Join satisfied customers'
    ],
    conversionTriggers: Array.isArray(response.conversionTriggers) ? response.conversionTriggers : [
      'Limited time offer',
      'Free shipping included',
      'Money-back guarantee'
    ],
    competitorAdvantages: Array.isArray(response.competitorAdvantages) ? response.competitorAdvantages : [
      'Superior quality materials',
      'Better customer support',
      'Competitive pricing'
    ],
    trustSignals: Array.isArray(response.trustSignals) ? response.trustSignals : [
      'Thousands of satisfied customers',
      'Secure payment processing',
      'Official warranty included'
    ],
    priceAnchor: response.priceAnchor || 'Exceptional value for premium quality',
    urgencyElements: Array.isArray(response.urgencyElements) ? response.urgencyElements : [
      'Limited stock available',
      'Special price today only',
      'Don\'t miss out'
    ],
    socialProof: Array.isArray(response.socialProof) ? response.socialProof : [
      '⭐⭐⭐⭐⭐ 5-star reviews',
      'Recommended by experts',
      'Trending product'
    ],
    tags: Array.isArray(response.tags) ? response.tags : [
      'quality', 'premium', 'reliable', 'popular', 'recommended'
    ],
    amazonBackendKeywords: response.amazonBackendKeywords || 'quality premium reliable popular recommended'
  };
}
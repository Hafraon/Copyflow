import { AssistantRequest } from './openai-assistant';

// Category to Assistant ID mapping
const ASSISTANT_MAPPING = {
  'electronics': process.env.OPENAI_ASSISTANT_ELECTRONICS,
  'clothing': process.env.OPENAI_ASSISTANT_FASHION, // Map clothing to fashion
  'home': process.env.OPENAI_ASSISTANT_HOME,
  'beauty': process.env.OPENAI_ASSISTANT_BEAUTY,
  'sports': process.env.OPENAI_ASSISTANT_SPORTS,
  'automotive': process.env.OPENAI_ASSISTANT_AUTOMOTIVE,
  'books': process.env.OPENAI_ASSISTANT_BOOKS,
  'toys': process.env.OPENAI_ASSISTANT_TOYS,
  'health': process.env.OPENAI_ASSISTANT_HEALTH,
  'business': process.env.OPENAI_ASSISTANT_BUSINESS,
  'food': process.env.OPENAI_ASSISTANT_FOOD,
  'travel': process.env.OPENAI_ASSISTANT_TRAVEL,
  'pets': process.env.OPENAI_ASSISTANT_PETS,
  'jewelry': process.env.OPENAI_ASSISTANT_JEWELRY,
  'art': process.env.OPENAI_ASSISTANT_ART,
  'music': process.env.OPENAI_ASSISTANT_MUSIC,
  'other': process.env.OPENAI_ASSISTANT_UNIVERSAL
} as const;

export type SupportedCategory = keyof typeof ASSISTANT_MAPPING;

export interface AssistantSelection {
  specialized?: string;
  universal?: string;
  category: string;
  fallbackChain: string[];
}

/**
 * Select the appropriate assistant ID based on product category
 * Returns fallback chain: Specialized → Universal → null (Chat Completions)
 */
export function selectAssistant(category: string): AssistantSelection {
  const normalizedCategory = category.toLowerCase() as SupportedCategory;
  
  // Get specialized assistant for this category
  const specializedAssistant = ASSISTANT_MAPPING[normalizedCategory];
  
  // Get universal assistant as fallback
  const universalAssistant = process.env.OPENAI_ASSISTANT_UNIVERSAL;
  
  // Build fallback chain
  const fallbackChain: string[] = [];
  
  if (specializedAssistant && specializedAssistant !== universalAssistant) {
    fallbackChain.push(specializedAssistant);
  }
  
  if (universalAssistant) {
    fallbackChain.push(universalAssistant);
  }
  
  return {
    specialized: specializedAssistant,
    universal: universalAssistant,
    category: normalizedCategory,
    fallbackChain
  };
}

/**
 * Get the primary assistant ID for a category (specialized if available, otherwise universal)
 */
export function getPrimaryAssistant(category: string): string | undefined {
  const selection = selectAssistant(category);
  return selection.fallbackChain[0];
}

/**
 * Check if a specialized assistant is available for the given category
 */
export function hasSpecializedAssistant(category: string): boolean {
  const selection = selectAssistant(category);
  return !!selection.specialized && selection.specialized !== selection.universal;
}

/**
 * Get all configured assistant categories
 */
export function getConfiguredCategories(): string[] {
  return Object.entries(ASSISTANT_MAPPING)
    .filter(([_, assistantId]) => !!assistantId)
    .map(([category, _]) => category);
}

/**
 * Log assistant selection for analytics
 */
export function logAssistantSelection(category: string, selectedAssistant: string | undefined, method: string): void {
  const selection = selectAssistant(category);
  const isSpecialized = selectedAssistant === selection.specialized && selectedAssistant !== selection.universal;
  const isUniversal = selectedAssistant === selection.universal;
  
  let assistantType = 'chat';
  if (isSpecialized) assistantType = 'specialized';
  else if (isUniversal) assistantType = 'universal';
  
  console.log(`📊 Assistant Analytics: Category="${category}" Type="${assistantType}" Method="${method}" ID="${selectedAssistant || 'none'}"`);
}
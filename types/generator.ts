export interface GeneratedContent {
  productTitle: string;
  productDescription: string;
  seoTitle: string;
  metaDescription: string;
  callToAction: string;
}

export interface GeneratorFormData {
  productName: string;
  category: string;
  writingStyle: string;
  // NEW: Emoji control fields
  useEmojis?: boolean;
  emojiIntensity?: number; // 1-3
}

export interface GeneratorState {
  isGenerating: boolean;
  content: GeneratedContent | null;
  error: string | null;
}

// Enhanced for emoji support
export interface EmojiFormData extends GeneratorFormData {
  useEmojis: boolean;
  emojiIntensity: number;
}

export const CATEGORIES = [
  'electronics',
  'clothing',
  'home',
  'beauty',
  'sports',
  'books',
  'automotive',
  'toys',
  'health',
  'business',
  'food',
  'travel',
  'pets',
  'jewelry',
  'art',
  'music',
  'other'
] as const;

export const WRITING_STYLES = [
  'professional',
  'casual',
  'luxury',
  'technical',
  'creative'
] as const;

export type Category = typeof CATEGORIES[number];
export type WritingStyle = typeof WRITING_STYLES[number];
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
}

export interface GeneratorState {
  isGenerating: boolean;
  content: GeneratedContent | null;
  error: string | null;
}

export const CATEGORIES = [
  'electronics',
  'clothing',
  'home',
  'beauty',
  'sports',
  'books',
  'automotive',
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
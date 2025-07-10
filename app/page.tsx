"use client";

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { PricingSection } from '@/components/pricing-section';
import { Footer } from '@/components/footer';
import { GeneratedContent } from '@/types/generator';
import { ParsedProduct } from '@/types/magic-input';
import { toast } from 'sonner';
import '@/lib/i18n';
import { useTranslation } from 'react-i18next';
import { MagicInput } from '@/components/magic-input';
import { ResultsPanel } from '@/components/results-panel';
import { MagicInput } from '@/components/magic-input';
import { ResultsPanel } from '@/components/results-panel';
import { getCurrentLanguage } from '@/lib/translations';

export default function Home() {
  const { t } = useTranslation();
  const [generatorState, setGeneratorState] = useState<{
    isGenerating: false,
    content: null,
    error: null,
  }>({
    isGenerating: false,
    content: null,
    error: null,
  });

  const [lastProducts, setLastProducts] = useState<ParsedProduct[] | null>(null);

  const handleMagicInputData = async (products: ParsedProduct[]) => {
    setGeneratorState({ isGenerating: true, content: null, error: null });
    setLastProducts(products);

    try {
      // Process multiple products - for now, take the first one
      const firstProduct = products[0];
      if (!firstProduct) {
        throw new Error('No products to process');
      }

      // Get current language
      const currentLanguage = getCurrentLanguage();
      
      // Create form data from the first product
      const formData = {
        productName: firstProduct.name,
        category: firstProduct.category || 'other',
        writingStyle: 'professional',
        useEmojis: true,
        emojiIntensity: 2,
        language: currentLanguage
      };

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate content');
      }

      const content: GeneratedContent = await response.json();
      
      setGeneratorState({
        isGenerating: false,
        content,
        error: null,
      });
      
      toast.success(t('toast.success.generated'));
    } catch (error) {
      console.error('Generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      setGeneratorState({
        isGenerating: false,
        content: null,
        error: errorMessage,
      });
      
      toast.error(errorMessage);
    }
  };

  const handleRegenerate = () => {
    if (lastProducts) {
      handleMagicInputData(lastProducts);
    }
  };

                  <MagicInput
                    onContentGenerated={() => {}}
                    isGenerating={generatorState.isGenerating}
                    onGenerate={handleGenerate}
                  />
}
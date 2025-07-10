"use client";

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { PricingSection } from '@/components/pricing-section';
import { Footer } from '@/components/footer';
import { GeneratedContent } from '@/types/generator';
import { ParsedProduct } from '@/types/magic-input';
import { toast } from 'sonner';
import '@/lib/i18n';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { MagicInput } from '@/components/magic-input';
import { ResultsPanel } from '@/components/results-panel';
import { getCurrentLanguage } from '@/lib/translations';

export default function Home() {
  const { t } = useTranslation();
  const [generatorState, setGeneratorState] = useState<{
    isGenerating: boolean;
    content: GeneratedContent | null;
    error: string | null;
  }>({
    isGenerating: false,
    content: null,
    error: null,
  });

  const [lastProducts, setLastProducts] = useState<ParsedProduct[] | null>(null);

  const handleDataExtracted = async (products: ParsedProduct[]) => {
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
      handleDataExtracted(lastProducts);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      
      {/* Generator Section */}
      <section id="generator" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('generator.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    {t('generator.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="magic" className="w-full">
                    <TabsList className="grid w-full grid-cols-1">
                      <TabsTrigger value="magic" className="text-xs flex-1">
                        ✨ {t('generator.tabs.magic')}
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="magic" className="mt-6">
                      <MagicInput onDataExtracted={handleDataExtracted} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ResultsPanel
                content={generatorState.content}
                isGenerating={generatorState.isGenerating}
                onRegenerate={handleRegenerate}
              />
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
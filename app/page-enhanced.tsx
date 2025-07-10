"use client";

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { PricingSection } from '@/components/pricing-section';
import { Footer } from '@/components/footer';
import { GeneratedContent, GeneratorFormData, GeneratorState } from '@/types/generator';
import { toast } from 'sonner';
import '@/lib/i18n-new';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { isTabEnabled } from '@/lib/feature-flags';
import { useTranslation } from 'react-i18next';
import { MagicInput } from '@/components/magic-input';
import { ManualFormEnhanced } from '@/components/dashboard/manual-form-enhanced';
import { ResultsPanel } from '@/components/results-panel';

export default function HomeEnhanced() {
  const { t } = useTranslation();
  const [generatorState, setGeneratorState] = useState<GeneratorState>({
    isGenerating: false,
    content: null,
    error: null,
  });

  const [lastFormData, setLastFormData] = useState<GeneratorFormData | null>(null);

  const handleGenerate = async (formData: GeneratorFormData) => {
    setGeneratorState(prev => ({ ...prev, isGenerating: true, error: null }));
    setLastFormData(formData);

    try {
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

  const handleMagicInputData = async (products: any[]) => {
    setGeneratorState(prev => ({ ...prev, isGenerating: true, error: null }));

    try {
      // Process multiple products
      const results = [];
      
      for (const product of products.slice(0, 5)) { // Limit to 5 products for demo
        const formData = {
          productName: product.name,
          category: 'other', // Default category
          writingStyle: 'professional',
          useEmojis: true,
          emojiIntensity: 2,
          language: 'en'
        };

        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const content = await response.json();
          results.push(content);
        }
      }

      if (results.length > 0) {
        // For now, show the first result
        setGeneratorState({
          isGenerating: false,
          content: results[0],
          error: null,
        });
        
        toast.success(`Generated content for ${results.length} product(s)`);
      } else {
        throw new Error('No content generated');
      }
    } catch (error) {
      console.error('Magic input error:', error);
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
    if (lastFormData) {
      handleGenerate(lastFormData);
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
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="magic" className="text-xs flex-1">
                        ✨ {t('generator.tabs.magic')}
                      </TabsTrigger>
                      <TabsTrigger value="manual" className="text-xs flex-1">
                        📝 {t('generator.tabs.manual')}
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="magic" className="mt-6">
                      <MagicInput onDataExtracted={handleMagicInputData} />
                    </TabsContent>
                    
                    <TabsContent value="manual" className="mt-6">
                      <ManualFormEnhanced
                        onContentGenerated={(content) => {
                          setGeneratorState({
                            isGenerating: false,
                            content,
                            error: null,
                          });
                        }}
                      />
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
"use client";

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { GeneratorForm } from '@/components/generator-form';
import { ResultsPanel } from '@/components/results-panel';
import { FeaturesSection } from '@/components/features-section';
import { PricingSection } from '@/components/pricing-section';
import { Footer } from '@/components/footer';
import { GeneratedContent, GeneratorFormData, GeneratorState } from '@/types/generator';
import { toast } from 'sonner';
import '@/lib/i18n';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { isTabEnabled } from '@/lib/feature-flags';
import { useTranslation } from 'react-i18next';

export default function Home() {
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
                  <Tabs defaultValue="manual" className="w-full">
                    <TabsList className={`grid w-full ${
                      [
                        isTabEnabled('manual'),
                        isTabEnabled('photo'), 
                        isTabEnabled('voice'),
                        isTabEnabled('url')
                      ].filter(Boolean).length === 2 ? 'grid-cols-2' : 'grid-cols-4'
                    }`}>
                      {isTabEnabled('manual') && (
                        <TabsTrigger value="manual" className="text-xs">📝 {t('generator.tabs.manual')}</TabsTrigger>
                      )}
                      {isTabEnabled('photo') && (
                        <TabsTrigger value="photo" className="text-xs">📸 {t('generator.tabs.photo')}</TabsTrigger>
                      )}
                      {isTabEnabled('voice') && (
                        <TabsTrigger value="voice" className="text-xs">🎤 {t('generator.tabs.voice')}</TabsTrigger>
                      )}
                      {isTabEnabled('url') && (
                        <TabsTrigger value="url" className="text-xs">🔗 {t('generator.tabs.url')}</TabsTrigger>
                      )}
                    </TabsList>
                    
                    {isTabEnabled('manual') && (
                      <TabsContent value="manual" className="mt-6">
                        <GeneratorForm
                          onGenerate={handleGenerate}
                          isGenerating={generatorState.isGenerating}
                          generatedContent={generatorState.content}
                        />
                      </TabsContent>
                    )}
                    
                    {isTabEnabled('photo') && (
                      <TabsContent value="photo" className="mt-6">
                        <div className="text-center py-8 text-muted-foreground">
                          Photo upload feature (hidden)
                        </div>
                      </TabsContent>
                    )}
                    
                    {isTabEnabled('voice') && (
                      <TabsContent value="voice" className="mt-6">
                        <div className="text-center py-8 text-muted-foreground">
                          Voice input feature (hidden)
                        </div>
                      </TabsContent>
                    )}
                    
                    {isTabEnabled('url') && (
                      <TabsContent value="url" className="mt-6">
                        <div className="text-center py-8 text-muted-foreground">
                          URL parser feature (coming soon)
                        </div>
                      </TabsContent>
                    )}
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
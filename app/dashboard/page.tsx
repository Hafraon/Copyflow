"use client";

import { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { GeneratorSection } from '@/components/dashboard/generator-section';
import { ResultsPanel } from '@/components/dashboard/results-panel';
import { GeneratedContent, GeneratorFormData } from '@/types/generator';
import { toast } from 'sonner';
import { getCurrentLanguage } from '@/lib/translations';

export default function Dashboard() {
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGenerate = async (formData: GeneratorFormData) => {
    setIsGenerating(true);
    setGeneratedContent(null);

    try {
      // Get current language from translation system
      const currentLanguage = getCurrentLanguage();
      
      // Add language to form data
      const requestData = {
        ...formData,
        language: currentLanguage,
      };

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate content');
      }

      const content: GeneratedContent = await response.json();
      setGeneratedContent(content);
      toast.success('Content generated successfully!');
    } catch (error) {
      console.error('Generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerate = () => {
    if (generatedContent) {
      // For regeneration, we'll use the last product name if available
      const lastProductName = generatedContent.productTitle || 'Product';
      handleGenerate({
        productName: lastProductName,
        category: 'other',
        writingStyle: 'professional',
        useEmojis: true,
        emojiIntensity: 2,
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu}
      />
      
      <main className="flex-1 overflow-auto md:ml-0">
        <DashboardHeader onMenuClick={toggleMobileMenu} />
        <div className="container py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GeneratorSection 
              onContentGenerated={setGeneratedContent}
              isGenerating={isGenerating}
              onGenerate={handleGenerate}
            />
            <ResultsPanel 
              content={generatedContent}
              isGenerating={isGenerating}
              onRegenerate={handleRegenerate}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
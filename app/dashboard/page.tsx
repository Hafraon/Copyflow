"use client";

import { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { GeneratorSection } from '@/components/dashboard/generator-section';
import { ResultsPanel } from '@/components/dashboard/results-panel';
import { GeneratedContent } from '@/types/generator';

export default function Dashboard() {
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContentGenerated = (content: GeneratedContent) => {
    setGeneratedContent(content);
    setIsGenerating(false);
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    // This will be handled by the ManualForm component
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
            <GeneratorSection onContentGenerated={handleContentGenerated} />
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
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { GeneratedContent, GeneratorFormData } from '@/types/generator';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { getCurrentLanguage } from '@/lib/translations';
import { MagicInput } from '@/components/magic-input';

interface GeneratorFormProps {
  onGenerate: (data: GeneratorFormData) => Promise<void>;
  isGenerating: boolean;
  generatedContent: GeneratedContent | null;
}

export function GeneratorForm({ onGenerate, isGenerating, generatedContent }: GeneratorFormProps) {
  const { t } = useTranslation();

  const handleGenerateContent = async (formData: GeneratorFormData) => {
    try {
      // Get current language from translation system
      const currentLanguage = getCurrentLanguage();
      
      // Ensure emoji settings have defaults
      const formDataWithEmojis = {
        ...formData,
        useEmojis: formData.useEmojis ?? true,
        emojiIntensity: formData.emojiIntensity ?? 2,
        language: currentLanguage,
      };
      
      await onGenerate(formDataWithEmojis);
      toast.success(t('toast.success.generated'));
    } catch (error) {
      toast.error(t('toast.error.generation'));
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-500" />
          {t('form.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <MagicInput
          onContentGenerated={() => {}}
          isGenerating={isGenerating}
          onGenerate={handleGenerateContent}
        />
      </CardContent>
    </Card>
  );
}
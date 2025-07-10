"use client";

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GeneratedContent } from '@/types/generator';
import { MagicInput } from '@/components/magic-input';

interface GeneratorSectionProps {
  onContentGenerated?: (content: GeneratedContent) => void;
  isGenerating: boolean;
  onGenerate: (formData: any) => Promise<void>;
}

export function GeneratorSection({ onContentGenerated, isGenerating, onGenerate }: GeneratorSectionProps) {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          {t('generator.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <MagicInput
          onContentGenerated={onContentGenerated}
          isGenerating={isGenerating}
          onGenerate={onGenerate}
        />
      </CardContent>
    </Card>
  );
}
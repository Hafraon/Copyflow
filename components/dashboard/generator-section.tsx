"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ManualForm } from './manual-form';
import { GeneratedContent } from '@/types/generator';

interface GeneratorSectionProps {
  onContentGenerated?: (content: GeneratedContent) => void;
}

export function GeneratorSection({ onContentGenerated }: GeneratorSectionProps) {
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
        {/* Single Magic Input Form - no tabs needed */}
        <ManualForm onContentGenerated={onContentGenerated} />
      </CardContent>
    </Card>
  );
}
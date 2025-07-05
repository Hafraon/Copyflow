"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ManualForm } from './manual-form';
import { PhotoUpload } from './photo-upload';
import { VoiceInput } from './voice-input';
import { URLParser } from './url-parser';
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
        <Tabs defaultValue="manual" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="manual" className="text-xs">📝 {t('generator.tabs.manual')}</TabsTrigger>
            <TabsTrigger value="photo" className="text-xs">📸 {t('generator.tabs.photo')}</TabsTrigger>
            <TabsTrigger value="voice" className="text-xs">🎤 {t('generator.tabs.voice')}</TabsTrigger>
            <TabsTrigger value="url" className="text-xs">🔗 {t('generator.tabs.url')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manual" className="mt-6">
            <ManualForm onContentGenerated={onContentGenerated} />
          </TabsContent>
          
          <TabsContent value="photo" className="mt-6">
            <PhotoUpload />
          </TabsContent>
          
          <TabsContent value="voice" className="mt-6">
            <VoiceInput />
          </TabsContent>
          
          <TabsContent value="url" className="mt-6">
            <URLParser />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
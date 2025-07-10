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
import { isTabEnabled } from '@/lib/feature-flags';

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
          <TabsList className={`grid w-full ${
            [
              isTabEnabled('manual'),
              isTabEnabled('photo'), 
              isTabEnabled('voice'),
              isTabEnabled('url')
            ].filter(Boolean).length === 2 ? 'grid-cols-2' : 'grid-cols-4'
          }`}>
            {isTabEnabled('manual') && (
              <TabsTrigger value="manual" className="text-xs flex-1">📝 {t('generator.tabs.manual')}</TabsTrigger>
            )}
            {isTabEnabled('photo') && (
              <TabsTrigger value="photo" className="text-xs flex-1">📸 {t('generator.tabs.photo')}</TabsTrigger>
            )}
            {isTabEnabled('voice') && (
              <TabsTrigger value="voice" className="text-xs flex-1">🎤 {t('generator.tabs.voice')}</TabsTrigger>
            )}
            {isTabEnabled('url') && (
              <TabsTrigger value="url" className="text-xs flex-1">🔗 {t('generator.tabs.url')}</TabsTrigger>
            )}
          </TabsList>
          
          {isTabEnabled('manual') && (
            <TabsContent value="manual" className="mt-6">
              <ManualForm onContentGenerated={onContentGenerated} />
            </TabsContent>
          )}
          
          {isTabEnabled('photo') && (
            <TabsContent value="photo" className="mt-6">
              <PhotoUpload />
            </TabsContent>
          )}
          
          {isTabEnabled('voice') && (
            <TabsContent value="voice" className="mt-6">
              <VoiceInput />
            </TabsContent>
          )}
          
          {isTabEnabled('url') && (
            <TabsContent value="url" className="mt-6">
              <URLParser />
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}
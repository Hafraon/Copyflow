"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Download, CheckCircle } from 'lucide-react';

export function ResultsPanel() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            {t('results.title')}
          </CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            {t('results.export')}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">📝 {t('results.tabs.content')}</TabsTrigger>
            <TabsTrigger value="analysis">📊 {t('results.tabs.analysis')}</TabsTrigger>
            <TabsTrigger value="variations">🔄 {t('results.tabs.variations')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="space-y-4 mt-6">
            <ContentBlock title={t('results.product.title')} content={t('results.empty')} />
            <ContentBlock title={t('results.product.description')} content={t('results.empty')} />
            <ContentBlock title={t('results.seo.title')} content={t('results.empty')} />
            <ContentBlock title={t('results.meta.description')} content={t('results.empty')} />
            <ContentBlock title={t('results.cta')} content={t('results.empty')} />
            <ContentBlock title={t('results.features')} content={t('results.empty')} />
            <ContentBlock title={t('results.keywords')} content={t('results.empty')} />
          </TabsContent>
          
          <TabsContent value="analysis" className="mt-6">
            <div className="text-center text-muted-foreground py-8">
              <p>{t('results.analysis.empty')}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="variations" className="mt-6">
            <div className="text-center text-muted-foreground py-8">
              <p>{t('results.variations.empty')}</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function ContentBlock({ title, content }: { title: string, content: string }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm">{title}</span>
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {copied ? <CheckCircle className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground min-h-[40px]">
        {content}
      </p>
    </div>
  );
}
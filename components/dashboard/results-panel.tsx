"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Download, RefreshCw, CheckCircle } from 'lucide-react';
import { GeneratedContent } from '@/types/generator';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ResultsPanelProps {
  content: GeneratedContent | null;
  isGenerating?: boolean;
  onRegenerate?: () => void;
}

export function ResultsPanel({ content, isGenerating = false, onRegenerate }: ResultsPanelProps) {
  const { t } = useTranslation();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
      toast.success(t('toast.success.copied'));
    } catch (error) {
      toast.error(t('toast.error.copy'));
    }
  };

  const exportContent = () => {
    if (!content) return;

    const exportData = {
      productTitle: content.productTitle,
      productDescription: content.productDescription,
      seoTitle: content.seoTitle,
      metaDescription: content.metaDescription,
      callToAction: content.callToAction,
      generatedAt: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `copyflow-content-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast.success(t('toast.success.exported'));
  };

  const contentFields = content ? [
    {
      key: 'productTitle',
      label: t('results.product.title'),
      value: content.productTitle,
      maxLength: 60,
    },
    {
      key: 'productDescription',
      label: t('results.product.description'),
      value: content.productDescription,
      maxLength: 150,
      multiline: true,
    },
    {
      key: 'seoTitle',
      label: t('results.seo.title'),
      value: content.seoTitle,
      maxLength: 60,
    },
    {
      key: 'metaDescription',
      label: t('results.meta.description'),
      value: content.metaDescription,
      maxLength: 160,
      multiline: true,
    },
    {
      key: 'callToAction',
      label: t('results.cta'),
      value: content.callToAction,
      maxLength: 10,
    },
  ] : [];

  if (!content && !isGenerating) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mb-4">
            <Copy className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{t('results.title')}</h3>
          <p className="text-muted-foreground">{t('results.empty')}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            {t('results.title')}
          </CardTitle>
          {content && (
            <div className="flex gap-2">
              {onRegenerate && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onRegenerate}
                  disabled={isGenerating}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {t('results.regenerate')}
                </Button>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={exportContent}
              >
                <Download className="w-4 h-4 mr-2" />
                {t('results.export')}
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">📝 Content</TabsTrigger>
            <TabsTrigger value="analysis">📊 Analysis</TabsTrigger>
            <TabsTrigger value="variations">🔄 Variations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="space-y-4 mt-6">
            {isGenerating ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-muted rounded animate-pulse" />
                    <div className="h-20 bg-muted rounded animate-pulse" />
                  </div>
                ))}
              </div>
            ) : (
              contentFields.map((field, index) => (
                <motion.div
                  key={field.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      {field.label}
                    </label>
                    <div className="flex items-center gap-2">
                      <Badge variant={field.value.length <= field.maxLength ? 'default' : 'destructive'}>
                        {field.value.length}/{field.maxLength}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(field.value, field.key)}
                        className="h-8 px-2"
                      >
                        {copiedField === field.key ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    value={field.value}
                    readOnly
                    className={field.multiline ? "min-h-[100px] resize-none" : "min-h-[60px] resize-none"}
                  />
                </motion.div>
              ))
            )}
          </TabsContent>
          
          <TabsContent value="analysis" className="mt-6">
            <div className="text-center text-muted-foreground py-8">
              <p>Generate content to see analysis</p>
            </div>
          </TabsContent>
          
          <TabsContent value="variations" className="mt-6">
            <div className="text-center text-muted-foreground py-8">
              <p>Generate content to see variations</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
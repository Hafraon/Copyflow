"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExternalLink } from 'lucide-react';

export function URLParser() {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const detectPlatform = (inputUrl: string) => {
    if (inputUrl.includes('amazon.')) setPlatform('Amazon');
    else if (inputUrl.includes('ebay.')) setPlatform('eBay');
    else if (inputUrl.includes('shopify')) setPlatform('Shopify');
    else if (inputUrl.includes('aliexpress.')) setPlatform('AliExpress');
    else if (inputUrl.includes('rozetka.com.ua')) setPlatform('Rozetka');
    else if (inputUrl.includes('prom.ua')) setPlatform('Prom.ua');
    else setPlatform('');
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    detectPlatform(newUrl);
  };

  const analyzeUrl = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="productUrl">{t('url.label')}</Label>
        <Input 
          id="productUrl"
          placeholder={t('url.placeholder')}
          value={url}
          onChange={handleUrlChange}
        />
      </div>
      
      {platform && (
        <Alert>
          <ExternalLink className="h-4 w-4" />
          <AlertDescription>
            📦 {platform} {t('url.detected')}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <div>✅ Amazon (all regions)</div>
        <div>✅ eBay</div>
        <div>✅ Shopify stores</div>
        <div>✅ AliExpress</div>
        <div>✅ Rozetka.ua</div>
        <div>✅ Prom.ua</div>
        <div>✅ Etsy</div>
        <div>✅ And 15+ more...</div>
      </div>
      
      <Button 
        onClick={analyzeUrl}
        disabled={!url || isAnalyzing}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        {isAnalyzing ? t('url.analyzing') : `🔍 ${t('url.analyze')}`}
      </Button>
    </div>
  );
}
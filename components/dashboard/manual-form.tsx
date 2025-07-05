"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles } from 'lucide-react';

export function ManualForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    style: '',
    language: 'en'
  });

  const handleGenerate = () => {
    console.log('Generating content with:', formData);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="productName">{t('form.product.name')}</Label>
        <Input 
          id="productName"
          placeholder={t('form.product.name.placeholder')}
          value={formData.productName}
          onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
        />
      </div>
      
      <div>
        <Label htmlFor="category">{t('form.category')}</Label>
        <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
          <SelectTrigger>
            <SelectValue placeholder={t('form.category.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electronics">{t('form.category.electronics')}</SelectItem>
            <SelectItem value="clothing">{t('form.category.clothing')}</SelectItem>
            <SelectItem value="home">{t('form.category.home')}</SelectItem>
            <SelectItem value="beauty">{t('form.category.beauty')}</SelectItem>
            <SelectItem value="sports">{t('form.category.sports')}</SelectItem>
            <SelectItem value="automotive">{t('form.category.automotive')}</SelectItem>
            <SelectItem value="other">{t('form.category.other')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="style">{t('form.style')}</Label>
        <Select value={formData.style} onValueChange={(value) => setFormData(prev => ({ ...prev, style: value }))}>
          <SelectTrigger>
            <SelectValue placeholder={t('form.style.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professional">{t('form.style.professional')}</SelectItem>
            <SelectItem value="casual">{t('form.style.casual')}</SelectItem>
            <SelectItem value="luxury">{t('form.style.luxury')}</SelectItem>
            <SelectItem value="technical">{t('form.style.technical')}</SelectItem>
            <SelectItem value="creative">{t('form.style.creative')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="language">{t('form.language')}</Label>
        <Select value={formData.language} onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">🇺🇸 English</SelectItem>
            <SelectItem value="ua">🇺🇦 Українська</SelectItem>
            <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
            <SelectItem value="es">🇪🇸 Español</SelectItem>
            <SelectItem value="fr">🇫🇷 Français</SelectItem>
            <SelectItem value="it">🇮🇹 Italiano</SelectItem>
            <SelectItem value="pl">🇵🇱 Polski</SelectItem>
            <SelectItem value="pt">🇵🇹 Português</SelectItem>
            <SelectItem value="zh">🇨🇳 中文</SelectItem>
            <SelectItem value="ja">🇯🇵 日本語</SelectItem>
            <SelectItem value="ar">🇸🇦 العربية</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
        size="lg"
        onClick={handleGenerate}
      >
        <Sparkles className="mr-2 h-4 w-4" />
        {t('form.generate')}
      </Button>
    </div>
  );
}
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { getEmojiPreview } from '@/lib/emoji-config';
import { GeneratedContent } from '@/types/generator';
import { getCurrentLanguage, t, useLanguageChange, removeLanguageListener } from '@/lib/translations';

interface ManualFormProps {
  onContentGenerated?: (content: GeneratedContent) => void;
}

export function ManualForm({ onContentGenerated }: ManualFormProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    writingStyle: '',
    useEmojis: true,
    emojiIntensity: 2
  });

  // Update language when it changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(getCurrentLanguage());
    };

    useLanguageChange(handleLanguageChange);

    return () => {
      removeLanguageListener(handleLanguageChange);
    };
  }, []);

  const handleGenerate = async () => {
    if (!formData.productName || !formData.category || !formData.writingStyle) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate content');
      }

      const content: GeneratedContent = await response.json();
      
      if (onContentGenerated) {
        onContentGenerated(content);
      }
      
      toast.success(t('toast.success.generated'));
    } catch (error) {
      console.error('Generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <div>
        <Label htmlFor="productName">{t('form.product.name')}</Label>
        <Input 
          id="productName"
          placeholder={t('form.product.name.placeholder')}
          value={formData.productName}
          onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
        />
      </div>
      
      {/* Category - NO EMOJIS in dropdown */}
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
            <SelectItem value="books">{t('form.category.books')}</SelectItem>
            <SelectItem value="toys">{t('form.category.toys')}</SelectItem>
            <SelectItem value="health">{t('form.category.health')}</SelectItem>
            <SelectItem value="business">{t('form.category.business')}</SelectItem>
            <SelectItem value="food">{t('form.category.food')}</SelectItem>
            <SelectItem value="travel">{t('form.category.travel')}</SelectItem>
            <SelectItem value="pets">{t('form.category.pets')}</SelectItem>
            <SelectItem value="jewelry">{t('form.category.jewelry')}</SelectItem>
            <SelectItem value="art">{t('form.category.art')}</SelectItem>
            <SelectItem value="music">{t('form.category.music')}</SelectItem>
            <SelectItem value="other">{t('form.category.other')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Writing Style */}
      <div>
        <Label htmlFor="style">{t('form.style')}</Label>
        <Select value={formData.writingStyle} onValueChange={(value) => setFormData(prev => ({ ...prev, writingStyle: value }))}>
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

      {/* Emoji Control System - LOCALIZED */}
      <div className="space-y-4 p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-base font-medium flex items-center gap-2">
              ✨ {t('emoji.title')}
            </Label>
            <p className="text-sm text-muted-foreground">
              {t('emoji.description')}
            </p>
          </div>
          <Switch
            checked={formData.useEmojis}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, useEmojis: checked }))}
            className="data-[state=checked]:bg-blue-600"
          />
        </div>
        
        {/* Intensity Slider with Animation */}
        <AnimatePresence>
          {formData.useEmojis && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 pt-3 border-t border-gray-200 dark:border-gray-600"
            >
              <Label className="text-sm font-medium">
                {t('emoji.intensity')}: {
                  formData.emojiIntensity === 1 ? t('emoji.intensity.minimal') :
                  formData.emojiIntensity === 2 ? t('emoji.intensity.standard') : 
                  t('emoji.intensity.maximum')
                }
              </Label>
              <Slider
                value={[formData.emojiIntensity]}
                onValueChange={([value]) => setFormData(prev => ({ ...prev, emojiIntensity: value }))}
                min={1}
                max={3}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{t('emoji.intensity.minimal').split(' ')[0]}</span>
                <span>{t('emoji.intensity.standard').split(' ')[0]}</span>
                <span>{t('emoji.intensity.maximum').split(' ')[0]}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Live Preview */}
        <div className="text-xs text-muted-foreground italic bg-white/50 dark:bg-gray-900/50 p-2 rounded">
          <strong>{t('emoji.preview')}:</strong> {getEmojiPreview(
            formData.useEmojis, 
            formData.emojiIntensity, 
            formData.category || 'other'
          )}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
        size="lg"
        onClick={handleGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('form.generating')}
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            {t('form.generate')}
          </>
        )}
      </Button>
    </div>
  );
}
"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Trash2 } from 'lucide-react';
import { GeneratedContent, GeneratorFormData, CATEGORIES, WRITING_STYLES } from '@/types/generator';
import { getEmojiPreview } from '@/lib/emoji-config';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { getCurrentLanguage, t } from '@/lib/translations';

const formSchema = z.object({
  productName: z.string().min(1, 'Product name is required').max(100, 'Product name too long'),
  category: z.string().min(1, 'Category is required'),
  writingStyle: z.string().min(1, 'Writing style is required'),
  useEmojis: z.boolean().optional(),
  emojiIntensity: z.number().min(1).max(3).optional(),
});

interface GeneratorFormProps {
  onGenerate: (data: GeneratorFormData) => Promise<void>;
  isGenerating: boolean;
  generatedContent: GeneratedContent | null;
}

export function GeneratorForm({ onGenerate, isGenerating, generatedContent }: GeneratorFormProps) {
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<GeneratorFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      useEmojis: true,
      emojiIntensity: 2,
    }
  });

  const watchedValues = watch();

  // Update language when it changes
  useEffect(() => {
    const interval = setInterval(() => {
      const newLang = getCurrentLanguage();
      if (newLang !== currentLang) {
        setCurrentLang(newLang);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentLang]);

  // Load saved form data on client mount
  useEffect(() => {
    const saved = localStorage.getItem('copyflow-form');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach(key => {
          setValue(key as keyof GeneratorFormData, parsed[key]);
        });
      } catch (e) {
        console.error('Failed to load saved form data');
      }
    }
  }, [setValue]);

  // Auto-save form data
  useEffect(() => {
    const timer = setInterval(() => {
      if (watchedValues.productName || watchedValues.category || watchedValues.writingStyle) {
        localStorage.setItem('copyflow-form', JSON.stringify(watchedValues));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [watchedValues]);

  const onSubmit = async (data: GeneratorFormData) => {
    try {
      // Ensure emoji settings have defaults
      const formDataWithEmojis = {
        ...data,
        useEmojis: data.useEmojis ?? true,
        emojiIntensity: data.emojiIntensity ?? 2,
      };
      
      await onGenerate(formDataWithEmojis);
      toast.success(t('toast.success.generated'));
    } catch (error) {
      toast.error(t('toast.error.generation'));
    }
  };

  const handleClear = () => {
    reset({
      useEmojis: true,
      emojiIntensity: 2,
    });
    localStorage.removeItem('copyflow-form');
    toast.success('Form cleared');
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-500" />
          {t('form.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Product Name */}
          <div className="space-y-2">
            <Label htmlFor="productName">{t('form.product.name')}</Label>
            <Input
              id="productName"
              {...register('productName')}
              placeholder={t('form.product.name.placeholder')}
              className={errors.productName ? 'border-red-500' : ''}
            />
            {errors.productName && (
              <p className="text-sm text-red-500">{errors.productName.message}</p>
            )}
          </div>

          {/* Category - NO EMOJIS in dropdown */}
          <div className="space-y-2">
            <Label htmlFor="category">{t('form.category')}</Label>
            <Select onValueChange={(value) => setValue('category', value)}>
              <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                <SelectValue placeholder={t('form.category.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {t(`form.category.${category}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>

          {/* Writing Style */}
          <div className="space-y-2">
            <Label htmlFor="writingStyle">{t('form.style')}</Label>
            <Select onValueChange={(value) => setValue('writingStyle', value)}>
              <SelectTrigger className={errors.writingStyle ? 'border-red-500' : ''}>
                <SelectValue placeholder={t('form.style.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                {WRITING_STYLES.map((style) => (
                  <SelectItem key={style} value={style}>
                    {t(`form.style.${style}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.writingStyle && (
              <p className="text-sm text-red-500">{errors.writingStyle.message}</p>
            )}
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
                checked={watchedValues.useEmojis ?? true}
                onCheckedChange={(checked) => setValue('useEmojis', checked)}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>
            
            {/* Intensity Slider with Animation */}
            <AnimatePresence>
              {watchedValues.useEmojis && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 pt-3 border-t border-gray-200 dark:border-gray-600"
                >
                  <Label className="text-sm font-medium">
                    {t('emoji.intensity')}: {
                      watchedValues.emojiIntensity === 1 ? t('emoji.intensity.minimal') :
                      watchedValues.emojiIntensity === 2 ? t('emoji.intensity.standard') : 
                      t('emoji.intensity.maximum')
                    }
                  </Label>
                  <Slider
                    value={[watchedValues.emojiIntensity ?? 2]}
                    onValueChange={([value]) => setValue('emojiIntensity', value)}
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
                watchedValues.useEmojis ?? true, 
                watchedValues.emojiIntensity ?? 2, 
                watchedValues.category || 'other'
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button 
              type="submit" 
              disabled={isGenerating}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleClear}
              disabled={isGenerating}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
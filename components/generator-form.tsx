"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { toast } from 'sonner';

const formSchema = z.object({
  productName: z.string().min(1, 'Product name is required').max(100, 'Product name too long'),
  category: z.string().min(1, 'Category is required'),
  writingStyle: z.string().min(1, 'Writing style is required'),
});

interface GeneratorFormProps {
  onGenerate: (data: GeneratorFormData) => Promise<void>;
  isGenerating: boolean;
  generatedContent: GeneratedContent | null;
}

export function GeneratorForm({ onGenerate, isGenerating, generatedContent }: GeneratorFormProps) {
  const { t } = useTranslation();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<GeneratorFormData>({
    resolver: zodResolver(formSchema),
  });

  const watchedValues = watch();

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
      await onGenerate(data);
      toast.success(t('toast.success.generated'));
    } catch (error) {
      toast.error(t('toast.error.generation'));
    }
  };

  const handleClear = () => {
    reset();
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

          {/* Category */}
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
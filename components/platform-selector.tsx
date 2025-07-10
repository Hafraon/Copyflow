"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface PlatformSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const platforms = [
  { 
    id: 'universal', 
    name: 'Universal', 
    icon: '🌐', 
    priority: 'always',
    description: 'Works everywhere'
  },
  { 
    id: 'amazon', 
    name: 'Amazon', 
    icon: '📦', 
    priority: 'high',
    description: 'Optimized for Amazon listings'
  },
  { 
    id: 'shopify', 
    name: 'Shopify', 
    icon: '🛍️', 
    priority: 'high',
    description: 'Perfect for Shopify stores'
  },
  { 
    id: 'aliexpress', 
    name: 'AliExpress', 
    icon: '🏪', 
    priority: 'high',
    description: 'Tailored for AliExpress'
  },
  { 
    id: 'horoshop', 
    name: 'Хорошоп', 
    icon: '🇺🇦', 
    priority: 'high',
    description: 'Ukrainian marketplace'
  },
  { 
    id: 'etsy', 
    name: 'Etsy', 
    icon: '🎨', 
    priority: 'medium',
    description: 'Handmade and vintage'
  },
  { 
    id: 'ebay', 
    name: 'eBay', 
    icon: '🔨', 
    priority: 'medium',
    description: 'Auction and buy-it-now'
  },
  { 
    id: 'instagram', 
    name: 'Instagram', 
    icon: '📸', 
    priority: 'medium',
    description: 'Social commerce'
  },
  { 
    id: 'facebook', 
    name: 'Facebook', 
    icon: '👥', 
    priority: 'medium',
    description: 'Facebook Marketplace'
  },
];

export function PlatformSelector({ value, onChange }: PlatformSelectorProps) {
  const { t } = useTranslation();

  const selectedPlatform = platforms.find(p => p.id === value);

  return (
    <div className="space-y-2">
      <Label htmlFor="platform">{t('form.platform.label')}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={t('form.platform.placeholder')}>
            {selectedPlatform && (
              <div className="flex items-center gap-2">
                <span>{selectedPlatform.icon}</span>
                <span>{selectedPlatform.name}</span>
                {selectedPlatform.priority === 'high' && (
                  <Badge variant="secondary" className="text-xs">Popular</Badge>
                )}
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {platforms.map((platform) => (
            <SelectItem key={platform.id} value={platform.id}>
              <div className="flex items-center gap-2 w-full">
                <span>{platform.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span>{platform.name}</span>
                    {platform.priority === 'high' && (
                      <Badge variant="secondary" className="text-xs">Popular</Badge>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {platform.description}
                  </div>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
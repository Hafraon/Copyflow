"use client";

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Bell, User } from 'lucide-react';

export function DashboardHeader() {
  const { t } = useTranslation();

  return (
    <header className="border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">{t('dashboard.header.title')}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
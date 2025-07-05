"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { getCurrentLanguage, setLanguage, useLanguageChange, removeLanguageListener, LanguageCode } from '@/lib/translations';

const languages = [
  { code: 'en' as LanguageCode, name: 'English', flag: '🇺🇸' },
  { code: 'uk' as LanguageCode, name: 'Українська', flag: '🇺🇦' },
  // Removed other languages for performance optimization
];

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>(getCurrentLanguage());

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(getCurrentLanguage());
    };

    useLanguageChange(handleLanguageChange);

    return () => {
      removeLanguageListener(handleLanguageChange);
    };
  }, []);

  const changeLanguage = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setCurrentLang(langCode);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="gap-2"
          >
            <span className="text-lg">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
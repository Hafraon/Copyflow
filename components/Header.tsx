"use client";

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Menu, 
  X, 
  Zap, 
  User, 
  Settings, 
  LogOut, 
  CreditCard,
  BarChart3,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCurrentLanguage, setLanguage, t } from '@/lib/translations';
import type { LanguageCode } from '@/lib/translations';

interface HeaderProps {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const languages = [
  { code: 'uk' as LanguageCode, name: 'Українська', flag: '🇺🇦' },
  { code: 'en' as LanguageCode, name: 'English', flag: '🇺🇸' },
  { code: 'de' as LanguageCode, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es' as LanguageCode, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as LanguageCode, name: 'Français', flag: '🇫🇷' },
  { code: 'it' as LanguageCode, name: 'Italiano', flag: '🇮🇹' },
  { code: 'pl' as LanguageCode, name: 'Polski', flag: '🇵🇱' },
  { code: 'pt' as LanguageCode, name: 'Português', flag: '🇵🇹' },
  { code: 'zh' as LanguageCode, name: '中文', flag: '🇨🇳' },
  { code: 'ja' as LanguageCode, name: '日本語', flag: '🇯🇵' },
  { code: 'ar' as LanguageCode, name: 'العربية', flag: '🇸🇦' }
];

export function Header({ language, setLanguage: setLang }: HeaderProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const changeLanguage = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setLang(langCode);
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  const navItems = [
    { 
      key: 'dashboard', 
      href: '/dashboard', 
      icon: BarChart3,
      label: t(language, 'nav.dashboard')
    },
    { 
      key: 'billing', 
      href: '/dashboard/billing', 
      icon: CreditCard,
      label: t(language, 'nav.billing')
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CopyFlow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
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

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Menu */}
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{session.user?.name || session.user?.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  {t(language, 'nav.dashboard')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/dashboard/billing')}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  {t(language, 'nav.billing')}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  {t(language, 'nav.settings')}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  {t(language, 'nav.logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => router.push('/')} size="sm">
              {t(language, 'nav.login')}
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="container px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {session && (
                <>
                  <div className="border-t border-border pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleSignOut}
                      className="w-full justify-start"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {t(language, 'nav.logout')}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
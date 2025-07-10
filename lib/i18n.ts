'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files
import ukTranslations from '@/locales/uk/common.json';
import enTranslations from '@/locales/en/common.json';
import deTranslations from '@/locales/de/common.json';
import esTranslations from '@/locales/es/common.json';
import frTranslations from '@/locales/fr/common.json';
import itTranslations from '@/locales/it/common.json';
import plTranslations from '@/locales/pl/common.json';
import ptTranslations from '@/locales/pt/common.json';
import zhTranslations from '@/locales/zh/common.json';
import jaTranslations from '@/locales/ja/common.json';
import arTranslations from '@/locales/ar/common.json';

const resources = {
  uk: { translation: ukTranslations },
  en: { translation: enTranslations },
  de: { translation: deTranslations },
  es: { translation: esTranslations },
  fr: { translation: frTranslations },
  it: { translation: itTranslations },
  pl: { translation: plTranslations },
  pt: { translation: ptTranslations },
  zh: { translation: zhTranslations },
  ja: { translation: jaTranslations },
  ar: { translation: arTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk', // Ukrainian as default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
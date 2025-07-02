export const languages = {
  en: 'English',
  uk: 'Українська'
} as const;

export type Language = keyof typeof languages;
export type LanguageCode = keyof typeof languages;

export const translations = {
  en: { dashboard: { title: 'Dashboard' } },
  uk: { dashboard: { title: 'Панель' } }
} as const;
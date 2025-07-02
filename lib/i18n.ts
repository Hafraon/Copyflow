import { initializeLanguage } from './translations';

// Initialize the translation system
if (typeof window !== 'undefined') {
  initializeLanguage();
}

// This file serves as the i18n initialization point
// The actual translation logic is in ./translations.ts
export * from './translations';
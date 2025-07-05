export type LanguageCode = 'en' | 'uk';

interface Translations {
  [key: string]: string;
}

const translations: Record<LanguageCode, Translations> = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.dashboard': 'Dashboard',
    'nav.billing': 'Billing',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',
    
    // Hero
    'hero.title': 'CopyFlow',
    'hero.subtitle': 'AI-Powered Product Description Generator',
    'hero.description': 'Create SEO-optimized product descriptions, titles, and CTAs with advanced AI technology. Perfect for e-commerce businesses of all sizes.',
    'hero.cta.primary': 'Start Generating',
    'hero.cta.secondary': 'Watch Demo',
    'hero.trusted': 'Trusted by 10,000+ businesses worldwide',
    
    // Dashboard
    'dashboard.header.title': 'AI Content Generator',
    'dashboard.sidebar.generator': 'Generator',
    'dashboard.sidebar.history': 'History',
    'dashboard.sidebar.analytics': 'Analytics',
    'dashboard.sidebar.trending': 'Trending',
    'dashboard.sidebar.competitors': 'Competitors',
    'dashboard.sidebar.settings': 'Settings',
    'dashboard.usage.plan': 'Pro Plan',
    'dashboard.usage.generations': 'generations',
    
    // Generator Form
    'form.title': 'Generate Product Content',
    'form.product.name': 'Product Name',
    'form.product.name.placeholder': 'Enter your product name...',
    'form.category': 'Category',
    'form.category.placeholder': 'Select category...',
    'form.category.electronics': 'Electronics',
    'form.category.clothing': 'Clothing & Fashion',
    'form.category.home': 'Home & Garden',
    'form.category.beauty': 'Beauty & Health',
    'form.category.sports': 'Sports & Outdoors',
    'form.category.books': 'Books & Media',
    'form.category.automotive': 'Automotive',
    'form.category.toys': 'Toys & Games',
    'form.category.health': 'Health & Wellness',
    'form.category.business': 'Business & Industrial',
    'form.category.food': 'Food & Beverages',
    'form.category.travel': 'Travel & Tourism',
    'form.category.pets': 'Pet Supplies',
    'form.category.jewelry': 'Jewelry & Accessories',
    'form.category.art': 'Art & Crafts',
    'form.category.music': 'Music & Instruments',
    'form.category.other': 'Other',
    'form.style': 'Writing Style',
    'form.style.placeholder': 'Select writing style...',
    'form.style.professional': 'Professional',
    'form.style.casual': 'Casual',
    'form.style.luxury': 'Luxury',
    'form.style.technical': 'Technical',
    'form.style.creative': 'Creative',
    'form.language': 'Language',
    'form.generate': 'Generate Content',
    'form.generating': 'Generating...',
    
    // Emoji Settings
    'emoji.title': 'Emojis in Description',
    'emoji.description': 'Add emojis for visual appeal',
    'emoji.intensity': 'Intensity',
    'emoji.intensity.minimal': 'Minimal (3-5)',
    'emoji.intensity.standard': 'Standard (8-12)',
    'emoji.intensity.maximum': 'Maximum (15-20+)',
    'emoji.preview': 'Preview',
    'emoji.preview.none': 'No emojis (text only)',
    
    // Generator Tabs
    'generator.title': 'Content Generator',
    'generator.tabs.manual': 'Manual',
    'generator.tabs.photo': 'Photo',
    'generator.tabs.voice': 'Voice',
    'generator.tabs.url': 'URL',
    
    // Results
    'results.title': 'Generated Content',
    'results.product.title': 'Product Title',
    'results.product.description': 'Product Description',
    'results.seo.title': 'SEO Title',
    'results.meta.description': 'Meta Description',
    'results.cta': 'Call-to-Action',
    'results.copy': 'Copy',
    'results.copied': 'Copied!',
    'results.export': 'Export All',
    'results.regenerate': 'Regenerate',
    'results.empty': 'Generate content to see results here',
    
    // Toast
    'toast.success.generated': 'Content generated successfully!',
    'toast.success.copied': 'Copied to clipboard!',
    'toast.success.exported': 'Content exported successfully!',
    'toast.error.generation': 'Failed to generate content. Please try again.',
    'toast.error.copy': 'Failed to copy to clipboard.',
  },
  uk: {
    // Navigation
    'nav.features': 'Функції',
    'nav.pricing': 'Ціни',
    'nav.about': 'Про нас',
    'nav.contact': 'Контакти',
    'nav.login': 'Увійти',
    'nav.signup': 'Реєстрація',
    'nav.dashboard': 'Панель',
    'nav.billing': 'Оплата',
    'nav.settings': 'Налаштування',
    'nav.logout': 'Вийти',
    
    // Hero
    'hero.title': 'CopyFlow',
    'hero.subtitle': 'ШІ-генератор описів товарів',
    'hero.description': 'Створюйте SEO-оптимізовані описи товарів, заголовки та заклики до дії за допомогою передових ШІ-технологій. Ідеально для e-commerce бізнесу будь-якого розміру.',
    'hero.cta.primary': 'Почати генерацію',
    'hero.cta.secondary': 'Дивитися демо',
    'hero.trusted': 'Довіряють понад 10,000 бізнесів по всьому світу',
    
    // Dashboard
    'dashboard.header.title': 'Генератор контенту',
    'dashboard.sidebar.generator': 'Генератор',
    'dashboard.sidebar.history': 'Історія',
    'dashboard.sidebar.analytics': 'Аналітика',
    'dashboard.sidebar.trending': 'Тренди',
    'dashboard.sidebar.competitors': 'Конкуренти',
    'dashboard.sidebar.settings': 'Налаштування',
    'dashboard.usage.plan': 'Про План',
    'dashboard.usage.generations': 'генерацій',
    
    // Generator Form
    'form.title': 'Генерувати контент товару',
    'form.product.name': 'Назва товару',
    'form.product.name.placeholder': 'Введіть назву товару...',
    'form.category': 'Категорія',
    'form.category.placeholder': 'Оберіть категорію...',
    'form.category.electronics': 'Електроніка',
    'form.category.clothing': 'Одяг та мода',
    'form.category.home': 'Дім та сад',
    'form.category.beauty': 'Краса та здоров\'я',
    'form.category.sports': 'Спорт та відпочинок',
    'form.category.books': 'Книги та медіа',
    'form.category.automotive': 'Автомобільне',
    'form.category.toys': 'Іграшки та ігри',
    'form.category.health': 'Здоров\'я та велнес',
    'form.category.business': 'Бізнес та промисловість',
    'form.category.food': 'Їжа та напої',
    'form.category.travel': 'Подорожі та туризм',
    'form.category.pets': 'Товари для тварин',
    'form.category.jewelry': 'Ювелірні вироби та аксесуари',
    'form.category.art': 'Мистецтво та ремесла',
    'form.category.music': 'Музика та інструменти',
    'form.category.other': 'Інше',
    'form.style': 'Стиль написання',
    'form.style.placeholder': 'Оберіть стиль...',
    'form.style.professional': 'Професійний',
    'form.style.casual': 'Неформальний',
    'form.style.luxury': 'Люксовий',
    'form.style.technical': 'Технічний',
    'form.style.creative': 'Креативний',
    'form.language': 'Мова',
    'form.generate': 'Генерувати контент',
    'form.generating': 'Генерація...',
    
    // Emoji Settings
    'emoji.title': 'Емодзі в описі',
    'emoji.description': 'Додавати емодзі для візуального привернення уваги',
    'emoji.intensity': 'Інтенсивність',
    'emoji.intensity.minimal': 'Мінімум (3-5)',
    'emoji.intensity.standard': 'Стандарт (8-12)',
    'emoji.intensity.maximum': 'Максимум (15-20+)',
    'emoji.preview': 'Попередній перегляд',
    'emoji.preview.none': 'Без емодзі (тільки текст)',
    
    // Generator Tabs
    'generator.title': 'Генератор контенту',
    'generator.tabs.manual': 'Ручний',
    'generator.tabs.photo': 'Фото',
    'generator.tabs.voice': 'Голос',
    'generator.tabs.url': 'URL',
    
    // Results
    'results.title': 'Згенерований контент',
    'results.product.title': 'Заголовок товару',
    'results.product.description': 'Опис товару',
    'results.seo.title': 'SEO заголовок',
    'results.meta.description': 'Мета опис',
    'results.cta': 'Заклик до дії',
    'results.copy': 'Копіювати',
    'results.copied': 'Скопійовано!',
    'results.export': 'Експортувати все',
    'results.regenerate': 'Регенерувати',
    'results.empty': 'Згенеруйте контент, щоб побачити результати тут',
    
    // Toast
    'toast.success.generated': 'Контент успішно згенеровано!',
    'toast.success.copied': 'Скопійовано в буфер обміну!',
    'toast.success.exported': 'Контент успішно експортовано!',
    'toast.error.generation': 'Не вдалося згенерувати контент. Спробуйте ще раз.',
    'toast.error.copy': 'Не вдалося скопіювати в буфер обміну.',
  }
};

let currentLanguage: LanguageCode = 'en';
let listeners: (() => void)[] = [];

export function getCurrentLanguage(): LanguageCode {
  return currentLanguage;
}

export function setLanguage(lang: LanguageCode): void {
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('copyflow-language', lang);
  }
  // Notify all listeners about language change
  listeners.forEach(listener => listener());
}

export function t(key: string, fallback?: string): string {
  return translations[currentLanguage]?.[key] || fallback || key;
}

export function initializeLanguage(): void {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('copyflow-language') as LanguageCode;
    if (saved && (saved === 'en' || saved === 'uk')) {
      currentLanguage = saved;
    }
  }
}

// Hook for components to listen to language changes
export function useLanguageChange(callback: () => void): void {
  listeners.push(callback);
}

export function removeLanguageListener(callback: () => void): void {
  listeners = listeners.filter(listener => listener !== callback);
}
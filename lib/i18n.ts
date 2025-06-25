import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.features': 'Features',
      'nav.pricing': 'Pricing',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.login': 'Login',
      'nav.signup': 'Sign Up',
      
      // Hero Section
      'hero.title': 'CopyFlow',
      'hero.subtitle': 'AI-Powered Product Description Generator',
      'hero.description': 'Generate SEO-optimized product descriptions, titles, and CTAs in seconds. Perfect for e-commerce businesses looking to scale their content creation.',
      'hero.cta.primary': 'Start Generating',
      'hero.cta.secondary': 'Watch Demo',
      'hero.trusted': 'Trusted by 10,000+ businesses worldwide',
      
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
      'form.category.other': 'Other',
      'form.style': 'Writing Style',
      'form.style.placeholder': 'Select writing style...',
      'form.style.professional': 'Professional',
      'form.style.casual': 'Casual',
      'form.style.luxury': 'Luxury',
      'form.style.technical': 'Technical',
      'form.style.creative': 'Creative',
      'form.generate': 'Generate Content',
      'form.clear': 'Clear Form',
      'form.generating': 'Generating...',
      
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
      
      // Features
      'features.title': 'Powerful Features for Content Creation',
      'features.subtitle': 'Everything you need to create compelling product content',
      'features.ai.title': 'AI-Powered Generation',
      'features.ai.description': 'Advanced GPT-4 technology creates human-like, engaging content',
      'features.seo.title': 'SEO Optimized',
      'features.seo.description': 'Content optimized for search engines and conversion',
      'features.multilingual.title': 'Multi-Language Support',
      'features.multilingual.description': 'Generate content in multiple languages',
      'features.export.title': 'Easy Export',
      'features.export.description': 'Export content in various formats',
      'features.templates.title': 'Smart Templates',
      'features.templates.description': 'Pre-built templates for different industries',
      'features.analytics.title': 'Performance Analytics',
      'features.analytics.description': 'Track content performance and optimization',
      
      // Pricing
      'pricing.title': 'Simple, Transparent Pricing',
      'pricing.subtitle': 'Choose the perfect plan for your business needs',
      'pricing.free.title': 'Free',
      'pricing.free.price': '$0',
      'pricing.free.description': 'Perfect for trying out CopyFlow',
      'pricing.free.feature1': '5 generations per month',
      'pricing.free.feature2': 'Basic templates',
      'pricing.free.feature3': 'Email support',
      'pricing.pro.title': 'Pro',
      'pricing.pro.price': '$19',
      'pricing.pro.description': 'Best for growing businesses',
      'pricing.pro.feature1': 'Unlimited generations',
      'pricing.pro.feature2': 'Advanced templates',
      'pricing.pro.feature3': 'Priority support',
      'pricing.pro.feature4': 'Analytics dashboard',
      'pricing.business.title': 'Business',
      'pricing.business.price': '$49',
      'pricing.business.description': 'For large-scale operations',
      'pricing.business.feature1': 'Everything in Pro',
      'pricing.business.feature2': 'API access',
      'pricing.business.feature3': 'White-label solution',
      'pricing.business.feature4': 'Custom integrations',
      'pricing.cta': 'Get Started',
      'pricing.popular': 'Most Popular',
      
      // Footer
      'footer.description': 'Generate professional product descriptions with AI-powered technology.',
      'footer.product': 'Product',
      'footer.company': 'Company',
      'footer.support': 'Support',
      'footer.legal': 'Legal',
      'footer.rights': 'All rights reserved.',
      
      // Validation
      'validation.required': 'This field is required',
      'validation.min': 'Minimum {{count}} characters required',
      'validation.max': 'Maximum {{count}} characters allowed',
      
      // Toast Messages
      'toast.success.generated': 'Content generated successfully!',
      'toast.success.copied': 'Copied to clipboard!',
      'toast.success.exported': 'Content exported successfully!',
      'toast.error.generation': 'Failed to generate content. Please try again.',
      'toast.error.copy': 'Failed to copy to clipboard.',
      'toast.error.export': 'Failed to export content.',
    }
  },
  uk: {
    translation: {
      // Navigation
      'nav.features': 'Функції',
      'nav.pricing': 'Ціни',
      'nav.about': 'Про нас',
      'nav.contact': 'Контакти',
      'nav.login': 'Увійти',
      'nav.signup': 'Реєстрація',
      
      // Hero Section
      'hero.title': 'CopyFlow',
      'hero.subtitle': 'ШІ-генератор описів товарів',
      'hero.description': 'Створюйте SEO-оптимізовані описи товарів, заголовки та заклики до дії за секунди. Ідеально для електронної комерції.',
      'hero.cta.primary': 'Почати генерацію',
      'hero.cta.secondary': 'Дивитися демо',
      'hero.trusted': 'Нам довіряють понад 10,000 компаній у всьому світі',
      
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
      'form.category.other': 'Інше',
      'form.style': 'Стиль написання',
      'form.style.placeholder': 'Оберіть стиль...',
      'form.style.professional': 'Професійний',
      'form.style.casual': 'Неформальний',
      'form.style.luxury': 'Люксовий',
      'form.style.technical': 'Технічний',
      'form.style.creative': 'Креативний',
      'form.generate': 'Генерувати контент',
      'form.clear': 'Очистити форму',
      'form.generating': 'Генерація...',
      
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
      
      // Features
      'features.title': 'Потужні функції для створення контенту',
      'features.subtitle': 'Все необхідне для створення привабливого контенту товарів',
      'features.ai.title': 'ШІ-генерація',
      'features.ai.description': 'Передова технологія GPT-4 створює людиноподібний, захоплюючий контент',
      'features.seo.title': 'SEO оптимізація',
      'features.seo.description': 'Контент оптимізований для пошукових систем та конверсії',
      'features.multilingual.title': 'Багатомовна підтримка',
      'features.multilingual.description': 'Генеруйте контент кількома мовами',
      'features.export.title': 'Легкий експорт',
      'features.export.description': 'Експортуйте контент у різних форматах',
      'features.templates.title': 'Розумні шаблони',
      'features.templates.description': 'Готові шаблони для різних галузей',
      'features.analytics.title': 'Аналітика продуктивності',
      'features.analytics.description': 'Відстежуйте продуктивність та оптимізацію контенту',
      
      // Pricing
      'pricing.title': 'Прості, прозорі ціни',
      'pricing.subtitle': 'Оберіть ідеальний план для потреб вашого бізнесу',
      'pricing.free.title': 'Безкоштовно',
      'pricing.free.price': '$0',
      'pricing.free.description': 'Ідеально для знайомства з CopyFlow',
      'pricing.free.feature1': '5 генерацій на місяць',
      'pricing.free.feature2': 'Базові шаблони',
      'pricing.free.feature3': 'Підтримка електронною поштою',
      'pricing.pro.title': 'Про',
      'pricing.pro.price': '$19',
      'pricing.pro.description': 'Найкраще для зростаючих бізнесів',
      'pricing.pro.feature1': 'Необмежені генерації',
      'pricing.pro.feature2': 'Розширені шаблони',
      'pricing.pro.feature3': 'Пріоритетна підтримка',
      'pricing.pro.feature4': 'Панель аналітики',
      'pricing.business.title': 'Бізнес',
      'pricing.business.price': '$49',
      'pricing.business.description': 'Для великомасштабних операцій',
      'pricing.business.feature1': 'Все з плану Про',
      'pricing.business.feature2': 'Доступ до API',
      'pricing.business.feature3': 'White-label рішення',
      'pricing.business.feature4': 'Користувацькі інтеграції',
      'pricing.cta': 'Почати',
      'pricing.popular': 'Найпопулярніший',
      
      // Footer
      'footer.description': 'Генеруйте професійні описи товарів за допомогою ШІ-технологій.',
      'footer.product': 'Продукт',
      'footer.company': 'Компанія',
      'footer.support': 'Підтримка',
      'footer.legal': 'Правові питання',
      'footer.rights': 'Всі права захищені.',
      
      // Validation
      'validation.required': 'Це поле обов\'язкове',
      'validation.min': 'Мінімум {{count}} символів необхідно',
      'validation.max': 'Максимум {{count}} символів дозволено',
      
      // Toast Messages
      'toast.success.generated': 'Контент успішно згенеровано!',
      'toast.success.copied': 'Скопійовано в буфер обміну!',
      'toast.success.exported': 'Контент успішно експортовано!',
      'toast.error.generation': 'Не вдалося згенерувати контент. Спробуйте ще раз.',
      'toast.error.copy': 'Не вдалося скопіювати в буфер обміну.',
      'toast.error.export': 'Не вдалося експортувати контент.',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
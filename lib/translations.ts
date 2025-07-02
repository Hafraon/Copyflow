export type LanguageCode = 'uk' | 'en' | 'de' | 'es' | 'fr' | 'it' | 'pl' | 'pt' | 'zh' | 'ja' | 'ar';

export interface TranslationKeys {
  nav: {
    dashboard: string;
    billing: string;
    settings: string;
    login: string;
    logout: string;
    features: string;
    pricing: string;
    about: string;
    contact: string;
    signup: string;
  };
  billing: {
    title: string;
    currentPlan: string;
    upgrade: string;
    active: string;
    freePlan: string;
    nextBilling: string;
    paymentMethod: string;
    change: string;
    billingHistory: string;
    noHistory: string;
    paid: string;
    pending: string;
  };
  dashboard: {
    header: {
      title: string;
    };
    sidebar: {
      generator: string;
      history: string;
      analytics: string;
      trending: string;
      competitors: string;
      settings: string;
    };
    usage: {
      plan: string;
      generations: string;
    };
  };
  generator: {
    title: string;
    tabs: {
      manual: string;
      photo: string;
      voice: string;
      url: string;
    };
  };
  form: {
    title: string;
    product: {
      name: string;
      'name.placeholder': string;
    };
    category: string;
    'category.placeholder': string;
    'category.electronics': string;
    'category.clothing': string;
    'category.home': string;
    'category.beauty': string;
    'category.sports': string;
    'category.books': string;
    'category.automotive': string;
    'category.other': string;
    style: string;
    'style.placeholder': string;
    'style.professional': string;
    'style.casual': string;
    'style.luxury': string;
    'style.technical': string;
    'style.creative': string;
    language: string;
    generate: string;
    generating: string;
  };
  results: {
    title: string;
    empty: string;
    regenerate: string;
    export: string;
    tabs: {
      content: string;
      analysis: string;
      variations: string;
    };
    product: {
      title: string;
      description: string;
    };
    seo: {
      title: string;
    };
    meta: {
      description: string;
    };
    cta: string;
    features: string;
    keywords: string;
    'analysis.empty': string;
    'variations.empty': string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      primary: string;
      secondary: string;
    };
    trusted: string;
  };
  features: {
    title: string;
    subtitle: string;
    ai: {
      title: string;
      description: string;
    };
    seo: {
      title: string;
      description: string;
    };
    multilingual: {
      title: string;
      description: string;
    };
    export: {
      title: string;
      description: string;
    };
    templates: {
      title: string;
      description: string;
    };
    analytics: {
      title: string;
      description: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    cta: string;
    free: {
      title: string;
      price: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    pro: {
      title: string;
      price: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
    business: {
      title: string;
      price: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
  };
  footer: {
    product: string;
    company: string;
    support: string;
    legal: string;
    description: string;
    rights: string;
  };
  auth: {
    modal: {
      title: {
        login: string;
        signup: string;
      };
    };
    providers: {
      google: string;
      linkedin: string;
      facebook: string;
    };
    switch: {
      login: string;
      signup: string;
      'login.action': string;
      'signup.action': string;
    };
  };
  photo: {
    drop: {
      title: string;
      subtitle: string;
    };
    browse: string;
    analyzing: string;
    detecting: string;
    audience: string;
  };
  voice: {
    recording: string;
    start: string;
    transcription: string;
    languages: string;
  };
  url: {
    label: string;
    placeholder: string;
    detected: string;
    analyzing: string;
    analyze: string;
  };
  toast: {
    success: {
      generated: string;
      copied: string;
      exported: string;
    };
    error: {
      generation: string;
      copy: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    success: string;
    form: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      subject: string;
      message: string;
      sending: string;
      send: string;
    };
    info: {
      email: {
        title: string;
        description: string;
      };
      phone: {
        title: string;
        description: string;
      };
      address: {
        title: string;
        description: string;
      };
    };
  };
  about: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      description: string;
    };
    features: {
      title: string;
      ai: string;
      seo: string;
      multilingual: string;
      templates: string;
      analytics: string;
    };
    team: {
      title: string;
      description: string;
    };
  };
  terms: {
    title: string;
    subtitle: string;
    acceptance: {
      title: string;
      description: string;
    };
    service: {
      title: string;
      description: string;
    };
    content: {
      title: string;
      description: string;
    };
    limitation: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
  };
  privacy: {
    title: string;
    subtitle: string;
    collection: {
      title: string;
      description: string;
    };
    usage: {
      title: string;
      description: string;
    };
    protection: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<LanguageCode, TranslationKeys> = {
  uk: {
    nav: {
      dashboard: 'Панель керування',
      billing: 'Білінг',
      settings: 'Налаштування',
      login: 'Увійти',
      logout: 'Вийти',
      features: 'Можливості',
      pricing: 'Тарифи',
      about: 'Про нас',
      contact: 'Контакти',
      signup: 'Реєстрація',
    },
    billing: {
      title: 'Білінг та підписка',
      currentPlan: 'Поточний тариф',
      upgrade: 'Оновити тариф',
      active: 'Активний',
      freePlan: 'Безкоштовний тариф',
      nextBilling: 'Наступний платіж:',
      paymentMethod: 'Спосіб оплати',
      change: 'Змінити',
      billingHistory: 'Історія платежів',
      noHistory: 'Історія платежів порожня',
      paid: 'Сплачено',
      pending: 'Очікує',
    },
    dashboard: {
      header: {
        title: 'Генератор контенту',
      },
      sidebar: {
        generator: 'Генератор',
        history: 'Історія',
        analytics: 'Аналітика',
        trending: 'Тренди',
        competitors: 'Конкуренти',
        settings: 'Налаштування',
      },
      usage: {
        plan: 'Безкоштовний план',
        generations: 'генерацій',
      },
    },
    generator: {
      title: 'Генератор контенту',
      tabs: {
        manual: 'Ручний ввід',
        photo: 'Фото',
        voice: 'Голос',
        url: 'URL',
      },
    },
    form: {
      title: 'Генератор контенту',
      product: {
        name: 'Назва товару',
        'name.placeholder': 'Введіть назву товару...',
      },
      category: 'Категорія',
      'category.placeholder': 'Оберіть категорію',
      'category.electronics': 'Електроніка',
      'category.clothing': 'Одяг',
      'category.home': 'Дім та сад',
      'category.beauty': 'Краса',
      'category.sports': 'Спорт',
      'category.books': 'Книги',
      'category.automotive': 'Автомобілі',
      'category.other': 'Інше',
      style: 'Стиль написання',
      'style.placeholder': 'Оберіть стиль',
      'style.professional': 'Професійний',
      'style.casual': 'Неформальний',
      'style.luxury': 'Преміум',
      'style.technical': 'Технічний',
      'style.creative': 'Креативний',
      language: 'Мова',
      generate: 'Згенерувати',
      generating: 'Генерація...',
    },
    results: {
      title: 'Результати',
      empty: 'Заповніть форму та натисніть "Згенерувати" для створення контенту',
      regenerate: 'Перегенерувати',
      export: 'Експорт',
      tabs: {
        content: 'Контент',
        analysis: 'Аналіз',
        variations: 'Варіації',
      },
      product: {
        title: 'Заголовок товару',
        description: 'Опис товару',
      },
      seo: {
        title: 'SEO заголовок',
      },
      meta: {
        description: 'Мета-опис',
      },
      cta: 'Заклик до дії',
      features: 'Особливості',
      keywords: 'Ключові слова',
      'analysis.empty': 'Аналіз буде доступний після генерації контенту',
      'variations.empty': 'Варіації будуть доступні після генерації контенту',
    },
    hero: {
      title: 'AI Генератор Описів Товарів',
      subtitle: 'Створюйте SEO-оптимізовані описи за секунди',
      description: 'Потужний AI-інструмент для створення привабливих описів товарів, заголовків та закликів до дії. Підтримка 11+ мов та професійні шаблони.',
      cta: {
        primary: 'Спробувати безкоштовно',
        secondary: 'Дивитися демо',
      },
      trusted: 'Довіряють понад 10,000+ компаній',
    },
    features: {
      title: 'Потужні можливості',
      subtitle: 'Все що потрібно для створення професійного контенту',
      ai: {
        title: 'AI-генерація',
        description: 'Передова технологія штучного інтелекту для створення унікального контенту',
      },
      seo: {
        title: 'SEO-оптимізація',
        description: 'Автоматична оптимізація для пошукових систем та збільшення трафіку',
      },
      multilingual: {
        title: 'Багатомовність',
        description: 'Підтримка 11+ мов для глобального охоплення аудиторії',
      },
      export: {
        title: 'Експорт',
        description: 'Зручний експорт у різних форматах для інтеграції з вашими системами',
      },
      templates: {
        title: 'Шаблони',
        description: 'Професійні шаблони для різних індустрій та типів товарів',
      },
      analytics: {
        title: 'Аналітика',
        description: 'Детальна аналітика ефективності вашого контенту',
      },
    },
    pricing: {
      title: 'Прості тарифи',
      subtitle: 'Оберіть план що підходить вашому бізнесу',
      popular: 'Популярний',
      cta: 'Почати',
      free: {
        title: 'Безкоштовний',
        price: '₴0',
        description: 'Для початківців',
        feature1: '5 генерацій на місяць',
        feature2: 'Базові шаблони',
        feature3: 'Підтримка email',
      },
      pro: {
        title: 'Професійний',
        price: '₴690',
        description: 'Для малого бізнесу',
        feature1: '500 генерацій на місяць',
        feature2: 'Всі шаблони',
        feature3: 'Пріоритетна підтримка',
        feature4: 'Аналітика',
      },
      business: {
        title: 'Бізнес',
        price: '₴1790',
        description: 'Для великих команд',
        feature1: 'Необмежені генерації',
        feature2: 'Кастомні шаблони',
        feature3: 'API доступ',
        feature4: 'Персональний менеджер',
      },
    },
    footer: {
      product: 'Продукт',
      company: 'Компанія',
      support: 'Підтримка',
      legal: 'Правова інформація',
      description: 'AI-платформа для створення професійного контенту',
      rights: 'Всі права захищені.',
    },
    auth: {
      modal: {
        title: {
          login: 'Увійти в акаунт',
          signup: 'Створити акаунт',
        },
      },
      providers: {
        google: 'Продовжити з Google',
        linkedin: 'Продовжити з LinkedIn',
        facebook: 'Продовжити з Facebook',
      },
      switch: {
        login: 'Вже маєте акаунт?',
        signup: 'Немає акаунту?',
        'login.action': 'Увійти',
        'signup.action': 'Зареєструватися',
      },
    },
    photo: {
      drop: {
        title: 'Завантажте фото товару',
        subtitle: 'Перетягніть зображення або натисніть для вибору',
      },
      browse: 'Обрати файл',
      analyzing: 'Аналіз зображення...',
      detecting: 'Визначення характеристик...',
      audience: 'Аналіз цільової аудиторії...',
    },
    voice: {
      recording: 'Запис...',
      start: 'Натисніть для запису',
      transcription: 'Розшифровка:',
      languages: 'Підтримка 50+ мов',
    },
    url: {
      label: 'URL товару',
      placeholder: 'https://example.com/product',
      detected: 'платформу виявлено',
      analyzing: 'Аналіз URL...',
      analyze: 'Аналізувати URL',
    },
    toast: {
      success: {
        generated: 'Контент успішно згенеровано!',
        copied: 'Скопійовано в буфер обміну',
        exported: 'Файл успішно експортовано',
      },
      error: {
        generation: 'Помилка генерації контенту',
        copy: 'Помилка копіювання',
      },
    },
    contact: {
      title: 'Зв\'яжіться з нами',
      subtitle: 'Зв\'яжіться з нашою командою',
      success: 'Повідомлення надіслано успішно!',
      form: {
        title: 'Надішліть нам повідомлення',
        firstName: 'Ім\'я',
        lastName: 'Прізвище',
        email: 'Email адреса',
        subject: 'Тема',
        message: 'Ваше повідомлення',
        sending: 'Надсилання...',
        send: 'Надіслати повідомлення',
      },
      info: {
        email: {
          title: 'Email',
          description: 'Надішліть нам email в будь-який час',
        },
        phone: {
          title: 'Телефон',
          description: 'Зателефонуйте в робочий час',
        },
        address: {
          title: 'Офіс',
          description: 'Відвідайте наш головний офіс',
        },
      },
    },
    about: {
      title: 'Про CopyFlow',
      subtitle: 'Дізнайтеся більше про нашу AI-платформу для створення контенту',
      mission: {
        title: 'Наша місія',
        description: 'CopyFlow - це потужний AI-генератор описів товарів, який допомагає бізнесу створювати привабливий контент за секунди. Наша місія - зробити якісне створення маркетингового контенту доступним для всіх.',
      },
      features: {
        title: 'Що ми пропонуємо',
        ai: 'AI-генерація контенту',
        seo: 'SEO-оптимізовані описи',
        multilingual: 'Підтримка 11+ мов',
        templates: 'Професійні шаблони',
        analytics: 'Аналітика ефективності',
      },
      team: {
        title: 'Наша команда',
        description: 'Ми - команда пристрасних розробників, дизайнерів та спеціалістів з AI, які присвятили себе революції у створенні контенту для бізнесу будь-якого розміру.',
      },
    },
    terms: {
      title: 'Умови використання',
      subtitle: 'Умови та положення використання CopyFlow',
      acceptance: {
        title: 'Прийняття умов',
        description: 'Отримуючи доступ та використовуючи CopyFlow, ви приймаєте та погоджуєтеся дотримуватися умов та положень цієї угоди.',
      },
      service: {
        title: 'Використання сервісу',
        description: 'Ви можете використовувати наш сервіс тільки для законних цілей. Ви погоджуєтеся не використовувати сервіс у спосіб, який порушує будь-які застосовні закони або правила.',
      },
      content: {
        title: 'Контент',
        description: 'Ви зберігаєте право власності на будь-який контент, який ви надсилаєте до нашого сервісу. Надсилаючи контент, ви надаєте нам ліцензію на використання, модифікацію та розповсюдження його за необхідності для надання наших послуг.',
      },
      limitation: {
        title: 'Обмеження відповідальності',
        description: 'У жодному випадку CopyFlow не несе відповідальності за будь-які непрямі, випадкові, особливі, наслідкові або штрафні збитки.',
      },
      contact: {
        title: 'Контактна інформація',
        description: 'Якщо у вас є питання щодо цих Умов використання, будь ласка, зв\'яжіться з нами за адресою legal@copyflow.com',
      },
    },
    privacy: {
      title: 'Політика конфіденційності',
      subtitle: 'Як ми збираємо, використовуємо та захищаємо вашу інформацію',
      collection: {
        title: 'Інформація, яку ми збираємо',
        description: 'Ми збираємо інформацію, яку ви надаєте нам безпосередньо, наприклад, коли ви створюєте акаунт, використовуєте наші послуги або звертаєтеся до нас за підтримкою.',
      },
      usage: {
        title: 'Як ми використовуємо вашу інформацію',
        description: 'Ми використовуємо зібрану інформацію для надання, підтримки та покращення наших послуг, обробки транзакцій та спілкування з вами.',
      },
      protection: {
        title: 'Захист даних',
        description: 'Ми впроваджуємо відповідні заходи безпеки для захисту вашої особистої інформації від несанкціонованого доступу, зміни, розкриття або знищення.',
      },
      contact: {
        title: 'Зв\'яжіться з нами',
        description: 'Якщо у вас є питання щодо цієї Політики конфіденційності, будь ласка, зв\'яжіться з нами за адресою privacy@copyflow.com',
      },
    },
  },
  en: {
    nav: {
      dashboard: 'Dashboard',
      billing: 'Billing',
      settings: 'Settings',
      login: 'Login',
      logout: 'Logout',
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      signup: 'Sign Up',
    },
    billing: {
      title: 'Billing & Subscription',
      currentPlan: 'Current Plan',
      upgrade: 'Upgrade Plan',
      active: 'Active',
      freePlan: 'Free plan',
      nextBilling: 'Next billing:',
      paymentMethod: 'Payment Method',
      change: 'Change',
      billingHistory: 'Billing History',
      noHistory: 'No billing history yet',
      paid: 'Paid',
      pending: 'Pending',
    },
    dashboard: {
      header: {
        title: 'Content Generator',
      },
      sidebar: {
        generator: 'Generator',
        history: 'History',
        analytics: 'Analytics',
        trending: 'Trending',
        competitors: 'Competitors',
        settings: 'Settings',
      },
      usage: {
        plan: 'Free Plan',
        generations: 'generations',
      },
    },
    generator: {
      title: 'Content Generator',
      tabs: {
        manual: 'Manual',
        photo: 'Photo',
        voice: 'Voice',
        url: 'URL',
      },
    },
    form: {
      title: 'Content Generator',
      product: {
        name: 'Product Name',
        'name.placeholder': 'Enter product name...',
      },
      category: 'Category',
      'category.placeholder': 'Select category',
      'category.electronics': 'Electronics',
      'category.clothing': 'Clothing',
      'category.home': 'Home & Garden',
      'category.beauty': 'Beauty',
      'category.sports': 'Sports',
      'category.books': 'Books',
      'category.automotive': 'Automotive',
      'category.other': 'Other',
      style: 'Writing Style',
      'style.placeholder': 'Select style',
      'style.professional': 'Professional',
      'style.casual': 'Casual',
      'style.luxury': 'Luxury',
      'style.technical': 'Technical',
      'style.creative': 'Creative',
      language: 'Language',
      generate: 'Generate',
      generating: 'Generating...',
    },
    results: {
      title: 'Results',
      empty: 'Fill out the form and click "Generate" to create content',
      regenerate: 'Regenerate',
      export: 'Export',
      tabs: {
        content: 'Content',
        analysis: 'Analysis',
        variations: 'Variations',
      },
      product: {
        title: 'Product Title',
        description: 'Product Description',
      },
      seo: {
        title: 'SEO Title',
      },
      meta: {
        description: 'Meta Description',
      },
      cta: 'Call to Action',
      features: 'Features',
      keywords: 'Keywords',
      'analysis.empty': 'Analysis will be available after content generation',
      'variations.empty': 'Variations will be available after content generation',
    },
    hero: {
      title: 'AI Product Description Generator',
      subtitle: 'Create SEO-optimized descriptions in seconds',
      description: 'Powerful AI tool for creating compelling product descriptions, titles, and CTAs. Support for 11+ languages and professional templates.',
      cta: {
        primary: 'Try for Free',
        secondary: 'Watch Demo',
      },
      trusted: 'Trusted by 10,000+ companies',
    },
    features: {
      title: 'Powerful Features',
      subtitle: 'Everything you need to create professional content',
      ai: {
        title: 'AI Generation',
        description: 'Advanced artificial intelligence technology for creating unique content',
      },
      seo: {
        title: 'SEO Optimization',
        description: 'Automatic optimization for search engines and increased traffic',
      },
      multilingual: {
        title: 'Multilingual',
        description: 'Support for 11+ languages for global audience reach',
      },
      export: {
        title: 'Export',
        description: 'Convenient export in various formats for integration with your systems',
      },
      templates: {
        title: 'Templates',
        description: 'Professional templates for different industries and product types',
      },
      analytics: {
        title: 'Analytics',
        description: 'Detailed analytics of your content performance',
      },
    },
    pricing: {
      title: 'Simple Pricing',
      subtitle: 'Choose a plan that fits your business',
      popular: 'Popular',
      cta: 'Get Started',
      free: {
        title: 'Free',
        price: '$0',
        description: 'For beginners',
        feature1: '5 generations per month',
        feature2: 'Basic templates',
        feature3: 'Email support',
      },
      pro: {
        title: 'Professional',
        price: '$19',
        description: 'For small business',
        feature1: '500 generations per month',
        feature2: 'All templates',
        feature3: 'Priority support',
        feature4: 'Analytics',
      },
      business: {
        title: 'Business',
        price: '$49',
        description: 'For large teams',
        feature1: 'Unlimited generations',
        feature2: 'Custom templates',
        feature3: 'API access',
        feature4: 'Personal manager',
      },
    },
    footer: {
      product: 'Product',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
      description: 'AI platform for creating professional content',
      rights: 'All rights reserved.',
    },
    auth: {
      modal: {
        title: {
          login: 'Sign in to your account',
          signup: 'Create your account',
        },
      },
      providers: {
        google: 'Continue with Google',
        linkedin: 'Continue with LinkedIn',
        facebook: 'Continue with Facebook',
      },
      switch: {
        login: 'Already have an account?',
        signup: 'Don\'t have an account?',
        'login.action': 'Sign in',
        'signup.action': 'Sign up',
      },
    },
    photo: {
      drop: {
        title: 'Upload product photo',
        subtitle: 'Drag and drop image or click to select',
      },
      browse: 'Browse files',
      analyzing: 'Analyzing image...',
      detecting: 'Detecting features...',
      audience: 'Analyzing target audience...',
    },
    voice: {
      recording: 'Recording...',
      start: 'Click to record',
      transcription: 'Transcription:',
      languages: 'Support for 50+ languages',
    },
    url: {
      label: 'Product URL',
      placeholder: 'https://example.com/product',
      detected: 'platform detected',
      analyzing: 'Analyzing URL...',
      analyze: 'Analyze URL',
    },
    toast: {
      success: {
        generated: 'Content generated successfully!',
        copied: 'Copied to clipboard',
        exported: 'File exported successfully',
      },
      error: {
        generation: 'Content generation error',
        copy: 'Copy error',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      success: 'Message sent successfully!',
      form: {
        title: 'Send us a message',
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email address',
        subject: 'Subject',
        message: 'Your message',
        sending: 'Sending...',
        send: 'Send Message',
      },
      info: {
        email: {
          title: 'Email',
          description: 'Send us an email anytime',
        },
        phone: {
          title: 'Phone',
          description: 'Call us during business hours',
        },
        address: {
          title: 'Office',
          description: 'Visit our headquarters',
        },
      },
    },
    about: {
      title: 'About CopyFlow',
      subtitle: 'Learn more about our AI-powered content generation platform',
      mission: {
        title: 'Our Mission',
        description: 'CopyFlow is a powerful AI-powered product description generator that helps businesses create compelling content in seconds. Our mission is to make quality marketing content creation accessible to everyone.',
      },
      features: {
        title: 'What We Offer',
        ai: 'AI-powered content generation',
        seo: 'SEO-optimized descriptions',
        multilingual: 'Support for 11+ languages',
        templates: 'Professional templates',
        analytics: 'Performance analytics',
      },
      team: {
        title: 'Our Team',
        description: 'We are a team of passionate developers, designers, and AI specialists dedicated to revolutionizing content creation for businesses of all sizes.',
      },
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Terms and conditions for using CopyFlow',
      acceptance: {
        title: 'Acceptance of Terms',
        description: 'By accessing and using CopyFlow, you accept and agree to be bound by the terms and provision of this agreement.',
      },
      service: {
        title: 'Use of Service',
        description: 'You may use our service for lawful purposes only. You agree not to use the service in any way that violates any applicable laws or regulations.',
      },
      content: {
        title: 'Content',
        description: 'You retain ownership of any content you submit to our service. By submitting content, you grant us a license to use, modify, and distribute it as necessary to provide our services.',
      },
      limitation: {
        title: 'Limitation of Liability',
        description: 'In no event shall CopyFlow be liable for any indirect, incidental, special, consequential, or punitive damages.',
      },
      contact: {
        title: 'Contact Information',
        description: 'If you have any questions about these Terms of Service, please contact us at legal@copyflow.com',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How we collect, use, and protect your information',
      collection: {
        title: 'Information We Collect',
        description: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.',
      },
      usage: {
        title: 'How We Use Your Information',
        description: 'We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.',
      },
      protection: {
        title: 'Data Protection',
        description: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      },
      contact: {
        title: 'Contact Us',
        description: 'If you have any questions about this Privacy Policy, please contact us at privacy@copyflow.com',
      },
    },
  },
  de: {
    nav: {
      dashboard: 'Dashboard',
      billing: 'Abrechnung',
      settings: 'Einstellungen',
      login: 'Anmelden',
      logout: 'Abmelden',
      features: 'Funktionen',
      pricing: 'Preise',
      about: 'Über uns',
      contact: 'Kontakt',
      signup: 'Registrieren',
    },
    billing: {
      title: 'Abrechnung & Abonnement',
      currentPlan: 'Aktueller Plan',
      upgrade: 'Plan upgraden',
      active: 'Aktiv',
      freePlan: 'Kostenloser Plan',
      nextBilling: 'Nächste Abrechnung:',
      paymentMethod: 'Zahlungsmethode',
      change: 'Ändern',
      billingHistory: 'Abrechnungshistorie',
      noHistory: 'Noch keine Abrechnungshistorie',
      paid: 'Bezahlt',
      pending: 'Ausstehend',
    },
    dashboard: {
      header: {
        title: 'Content Generator',
      },
      sidebar: {
        generator: 'Generator',
        history: 'Verlauf',
        analytics: 'Analytik',
        trending: 'Trending',
        competitors: 'Konkurrenten',
        settings: 'Einstellungen',
      },
      usage: {
        plan: 'Kostenloser Plan',
        generations: 'Generierungen',
      },
    },
    generator: {
      title: 'Content Generator',
      tabs: {
        manual: 'Manuell',
        photo: 'Foto',
        voice: 'Sprache',
        url: 'URL',
      },
    },
    form: {
      title: 'Content Generator',
      product: {
        name: 'Produktname',
        'name.placeholder': 'Produktname eingeben...',
      },
      category: 'Kategorie',
      'category.placeholder': 'Kategorie auswählen',
      'category.electronics': 'Elektronik',
      'category.clothing': 'Kleidung',
      'category.home': 'Haus & Garten',
      'category.beauty': 'Schönheit',
      'category.sports': 'Sport',
      'category.books': 'Bücher',
      'category.automotive': 'Automobil',
      'category.other': 'Andere',
      style: 'Schreibstil',
      'style.placeholder': 'Stil auswählen',
      'style.professional': 'Professionell',
      'style.casual': 'Lässig',
      'style.luxury': 'Luxus',
      'style.technical': 'Technisch',
      'style.creative': 'Kreativ',
      language: 'Sprache',
      generate: 'Generieren',
      generating: 'Generiere...',
    },
    results: {
      title: 'Ergebnisse',
      empty: 'Füllen Sie das Formular aus und klicken Sie auf "Generieren"',
      regenerate: 'Neu generieren',
      export: 'Exportieren',
      tabs: {
        content: 'Inhalt',
        analysis: 'Analyse',
        variations: 'Variationen',
      },
      product: {
        title: 'Produkttitel',
        description: 'Produktbeschreibung',
      },
      seo: {
        title: 'SEO-Titel',
      },
      meta: {
        description: 'Meta-Beschreibung',
      },
      cta: 'Call-to-Action',
      features: 'Funktionen',
      keywords: 'Schlüsselwörter',
      'analysis.empty': 'Analyse verfügbar nach Content-Generierung',
      'variations.empty': 'Variationen verfügbar nach Content-Generierung',
    },
    hero: {
      title: 'KI-Produktbeschreibungs-Generator',
      subtitle: 'Erstellen Sie SEO-optimierte Beschreibungen in Sekunden',
      description: 'Leistungsstarkes KI-Tool zur Erstellung überzeugender Produktbeschreibungen, Titel und CTAs. Unterstützung für 11+ Sprachen und professionelle Vorlagen.',
      cta: {
        primary: 'Kostenlos testen',
        secondary: 'Demo ansehen',
      },
      trusted: 'Vertraut von 10.000+ Unternehmen',
    },
    features: {
      title: 'Leistungsstarke Funktionen',
      subtitle: 'Alles was Sie für professionellen Content brauchen',
      ai: {
        title: 'KI-Generierung',
        description: 'Fortschrittliche KI-Technologie für einzigartigen Content',
      },
      seo: {
        title: 'SEO-Optimierung',
        description: 'Automatische Optimierung für Suchmaschinen',
      },
      multilingual: {
        title: 'Mehrsprachig',
        description: 'Unterstützung für 11+ Sprachen für globale Reichweite',
      },
      export: {
        title: 'Export',
        description: 'Bequemer Export in verschiedenen Formaten',
      },
      templates: {
        title: 'Vorlagen',
        description: 'Professionelle Vorlagen für verschiedene Branchen',
      },
      analytics: {
        title: 'Analytik',
        description: 'Detaillierte Analyse Ihrer Content-Performance',
      },
    },
    pricing: {
      title: 'Einfache Preise',
      subtitle: 'Wählen Sie einen Plan für Ihr Unternehmen',
      popular: 'Beliebt',
      cta: 'Loslegen',
      free: {
        title: 'Kostenlos',
        price: '€0',
        description: 'Für Einsteiger',
        feature1: '5 Generierungen pro Monat',
        feature2: 'Basis-Vorlagen',
        feature3: 'E-Mail-Support',
      },
      pro: {
        title: 'Professional',
        price: '€19',
        description: 'Für kleine Unternehmen',
        feature1: '500 Generierungen pro Monat',
        feature2: 'Alle Vorlagen',
        feature3: 'Prioritäts-Support',
        feature4: 'Analytik',
      },
      business: {
        title: 'Business',
        price: '€49',
        description: 'Für große Teams',
        feature1: 'Unbegrenzte Generierungen',
        feature2: 'Benutzerdefinierte Vorlagen',
        feature3: 'API-Zugang',
        feature4: 'Persönlicher Manager',
      },
    },
    footer: {
      product: 'Produkt',
      company: 'Unternehmen',
      support: 'Support',
      legal: 'Rechtliches',
      description: 'KI-Plattform für professionellen Content',
      rights: 'Alle Rechte vorbehalten.',
    },
    auth: {
      modal: {
        title: {
          login: 'In Ihr Konto einloggen',
          signup: 'Konto erstellen',
        },
      },
      providers: {
        google: 'Mit Google fortfahren',
        linkedin: 'Mit LinkedIn fortfahren',
        facebook: 'Mit Facebook fortfahren',
      },
      switch: {
        login: 'Haben Sie bereits ein Konto?',
        signup: 'Haben Sie kein Konto?',
        'login.action': 'Anmelden',
        'signup.action': 'Registrieren',
      },
    },
    photo: {
      drop: {
        title: 'Produktfoto hochladen',
        subtitle: 'Bild ziehen und ablegen oder klicken zum Auswählen',
      },
      browse: 'Dateien durchsuchen',
      analyzing: 'Bild analysieren...',
      detecting: 'Eigenschaften erkennen...',
      audience: 'Zielgruppe analysieren...',
    },
    voice: {
      recording: 'Aufnahme...',
      start: 'Klicken zum Aufnehmen',
      transcription: 'Transkription:',
      languages: 'Unterstützung für 50+ Sprachen',
    },
    url: {
      label: 'Produkt-URL',
      placeholder: 'https://example.com/product',
      detected: 'Plattform erkannt',
      analyzing: 'URL analysieren...',
      analyze: 'URL analysieren',
    },
    toast: {
      success: {
        generated: 'Content erfolgreich generiert!',
        copied: 'In Zwischenablage kopiert',
        exported: 'Datei erfolgreich exportiert',
      },
      error: {
        generation: 'Content-Generierungsfehler',
        copy: 'Kopierfehler',
      },
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Nehmen Sie Kontakt mit unserem Team auf',
      success: 'Nachricht erfolgreich gesendet!',
      form: {
        title: 'Senden Sie uns eine Nachricht',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        subject: 'Betreff',
        message: 'Ihre Nachricht',
        sending: 'Senden...',
        send: 'Nachricht senden',
      },
      info: {
        email: {
          title: 'E-Mail',
          description: 'Senden Sie uns jederzeit eine E-Mail',
        },
        phone: {
          title: 'Telefon',
          description: 'Rufen Sie uns während der Geschäftszeiten an',
        },
        address: {
          title: 'Büro',
          description: 'Besuchen Sie unsere Zentrale',
        },
      },
    },
    about: {
      title: 'Über CopyFlow',
      subtitle: 'Erfahren Sie mehr über unsere KI-Content-Plattform',
      mission: {
        title: 'Unsere Mission',
        description: 'CopyFlow ist ein leistungsstarker KI-Produktbeschreibungs-Generator, der Unternehmen hilft, überzeugenden Content in Sekunden zu erstellen.',
      },
      features: {
        title: 'Was wir bieten',
        ai: 'KI-gestützte Content-Generierung',
        seo: 'SEO-optimierte Beschreibungen',
        multilingual: 'Unterstützung für 11+ Sprachen',
        templates: 'Professionelle Vorlagen',
        analytics: 'Performance-Analytik',
      },
      team: {
        title: 'Unser Team',
        description: 'Wir sind ein Team leidenschaftlicher Entwickler, Designer und KI-Spezialisten.',
      },
    },
    terms: {
      title: 'Nutzungsbedingungen',
      subtitle: 'Bedingungen für die Nutzung von CopyFlow',
      acceptance: {
        title: 'Annahme der Bedingungen',
        description: 'Durch den Zugriff auf CopyFlow akzeptieren Sie diese Vereinbarung.',
      },
      service: {
        title: 'Nutzung des Dienstes',
        description: 'Sie dürfen unseren Service nur für rechtmäßige Zwecke nutzen.',
      },
      content: {
        title: 'Inhalt',
        description: 'Sie behalten das Eigentum an allen Inhalten, die Sie einreichen.',
      },
      limitation: {
        title: 'Haftungsbeschränkung',
        description: 'CopyFlow haftet nicht für indirekte oder Folgeschäden.',
      },
      contact: {
        title: 'Kontaktinformationen',
        description: 'Bei Fragen kontaktieren Sie uns unter legal@copyflow.com',
      },
    },
    privacy: {
      title: 'Datenschutzrichtlinie',
      subtitle: 'Wie wir Ihre Informationen sammeln und schützen',
      collection: {
        title: 'Informationen, die wir sammeln',
        description: 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen.',
      },
      usage: {
        title: 'Wie wir Ihre Informationen verwenden',
        description: 'Wir verwenden die Informationen zur Bereitstellung unserer Dienste.',
      },
      protection: {
        title: 'Datenschutz',
        description: 'Wir implementieren angemessene Sicherheitsmaßnahmen.',
      },
      contact: {
        title: 'Kontaktieren Sie uns',
        description: 'Bei Fragen kontaktieren Sie uns unter privacy@copyflow.com',
      },
    },
  },
  es: {
    nav: {
      dashboard: 'Panel',
      billing: 'Facturación',
      settings: 'Configuración',
      login: 'Iniciar sesión',
      logout: 'Cerrar sesión',
      features: 'Características',
      pricing: 'Precios',
      about: 'Acerca de',
      contact: 'Contacto',
      signup: 'Registrarse',
    },
    billing: {
      title: 'Facturación y Suscripción',
      currentPlan: 'Plan Actual',
      upgrade: 'Actualizar Plan',
      active: 'Activo',
      freePlan: 'Plan gratuito',
      nextBilling: 'Próxima facturación:',
      paymentMethod: 'Método de Pago',
      change: 'Cambiar',
      billingHistory: 'Historial de Facturación',
      noHistory: 'Aún no hay historial de facturación',
      paid: 'Pagado',
      pending: 'Pendiente',
    },
    dashboard: {
      header: {
        title: 'Generador de Contenido',
      },
      sidebar: {
        generator: 'Generador',
        history: 'Historial',
        analytics: 'Analíticas',
        trending: 'Tendencias',
        competitors: 'Competidores',
        settings: 'Configuración',
      },
      usage: {
        plan: 'Plan Gratuito',
        generations: 'generaciones',
      },
    },
    generator: {
      title: 'Generador de Contenido',
      tabs: {
        manual: 'Manual',
        photo: 'Foto',
        voice: 'Voz',
        url: 'URL',
      },
    },
    form: {
      title: 'Generador de Contenido',
      product: {
        name: 'Nombre del Producto',
        'name.placeholder': 'Ingrese el nombre del producto...',
      },
      category: 'Categoría',
      'category.placeholder': 'Seleccionar categoría',
      'category.electronics': 'Electrónicos',
      'category.clothing': 'Ropa',
      'category.home': 'Hogar y Jardín',
      'category.beauty': 'Belleza',
      'category.sports': 'Deportes',
      'category.books': 'Libros',
      'category.automotive': 'Automotriz',
      'category.other': 'Otro',
      style: 'Estilo de Escritura',
      'style.placeholder': 'Seleccionar estilo',
      'style.professional': 'Profesional',
      'style.casual': 'Casual',
      'style.luxury': 'Lujo',
      'style.technical': 'Técnico',
      'style.creative': 'Creativo',
      language: 'Idioma',
      generate: 'Generar',
      generating: 'Generando...',
    },
    results: {
      title: 'Resultados',
      empty: 'Complete el formulario y haga clic en "Generar"',
      regenerate: 'Regenerar',
      export: 'Exportar',
      tabs: {
        content: 'Contenido',
        analysis: 'Análisis',
        variations: 'Variaciones',
      },
      product: {
        title: 'Título del Producto',
        description: 'Descripción del Producto',
      },
      seo: {
        title: 'Título SEO',
      },
      meta: {
        description: 'Meta Descripción',
      },
      cta: 'Llamada a la Acción',
      features: 'Características',
      keywords: 'Palabras Clave',
      'analysis.empty': 'El análisis estará disponible después de la generación',
      'variations.empty': 'Las variaciones estarán disponibles después de la generación',
    },
    hero: {
      title: 'Generador de Descripciones de Productos con IA',
      subtitle: 'Cree descripciones optimizadas para SEO en segundos',
      description: 'Herramienta de IA potente para crear descripciones de productos convincentes, títulos y CTAs. Soporte para 11+ idiomas y plantillas profesionales.',
      cta: {
        primary: 'Probar Gratis',
        secondary: 'Ver Demo',
      },
      trusted: 'Confiado por 10,000+ empresas',
    },
    features: {
      title: 'Características Potentes',
      subtitle: 'Todo lo que necesita para crear contenido profesional',
      ai: {
        title: 'Generación con IA',
        description: 'Tecnología avanzada de inteligencia artificial para contenido único',
      },
      seo: {
        title: 'Optimización SEO',
        description: 'Optimización automática para motores de búsqueda',
      },
      multilingual: {
        title: 'Multiidioma',
        description: 'Soporte para 11+ idiomas para alcance global',
      },
      export: {
        title: 'Exportar',
        description: 'Exportación conveniente en varios formatos',
      },
      templates: {
        title: 'Plantillas',
        description: 'Plantillas profesionales para diferentes industrias',
      },
      analytics: {
        title: 'Analíticas',
        description: 'Análisis detallado del rendimiento de su contenido',
      },
    },
    pricing: {
      title: 'Precios Simples',
      subtitle: 'Elija un plan que se adapte a su negocio',
      popular: 'Popular',
      cta: 'Comenzar',
      free: {
        title: 'Gratis',
        price: '$0',
        description: 'Para principiantes',
        feature1: '5 generaciones por mes',
        feature2: 'Plantillas básicas',
        feature3: 'Soporte por email',
      },
      pro: {
        title: 'Profesional',
        price: '$19',
        description: 'Para pequeñas empresas',
        feature1: '500 generaciones por mes',
        feature2: 'Todas las plantillas',
        feature3: 'Soporte prioritario',
        feature4: 'Analíticas',
      },
      business: {
        title: 'Empresarial',
        price: '$49',
        description: 'Para equipos grandes',
        feature1: 'Generaciones ilimitadas',
        feature2: 'Plantillas personalizadas',
        feature3: 'Acceso API',
        feature4: 'Gerente personal',
      },
    },
    footer: {
      product: 'Producto',
      company: 'Empresa',
      support: 'Soporte',
      legal: 'Legal',
      description: 'Plataforma de IA para crear contenido profesional',
      rights: 'Todos los derechos reservados.',
    },
    auth: {
      modal: {
        title: {
          login: 'Iniciar sesión en su cuenta',
          signup: 'Crear su cuenta',
        },
      },
      providers: {
        google: 'Continuar con Google',
        linkedin: 'Continuar con LinkedIn',
        facebook: 'Continuar con Facebook',
      },
      switch: {
        login: '¿Ya tiene una cuenta?',
        signup: '¿No tiene una cuenta?',
        'login.action': 'Iniciar sesión',
        'signup.action': 'Registrarse',
      },
    },
    photo: {
      drop: {
        title: 'Subir foto del producto',
        subtitle: 'Arrastre y suelte la imagen o haga clic para seleccionar',
      },
      browse: 'Explorar archivos',
      analyzing: 'Analizando imagen...',
      detecting: 'Detectando características...',
      audience: 'Analizando audiencia objetivo...',
    },
    voice: {
      recording: 'Grabando...',
      start: 'Haga clic para grabar',
      transcription: 'Transcripción:',
      languages: 'Soporte para 50+ idiomas',
    },
    url: {
      label: 'URL del Producto',
      placeholder: 'https://example.com/product',
      detected: 'plataforma detectada',
      analyzing: 'Analizando URL...',
      analyze: 'Analizar URL',
    },
    toast: {
      success: {
        generated: '¡Contenido generado exitosamente!',
        copied: 'Copiado al portapapeles',
        exported: 'Archivo exportado exitosamente',
      },
      error: {
        generation: 'Error en la generación de contenido',
        copy: 'Error al copiar',
      },
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Póngase en contacto con nuestro equipo',
      success: '¡Mensaje enviado exitosamente!',
      form: {
        title: 'Envíanos un mensaje',
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Dirección de email',
        subject: 'Asunto',
        message: 'Su mensaje',
        sending: 'Enviando...',
        send: 'Enviar Mensaje',
      },
      info: {
        email: {
          title: 'Email',
          description: 'Envíenos un email en cualquier momento',
        },
        phone: {
          title: 'Teléfono',
          description: 'Llámenos durante el horario comercial',
        },
        address: {
          title: 'Oficina',
          description: 'Visite nuestra sede central',
        },
      },
    },
    about: {
      title: 'Acerca de CopyFlow',
      subtitle: 'Conozca más sobre nuestra plataforma de generación de contenido con IA',
      mission: {
        title: 'Nuestra Misión',
        description: 'CopyFlow es un potente generador de descripciones de productos con IA que ayuda a las empresas a crear contenido convincente en segundos.',
      },
      features: {
        title: 'Lo que Ofrecemos',
        ai: 'Generación de contenido con IA',
        seo: 'Descripciones optimizadas para SEO',
        multilingual: 'Soporte para 11+ idiomas',
        templates: 'Plantillas profesionales',
        analytics: 'Analíticas de rendimiento',
      },
      team: {
        title: 'Nuestro Equipo',
        description: 'Somos un equipo de desarrolladores, diseñadores y especialistas en IA apasionados.',
      },
    },
    terms: {
      title: 'Términos de Servicio',
      subtitle: 'Términos y condiciones para usar CopyFlow',
      acceptance: {
        title: 'Aceptación de Términos',
        description: 'Al acceder y usar CopyFlow, acepta estar sujeto a estos términos.',
      },
      service: {
        title: 'Uso del Servicio',
        description: 'Puede usar nuestro servicio solo para propósitos legales.',
      },
      content: {
        title: 'Contenido',
        description: 'Conserva la propiedad de cualquier contenido que envíe.',
      },
      limitation: {
        title: 'Limitación de Responsabilidad',
        description: 'CopyFlow no será responsable de daños indirectos.',
      },
      contact: {
        title: 'Información de Contacto',
        description: 'Para preguntas, contáctenos en legal@copyflow.com',
      },
    },
    privacy: {
      title: 'Política de Privacidad',
      subtitle: 'Cómo recopilamos, usamos y protegemos su información',
      collection: {
        title: 'Información que Recopilamos',
        description: 'Recopilamos información que nos proporciona directamente.',
      },
      usage: {
        title: 'Cómo Usamos su Información',
        description: 'Usamos la información para proporcionar nuestros servicios.',
      },
      protection: {
        title: 'Protección de Datos',
        description: 'Implementamos medidas de seguridad apropiadas.',
      },
      contact: {
        title: 'Contáctanos',
        description: 'Para preguntas, contáctenos en privacy@copyflow.com',
      },
    },
  },
  fr: {
    nav: {
      dashboard: 'Tableau de bord',
      billing: 'Facturation',
      settings: 'Paramètres',
      login: 'Se connecter',
      logout: 'Se déconnecter',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      about: 'À propos',
      contact: 'Contact',
      signup: 'S\'inscrire',
    },
    billing: {
      title: 'Facturation et Abonnement',
      currentPlan: 'Plan Actuel',
      upgrade: 'Mettre à niveau',
      active: 'Actif',
      freePlan: 'Plan gratuit',
      nextBilling: 'Prochaine facturation:',
      paymentMethod: 'Méthode de Paiement',
      change: 'Modifier',
      billingHistory: 'Historique de Facturation',
      noHistory: 'Aucun historique de facturation',
      paid: 'Payé',
      pending: 'En attente',
    },
    dashboard: {
      header: {
        title: 'Générateur de Contenu',
      },
      sidebar: {
        generator: 'Générateur',
        history: 'Historique',
        analytics: 'Analytiques',
        trending: 'Tendances',
        competitors: 'Concurrents',
        settings: 'Paramètres',
      },
      usage: {
        plan: 'Plan Gratuit',
        generations: 'générations',
      },
    },
    generator: {
      title: 'Générateur de Contenu',
      tabs: {
        manual: 'Manuel',
        photo: 'Photo',
        voice: 'Voix',
        url: 'URL',
      },
    },
    form: {
      title: 'Générateur de Contenu',
      product: {
        name: 'Nom du Produit',
        'name.placeholder': 'Entrez le nom du produit...',
      },
      category: 'Catégorie',
      'category.placeholder': 'Sélectionner une catégorie',
      'category.electronics': 'Électronique',
      'category.clothing': 'Vêtements',
      'category.home': 'Maison et Jardin',
      'category.beauty': 'Beauté',
      'category.sports': 'Sports',
      'category.books': 'Livres',
      'category.automotive': 'Automobile',
      'category.other': 'Autre',
      style: 'Style d\'Écriture',
      'style.placeholder': 'Sélectionner un style',
      'style.professional': 'Professionnel',
      'style.casual': 'Décontracté',
      'style.luxury': 'Luxe',
      'style.technical': 'Technique',
      'style.creative': 'Créatif',
      language: 'Langue',
      generate: 'Générer',
      generating: 'Génération...',
    },
    results: {
      title: 'Résultats',
      empty: 'Remplissez le formulaire et cliquez sur "Générer"',
      regenerate: 'Régénérer',
      export: 'Exporter',
      tabs: {
        content: 'Contenu',
        analysis: 'Analyse',
        variations: 'Variations',
      },
      product: {
        title: 'Titre du Produit',
        description: 'Description du Produit',
      },
      seo: {
        title: 'Titre SEO',
      },
      meta: {
        description: 'Meta Description',
      },
      cta: 'Appel à l\'Action',
      features: 'Caractéristiques',
      keywords: 'Mots-clés',
      'analysis.empty': 'L\'analyse sera disponible après la génération',
      'variations.empty': 'Les variations seront disponibles après la génération',
    },
    hero: {
      title: 'Générateur de Descriptions de Produits IA',
      subtitle: 'Créez des descriptions optimisées SEO en secondes',
      description: 'Outil IA puissant pour créer des descriptions de produits convaincantes, titres et CTAs. Support pour 11+ langues et modèles professionnels.',
      cta: {
        primary: 'Essayer Gratuitement',
        secondary: 'Voir la Démo',
      },
      trusted: 'Fait confiance par 10 000+ entreprises',
    },
    features: {
      title: 'Fonctionnalités Puissantes',
      subtitle: 'Tout ce dont vous avez besoin pour créer du contenu professionnel',
      ai: {
        title: 'Génération IA',
        description: 'Technologie d\'intelligence artificielle avancée pour du contenu unique',
      },
      seo: {
        title: 'Optimisation SEO',
        description: 'Optimisation automatique pour les moteurs de recherche',
      },
      multilingual: {
        title: 'Multilingue',
        description: 'Support pour 11+ langues pour une portée mondiale',
      },
      export: {
        title: 'Export',
        description: 'Export pratique dans divers formats',
      },
      templates: {
        title: 'Modèles',
        description: 'Modèles professionnels pour différentes industries',
      },
      analytics: {
        title: 'Analytiques',
        description: 'Analyse détaillée de la performance de votre contenu',
      },
    },
    pricing: {
      title: 'Tarifs Simples',
      subtitle: 'Choisissez un plan qui convient à votre entreprise',
      popular: 'Populaire',
      cta: 'Commencer',
      free: {
        title: 'Gratuit',
        price: '0€',
        description: 'Pour les débutants',
        feature1: '5 générations par mois',
        feature2: 'Modèles de base',
        feature3: 'Support email',
      },
      pro: {
        title: 'Professionnel',
        price: '19€',
        description: 'Pour les petites entreprises',
        feature1: '500 générations par mois',
        feature2: 'Tous les modèles',
        feature3: 'Support prioritaire',
        feature4: 'Analytiques',
      },
      business: {
        title: 'Entreprise',
        price: '49€',
        description: 'Pour les grandes équipes',
        feature1: 'Générations illimitées',
        feature2: 'Modèles personnalisés',
        feature3: 'Accès API',
        feature4: 'Gestionnaire personnel',
      },
    },
    footer: {
      product: 'Produit',
      company: 'Entreprise',
      support: 'Support',
      legal: 'Légal',
      description: 'Plateforme IA pour créer du contenu professionnel',
      rights: 'Tous droits réservés.',
    },
    auth: {
      modal: {
        title: {
          login: 'Se connecter à votre compte',
          signup: 'Créer votre compte',
        },
      },
      providers: {
        google: 'Continuer avec Google',
        linkedin: 'Continuer avec LinkedIn',
        facebook: 'Continuer avec Facebook',
      },
      switch: {
        login: 'Vous avez déjà un compte?',
        signup: 'Vous n\'avez pas de compte?',
        'login.action': 'Se connecter',
        'signup.action': 'S\'inscrire',
      },
    },
    photo: {
      drop: {
        title: 'Télécharger une photo du produit',
        subtitle: 'Glissez-déposez l\'image ou cliquez pour sélectionner',
      },
      browse: 'Parcourir les fichiers',
      analyzing: 'Analyse de l\'image...',
      detecting: 'Détection des caractéristiques...',
      audience: 'Analyse de l\'audience cible...',
    },
    voice: {
      recording: 'Enregistrement...',
      start: 'Cliquez pour enregistrer',
      transcription: 'Transcription:',
      languages: 'Support pour 50+ langues',
    },
    url: {
      label: 'URL du Produit',
      placeholder: 'https://example.com/product',
      detected: 'plateforme détectée',
      analyzing: 'Analyse de l\'URL...',
      analyze: 'Analyser l\'URL',
    },
    toast: {
      success: {
        generated: 'Contenu généré avec succès!',
        copied: 'Copié dans le presse-papiers',
        exported: 'Fichier exporté avec succès',
      },
      error: {
        generation: 'Erreur de génération de contenu',
        copy: 'Erreur de copie',
      },
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Entrez en contact avec notre équipe',
      success: 'Message envoyé avec succès!',
      form: {
        title: 'Envoyez-nous un message',
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Adresse email',
        subject: 'Sujet',
        message: 'Votre message',
        sending: 'Envoi...',
        send: 'Envoyer le Message',
      },
      info: {
        email: {
          title: 'Email',
          description: 'Envoyez-nous un email à tout moment',
        },
        phone: {
          title: 'Téléphone',
          description: 'Appelez-nous pendant les heures d\'ouverture',
        },
        address: {
          title: 'Bureau',
          description: 'Visitez notre siège social',
        },
      },
    },
    about: {
      title: 'À propos de CopyFlow',
      subtitle: 'En savoir plus sur notre plateforme de génération de contenu IA',
      mission: {
        title: 'Notre Mission',
        description: 'CopyFlow est un générateur de descriptions de produits IA puissant qui aide les entreprises à créer du contenu convaincant en secondes.',
      },
      features: {
        title: 'Ce que nous offrons',
        ai: 'Génération de contenu IA',
        seo: 'Descriptions optimisées SEO',
        multilingual: 'Support pour 11+ langues',
        templates: 'Modèles professionnels',
        analytics: 'Analytiques de performance',
      },
      team: {
        title: 'Notre Équipe',
        description: 'Nous sommes une équipe de développeurs, designers et spécialistes IA passionnés.',
      },
    },
    terms: {
      title: 'Conditions d\'Utilisation',
      subtitle: 'Termes et conditions pour utiliser CopyFlow',
      acceptance: {
        title: 'Acceptation des Conditions',
        description: 'En accédant et utilisant CopyFlow, vous acceptez ces termes.',
      },
      service: {
        title: 'Utilisation du Service',
        description: 'Vous ne pouvez utiliser notre service qu\'à des fins légales.',
      },
      content: {
        title: 'Contenu',
        description: 'Vous conservez la propriété de tout contenu que vous soumettez.',
      },
      limitation: {
        title: 'Limitation de Responsabilité',
        description: 'CopyFlow ne sera pas responsable des dommages indirects.',
      },
      contact: {
        title: 'Informations de Contact',
        description: 'Pour des questions, contactez-nous à legal@copyflow.com',
      },
    },
    privacy: {
      title: 'Politique de Confidentialité',
      subtitle: 'Comment nous collectons, utilisons et protégeons vos informations',
      collection: {
        title: 'Informations que nous collectons',
        description: 'Nous collectons les informations que vous nous fournissez directement.',
      },
      usage: {
        title: 'Comment nous utilisons vos informations',
        description: 'Nous utilisons les informations pour fournir nos services.',
      },
      protection: {
        title: 'Protection des Données',
        description: 'Nous mettons en place des mesures de sécurité appropriées.',
      },
      contact: {
        title: 'Contactez-nous',
        description: 'Pour des questions, contactez-nous à privacy@copyflow.com',
      },
    },
  },
  it: {
    nav: {
      dashboard: 'Dashboard',
      billing: 'Fatturazione',
      settings: 'Impostazioni',
      login: 'Accedi',
      logout: 'Esci',
      features: 'Funzionalità',
      pricing: 'Prezzi',
      about: 'Chi siamo',
      contact: 'Contatti',
      signup: 'Registrati',
    },
    billing: {
      title: 'Fatturazione e Abbonamento',
      currentPlan: 'Piano Attuale',
      upgrade: 'Aggiorna Piano',
      active: 'Attivo',
      freePlan: 'Piano gratuito',
      nextBilling: 'Prossima fatturazione:',
      paymentMethod: 'Metodo di Pagamento',
      change: 'Cambia',
      billingHistory: 'Cronologia Fatturazione',
      noHistory: 'Nessuna cronologia di fatturazione',
      paid: 'Pagato',
      pending: 'In attesa',
    },
    dashboard: {
      header: {
        title: 'Generatore di Contenuti',
      },
      sidebar: {
        generator: 'Generatore',
        history: 'Cronologia',
        analytics: 'Analitiche',
        trending: 'Tendenze',
        competitors: 'Concorrenti',
        settings: 'Impostazioni',
      },
      usage: {
        plan: 'Piano Gratuito',
        generations: 'generazioni',
      },
    },
    generator: {
      title: 'Generatore di Contenuti',
      tabs: {
        manual: 'Manuale',
        photo: 'Foto',
        voice: 'Voce',
        url: 'URL',
      },
    },
    form: {
      title: 'Generatore di Contenuti',
      product: {
        name: 'Nome Prodotto',
        'name.placeholder': 'Inserisci il nome del prodotto...',
      },
      category: 'Categoria',
      'category.placeholder': 'Seleziona categoria',
      'category.electronics': 'Elettronica',
      'category.clothing': 'Abbigliamento',
      'category.home': 'Casa e Giardino',
      'category.beauty': 'Bellezza',
      'category.sports': 'Sport',
      'category.books': 'Libri',
      'category.automotive': 'Automotive',
      'category.other': 'Altro',
      style: 'Stile di Scrittura',
      'style.placeholder': 'Seleziona stile',
      'style.professional': 'Professionale',
      'style.casual': 'Casual',
      'style.luxury': 'Lusso',
      'style.technical': 'Tecnico',
      'style.creative': 'Creativo',
      language: 'Lingua',
      generate: 'Genera',
      generating: 'Generazione...',
    },
    results: {
      title: 'Risultati',
      empty: 'Compila il modulo e clicca "Genera"',
      regenerate: 'Rigenera',
      export: 'Esporta',
      tabs: {
        content: 'Contenuto',
        analysis: 'Analisi',
        variations: 'Variazioni',
      },
      product: {
        title: 'Titolo Prodotto',
        description: 'Descrizione Prodotto',
      },
      seo: {
        title: 'Titolo SEO',
      },
      meta: {
        description: 'Meta Descrizione',
      },
      cta: 'Call to Action',
      features: 'Caratteristiche',
      keywords: 'Parole Chiave',
      'analysis.empty': 'L\'analisi sarà disponibile dopo la generazione',
      'variations.empty': 'Le variazioni saranno disponibili dopo la generazione',
    },
    hero: {
      title: 'Generatore di Descrizioni Prodotti AI',
      subtitle: 'Crea descrizioni ottimizzate SEO in secondi',
      description: 'Potente strumento AI per creare descrizioni prodotti convincenti, titoli e CTA. Supporto per 11+ lingue e template professionali.',
      cta: {
        primary: 'Prova Gratis',
        secondary: 'Guarda Demo',
      },
      trusted: 'Scelto da 10.000+ aziende',
    },
    features: {
      title: 'Funzionalità Potenti',
      subtitle: 'Tutto ciò di cui hai bisogno per creare contenuti professionali',
      ai: {
        title: 'Generazione AI',
        description: 'Tecnologia avanzata di intelligenza artificiale per contenuti unici',
      },
      seo: {
        title: 'Ottimizzazione SEO',
        description: 'Ottimizzazione automatica per motori di ricerca',
      },
      multilingual: {
        title: 'Multilingue',
        description: 'Supporto per 11+ lingue per copertura globale',
      },
      export: {
        title: 'Esporta',
        description: 'Esportazione conveniente in vari formati',
      },
      templates: {
        title: 'Template',
        description: 'Template professionali per diverse industrie',
      },
      analytics: {
        title: 'Analitiche',
        description: 'Analisi dettagliata delle performance dei tuoi contenuti',
      },
    },
    pricing: {
      title: 'Prezzi Semplici',
      subtitle: 'Scegli un piano adatto al tuo business',
      popular: 'Popolare',
      cta: 'Inizia',
      free: {
        title: 'Gratuito',
        price: '€0',
        description: 'Per principianti',
        feature1: '5 generazioni al mese',
        feature2: 'Template base',
        feature3: 'Supporto email',
      },
      pro: {
        title: 'Professionale',
        price: '€19',
        description: 'Per piccole aziende',
        feature1: '500 generazioni al mese',
        feature2: 'Tutti i template',
        feature3: 'Supporto prioritario',
        feature4: 'Analitiche',
      },
      business: {
        title: 'Business',
        price: '€49',
        description: 'Per grandi team',
        feature1: 'Generazioni illimitate',
        feature2: 'Template personalizzati',
        feature3: 'Accesso API',
        feature4: 'Manager personale',
      },
    },
    footer: {
      product: 'Prodotto',
      company: 'Azienda',
      support: 'Supporto',
      legal: 'Legale',
      description: 'Piattaforma AI per creare contenuti professionali',
      rights: 'Tutti i diritti riservati.',
    },
    auth: {
      modal: {
        title: {
          login: 'Accedi al tuo account',
          signup: 'Crea il tuo account',
        },
      },
      providers: {
        google: 'Continua con Google',
        linkedin: 'Continua con LinkedIn',
        facebook: 'Continua con Facebook',
      },
      switch: {
        login: 'Hai già un account?',
        signup: 'Non hai un account?',
        'login.action': 'Accedi',
        'signup.action': 'Registrati',
      },
    },
    photo: {
      drop: {
        title: 'Carica foto del prodotto',
        subtitle: 'Trascina e rilascia l\'immagine o clicca per selezionare',
      },
      browse: 'Sfoglia file',
      analyzing: 'Analizzando immagine...',
      detecting: 'Rilevando caratteristiche...',
      audience: 'Analizzando target audience...',
    },
    voice: {
      recording: 'Registrazione...',
      start: 'Clicca per registrare',
      transcription: 'Trascrizione:',
      languages: 'Supporto per 50+ lingue',
    },
    url: {
      label: 'URL Prodotto',
      placeholder: 'https://example.com/product',
      detected: 'piattaforma rilevata',
      analyzing: 'Analizzando URL...',
      analyze: 'Analizza URL',
    },
    toast: {
      success: {
        generated: 'Contenuto generato con successo!',
        copied: 'Copiato negli appunti',
        exported: 'File esportato con successo',
      },
      error: {
        generation: 'Errore nella generazione del contenuto',
        copy: 'Errore nella copia',
      },
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Mettiti in contatto con il nostro team',
      success: 'Messaggio inviato con successo!',
      form: {
        title: 'Inviaci un messaggio',
        firstName: 'Nome',
        lastName: 'Cognome',
        email: 'Indirizzo email',
        subject: 'Oggetto',
        message: 'Il tuo messaggio',
        sending: 'Invio...',
        send: 'Invia Messaggio',
      },
      info: {
        email: {
          title: 'Email',
          description: 'Inviaci un\'email in qualsiasi momento',
        },
        phone: {
          title: 'Telefono',
          description: 'Chiamaci durante l\'orario lavorativo',
        },
        address: {
          title: 'Ufficio',
          description: 'Visita la nostra sede centrale',
        },
      },
    },
    about: {
      title: 'Chi è CopyFlow',
      subtitle: 'Scopri di più sulla nostra piattaforma di generazione contenuti AI',
      mission: {
        title: 'La Nostra Missione',
        description: 'CopyFlow è un potente generatore di descrizioni prodotti AI che aiuta le aziende a creare contenuti convincenti in secondi.',
      },
      features: {
        title: 'Cosa Offriamo',
        ai: 'Generazione contenuti AI',
        seo: 'Descrizioni ottimizzate SEO',
        multilingual: 'Supporto per 11+ lingue',
        templates: 'Template professionali',
        analytics: 'Analitiche delle performance',
      },
      team: {
        title: 'Il Nostro Team',
        description: 'Siamo un team di sviluppatori, designer e specialisti AI appassionati.',
      },
    },
    terms: {
      title: 'Termini di Servizio',
      subtitle: 'Termini e condizioni per usare CopyFlow',
      acceptance: {
        title: 'Accettazione dei Termini',
        description: 'Accedendo e usando CopyFlow, accetti di essere vincolato a questi termini.',
      },
      service: {
        title: 'Uso del Servizio',
        description: 'Puoi usare il nostro servizio solo per scopi legali.',
      },
      content: {
        title: 'Contenuto',
        description: 'Mantieni la proprietà di qualsiasi contenuto che invii.',
      },
      limitation: {
        title: 'Limitazione di Responsabilità',
        description: 'CopyFlow non sarà responsabile per danni indiretti.',
      },
      contact: {
        title: 'Informazioni di Contatto',
        description: 'Per domande, contattaci a legal@copyflow.com',
      },
    },
    privacy: {
      title: 'Politica sulla Privacy',
      subtitle: 'Come raccogliamo, usiamo e proteggiamo le tue informazioni',
      collection: {
        title: 'Informazioni che Raccogliamo',
        description: 'Raccogliamo informazioni che ci fornisci direttamente.',
      },
      usage: {
        title: 'Come Usiamo le Tue Informazioni',
        description: 'Usiamo le informazioni per fornire i nostri servizi.',
      },
      protection: {
        title: 'Protezione dei Dati',
        description: 'Implementiamo misure di sicurezza appropriate.',
      },
      contact: {
        title: 'Contattaci',
        description: 'Per domande, contattaci a privacy@copyflow.com',
      },
    },
  },
  pl: {
    nav: {
      dashboard: 'Panel',
      billing: 'Rozliczenia',
      settings: 'Ustawienia',
      login: 'Zaloguj',
      logout: 'Wyloguj',
      features: 'Funkcje',
      pricing: 'Cennik',
      about: 'O nas',
      contact: 'Kontakt',
      signup: 'Zarejestruj',
    },
    billing: {
      title: 'Rozliczenia i Subskrypcja',
      currentPlan: 'Aktualny Plan',
      upgrade: 'Ulepsz Plan',
      active: 'Aktywny',
      freePlan: 'Plan darmowy',
      nextBilling: 'Następne rozliczenie:',
      paymentMethod: 'Metoda Płatności',
      change: 'Zmień',
      billingHistory: 'Historia Rozliczeń',
      noHistory: 'Brak historii rozliczeń',
      paid: 'Opłacone',
      pending: 'Oczekujące',
    },
    dashboard: {
      header: {
        title: 'Generator Treści',
      },
      sidebar: {
        generator: 'Generator',
        history: 'Historia',
        analytics: 'Analityka',
        trending: 'Trendy',
        competitors: 'Konkurenci',
        settings: 'Ustawienia',
      },
      usage: {
        plan: 'Plan Darmowy',
        generations: 'generacji',
      },
    },
    generator: {
      title: 'Generator Treści',
      tabs: {
        manual: 'Ręczny',
        photo: 'Zdjęcie',
        voice: 'Głos',
        url: 'URL',
      },
    },
    form: {
      title: 'Generator Treści',
      product: {
        name: 'Nazwa Produktu',
        'name.placeholder': 'Wprowadź nazwę produktu...',
      },
      category: 'Kategoria',
      'category.placeholder': 'Wybierz kategorię',
      'category.electronics': 'Elektronika',
      'category.clothing': 'Odzież',
      'category.home': 'Dom i Ogród',
      'category.beauty': 'Uroda',
      'category.sports': 'Sport',
      'category.books': 'Książki',
      'category.automotive': 'Motoryzacja',
      'category.other': 'Inne',
      style: 'Styl Pisania',
      'style.placeholder': 'Wybierz styl',
      'style.professional': 'Profesjonalny',
      'style.casual': 'Swobodny',
      'style.luxury': 'Luksusowy',
      'style.technical': 'Techniczny',
      'style.creative': 'Kreatywny',
      language: 'Język',
      generate: 'Generuj',
      generating: 'Generowanie...',
    },
    results: {
      title: 'Wyniki',
      empty: 'Wypełnij formularz i kliknij "Generuj"',
      regenerate: 'Regeneruj',
      export: 'Eksportuj',
      tabs: {
        content: 'Treść',
        analysis: 'Analiza',
        variations: 'Warianty',
      },
      product: {
        title: 'Tytuł Produktu',
        description: 'Opis Produktu',
      },
      seo: {
        title: 'Tytuł SEO',
      },
      meta: {
        description: 'Meta Opis',
      },
      cta: 'Wezwanie do Działania',
      features: 'Cechy',
      keywords: 'Słowa Kluczowe',
      'analysis.empty': 'Analiza będzie dostępna po wygenerowaniu treści',
      'variations.empty': 'Warianty będą dostępne po wygenerowaniu treści',
    },
    hero: {
      title: 'Generator Opisów Produktów AI',
      subtitle: 'Twórz opisy zoptymalizowane pod SEO w sekundach',
      description: 'Potężne narzędzie AI do tworzenia przekonujących opisów produktów, tytułów i CTA. Wsparcie dla 11+ języków i profesjonalne szablony.',
      cta: {
        primary: 'Wypróbuj Za Darmo',
        secondary: 'Zobacz Demo',
      },
      trusted: 'Zaufało nam 10 000+ firm',
    },
    features: {
      title: 'Potężne Funkcje',
      subtitle: 'Wszystko czego potrzebujesz do tworzenia profesjonalnych treści',
      ai: {
        title: 'Generowanie AI',
        description: 'Zaawansowana technologia sztucznej inteligencji dla unikalnych treści',
      },
      seo: {
        title: 'Optymalizacja SEO',
        description: 'Automatyczna optymalizacja dla wyszukiwarek',
      },
      multilingual: {
        title: 'Wielojęzyczność',
        description: 'Wsparcie dla 11+ języków dla globalnego zasięgu',
      },
      export: {
        title: 'Eksport',
        description: 'Wygodny eksport w różnych formatach',
      },
      templates: {
        title: 'Szablony',
        description: 'Profesjonalne szablony dla różnych branż',
      },
      analytics: {
        title: 'Analityka',
        description: 'Szczegółowa analiza wydajności twoich treści',
      },
    },
    pricing: {
      title: 'Prosty Cennik',
      subtitle: 'Wybierz plan dopasowany do twojego biznesu',
      popular: 'Popularny',
      cta: 'Rozpocznij',
      free: {
        title: 'Darmowy',
        price: '0 zł',
        description: 'Dla początkujących',
        feature1: '5 generacji miesięcznie',
        feature2: 'Podstawowe szablony',
        feature3: 'Wsparcie email',
      },
      pro: {
        title: 'Profesjonalny',
        price: '79 zł',
        description: 'Dla małych firm',
        feature1: '500 generacji miesięcznie',
        feature2: 'Wszystkie szablony',
        feature3: 'Priorytetowe wsparcie',
        feature4: 'Analityka',
      },
      business: {
        title: 'Biznesowy',
        price: '199 zł',
        description: 'Dla dużych zespołów',
        feature1: 'Nieograniczone generacje',
        feature2: 'Niestandardowe szablony',
        feature3: 'Dostęp do API',
        feature4: 'Osobisty menedżer',
      },
    },
    footer: {
      product: 'Produkt',
      company: 'Firma',
      support: 'Wsparcie',
      legal: 'Prawne',
      description: 'Platforma AI do tworzenia profesjonalnych treści',
      rights: 'Wszystkie prawa zastrzeżone.',
    },
    auth: {
      modal: {
        title: {
          login: 'Zaloguj się do konta',
          signup: 'Utwórz konto',
        },
      },
      providers: {
        google: 'Kontynuuj z Google',
        linkedin: 'Kontynuuj z LinkedIn',
        facebook: 'Kontynuuj z Facebook',
      },
      switch: {
        login: 'Masz już konto?',
        signup: 'Nie masz konta?',
        'login.action': 'Zaloguj',
        'signup.action': 'Zarejestruj',
      },
    },
    photo: {
      drop: {
        title: 'Prześlij zdjęcie produktu',
        subtitle: 'Przeciągnij i upuść obraz lub kliknij aby wybrać',
      },
      browse: 'Przeglądaj pliki',
      analyzing: 'Analizowanie obrazu...',
      detecting: 'Wykrywanie cech...',
      audience: 'Analizowanie grupy docelowej...',
    },
    voice: {
      recording: 'Nagrywanie...',
      start: 'Kliknij aby nagrać',
      transcription: 'Transkrypcja:',
      languages: 'Wsparcie dla 50+ języków',
    },
    url: {
      label: 'URL Produktu',
      placeholder: 'https://example.com/product',
      detected: 'wykryto platformę',
      analyzing: 'Analizowanie URL...',
      analyze: 'Analizuj URL',
    },
    toast: {
      success: {
        generated: 'Treść wygenerowana pomyślnie!',
        copied: 'Skopiowano do schowka',
        exported: 'Plik wyeksportowany pomyślnie',
      },
      error: {
        generation: 'Błąd generowania treści',
        copy: 'Błąd kopiowania',
      },
    },
    contact: {
      title: 'Skontaktuj się z nami',
      subtitle: 'Skontaktuj się z naszym zespołem',
      success: 'Wiadomość wysłana pomyślnie!',
      form: {
        title: 'Wyślij nam wiadomość',
        firstName: 'Imię',
        lastName: 'Nazwisko',
        email: 'Adres email',
        subject: 'Temat',
        message: 'Twoja wiadomość',
        sending: 'Wysyłanie...',
        send: 'Wyślij Wiadomość',
      },
      info: {
        email: {
          title: 'Email',
          description: 'Wyślij nam email w dowolnym momencie',
        },
        phone: {
          title: 'Telefon',
          description: 'Zadzwoń w godzinach pracy',
        },
        address: {
          title: 'Biuro',
          description: 'Odwiedź naszą siedzibę',
        },
      },
    },
    about: {
      title: 'O CopyFlow',
      subtitle: 'Dowiedz się więcej o naszej platformie generowania treści AI',
      mission: {
        title: 'Nasza Misja',
        description: 'CopyFlow to potężny generator opisów produktów AI, który pomaga firmom tworzyć przekonujące treści w sekundach.',
      },
      features: {
        title: 'Co Oferujemy',
        ai: 'Generowanie treści AI',
        seo: 'Opisy zoptymalizowane pod SEO',
        multilingual: 'Wsparcie dla 11+ języków',
        templates: 'Profesjonalne szablony',
        analytics: 'Analityka wydajności',
      },
      team: {
        title: 'Nasz Zespół',
        description: 'Jesteśmy zespołem pasjonatów - programistów, designerów i specjalistów AI.',
      },
    },
    terms: {
      title: 'Warunki Usługi',
      subtitle: 'Warunki korzystania z CopyFlow',
      acceptance: {
        title: 'Akceptacja Warunków',
        description: 'Korzystając z CopyFlow, akceptujesz te warunki.',
      },
      service: {
        title: 'Korzystanie z Usługi',
        description: 'Możesz korzystać z naszej usługi tylko w celach zgodnych z prawem.',
      },
      content: {
        title: 'Treść',
        description: 'Zachowujesz własność wszelkich treści, które przesyłasz.',
      },
      limitation: {
        title: 'Ograniczenie Odpowiedzialności',
        description: 'CopyFlow nie ponosi odpowiedzialności za szkody pośrednie.',
      },
      contact: {
        title: 'Informacje Kontaktowe',
        description: 'W przypadku pytań skontaktuj się z nami pod legal@copyflow.com',
      },
    },
    privacy: {
      title: 'Polityka Prywatności',
      subtitle: 'Jak zbieramy, używamy i chronimy twoje informacje',
      collection: {
        title: 'Informacje które Zbieramy',
        description: 'Zbieramy informacje, które nam bezpośrednio przekazujesz.',
      },
      usage: {
        title: 'Jak Używamy Twoich Informacji',
        description: 'Używamy informacji do świadczenia naszych usług.',
      },
      protection: {
        title: 'Ochrona Danych',
        description: 'Wdrażamy odpowiednie środki bezpieczeństwa.',
      },
      contact: {
        title: 'Skontaktuj się z nami',
        description: 'W przypadku pytań skontaktuj się z nami pod privacy@copyflow.com',
      },
    },
  },
  pt: {
    nav: {
      dashboard: 'Painel',
      billing: 'Faturação',
      settings: 'Configurações',
      login: 'Entrar',
      logout: 'Sair',
      features: 'Funcionalidades',
      pricing: 'Preços',
      about: 'Sobre',
      contact: 'Contacto',
      signup: 'Registar',
    },
    billing: {
      title: 'Faturação e Subscrição',
      currentPlan: 'Plano Atual',
      upgrade: 'Atualizar Plano',
      active: 'Ativo',
      freePlan: 'Plano gratuito',
      nextBilling: 'Próxima faturação:',
      paymentMethod: 'Método de Pagamento',
      change: 'Alterar',
      billingHistory: 'Histórico de Faturação',
      noHistory: 'Ainda sem histórico de faturação',
      paid: 'Pago',
      pending: 'Pendente',
    },
    dashboard: {
      header: {
        title: 'Gerador de Conteúdo',
      },
      sidebar: {
        generator: 'Gerador',
        history: 'Histórico',
        analytics: 'Analíticas',
        trending: 'Tendências',
        competitors: 'Concorrentes',
        settings: 'Configurações',
      },
      usage: {
        plan: 'Plano Gratuito',
        generations: 'gerações',
      },
    },
    generator: {
      title: 'Gerador de Conteúdo',
      tabs: {
        manual: 'Manual',
        photo: 'Foto',
        voice: 'Voz',
        url: 'URL',
      },
    },
    form: {
      title: 'Gerador de Conteúdo',
      product: {
        name: 'Nome do Produto',
        'name.placeholder': 'Introduza o nome do produto...',
      },
      category: 'Categoria',
      'category.placeholder': 'Selecionar categoria',
      'category.electronics': 'Eletrónica',
      'category.clothing': 'Roupa',
      'category.home': 'Casa e Jardim',
      'category.beauty': 'Beleza',
      'category.sports': 'Desporto',
      'category.books': 'Livros',
      'category.automotive': 'Automóvel',
      'category.other': 'Outro',
      style: 'Estilo de Escrita',
      'style.placeholder': 'Selecionar estilo',
      'style.professional': 'Profissional',
      'style.casual': 'Casual',
      'style.luxury': 'Luxo',
      'style.technical': 'Técnico',
      'style.creative': 'Criativo',
      language: 'Idioma',
      generate: 'Gerar',
      generating: 'A gerar...',
    },
    results: {
      title: 'Resultados',
      empty: 'Preencha o formulário e clique em "Gerar"',
      regenerate: 'Regenerar',
      export: 'Exportar',
      tabs: {
        content: 'Conteúdo',
        analysis: 'Análise',
        variations: 'Variações',
      },
      product: {
        title: 'Título do Produto',
        description: 'Descrição do Produto',
      },
      seo: {
        title: 'Título SEO',
      },
      meta: {
        description: 'Meta Descrição',
      },
      cta: 'Chamada para Ação',
      features: 'Características',
      keywords: 'Palavras-chave',
      'analysis.empty': 'A análise estará disponível após a geração',
      'variations.empty': 'As variações estarão disponíveis após a geração',
    },
    hero: {
      title: 'Gerador de Descrições de Produtos IA',
      subtitle: 'Crie descrições otimizadas para SEO em segundos',
      description: 'Ferramenta IA poderosa para criar descrições de produtos convincentes, títulos e CTAs. Suporte para 11+ idiomas e modelos profissionais.',
      cta: {
        primary: 'Experimentar Grátis',
        secondary: 'Ver Demo',
      },
      trusted: 'Confiado por 10.000+ empresas',
    },
    features: {
      title: 'Funcionalidades Poderosas',
      subtitle: 'Tudo o que precisa para criar conteúdo profissional',
      ai: {
        title: 'Geração IA',
        description: 'Tecnologia avançada de inteligência artificial para conteúdo único',
      },
      seo: {
        title: 'Otimização SEO',
        description: 'Otimização automática para motores de busca',
      },
      multilingual: {
        title: 'Multilingue',
        description: 'Suporte para 11+ idiomas para alcance global',
      },
      export: {
        title: 'Exportar',
        description: 'Exportação conveniente em vários formatos',
      },
      templates: {
        title: 'Modelos',
        description: 'Modelos profissionais para diferentes indústrias',
      },
      analytics: {
        title: 'Analíticas',
        description: 'Análise detalhada do desempenho do seu conteúdo',
      },
    },
    pricing: {
      title: 'Preços Simples',
      subtitle: 'Escolha um plano adequado ao seu negócio',
      popular: 'Popular',
      cta: 'Começar',
      free: {
        title: 'Gratuito',
        price: '€0',
        description: 'Para iniciantes',
        feature1: '5 gerações por mês',
        feature2: 'Modelos básicos',
        feature3: 'Suporte por email',
      },
      pro: {
        title: 'Profissional',
        price: '€19',
        description: 'Para pequenas empresas',
        feature1: '500 gerações por mês',
        feature2: 'Todos os modelos',
        feature3: 'Suporte prioritário',
        feature4: 'Analíticas',
      },
      business: {
        title: 'Empresarial',
        price: '€49',
        description: 'Para grandes equipas',
        feature1: 'Gerações ilimitadas',
        feature2: 'Modelos personalizados',
        feature3: 'Acesso API',
        feature4: 'Gestor pessoal',
      },
    },
    footer: {
      product: 'Produto',
      company: 'Empresa',
      support: 'Suporte',
      legal: 'Legal',
      description: 'Plataforma IA para criar conteúdo profissional',
      rights: 'Todos os direitos reservados.',
    },
    auth: {
      modal: {
        title: {
          login: 'Entrar na sua conta',
          signup: 'Criar a sua conta',
        },
      },
      providers: {
        google: 'Continuar com Google',
        linkedin: 'Continuar com LinkedIn',
        facebook: 'Continuar com Facebook',
      },
      switch: {
        login: 'Já tem uma conta?',
        signup: 'Não tem uma conta?',
        'login.action': 'Entrar',
        'signup.action': 'Registar',
      },
    },
    photo: {
      drop: {
        title: 'Carregar foto do produto',
        subtitle: 'Arraste e largue a imagem ou clique para selecionar',
      },
      browse: 'Procurar ficheiros',
      analyzing: 'A analisar imagem...',
      detecting: 'A detetar características...',
      audience: 'A analisar público-alvo...',
    },
    voice: {
      recording: 'A gravar...',
      start: 'Clique para gravar',
      transcription: 'Transcrição:',
      languages: 'Suporte para 50+ idiomas',
    },
    url: {
      label: 'URL do Produto',
      placeholder: 'https://example.com/product',
      detected: 'plataforma detetada',
      analyzing: 'A analisar URL...',
      analyze: 'Analisar URL',
    },
    toast: {
      success: {
        generated: 'Conteúdo gerado com sucesso!',
        copied: 'Copiado para a área de transferência',
        exported: 'Ficheiro exportado com sucesso',
      },
      error: {
        generation: 'Erro na geração de conteúdo',
        copy: 'Erro ao copiar',
      },
    },
    contact: {
      title: 'Contacte-nos',
      subtitle: 'Entre em contacto com a nossa equipa',
      success: 'Mensagem enviada com sucesso!',
      form: {
        title: 'Envie-nos uma mensagem',
        firstName: 'Nome próprio',
        lastName: 'Apelido',
        email: 'Endereço de email',
        subject: 'Assunto',
        message: 'A sua mensagem',
        sending: 'A enviar...',
        send: 'Enviar Mensagem',
      },
      info: {
        email: {
          title: 'Email',
          description: 'Envie-nos um email a qualquer momento',
        },
        phone: {
          title: 'Telefone',
          description: 'Ligue-nos durante o horário comercial',
        },
        address: {
          title: 'Escritório',
          description: 'Visite a nossa sede',
        },
      },
    },
    about: {
      title: 'Sobre o CopyFlow',
      subtitle: 'Saiba mais sobre a nossa plataforma de geração de conteúdo IA',
      mission: {
        title: 'A Nossa Missão',
        description: 'CopyFlow é um poderoso gerador de descrições de produtos IA que ajuda empresas a criar conteúdo convincente em segundos.',
      },
      features: {
        title: 'O que Oferecemos',
        ai: 'Geração de conteúdo IA',
        seo: 'Descrições otimizadas para SEO',
        multilingual: 'Suporte para 11+ idiomas',
        templates: 'Modelos profissionais',
        analytics: 'Analíticas de desempenho',
      },
      team: {
        title: 'A Nossa Equipa',
        description: 'Somos uma equipa de programadores, designers e especialistas em IA apaixonados.',
      },
    },
    terms: {
      title: 'Termos de Serviço',
      subtitle: 'Termos e condições para usar o CopyFlow',
      acceptance: {
        title: 'Aceitação dos Termos',
        description: 'Ao aceder e usar o CopyFlow, aceita estar vinculado a estes termos.',
      },
      service: {
        title: 'Uso do Serviço',
        description: 'Pode usar o nosso serviço apenas para fins legais.',
      },
      content: {
        title: 'Conteúdo',
        description: 'Mantém a propriedade de qualquer conteúdo que submeta.',
      },
      limitation: {
        title: 'Limitação de Responsabilidade',
        description: 'CopyFlow não será responsável por danos indiretos.',
      },
      contact: {
        title: 'Informações de Contacto',
        description: 'Para questões, contacte-nos em legal@copyflow.com',
      },
    },
    privacy: {
      title: 'Política de Privacidade',
      subtitle: 'Como recolhemos, usamos e protegemos as suas informações',
      collection: {
        title: 'Informações que Recolhemos',
        description: 'Recolhemos informações que nos fornece diretamente.',
      },
      usage: {
        title: 'Como Usamos as Suas Informações',
        description: 'Usamos as informações para fornecer os nossos serviços.',
      },
      protection: {
        title: 'Proteção de Dados',
        description: 'Implementamos medidas de segurança apropriadas.',
      },
      contact: {
        title: 'Contacte-nos',
        description: 'Para questões, contacte-nos em privacy@copyflow.com',
      },
    },
  },
  zh: {
    nav: {
      dashboard: '仪表板',
      billing: '账单',
      settings: '设置',
      login: '登录',
      logout: '退出',
      features: '功能',
      pricing: '价格',
      about: '关于',
      contact: '联系',
      signup: '注册',
    },
    billing: {
      title: '账单和订阅',
      currentPlan: '当前计划',
      upgrade: '升级计划',
      active: '活跃',
      freePlan: '免费计划',
      nextBilling: '下次账单：',
      paymentMethod: '付款方式',
      change: '更改',
      billingHistory: '账单历史',
      noHistory: '暂无账单历史',
      paid: '已付款',
      pending: '待处理',
    },
    dashboard: {
      header: {
        title: '内容生成器',
      },
      sidebar: {
        generator: '生成器',
        history: '历史',
        analytics: '分析',
        trending: '趋势',
        competitors: '竞争对手',
        settings: '设置',
      },
      usage: {
        plan: '免费计划',
        generations: '次生成',
      },
    },
    generator: {
      title: '内容生成器',
      tabs: {
        manual: '手动',
        photo: '照片',
        voice: '语音',
        url: '网址',
      },
    },
    form: {
      title: '内容生成器',
      product: {
        name: '产品名称',
        'name.placeholder': '输入产品名称...',
      },
      category: '类别',
      'category.placeholder': '选择类别',
      'category.electronics': '电子产品',
      'category.clothing': '服装',
      'category.home': '家居园艺',
      'category.beauty': '美容',
      'category.sports': '运动',
      'category.books': '图书',
      'category.automotive': '汽车',
      'category.other': '其他',
      style: '写作风格',
      'style.placeholder': '选择风格',
      'style.professional': '专业',
      'style.casual': '休闲',
      'style.luxury': '奢华',
      'style.technical': '技术',
      'style.creative': '创意',
      language: '语言',
      generate: '生成',
      generating: '生成中...',
    },
    results: {
      title: '结果',
      empty: '填写表单并点击"生成"',
      regenerate: '重新生成',
      export: '导出',
      tabs: {
        content: '内容',
        analysis: '分析',
        variations: '变体',
      },
      product: {
        title: '产品标题',
        description: '产品描述',
      },
      seo: {
        title: 'SEO标题',
      },
      meta: {
        description: '元描述',
      },
      cta: '行动号召',
      features: '特性',
      keywords: '关键词',
      'analysis.empty': '生成内容后将提供分析',
      'variations.empty': '生成内容后将提供变体',
    },
    hero: {
      title: 'AI产品描述生成器',
      subtitle: '几秒钟内创建SEO优化的描述',
      description: '强大的AI工具，用于创建引人注目的产品描述、标题和CTA。支持11+种语言和专业模板。',
      cta: {
        primary: '免费试用',
        secondary: '观看演示',
      },
      trusted: '受到10,000+公司信赖',
    },
    features: {
      title: '强大功能',
      subtitle: '创建专业内容所需的一切',
      ai: {
        title: 'AI生成',
        description: '先进的人工智能技术创建独特内容',
      },
      seo: {
        title: 'SEO优化',
        description: '自动优化搜索引擎',
      },
      multilingual: {
        title: '多语言',
        description: '支持11+种语言的全球覆盖',
      },
      export: {
        title: '导出',
        description: '多种格式的便捷导出',
      },
      templates: {
        title: '模板',
        description: '不同行业的专业模板',
      },
      analytics: {
        title: '分析',
        description: '内容性能的详细分析',
      },
    },
    pricing: {
      title: '简单定价',
      subtitle: '选择适合您业务的计划',
      popular: '热门',
      cta: '开始',
      free: {
        title: '免费',
        price: '¥0',
        description: '适合初学者',
        feature1: '每月5次生成',
        feature2: '基础模板',
        feature3: '邮件支持',
      },
      pro: {
        title: '专业版',
        price: '¥128',
        description: '适合小企业',
        feature1: '每月500次生成',
        feature2: '所有模板',
        feature3: '优先支持',
        feature4: '分析功能',
      },
      business: {
        title: '企业版',
        price: '¥328',
        description: '适合大团队',
        feature1: '无限生成',
        feature2: '自定义模板',
        feature3: 'API访问',
        feature4: '专属经理',
      },
    },
    footer: {
      product: '产品',
      company: '公司',
      support: '支持',
      legal: '法律',
      description: '创建专业内容的AI平台',
      rights: '版权所有。',
    },
    auth: {
      modal: {
        title: {
          login: '登录您的账户',
          signup: '创建您的账户',
        },
      },
      providers: {
        google: '使用Google继续',
        linkedin: '使用LinkedIn继续',
        facebook: '使用Facebook继续',
      },
      switch: {
        login: '已有账户？',
        signup: '没有账户？',
        'login.action': '登录',
        'signup.action': '注册',
      },
    },
    photo: {
      drop: {
        title: '上传产品照片',
        subtitle: '拖放图片或点击选择',
      },
      browse: '浏览文件',
      analyzing: '分析图片中...',
      detecting: '检测特征中...',
      audience: '分析目标受众中...',
    },
    voice: {
      recording: '录音中...',
      start: '点击录音',
      transcription: '转录：',
      languages: '支持50+种语言',
    },
    url: {
      label: '产品网址',
      placeholder: 'https://example.com/product',
      detected: '检测到平台',
      analyzing: '分析网址中...',
      analyze: '分析网址',
    },
    toast: {
      success: {
        generated: '内容生成成功！',
        copied: '已复制到剪贴板',
        exported: '文件导出成功',
      },
      error: {
        generation: '内容生成错误',
        copy: '复制错误',
      },
    },
    contact: {
      title: '联系我们',
      subtitle: '与我们的团队取得联系',
      success: '消息发送成功！',
      form: {
        title: '给我们发消息',
        firstName: '名',
        lastName: '姓',
        email: '邮箱地址',
        subject: '主题',
        message: '您的消息',
        sending: '发送中...',
        send: '发送消息',
      },
      info: {
        email: {
          title: '邮箱',
          description: '随时给我们发邮件',
        },
        phone: {
          title: '电话',
          description: '工作时间内致电',
        },
        address: {
          title: '办公室',
          description: '访问我们的总部',
        },
      },
    },
    about: {
      title: '关于CopyFlow',
      subtitle: '了解更多关于我们的AI内容生成平台',
      mission: {
        title: '我们的使命',
        description: 'CopyFlow是一个强大的AI产品描述生成器，帮助企业在几秒钟内创建引人注目的内容。',
      },
      features: {
        title: '我们提供什么',
        ai: 'AI驱动的内容生成',
        seo: 'SEO优化的描述',
        multilingual: '支持11+种语言',
        templates: '专业模板',
        analytics: '性能分析',
      },
      team: {
        title: '我们的团队',
        description: '我们是一支由充满激情的开发者、设计师和AI专家组成的团队。',
      },
    },
    terms: {
      title: '服务条款',
      subtitle: '使用CopyFlow的条款和条件',
      acceptance: {
        title: '接受条款',
        description: '通过访问和使用CopyFlow，您接受并同意受这些条款约束。',
      },
      service: {
        title: '服务使用',
        description: '您只能将我们的服务用于合法目的。',
      },
      content: {
        title: '内容',
        description: '您保留对提交的任何内容的所有权。',
      },
      limitation: {
        title: '责任限制',
        description: 'CopyFlow不对间接损害承担责任。',
      },
      contact: {
        title: '联系信息',
        description: '如有问题，请联系legal@copyflow.com',
      },
    },
    privacy: {
      title: '隐私政策',
      subtitle: '我们如何收集、使用和保护您的信息',
      collection: {
        title: '我们收集的信息',
        description: '我们收集您直接提供给我们的信息。',
      },
      usage: {
        title: '我们如何使用您的信息',
        description: '我们使用信息来提供我们的服务。',
      },
      protection: {
        title: '数据保护',
        description: '我们实施适当的安全措施。',
      },
      contact: {
        title: '联系我们',
        description: '如有问题，请联系privacy@copyflow.com',
      },
    },
  },
  ja: {
    nav: {
      dashboard: 'ダッシュボード',
      billing: '請求',
      settings: '設定',
      login: 'ログイン',
      logout: 'ログアウト',
      features: '機能',
      pricing: '料金',
      about: '概要',
      contact: 'お問い合わせ',
      signup: '登録',
    },
    billing: {
      title: '請求とサブスクリプション',
      currentPlan: '現在のプラン',
      upgrade: 'プランをアップグレード',
      active: 'アクティブ',
      freePlan: '無料プラン',
      nextBilling: '次回請求：',
      paymentMethod: '支払い方法',
      change: '変更',
      billingHistory: '請求履歴',
      noHistory: '請求履歴がありません',
      paid: '支払い済み',
      pending: '保留中',
    },
    dashboard: {
      header: {
        title: 'コンテンツジェネレーター',
      },
      sidebar: {
        generator: 'ジェネレーター',
        history: '履歴',
        analytics: '分析',
        trending: 'トレンド',
        competitors: '競合他社',
        settings: '設定',
      },
      usage: {
        plan: '無料プラン',
        generations: '回生成',
      },
    },
    generator: {
      title: 'コンテンツジェネレーター',
      tabs: {
        manual: '手動',
        photo: '写真',
        voice: '音声',
        url: 'URL',
      },
    },
    form: {
      title: 'コンテンツジェネレーター',
      product: {
        name: '商品名',
        'name.placeholder': '商品名を入力...',
      },
      category: 'カテゴリー',
      'category.placeholder': 'カテゴリーを選択',
      'category.electronics': '電子機器',
      'category.clothing': '衣類',
      'category.home': 'ホーム＆ガーデン',
      'category.beauty': '美容',
      'category.sports': 'スポーツ',
      'category.books': '本',
      'category.automotive': '自動車',
      'category.other': 'その他',
      style: '文体',
      'style.placeholder': 'スタイルを選択',
      'style.professional': 'プロフェッショナル',
      'style.casual': 'カジュアル',
      'style.luxury': 'ラグジュアリー',
      'style.technical': 'テクニカル',
      'style.creative': 'クリエイティブ',
      language: '言語',
      generate: '生成',
      generating: '生成中...',
    },
    results: {
      title: '結果',
      empty: 'フォームに入力して「生成」をクリック',
      regenerate: '再生成',
      export: 'エクスポート',
      tabs: {
        content: 'コンテンツ',
        analysis: '分析',
        variations: 'バリエーション',
      },
      product: {
        title: '商品タイトル',
        description: '商品説明',
      },
      seo: {
        title: 'SEOタイトル',
      },
      meta: {
        description: 'メタ説明',
      },
      cta: 'コールトゥアクション',
      features: '特徴',
      keywords: 'キーワード',
      'analysis.empty': '生成後に分析が利用可能になります',
      'variations.empty': '生成後にバリエーションが利用可能になります',
    },
    hero: {
      title: 'AI商品説明ジェネレーター',
      subtitle: 'SEO最適化された説明を数秒で作成',
      description: '魅力的な商品説明、タイトル、CTAを作成する強力なAIツール。11以上の言語とプロフェッショナルテンプレートをサポート。',
      cta: {
        primary: '無料で試す',
        secondary: 'デモを見る',
      },
      trusted: '10,000以上の企業に信頼されています',
    },
    features: {
      title: '強力な機能',
      subtitle: 'プロフェッショナルなコンテンツ作成に必要なすべて',
      ai: {
        title: 'AI生成',
        description: 'ユニークなコンテンツのための高度な人工知能技術',
      },
      seo: {
        title: 'SEO最適化',
        description: '検索エンジンの自動最適化',
      },
      multilingual: {
        title: '多言語',
        description: 'グローバルリーチのための11以上の言語サポート',
      },
      export: {
        title: 'エクスポート',
        description: '様々な形式での便利なエクスポート',
      },
      templates: {
        title: 'テンプレート',
        description: '異なる業界向けのプロフェッショナルテンプレート',
      },
      analytics: {
        title: '分析',
        description: 'コンテンツパフォーマンスの詳細分析',
      },
    },
    pricing: {
      title: 'シンプルな料金',
      subtitle: 'あなたのビジネスに合ったプランを選択',
      popular: '人気',
      cta: '開始',
      free: {
        title: '無料',
        price: '¥0',
        description: '初心者向け',
        feature1: '月5回生成',
        feature2: '基本テンプレート',
        feature3: 'メールサポート',
      },
      pro: {
        title: 'プロフェッショナル',
        price: '¥2,000',
        description: '小規模企業向け',
        feature1: '月500回生成',
        feature2: '全テンプレート',
        feature3: '優先サポート',
        feature4: '分析機能',
      },
      business: {
        title: 'ビジネス',
        price: '¥5,000',
        description: '大規模チーム向け',
        feature1: '無制限生成',
        feature2: 'カスタムテンプレート',
        feature3: 'APIアクセス',
        feature4: '専任マネージャー',
      },
    },
    footer: {
      product: '製品',
      company: '会社',
      support: 'サポート',
      legal: '法的事項',
      description: 'プロフェッショナルコンテンツ作成のためのAIプラットフォーム',
      rights: '全著作権所有。',
    },
    auth: {
      modal: {
        title: {
          login: 'アカウントにサインイン',
          signup: 'アカウントを作成',
        },
      },
      providers: {
        google: 'Googleで続行',
        linkedin: 'LinkedInで続行',
        facebook: 'Facebookで続行',
      },
      switch: {
        login: 'すでにアカウントをお持ちですか？',
        signup: 'アカウントをお持ちでないですか？',
        'login.action': 'サインイン',
        'signup.action': 'サインアップ',
      },
    },
    photo: {
      drop: {
        title: '商品写真をアップロード',
        subtitle: '画像をドラッグ＆ドロップまたはクリックして選択',
      },
      browse: 'ファイルを参照',
      analyzing: '画像を分析中...',
      detecting: '特徴を検出中...',
      audience: 'ターゲットオーディエンスを分析中...',
    },
    voice: {
      recording: '録音中...',
      start: 'クリックして録音',
      transcription: '転写：',
      languages: '50以上の言語をサポート',
    },
    url: {
      label: '商品URL',
      placeholder: 'https://example.com/product',
      detected: 'プラットフォームを検出',
      analyzing: 'URLを分析中...',
      analyze: 'URLを分析',
    },
    toast: {
      success: {
        generated: 'コンテンツが正常に生成されました！',
        copied: 'クリップボードにコピーしました',
        exported: 'ファイルが正常にエクスポートされました',
      },
      error: {
        generation: 'コンテンツ生成エラー',
        copy: 'コピーエラー',
      },
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: '私たちのチームにご連絡ください',
      success: 'メッセージが正常に送信されました！',
      form: {
        title: 'メッセージを送信',
        firstName: '名',
        lastName: '姓',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        sending: '送信中...',
        send: 'メッセージを送信',
      },
      info: {
        email: {
          title: 'メール',
          description: 'いつでもメールをお送りください',
        },
        phone: {
          title: '電話',
          description: '営業時間内にお電話ください',
        },
        address: {
          title: 'オフィス',
          description: '本社をご訪問ください',
        },
      },
    },
    about: {
      title: 'CopyFlowについて',
      subtitle: 'AIコンテンツ生成プラットフォームについて詳しく学ぶ',
      mission: {
        title: '私たちの使命',
        description: 'CopyFlowは、企業が数秒で魅力的なコンテンツを作成するのを支援する強力なAI商品説明ジェネレーターです。',
      },
      features: {
        title: '私たちが提供するもの',
        ai: 'AI駆動のコンテンツ生成',
        seo: 'SEO最適化された説明',
        multilingual: '11以上の言語サポート',
        templates: 'プロフェッショナルテンプレート',
        analytics: 'パフォーマンス分析',
      },
      team: {
        title: '私たちのチーム',
        description: '私たちは情熱的な開発者、デザイナー、AI専門家のチームです。',
      },
    },
    terms: {
      title: '利用規約',
      subtitle: 'CopyFlow使用の利用規約',
      acceptance: {
        title: '規約の受諾',
        description: 'CopyFlowにアクセスして使用することで、これらの規約に拘束されることに同意します。',
      },
      service: {
        title: 'サービスの使用',
        description: '合法的な目的でのみサービスを使用できます。',
      },
      content: {
        title: 'コンテンツ',
        description: '提出したコンテンツの所有権を保持します。',
      },
      limitation: {
        title: '責任の制限',
        description: 'CopyFlowは間接的な損害について責任を負いません。',
      },
      contact: {
        title: '連絡先情報',
        description: 'ご質問はlegal@copyflow.comまでお問い合わせください',
      },
    },
    privacy: {
      title: 'プライバシーポリシー',
      subtitle: '情報の収集、使用、保護方法',
      collection: {
        title: '収集する情報',
        description: '直接提供していただいた情報を収集します。',
      },
      usage: {
        title: '情報の使用方法',
        description: 'サービス提供のために情報を使用します。',
      },
      protection: {
        title: 'データ保護',
        description: '適切なセキュリティ対策を実装しています。',
      },
      contact: {
        title: 'お問い合わせ',
        description: 'ご質問はprivacy@copyflow.comまでお問い合わせください',
      },
    },
  },
  ar: {
    nav: {
      dashboard: 'لوحة التحكم',
      billing: 'الفواتير',
      settings: 'الإعدادات',
      login: 'تسجيل الدخول',
      logout: 'تسجيل الخروج',
      features: 'الميزات',
      pricing: 'الأسعار',
      about: 'حول',
      contact: 'اتصل بنا',
      signup: 'إنشاء حساب',
    },
    billing: {
      title: 'الفواتير والاشتراك',
      currentPlan: 'الخطة الحالية',
      upgrade: 'ترقية الخطة',
      active: 'نشط',
      freePlan: 'خطة مجانية',
      nextBilling: 'الفاتورة التالية:',
      paymentMethod: 'طريقة الدفع',
      change: 'تغيير',
      billingHistory: 'تاريخ الفواتير',
      noHistory: 'لا يوجد تاريخ فواتير بعد',
      paid: 'مدفوع',
      pending: 'في الانتظار',
    },
    dashboard: {
      header: {
        title: 'مولد المحتوى',
      },
      sidebar: {
        generator: 'المولد',
        history: 'التاريخ',
        analytics: 'التحليلات',
        trending: 'الرائج',
        competitors: 'المنافسون',
        settings: 'الإعدادات',
      },
      usage: {
        plan: 'خطة مجانية',
        generations: 'مرات التوليد',
      },
    },
    generator: {
      title: 'مولد المحتوى',
      tabs: {
        manual: 'يدوي',
        photo: 'صورة',
        voice: 'صوت',
        url: 'رابط',
      },
    },
    form: {
      title: 'مولد المحتوى',
      product: {
        name: 'اسم المنتج',
        'name.placeholder': 'أدخل اسم المنتج...',
      },
      category: 'الفئة',
      'category.placeholder': 'اختر الفئة',
      'category.electronics': 'إلكترونيات',
      'category.clothing': 'ملابس',
      'category.home': 'المنزل والحديقة',
      'category.beauty': 'الجمال',
      'category.sports': 'رياضة',
      'category.books': 'كتب',
      'category.automotive': 'السيارات',
      'category.other': 'أخرى',
      style: 'أسلوب الكتابة',
      'style.placeholder': 'اختر الأسلوب',
      'style.professional': 'مهني',
      'style.casual': 'عادي',
      'style.luxury': 'فاخر',
      'style.technical': 'تقني',
      'style.creative': 'إبداعي',
      language: 'اللغة',
      generate: 'توليد',
      generating: 'جاري التوليد...',
    },
    results: {
      title: 'النتائج',
      empty: 'املأ النموذج واضغط على "توليد"',
      regenerate: 'إعادة التوليد',
      export: 'تصدير',
      tabs: {
        content: 'المحتوى',
        analysis: 'التحليل',
        variations: 'التنويعات',
      },
      product: {
        title: 'عنوان المنتج',
        description: 'وصف المنتج',
      },
      seo: {
        title: 'عنوان SEO',
      },
      meta: {
        description: 'الوصف التعريفي',
      },
      cta: 'دعوة للعمل',
      features: 'الميزات',
      keywords: 'الكلمات المفتاحية',
      'analysis.empty': 'سيكون التحليل متاحاً بعد توليد المحتوى',
      'variations.empty': 'ستكون التنويعات متاحة بعد توليد المحتوى',
    },
    hero: {
      title: 'مولد أوصاف المنتجات بالذكاء الاصطناعي',
      subtitle: 'أنشئ أوصافاً محسنة لمحركات البحث في ثوانٍ',
      description: 'أداة ذكاء اصطناعي قوية لإنشاء أوصاف منتجات مقنعة وعناوين ودعوات للعمل. دعم لأكثر من 11 لغة وقوالب احترافية.',
      cta: {
        primary: 'جرب مجاناً',
        secondary: 'شاهد العرض التوضيحي',
      },
      trusted: 'موثوق من قبل أكثر من 10,000 شركة',
    },
    features: {
      title: 'ميزات قوية',
      subtitle: 'كل ما تحتاجه لإنشاء محتوى احترافي',
      ai: {
        title: 'توليد بالذكاء الاصطناعي',
        description: 'تقنية ذكاء اصطناعي متقدمة لإنشاء محتوى فريد',
      },
      seo: {
        title: 'تحسين محركات البحث',
        description: 'تحسين تلقائي لمحركات البحث',
      },
      multilingual: {
        title: 'متعدد اللغات',
        description: 'دعم لأكثر من 11 لغة للوصول العالمي',
      },
      export: {
        title: 'تصدير',
        description: 'تصدير مريح بتنسيقات مختلفة',
      },
      templates: {
        title: 'قوالب',
        description: 'قوالب احترافية لصناعات مختلفة',
      },
      analytics: {
        title: 'التحليلات',
        description: 'تحليل مفصل لأداء محتواك',
      },
    },
    pricing: {
      title: 'أسعار بسيطة',
      subtitle: 'اختر خطة تناسب عملك',
      popular: 'شائع',
      cta: 'ابدأ',
      free: {
        title: 'مجاني',
        price: '$0',
        description: 'للمبتدئين',
        feature1: '5 مرات توليد شهرياً',
        feature2: 'قوالب أساسية',
        feature3: 'دعم بالبريد الإلكتروني',
      },
      pro: {
        title: 'احترافي',
        price: '$19',
        description: 'للشركات الصغيرة',
        feature1: '500 مرة توليد شهرياً',
        feature2: 'جميع القوالب',
        feature3: 'دعم أولوية',
        feature4: 'التحليلات',
      },
      business: {
        title: 'الأعمال',
        price: '$49',
        description: 'للفرق الكبيرة',
        feature1: 'توليد غير محدود',
        feature2: 'قوالب مخصصة',
        feature3: 'وصول API',
        feature4: 'مدير شخصي',
      },
    },
    footer: {
      product: 'المنتج',
      company: 'الشركة',
      support: 'الدعم',
      legal: 'قانوني',
      description: 'منصة ذكاء اصطناعي لإنشاء محتوى احترافي',
      rights: 'جميع الحقوق محفوظة.',
    },
    auth: {
      modal: {
        title: {
          login: 'تسجيل الدخول إلى حسابك',
          signup: 'إنشاء حسابك',
        },
      },
      providers: {
        google: 'المتابعة مع Google',
        linkedin: 'المتابعة مع LinkedIn',
        facebook: 'المتابعة مع Facebook',
      },
      switch: {
        login: 'لديك حساب بالفعل؟',
        signup: 'ليس لديك حساب؟',
        'login.action': 'تسجيل الدخول',
        'signup.action': 'إنشاء حساب',
      },
    },
    photo: {
      drop: {
        title: 'رفع صورة المنتج',
        subtitle: 'اسحب وأفلت الصورة أو انقر للاختيار',
      },
      browse: 'تصفح الملفات',
      analyzing: 'تحليل الصورة...',
      detecting: 'اكتشاف الخصائص...',
      audience: 'تحليل الجمهور المستهدف...',
    },
    voice: {
      recording: 'جاري التسجيل...',
      start: 'انقر للتسجيل',
      transcription: 'النسخ:',
      languages: 'دعم لأكثر من 50 لغة',
    },
    url: {
      label: 'رابط المنتج',
      placeholder: 'https://example.com/product',
      detected: 'تم اكتشاف المنصة',
      analyzing: 'تحليل الرابط...',
      analyze: 'تحليل الرابط',
    },
    toast: {
      success: {
        generated: 'تم توليد المحتوى بنجاح!',
        copied: 'تم النسخ إلى الحافظة',
        exported: 'تم تصدير الملف بنجاح',
      },
      error: {
        generation: 'خطأ في توليد المحتوى',
        copy: 'خطأ في النسخ',
      },
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع فريقنا',
      success: 'تم إرسال الرسالة بنجاح!',
      form: {
        title: 'أرسل لنا رسالة',
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'عنوان البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'رسالتك',
        sending: 'جاري الإرسال...',
        send: 'إرسال الرسالة',
      },
      info: {
        email: {
          title: 'البريد الإلكتروني',
          description: 'أرسل لنا بريداً إلكترونياً في أي وقت',
        },
        phone: {
          title: 'الهاتف',
          description: 'اتصل بنا خلال ساعات العمل',
        },
        address: {
          title: 'المكتب',
          description: 'زر مقرنا الرئيسي',
        },
      },
    },
    about: {
      title: 'حول CopyFlow',
      subtitle: 'تعرف أكثر على منصة توليد المحتوى بالذكاء الاصطناعي',
      mission: {
        title: 'مهمتنا',
        description: 'CopyFlow هو مولد أوصاف منتجات قوي بالذكاء الاصطناعي يساعد الشركات على إنشاء محتوى مقنع في ثوانٍ.',
      },
      features: {
        title: 'ما نقدمه',
        ai: 'توليد محتوى بالذكاء الاصطناعي',
        seo: 'أوصاف محسنة لمحركات البحث',
        multilingual: 'دعم لأكثر من 11 لغة',
        templates: 'قوالب احترافية',
        analytics: 'تحليلات الأداء',
      },
      team: {
        title: 'فريقنا',
        description: 'نحن فريق من المطورين والمصممين ومتخصصي الذكاء الاصطناعي المتحمسين.',
      },
    },
    terms: {
      title: 'شروط الخدمة',
      subtitle: 'الشروط والأحكام لاستخدام CopyFlow',
      acceptance: {
        title: 'قبول الشروط',
        description: 'بالوصول واستخدام CopyFlow، فإنك تقبل وتوافق على الالتزام بهذه الشروط.',
      },
      service: {
        title: 'استخدام الخدمة',
        description: 'يمكنك استخدام خدمتنا للأغراض القانونية فقط.',
      },
      content: {
        title: 'المحتوى',
        description: 'تحتفظ بملكية أي محتوى تقدمه.',
      },
      limitation: {
        title: 'تحديد المسؤولية',
        description: 'لن تكون CopyFlow مسؤولة عن الأضرار غير المباشرة.',
      },
      contact: {
        title: 'معلومات الاتصال',
        description: 'للأسئلة، اتصل بنا على legal@copyflow.com',
      },
    },
    privacy: {
      title: 'سياسة الخصوصية',
      subtitle: 'كيف نجمع ونستخدم ونحمي معلوماتك',
      collection: {
        title: 'المعلومات التي نجمعها',
        description: 'نجمع المعلومات التي تقدمها لنا مباشرة.',
      },
      usage: {
        title: 'كيف نستخدم معلوماتك',
        description: 'نستخدم المعلومات لتقديم خدماتنا.',
      },
      protection: {
        title: 'حماية البيانات',
        description: 'نطبق تدابير أمنية مناسبة.',
      },
      contact: {
        title: 'اتصل بنا',
        description: 'للأسئلة، اتصل بنا على privacy@copyflow.com',
      },
    },
  },
};

// Current language state
let currentLanguage: LanguageCode = 'uk';

// Translation function
export function t(language: LanguageCode, key: string): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if key not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if not found in fallback
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Get current language
export function getCurrentLanguage(): LanguageCode {
  return currentLanguage;
}

// Set language
export function setLanguage(language: LanguageCode): void {
  currentLanguage = language;
  if (typeof window !== 'undefined') {
    localStorage.setItem('copyflow-language', language);
    
    // Set RTL for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language;
    }
  }
}

// Initialize language from localStorage
export function initializeLanguage(): void {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('copyflow-language') as LanguageCode;
    if (saved && saved in translations) {
      setLanguage(saved);
    }
  }
}

// Auto-initialize
if (typeof window !== 'undefined') {
  initializeLanguage();
}

export type LanguageCode = 'uk' | 'en' | 'de' | 'es' | 'fr' | 'it' | 'pl' | 'pt' | 'zh' | 'ja' | 'ar';

export interface Language {
  nav: {
    dashboard: string;
    billing: string;
    settings: string;
    login: string;
    logout: string;
    signup: string;
    features: string;
    pricing: string;
    about: string;
    contact: string;
  };
  billing: {
    title: string;
    currentPlan: string;
    upgrade: string;
    paymentMethod: string;
    billingHistory: string;
    nextBilling: string;
    active: string;
    paid: string;
    pending: string;
    change: string;
    noHistory: string;
    freePlan: string;
  };
  common: {
    save: string;
    cancel: string;
    loading: string;
    error: string;
    success: string;
    confirm: string;
    delete: string;
    edit: string;
    view: string;
    download: string;
    upload: string;
    search: string;
    filter: string;
    sort: string;
    export: string;
    import: string;
    refresh: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    open: string;
    yes: string;
    no: string;
  };
  dashboard: {
    title: string;
    welcome: string;
    overview: string;
    analytics: string;
    recent: string;
    usage: string;
    plan: string;
    generations: string;
  };
  form: {
    title: string;
    product: {
      name: string;
      placeholder: string;
    };
    category: string;
    style: string;
    generate: string;
    generating: string;
    placeholder: string;
  };
  results: {
    title: string;
    empty: string;
    regenerate: string;
    export: string;
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
      action: string;
    };
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
}

export const translations: Record<LanguageCode, Language> = {
  uk: {
    nav: {
      dashboard: "Панель керування",
      billing: "Білінг",
      settings: "Налаштування",
      login: "Увійти",
      logout: "Вийти",
      signup: "Реєстрація",
      features: "Можливості",
      pricing: "Тарифи",
      about: "Про нас",
      contact: "Контакти"
    },
    billing: {
      title: "Білінг та підписка",
      currentPlan: "Поточний тариф",
      upgrade: "Оновити тариф",
      paymentMethod: "Спосіб оплати",
      billingHistory: "Історія платежів",
      nextBilling: "Наступний платіж:",
      active: "Активний",
      paid: "Сплачено",
      pending: "Очікує",
      change: "Змінити",
      noHistory: "Історія платежів порожня",
      freePlan: "Безкоштовний план"
    },
    common: {
      save: "Зберегти",
      cancel: "Скасувати",
      loading: "Завантаження...",
      error: "Помилка",
      success: "Успішно",
      confirm: "Підтвердити",
      delete: "Видалити",
      edit: "Редагувати",
      view: "Переглянути",
      download: "Завантажити",
      upload: "Завантажити",
      search: "Пошук",
      filter: "Фільтр",
      sort: "Сортувати",
      export: "Експорт",
      import: "Імпорт",
      refresh: "Оновити",
      back: "Назад",
      next: "Далі",
      previous: "Попередній",
      close: "Закрити",
      open: "Відкрити",
      yes: "Так",
      no: "Ні"
    },
    dashboard: {
      title: "Панель керування",
      welcome: "Ласкаво просимо",
      overview: "Огляд",
      analytics: "Аналітика",
      recent: "Останні",
      usage: "Використання",
      plan: "План",
      generations: "генерацій"
    },
    form: {
      title: "Генератор контенту",
      product: {
        name: "Назва товару",
        placeholder: "Введіть назву товару..."
      },
      category: "Категорія",
      style: "Стиль написання",
      generate: "Згенерувати",
      generating: "Генерація...",
      placeholder: "Оберіть..."
    },
    results: {
      title: "Результати",
      empty: "Згенеруйте контент, щоб побачити результати",
      regenerate: "Перегенерувати",
      export: "Експорт",
      product: {
        title: "Заголовок товару",
        description: "Опис товару"
      },
      seo: {
        title: "SEO заголовок"
      },
      meta: {
        description: "Мета опис"
      },
      cta: "Заклик до дії"
    },
    hero: {
      title: "AI Генератор Описів Товарів",
      subtitle: "Створюйте переконливі описи товарів за секунди",
      description: "Використовуйте силу штучного інтелекту для створення SEO-оптимізованих описів товарів, заголовків та закликів до дії, які конвертують відвідувачів у покупців.",
      cta: {
        primary: "Почати безкоштовно",
        secondary: "Дивитися демо"
      },
      trusted: "Довіряють понад 10,000+ компаній"
    },
    features: {
      title: "Потужні можливості для вашого бізнесу",
      subtitle: "Все, що потрібно для створення переконливого контенту",
      ai: {
        title: "AI-генерація",
        description: "Передові алгоритми штучного інтелекту для створення унікального контенту"
      },
      seo: {
        title: "SEO-оптимізація",
        description: "Автоматична оптимізація для пошукових систем"
      },
      multilingual: {
        title: "Багатомовність",
        description: "Підтримка 11+ мов для глобального охоплення"
      },
      export: {
        title: "Експорт",
        description: "Експорт у різних форматах"
      },
      templates: {
        title: "Шаблони",
        description: "Готові професійні шаблони"
      },
      analytics: {
        title: "Аналітика",
        description: "Детальна аналітика ефективності"
      }
    },
    pricing: {
      title: "Прості та прозорі тарифи",
      subtitle: "Оберіть план, який підходить вашому бізнесу",
      popular: "Популярний",
      cta: "Почати",
      free: {
        title: "Безкоштовний",
        price: "₴0",
        description: "Для початківців",
        feature1: "5 генерацій на місяць",
        feature2: "Базові шаблони",
        feature3: "Email підтримка"
      },
      pro: {
        title: "Професійний",
        price: "₴690",
        description: "Для малого бізнесу",
        feature1: "500 генерацій на місяць",
        feature2: "Всі шаблони",
        feature3: "Пріоритетна підтримка",
        feature4: "Аналітика"
      },
      business: {
        title: "Бізнес",
        price: "₴1990",
        description: "Для великих команд",
        feature1: "Необмежені генерації",
        feature2: "Кастомні шаблони",
        feature3: "Персональний менеджер",
        feature4: "API доступ"
      }
    },
    footer: {
      product: "Продукт",
      company: "Компанія",
      support: "Підтримка",
      legal: "Правова інформація",
      description: "AI-платформа для створення переконливого контенту",
      rights: "Всі права захищені."
    },
    auth: {
      modal: {
        title: {
          login: "Увійти в акаунт",
          signup: "Створити акаунт"
        }
      },
      providers: {
        google: "Продовжити з Google",
        linkedin: "Продовжити з LinkedIn",
        facebook: "Продовжити з Facebook"
      },
      switch: {
        login: "Вже маєте акаунт?",
        signup: "Немає акаунта?",
        action: "Увійти"
      }
    },
    toast: {
      success: {
        generated: "Контент успішно згенеровано!",
        copied: "Скопійовано в буфер обміну",
        exported: "Файл успішно експортовано"
      },
      error: {
        generation: "Помилка генерації контенту",
        copy: "Помилка копіювання"
      }
    }
  },
  en: {
    nav: {
      dashboard: "Dashboard",
      billing: "Billing",
      settings: "Settings",
      login: "Login",
      logout: "Logout",
      signup: "Sign Up",
      features: "Features",
      pricing: "Pricing",
      about: "About",
      contact: "Contact"
    },
    billing: {
      title: "Billing & Subscription",
      currentPlan: "Current Plan",
      upgrade: "Upgrade Plan",
      paymentMethod: "Payment Method",
      billingHistory: "Billing History",
      nextBilling: "Next billing:",
      active: "Active",
      paid: "Paid",
      pending: "Pending",
      change: "Change",
      noHistory: "No billing history yet",
      freePlan: "Free plan"
    },
    common: {
      save: "Save",
      cancel: "Cancel",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      confirm: "Confirm",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      download: "Download",
      upload: "Upload",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      export: "Export",
      import: "Import",
      refresh: "Refresh",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close",
      open: "Open",
      yes: "Yes",
      no: "No"
    },
    dashboard: {
      title: "Dashboard",
      welcome: "Welcome",
      overview: "Overview",
      analytics: "Analytics",
      recent: "Recent",
      usage: "Usage",
      plan: "Plan",
      generations: "generations"
    },
    form: {
      title: "Content Generator",
      product: {
        name: "Product Name",
        placeholder: "Enter product name..."
      },
      category: "Category",
      style: "Writing Style",
      generate: "Generate",
      generating: "Generating...",
      placeholder: "Select..."
    },
    results: {
      title: "Results",
      empty: "Generate content to see results",
      regenerate: "Regenerate",
      export: "Export",
      product: {
        title: "Product Title",
        description: "Product Description"
      },
      seo: {
        title: "SEO Title"
      },
      meta: {
        description: "Meta Description"
      },
      cta: "Call to Action"
    },
    hero: {
      title: "AI Product Description Generator",
      subtitle: "Create compelling product descriptions in seconds",
      description: "Harness the power of artificial intelligence to generate SEO-optimized product descriptions, titles, and CTAs that convert visitors into customers.",
      cta: {
        primary: "Start Free",
        secondary: "Watch Demo"
      },
      trusted: "Trusted by 10,000+ companies"
    },
    features: {
      title: "Powerful features for your business",
      subtitle: "Everything you need to create compelling content",
      ai: {
        title: "AI Generation",
        description: "Advanced AI algorithms for unique content creation"
      },
      seo: {
        title: "SEO Optimization",
        description: "Automatic optimization for search engines"
      },
      multilingual: {
        title: "Multilingual",
        description: "Support for 11+ languages for global reach"
      },
      export: {
        title: "Export",
        description: "Export in various formats"
      },
      templates: {
        title: "Templates",
        description: "Ready-made professional templates"
      },
      analytics: {
        title: "Analytics",
        description: "Detailed performance analytics"
      }
    },
    pricing: {
      title: "Simple and transparent pricing",
      subtitle: "Choose the plan that fits your business",
      popular: "Popular",
      cta: "Get Started",
      free: {
        title: "Free",
        price: "$0",
        description: "For beginners",
        feature1: "5 generations per month",
        feature2: "Basic templates",
        feature3: "Email support"
      },
      pro: {
        title: "Professional",
        price: "$19",
        description: "For small business",
        feature1: "500 generations per month",
        feature2: "All templates",
        feature3: "Priority support",
        feature4: "Analytics"
      },
      business: {
        title: "Business",
        price: "$49",
        description: "For large teams",
        feature1: "Unlimited generations",
        feature2: "Custom templates",
        feature3: "Personal manager",
        feature4: "API access"
      }
    },
    footer: {
      product: "Product",
      company: "Company",
      support: "Support",
      legal: "Legal",
      description: "AI platform for creating compelling content",
      rights: "All rights reserved."
    },
    auth: {
      modal: {
        title: {
          login: "Sign in to your account",
          signup: "Create your account"
        }
      },
      providers: {
        google: "Continue with Google",
        linkedin: "Continue with LinkedIn",
        facebook: "Continue with Facebook"
      },
      switch: {
        login: "Already have an account?",
        signup: "Don't have an account?",
        action: "Sign in"
      }
    },
    toast: {
      success: {
        generated: "Content generated successfully!",
        copied: "Copied to clipboard",
        exported: "File exported successfully"
      },
      error: {
        generation: "Content generation error",
        copy: "Copy error"
      }
    }
  },
  de: {
    nav: {
      dashboard: "Dashboard",
      billing: "Abrechnung",
      settings: "Einstellungen",
      login: "Anmelden",
      logout: "Abmelden",
      signup: "Registrieren",
      features: "Funktionen",
      pricing: "Preise",
      about: "Über uns",
      contact: "Kontakt"
    },
    billing: {
      title: "Abrechnung & Abonnement",
      currentPlan: "Aktueller Plan",
      upgrade: "Plan upgraden",
      paymentMethod: "Zahlungsmethode",
      billingHistory: "Abrechnungshistorie",
      nextBilling: "Nächste Abrechnung:",
      active: "Aktiv",
      paid: "Bezahlt",
      pending: "Ausstehend",
      change: "Ändern",
      noHistory: "Noch keine Abrechnungshistorie",
      freePlan: "Kostenloser Plan"
    },
    common: {
      save: "Speichern",
      cancel: "Abbrechen",
      loading: "Laden...",
      error: "Fehler",
      success: "Erfolg",
      confirm: "Bestätigen",
      delete: "Löschen",
      edit: "Bearbeiten",
      view: "Anzeigen",
      download: "Herunterladen",
      upload: "Hochladen",
      search: "Suchen",
      filter: "Filter",
      sort: "Sortieren",
      export: "Exportieren",
      import: "Importieren",
      refresh: "Aktualisieren",
      back: "Zurück",
      next: "Weiter",
      previous: "Vorherige",
      close: "Schließen",
      open: "Öffnen",
      yes: "Ja",
      no: "Nein"
    },
    dashboard: {
      title: "Dashboard",
      welcome: "Willkommen",
      overview: "Übersicht",
      analytics: "Analytik",
      recent: "Kürzlich",
      usage: "Nutzung",
      plan: "Plan",
      generations: "Generierungen"
    },
    form: {
      title: "Content Generator",
      product: {
        name: "Produktname",
        placeholder: "Produktname eingeben..."
      },
      category: "Kategorie",
      style: "Schreibstil",
      generate: "Generieren",
      generating: "Generiere...",
      placeholder: "Auswählen..."
    },
    results: {
      title: "Ergebnisse",
      empty: "Generieren Sie Inhalte, um Ergebnisse zu sehen",
      regenerate: "Neu generieren",
      export: "Exportieren",
      product: {
        title: "Produkttitel",
        description: "Produktbeschreibung"
      },
      seo: {
        title: "SEO-Titel"
      },
      meta: {
        description: "Meta-Beschreibung"
      },
      cta: "Call-to-Action"
    },
    hero: {
      title: "KI-Produktbeschreibungs-Generator",
      subtitle: "Erstellen Sie überzeugende Produktbeschreibungen in Sekunden",
      description: "Nutzen Sie die Kraft der künstlichen Intelligenz, um SEO-optimierte Produktbeschreibungen, Titel und CTAs zu generieren, die Besucher in Kunden verwandeln.",
      cta: {
        primary: "Kostenlos starten",
        secondary: "Demo ansehen"
      },
      trusted: "Vertraut von über 10.000 Unternehmen"
    },
    features: {
      title: "Leistungsstarke Funktionen für Ihr Unternehmen",
      subtitle: "Alles, was Sie brauchen, um überzeugende Inhalte zu erstellen",
      ai: {
        title: "KI-Generierung",
        description: "Fortschrittliche KI-Algorithmen für einzigartige Inhaltserstellung"
      },
      seo: {
        title: "SEO-Optimierung",
        description: "Automatische Optimierung für Suchmaschinen"
      },
      multilingual: {
        title: "Mehrsprachig",
        description: "Unterstützung für 11+ Sprachen für globale Reichweite"
      },
      export: {
        title: "Export",
        description: "Export in verschiedenen Formaten"
      },
      templates: {
        title: "Vorlagen",
        description: "Fertige professionelle Vorlagen"
      },
      analytics: {
        title: "Analytik",
        description: "Detaillierte Leistungsanalytik"
      }
    },
    pricing: {
      title: "Einfache und transparente Preise",
      subtitle: "Wählen Sie den Plan, der zu Ihrem Unternehmen passt",
      popular: "Beliebt",
      cta: "Loslegen",
      free: {
        title: "Kostenlos",
        price: "0€",
        description: "Für Anfänger",
        feature1: "5 Generierungen pro Monat",
        feature2: "Basis-Vorlagen",
        feature3: "E-Mail-Support"
      },
      pro: {
        title: "Professional",
        price: "19€",
        description: "Für kleine Unternehmen",
        feature1: "500 Generierungen pro Monat",
        feature2: "Alle Vorlagen",
        feature3: "Prioritäts-Support",
        feature4: "Analytik"
      },
      business: {
        title: "Business",
        price: "49€",
        description: "Für große Teams",
        feature1: "Unbegrenzte Generierungen",
        feature2: "Benutzerdefinierte Vorlagen",
        feature3: "Persönlicher Manager",
        feature4: "API-Zugang"
      }
    },
    footer: {
      product: "Produkt",
      company: "Unternehmen",
      support: "Support",
      legal: "Rechtliches",
      description: "KI-Plattform für überzeugende Inhalte",
      rights: "Alle Rechte vorbehalten."
    },
    auth: {
      modal: {
        title: {
          login: "In Ihr Konto einloggen",
          signup: "Ihr Konto erstellen"
        }
      },
      providers: {
        google: "Mit Google fortfahren",
        linkedin: "Mit LinkedIn fortfahren",
        facebook: "Mit Facebook fortfahren"
      },
      switch: {
        login: "Haben Sie bereits ein Konto?",
        signup: "Haben Sie kein Konto?",
        action: "Anmelden"
      }
    },
    toast: {
      success: {
        generated: "Inhalt erfolgreich generiert!",
        copied: "In die Zwischenablage kopiert",
        exported: "Datei erfolgreich exportiert"
      },
      error: {
        generation: "Fehler bei der Inhaltsgenerierung",
        copy: "Kopierfehler"
      }
    }
  },
  es: {
    nav: {
      dashboard: "Panel",
      billing: "Facturación",
      settings: "Configuración",
      login: "Iniciar sesión",
      logout: "Cerrar sesión",
      signup: "Registrarse",
      features: "Características",
      pricing: "Precios",
      about: "Acerca de",
      contact: "Contacto"
    },
    billing: {
      title: "Facturación y Suscripción",
      currentPlan: "Plan Actual",
      upgrade: "Actualizar Plan",
      paymentMethod: "Método de Pago",
      billingHistory: "Historial de Facturación",
      nextBilling: "Próxima facturación:",
      active: "Activo",
      paid: "Pagado",
      pending: "Pendiente",
      change: "Cambiar",
      noHistory: "Aún no hay historial de facturación",
      freePlan: "Plan gratuito"
    },
    common: {
      save: "Guardar",
      cancel: "Cancelar",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      confirm: "Confirmar",
      delete: "Eliminar",
      edit: "Editar",
      view: "Ver",
      download: "Descargar",
      upload: "Subir",
      search: "Buscar",
      filter: "Filtrar",
      sort: "Ordenar",
      export: "Exportar",
      import: "Importar",
      refresh: "Actualizar",
      back: "Atrás",
      next: "Siguiente",
      previous: "Anterior",
      close: "Cerrar",
      open: "Abrir",
      yes: "Sí",
      no: "No"
    },
    dashboard: {
      title: "Panel",
      welcome: "Bienvenido",
      overview: "Resumen",
      analytics: "Analíticas",
      recent: "Reciente",
      usage: "Uso",
      plan: "Plan",
      generations: "generaciones"
    },
    form: {
      title: "Generador de Contenido",
      product: {
        name: "Nombre del Producto",
        placeholder: "Ingrese el nombre del producto..."
      },
      category: "Categoría",
      style: "Estilo de Escritura",
      generate: "Generar",
      generating: "Generando...",
      placeholder: "Seleccionar..."
    },
    results: {
      title: "Resultados",
      empty: "Genere contenido para ver resultados",
      regenerate: "Regenerar",
      export: "Exportar",
      product: {
        title: "Título del Producto",
        description: "Descripción del Producto"
      },
      seo: {
        title: "Título SEO"
      },
      meta: {
        description: "Meta Descripción"
      },
      cta: "Llamada a la Acción"
    },
    hero: {
      title: "Generador de Descripciones de Productos con IA",
      subtitle: "Crea descripciones de productos convincentes en segundos",
      description: "Aprovecha el poder de la inteligencia artificial para generar descripciones de productos, títulos y CTAs optimizados para SEO que convierten visitantes en clientes.",
      cta: {
        primary: "Comenzar Gratis",
        secondary: "Ver Demo"
      },
      trusted: "Confiado por más de 10,000 empresas"
    },
    features: {
      title: "Características poderosas para su negocio",
      subtitle: "Todo lo que necesita para crear contenido convincente",
      ai: {
        title: "Generación IA",
        description: "Algoritmos avanzados de IA para creación de contenido único"
      },
      seo: {
        title: "Optimización SEO",
        description: "Optimización automática para motores de búsqueda"
      },
      multilingual: {
        title: "Multiidioma",
        description: "Soporte para 11+ idiomas para alcance global"
      },
      export: {
        title: "Exportar",
        description: "Exportar en varios formatos"
      },
      templates: {
        title: "Plantillas",
        description: "Plantillas profesionales listas para usar"
      },
      analytics: {
        title: "Analíticas",
        description: "Analíticas detalladas de rendimiento"
      }
    },
    pricing: {
      title: "Precios simples y transparentes",
      subtitle: "Elija el plan que se adapte a su negocio",
      popular: "Popular",
      cta: "Comenzar",
      free: {
        title: "Gratis",
        price: "$0",
        description: "Para principiantes",
        feature1: "5 generaciones por mes",
        feature2: "Plantillas básicas",
        feature3: "Soporte por email"
      },
      pro: {
        title: "Profesional",
        price: "$19",
        description: "Para pequeñas empresas",
        feature1: "500 generaciones por mes",
        feature2: "Todas las plantillas",
        feature3: "Soporte prioritario",
        feature4: "Analíticas"
      },
      business: {
        title: "Empresarial",
        price: "$49",
        description: "Para equipos grandes",
        feature1: "Generaciones ilimitadas",
        feature2: "Plantillas personalizadas",
        feature3: "Gerente personal",
        feature4: "Acceso API"
      }
    },
    footer: {
      product: "Producto",
      company: "Empresa",
      support: "Soporte",
      legal: "Legal",
      description: "Plataforma IA para crear contenido convincente",
      rights: "Todos los derechos reservados."
    },
    auth: {
      modal: {
        title: {
          login: "Iniciar sesión en su cuenta",
          signup: "Crear su cuenta"
        }
      },
      providers: {
        google: "Continuar con Google",
        linkedin: "Continuar con LinkedIn",
        facebook: "Continuar con Facebook"
      },
      switch: {
        login: "¿Ya tiene una cuenta?",
        signup: "¿No tiene una cuenta?",
        action: "Iniciar sesión"
      }
    },
    toast: {
      success: {
        generated: "¡Contenido generado exitosamente!",
        copied: "Copiado al portapapeles",
        exported: "Archivo exportado exitosamente"
      },
      error: {
        generation: "Error en la generación de contenido",
        copy: "Error al copiar"
      }
    }
  },
  fr: {
    nav: {
      dashboard: "Tableau de bord",
      billing: "Facturation",
      settings: "Paramètres",
      login: "Se connecter",
      logout: "Se déconnecter",
      signup: "S'inscrire",
      features: "Fonctionnalités",
      pricing: "Tarifs",
      about: "À propos",
      contact: "Contact"
    },
    billing: {
      title: "Facturation et Abonnement",
      currentPlan: "Plan Actuel",
      upgrade: "Mettre à niveau",
      paymentMethod: "Méthode de Paiement",
      billingHistory: "Historique de Facturation",
      nextBilling: "Prochaine facturation:",
      active: "Actif",
      paid: "Payé",
      pending: "En attente",
      change: "Changer",
      noHistory: "Aucun historique de facturation pour le moment",
      freePlan: "Plan gratuit"
    },
    common: {
      save: "Enregistrer",
      cancel: "Annuler",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      confirm: "Confirmer",
      delete: "Supprimer",
      edit: "Modifier",
      view: "Voir",
      download: "Télécharger",
      upload: "Téléverser",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      export: "Exporter",
      import: "Importer",
      refresh: "Actualiser",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      close: "Fermer",
      open: "Ouvrir",
      yes: "Oui",
      no: "Non"
    },
    dashboard: {
      title: "Tableau de bord",
      welcome: "Bienvenue",
      overview: "Aperçu",
      analytics: "Analytiques",
      recent: "Récent",
      usage: "Utilisation",
      plan: "Plan",
      generations: "générations"
    },
    form: {
      title: "Générateur de Contenu",
      product: {
        name: "Nom du Produit",
        placeholder: "Entrez le nom du produit..."
      },
      category: "Catégorie",
      style: "Style d'Écriture",
      generate: "Générer",
      generating: "Génération...",
      placeholder: "Sélectionner..."
    },
    results: {
      title: "Résultats",
      empty: "Générez du contenu pour voir les résultats",
      regenerate: "Régénérer",
      export: "Exporter",
      product: {
        title: "Titre du Produit",
        description: "Description du Produit"
      },
      seo: {
        title: "Titre SEO"
      },
      meta: {
        description: "Meta Description"
      },
      cta: "Appel à l'Action"
    },
    hero: {
      title: "Générateur de Descriptions de Produits IA",
      subtitle: "Créez des descriptions de produits convaincantes en quelques secondes",
      description: "Exploitez la puissance de l'intelligence artificielle pour générer des descriptions de produits, titres et CTA optimisés pour le SEO qui convertissent les visiteurs en clients.",
      cta: {
        primary: "Commencer Gratuitement",
        secondary: "Voir la Démo"
      },
      trusted: "Fait confiance par plus de 10 000 entreprises"
    },
    features: {
      title: "Fonctionnalités puissantes pour votre entreprise",
      subtitle: "Tout ce dont vous avez besoin pour créer du contenu convaincant",
      ai: {
        title: "Génération IA",
        description: "Algorithmes IA avancés pour la création de contenu unique"
      },
      seo: {
        title: "Optimisation SEO",
        description: "Optimisation automatique pour les moteurs de recherche"
      },
      multilingual: {
        title: "Multilingue",
        description: "Support pour 11+ langues pour une portée mondiale"
      },
      export: {
        title: "Exporter",
        description: "Exporter dans divers formats"
      },
      templates: {
        title: "Modèles",
        description: "Modèles professionnels prêts à l'emploi"
      },
      analytics: {
        title: "Analytiques",
        description: "Analytiques de performance détaillées"
      }
    },
    pricing: {
      title: "Tarifs simples et transparents",
      subtitle: "Choisissez le plan qui convient à votre entreprise",
      popular: "Populaire",
      cta: "Commencer",
      free: {
        title: "Gratuit",
        price: "0€",
        description: "Pour les débutants",
        feature1: "5 générations par mois",
        feature2: "Modèles de base",
        feature3: "Support par email"
      },
      pro: {
        title: "Professionnel",
        price: "19€",
        description: "Pour les petites entreprises",
        feature1: "500 générations par mois",
        feature2: "Tous les modèles",
        feature3: "Support prioritaire",
        feature4: "Analytiques"
      },
      business: {
        title: "Entreprise",
        price: "49€",
        description: "Pour les grandes équipes",
        feature1: "Générations illimitées",
        feature2: "Modèles personnalisés",
        feature3: "Gestionnaire personnel",
        feature4: "Accès API"
      }
    },
    footer: {
      product: "Produit",
      company: "Entreprise",
      support: "Support",
      legal: "Légal",
      description: "Plateforme IA pour créer du contenu convaincant",
      rights: "Tous droits réservés."
    },
    auth: {
      modal: {
        title: {
          login: "Se connecter à votre compte",
          signup: "Créer votre compte"
        }
      },
      providers: {
        google: "Continuer avec Google",
        linkedin: "Continuer avec LinkedIn",
        facebook: "Continuer avec Facebook"
      },
      switch: {
        login: "Vous avez déjà un compte?",
        signup: "Vous n'avez pas de compte?",
        action: "Se connecter"
      }
    },
    toast: {
      success: {
        generated: "Contenu généré avec succès!",
        copied: "Copié dans le presse-papiers",
        exported: "Fichier exporté avec succès"
      },
      error: {
        generation: "Erreur de génération de contenu",
        copy: "Erreur de copie"
      }
    }
  },
  it: {
    nav: {
      dashboard: "Dashboard",
      billing: "Fatturazione",
      settings: "Impostazioni",
      login: "Accedi",
      logout: "Esci",
      signup: "Registrati",
      features: "Funzionalità",
      pricing: "Prezzi",
      about: "Chi siamo",
      contact: "Contatti"
    },
    billing: {
      title: "Fatturazione e Abbonamento",
      currentPlan: "Piano Attuale",
      upgrade: "Aggiorna Piano",
      paymentMethod: "Metodo di Pagamento",
      billingHistory: "Cronologia Fatturazione",
      nextBilling: "Prossima fatturazione:",
      active: "Attivo",
      paid: "Pagato",
      pending: "In attesa",
      change: "Cambia",
      noHistory: "Nessuna cronologia di fatturazione ancora",
      freePlan: "Piano gratuito"
    },
    common: {
      save: "Salva",
      cancel: "Annulla",
      loading: "Caricamento...",
      error: "Errore",
      success: "Successo",
      confirm: "Conferma",
      delete: "Elimina",
      edit: "Modifica",
      view: "Visualizza",
      download: "Scarica",
      upload: "Carica",
      search: "Cerca",
      filter: "Filtra",
      sort: "Ordina",
      export: "Esporta",
      import: "Importa",
      refresh: "Aggiorna",
      back: "Indietro",
      next: "Avanti",
      previous: "Precedente",
      close: "Chiudi",
      open: "Apri",
      yes: "Sì",
      no: "No"
    },
    dashboard: {
      title: "Dashboard",
      welcome: "Benvenuto",
      overview: "Panoramica",
      analytics: "Analitiche",
      recent: "Recente",
      usage: "Utilizzo",
      plan: "Piano",
      generations: "generazioni"
    },
    form: {
      title: "Generatore di Contenuti",
      product: {
        name: "Nome Prodotto",
        placeholder: "Inserisci il nome del prodotto..."
      },
      category: "Categoria",
      style: "Stile di Scrittura",
      generate: "Genera",
      generating: "Generazione...",
      placeholder: "Seleziona..."
    },
    results: {
      title: "Risultati",
      empty: "Genera contenuto per vedere i risultati",
      regenerate: "Rigenera",
      export: "Esporta",
      product: {
        title: "Titolo Prodotto",
        description: "Descrizione Prodotto"
      },
      seo: {
        title: "Titolo SEO"
      },
      meta: {
        description: "Meta Descrizione"
      },
      cta: "Call to Action"
    },
    hero: {
      title: "Generatore di Descrizioni Prodotti AI",
      subtitle: "Crea descrizioni prodotti convincenti in secondi",
      description: "Sfrutta la potenza dell'intelligenza artificiale per generare descrizioni prodotti, titoli e CTA ottimizzati per SEO che convertono i visitatori in clienti.",
      cta: {
        primary: "Inizia Gratis",
        secondary: "Guarda Demo"
      },
      trusted: "Fidato da oltre 10.000 aziende"
    },
    features: {
      title: "Funzionalità potenti per la tua azienda",
      subtitle: "Tutto ciò di cui hai bisogno per creare contenuti convincenti",
      ai: {
        title: "Generazione AI",
        description: "Algoritmi AI avanzati per la creazione di contenuti unici"
      },
      seo: {
        title: "Ottimizzazione SEO",
        description: "Ottimizzazione automatica per i motori di ricerca"
      },
      multilingual: {
        title: "Multilingue",
        description: "Supporto per 11+ lingue per portata globale"
      },
      export: {
        title: "Esporta",
        description: "Esporta in vari formati"
      },
      templates: {
        title: "Template",
        description: "Template professionali pronti all'uso"
      },
      analytics: {
        title: "Analitiche",
        description: "Analitiche dettagliate delle prestazioni"
      }
    },
    pricing: {
      title: "Prezzi semplici e trasparenti",
      subtitle: "Scegli il piano che si adatta alla tua azienda",
      popular: "Popolare",
      cta: "Inizia",
      free: {
        title: "Gratuito",
        price: "€0",
        description: "Per principianti",
        feature1: "5 generazioni al mese",
        feature2: "Template base",
        feature3: "Supporto email"
      },
      pro: {
        title: "Professionale",
        price: "€19",
        description: "Per piccole aziende",
        feature1: "500 generazioni al mese",
        feature2: "Tutti i template",
        feature3: "Supporto prioritario",
        feature4: "Analitiche"
      },
      business: {
        title: "Business",
        price: "€49",
        description: "Per grandi team",
        feature1: "Generazioni illimitate",
        feature2: "Template personalizzati",
        feature3: "Manager personale",
        feature4: "Accesso API"
      }
    },
    footer: {
      product: "Prodotto",
      company: "Azienda",
      support: "Supporto",
      legal: "Legale",
      description: "Piattaforma AI per creare contenuti convincenti",
      rights: "Tutti i diritti riservati."
    },
    auth: {
      modal: {
        title: {
          login: "Accedi al tuo account",
          signup: "Crea il tuo account"
        }
      },
      providers: {
        google: "Continua con Google",
        linkedin: "Continua con LinkedIn",
        facebook: "Continua con Facebook"
      },
      switch: {
        login: "Hai già un account?",
        signup: "Non hai un account?",
        action: "Accedi"
      }
    },
    toast: {
      success: {
        generated: "Contenuto generato con successo!",
        copied: "Copiato negli appunti",
        exported: "File esportato con successo"
      },
      error: {
        generation: "Errore nella generazione del contenuto",
        copy: "Errore di copia"
      }
    }
  },
  pl: {
    nav: {
      dashboard: "Panel",
      billing: "Rozliczenia",
      settings: "Ustawienia",
      login: "Zaloguj się",
      logout: "Wyloguj się",
      signup: "Zarejestruj się",
      features: "Funkcje",
      pricing: "Cennik",
      about: "O nas",
      contact: "Kontakt"
    },
    billing: {
      title: "Rozliczenia i Subskrypcja",
      currentPlan: "Aktualny Plan",
      upgrade: "Ulepsz Plan",
      paymentMethod: "Metoda Płatności",
      billingHistory: "Historia Rozliczeń",
      nextBilling: "Następne rozliczenie:",
      active: "Aktywny",
      paid: "Opłacone",
      pending: "Oczekujące",
      change: "Zmień",
      noHistory: "Brak historii rozliczeń",
      freePlan: "Plan darmowy"
    },
    common: {
      save: "Zapisz",
      cancel: "Anuluj",
      loading: "Ładowanie...",
      error: "Błąd",
      success: "Sukces",
      confirm: "Potwierdź",
      delete: "Usuń",
      edit: "Edytuj",
      view: "Zobacz",
      download: "Pobierz",
      upload: "Prześlij",
      search: "Szukaj",
      filter: "Filtruj",
      sort: "Sortuj",
      export: "Eksportuj",
      import: "Importuj",
      refresh: "Odśwież",
      back: "Wstecz",
      next: "Dalej",
      previous: "Poprzedni",
      close: "Zamknij",
      open: "Otwórz",
      yes: "Tak",
      no: "Nie"
    },
    dashboard: {
      title: "Panel",
      welcome: "Witamy",
      overview: "Przegląd",
      analytics: "Analityka",
      recent: "Ostatnie",
      usage: "Użycie",
      plan: "Plan",
      generations: "generacji"
    },
    form: {
      title: "Generator Treści",
      product: {
        name: "Nazwa Produktu",
        placeholder: "Wprowadź nazwę produktu..."
      },
      category: "Kategoria",
      style: "Styl Pisania",
      generate: "Generuj",
      generating: "Generowanie...",
      placeholder: "Wybierz..."
    },
    results: {
      title: "Wyniki",
      empty: "Wygeneruj treść, aby zobaczyć wyniki",
      regenerate: "Regeneruj",
      export: "Eksportuj",
      product: {
        title: "Tytuł Produktu",
        description: "Opis Produktu"
      },
      seo: {
        title: "Tytuł SEO"
      },
      meta: {
        description: "Meta Opis"
      },
      cta: "Wezwanie do Działania"
    },
    hero: {
      title: "Generator Opisów Produktów AI",
      subtitle: "Twórz przekonujące opisy produktów w sekundach",
      description: "Wykorzystaj moc sztucznej inteligencji do generowania zoptymalizowanych pod kątem SEO opisów produktów, tytułów i CTA, które przekształcają odwiedzających w klientów.",
      cta: {
        primary: "Zacznij Za Darmo",
        secondary: "Zobacz Demo"
      },
      trusted: "Zaufało nam ponad 10 000 firm"
    },
    features: {
      title: "Potężne funkcje dla Twojego biznesu",
      subtitle: "Wszystko, czego potrzebujesz do tworzenia przekonujących treści",
      ai: {
        title: "Generowanie AI",
        description: "Zaawansowane algorytmy AI do tworzenia unikalnych treści"
      },
      seo: {
        title: "Optymalizacja SEO",
        description: "Automatyczna optymalizacja dla wyszukiwarek"
      },
      multilingual: {
        title: "Wielojęzyczność",
        description: "Wsparcie dla 11+ języków dla globalnego zasięgu"
      },
      export: {
        title: "Eksport",
        description: "Eksport w różnych formatach"
      },
      templates: {
        title: "Szablony",
        description: "Gotowe profesjonalne szablony"
      },
      analytics: {
        title: "Analityka",
        description: "Szczegółowa analityka wydajności"
      }
    },
    pricing: {
      title: "Proste i przejrzyste ceny",
      subtitle: "Wybierz plan, który pasuje do Twojego biznesu",
      popular: "Popularny",
      cta: "Rozpocznij",
      free: {
        title: "Darmowy",
        price: "0 zł",
        description: "Dla początkujących",
        feature1: "5 generacji miesięcznie",
        feature2: "Podstawowe szablony",
        feature3: "Wsparcie email"
      },
      pro: {
        title: "Profesjonalny",
        price: "79 zł",
        description: "Dla małych firm",
        feature1: "500 generacji miesięcznie",
        feature2: "Wszystkie szablony",
        feature3: "Priorytetowe wsparcie",
        feature4: "Analityka"
      },
      business: {
        title: "Biznesowy",
        price: "199 zł",
        description: "Dla dużych zespołów",
        feature1: "Nieograniczone generacje",
        feature2: "Niestandardowe szablony",
        feature3: "Osobisty menedżer",
        feature4: "Dostęp do API"
      }
    },
    footer: {
      product: "Produkt",
      company: "Firma",
      support: "Wsparcie",
      legal: "Prawne",
      description: "Platforma AI do tworzenia przekonujących treści",
      rights: "Wszystkie prawa zastrzeżone."
    },
    auth: {
      modal: {
        title: {
          login: "Zaloguj się do swojego konta",
          signup: "Utwórz swoje konto"
        }
      },
      providers: {
        google: "Kontynuuj z Google",
        linkedin: "Kontynuuj z LinkedIn",
        facebook: "Kontynuuj z Facebook"
      },
      switch: {
        login: "Masz już konto?",
        signup: "Nie masz konta?",
        action: "Zaloguj się"
      }
    },
    toast: {
      success: {
        generated: "Treść wygenerowana pomyślnie!",
        copied: "Skopiowano do schowka",
        exported: "Plik wyeksportowany pomyślnie"
      },
      error: {
        generation: "Błąd generowania treści",
        copy: "Błąd kopiowania"
      }
    }
  },
  pt: {
    nav: {
      dashboard: "Painel",
      billing: "Faturação",
      settings: "Configurações",
      login: "Entrar",
      logout: "Sair",
      signup: "Registar",
      features: "Funcionalidades",
      pricing: "Preços",
      about: "Sobre",
      contact: "Contacto"
    },
    billing: {
      title: "Faturação e Subscrição",
      currentPlan: "Plano Atual",
      upgrade: "Atualizar Plano",
      paymentMethod: "Método de Pagamento",
      billingHistory: "Histórico de Faturação",
      nextBilling: "Próxima faturação:",
      active: "Ativo",
      paid: "Pago",
      pending: "Pendente",
      change: "Alterar",
      noHistory: "Ainda não há histórico de faturação",
      freePlan: "Plano gratuito"
    },
    common: {
      save: "Guardar",
      cancel: "Cancelar",
      loading: "Carregando...",
      error: "Erro",
      success: "Sucesso",
      confirm: "Confirmar",
      delete: "Eliminar",
      edit: "Editar",
      view: "Ver",
      download: "Descarregar",
      upload: "Carregar",
      search: "Pesquisar",
      filter: "Filtrar",
      sort: "Ordenar",
      export: "Exportar",
      import: "Importar",
      refresh: "Atualizar",
      back: "Voltar",
      next: "Próximo",
      previous: "Anterior",
      close: "Fechar",
      open: "Abrir",
      yes: "Sim",
      no: "Não"
    },
    dashboard: {
      title: "Painel",
      welcome: "Bem-vindo",
      overview: "Visão Geral",
      analytics: "Analíticas",
      recent: "Recente",
      usage: "Uso",
      plan: "Plano",
      generations: "gerações"
    },
    form: {
      title: "Gerador de Conteúdo",
      product: {
        name: "Nome do Produto",
        placeholder: "Introduza o nome do produto..."
      },
      category: "Categoria",
      style: "Estilo de Escrita",
      generate: "Gerar",
      generating: "Gerando...",
      placeholder: "Selecionar..."
    },
    results: {
      title: "Resultados",
      empty: "Gere conteúdo para ver resultados",
      regenerate: "Regenerar",
      export: "Exportar",
      product: {
        title: "Título do Produto",
        description: "Descrição do Produto"
      },
      seo: {
        title: "Título SEO"
      },
      meta: {
        description: "Meta Descrição"
      },
      cta: "Chamada para Ação"
    },
    hero: {
      title: "Gerador de Descrições de Produtos IA",
      subtitle: "Crie descrições de produtos convincentes em segundos",
      description: "Aproveite o poder da inteligência artificial para gerar descrições de produtos, títulos e CTAs otimizados para SEO que convertem visitantes em clientes.",
      cta: {
        primary: "Começar Grátis",
        secondary: "Ver Demo"
      },
      trusted: "Confiado por mais de 10.000 empresas"
    },
    features: {
      title: "Funcionalidades poderosas para o seu negócio",
      subtitle: "Tudo o que precisa para criar conteúdo convincente",
      ai: {
        title: "Geração IA",
        description: "Algoritmos IA avançados para criação de conteúdo único"
      },
      seo: {
        title: "Otimização SEO",
        description: "Otimização automática para motores de busca"
      },
      multilingual: {
        title: "Multilíngue",
        description: "Suporte para 11+ idiomas para alcance global"
      },
      export: {
        title: "Exportar",
        description: "Exportar em vários formatos"
      },
      templates: {
        title: "Modelos",
        description: "Modelos profissionais prontos a usar"
      },
      analytics: {
        title: "Analíticas",
        description: "Analíticas detalhadas de desempenho"
      }
    },
    pricing: {
      title: "Preços simples e transparentes",
      subtitle: "Escolha o plano que se adequa ao seu negócio",
      popular: "Popular",
      cta: "Começar",
      free: {
        title: "Gratuito",
        price: "€0",
        description: "Para iniciantes",
        feature1: "5 gerações por mês",
        feature2: "Modelos básicos",
        feature3: "Suporte por email"
      },
      pro: {
        title: "Profissional",
        price: "€19",
        description: "Para pequenas empresas",
        feature1: "500 gerações por mês",
        feature2: "Todos os modelos",
        feature3: "Suporte prioritário",
        feature4: "Analíticas"
      },
      business: {
        title: "Empresarial",
        price: "€49",
        description: "Para grandes equipas",
        feature1: "Gerações ilimitadas",
        feature2: "Modelos personalizados",
        feature3: "Gestor pessoal",
        feature4: "Acesso API"
      }
    },
    footer: {
      product: "Produto",
      company: "Empresa",
      support: "Suporte",
      legal: "Legal",
      description: "Plataforma IA para criar conteúdo convincente",
      rights: "Todos os direitos reservados."
    },
    auth: {
      modal: {
        title: {
          login: "Entrar na sua conta",
          signup: "Criar a sua conta"
        }
      },
      providers: {
        google: "Continuar com Google",
        linkedin: "Continuar com LinkedIn",
        facebook: "Continuar com Facebook"
      },
      switch: {
        login: "Já tem uma conta?",
        signup: "Não tem uma conta?",
        action: "Entrar"
      }
    },
    toast: {
      success: {
        generated: "Conteúdo gerado com sucesso!",
        copied: "Copiado para a área de transferência",
        exported: "Ficheiro exportado com sucesso"
      },
      error: {
        generation: "Erro na geração de conteúdo",
        copy: "Erro ao copiar"
      }
    }
  },
  zh: {
    nav: {
      dashboard: "仪表板",
      billing: "账单",
      settings: "设置",
      login: "登录",
      logout: "退出",
      signup: "注册",
      features: "功能",
      pricing: "定价",
      about: "关于",
      contact: "联系"
    },
    billing: {
      title: "账单和订阅",
      currentPlan: "当前计划",
      upgrade: "升级计划",
      paymentMethod: "付款方式",
      billingHistory: "账单历史",
      nextBilling: "下次账单:",
      active: "活跃",
      paid: "已付款",
      pending: "待处理",
      change: "更改",
      noHistory: "暂无账单历史",
      freePlan: "免费计划"
    },
    common: {
      save: "保存",
      cancel: "取消",
      loading: "加载中...",
      error: "错误",
      success: "成功",
      confirm: "确认",
      delete: "删除",
      edit: "编辑",
      view: "查看",
      download: "下载",
      upload: "上传",
      search: "搜索",
      filter: "筛选",
      sort: "排序",
      export: "导出",
      import: "导入",
      refresh: "刷新",
      back: "返回",
      next: "下一个",
      previous: "上一个",
      close: "关闭",
      open: "打开",
      yes: "是",
      no: "否"
    },
    dashboard: {
      title: "仪表板",
      welcome: "欢迎",
      overview: "概览",
      analytics: "分析",
      recent: "最近",
      usage: "使用情况",
      plan: "计划",
      generations: "生成次数"
    },
    form: {
      title: "内容生成器",
      product: {
        name: "产品名称",
        placeholder: "输入产品名称..."
      },
      category: "类别",
      style: "写作风格",
      generate: "生成",
      generating: "生成中...",
      placeholder: "选择..."
    },
    results: {
      title: "结果",
      empty: "生成内容以查看结果",
      regenerate: "重新生成",
      export: "导出",
      product: {
        title: "产品标题",
        description: "产品描述"
      },
      seo: {
        title: "SEO标题"
      },
      meta: {
        description: "元描述"
      },
      cta: "行动号召"
    },
    hero: {
      title: "AI产品描述生成器",
      subtitle: "在几秒钟内创建引人注目的产品描述",
      description: "利用人工智能的力量生成SEO优化的产品描述、标题和CTA，将访客转化为客户。",
      cta: {
        primary: "免费开始",
        secondary: "观看演示"
      },
      trusted: "受到10,000+公司信赖"
    },
    features: {
      title: "为您的业务提供强大功能",
      subtitle: "创建引人注目内容所需的一切",
      ai: {
        title: "AI生成",
        description: "用于独特内容创建的先进AI算法"
      },
      seo: {
        title: "SEO优化",
        description: "搜索引擎自动优化"
      },
      multilingual: {
        title: "多语言",
        description: "支持11+种语言的全球覆盖"
      },
      export: {
        title: "导出",
        description: "以各种格式导出"
      },
      templates: {
        title: "模板",
        description: "现成的专业模板"
      },
      analytics: {
        title: "分析",
        description: "详细的性能分析"
      }
    },
    pricing: {
      title: "简单透明的定价",
      subtitle: "选择适合您业务的计划",
      popular: "热门",
      cta: "开始使用",
      free: {
        title: "免费",
        price: "¥0",
        description: "适合初学者",
        feature1: "每月5次生成",
        feature2: "基础模板",
        feature3: "邮件支持"
      },
      pro: {
        title: "专业版",
        price: "¥128",
        description: "适合小企业",
        feature1: "每月500次生成",
        feature2: "所有模板",
        feature3: "优先支持",
        feature4: "分析功能"
      },
      business: {
        title: "企业版",
        price: "¥328",
        description: "适合大团队",
        feature1: "无限生成",
        feature2: "自定义模板",
        feature3: "专属经理",
        feature4: "API访问"
      }
    },
    footer: {
      product: "产品",
      company: "公司",
      support: "支持",
      legal: "法律",
      description: "用于创建引人注目内容的AI平台",
      rights: "版权所有。"
    },
    auth: {
      modal: {
        title: {
          login: "登录您的账户",
          signup: "创建您的账户"
        }
      },
      providers: {
        google: "使用Google继续",
        linkedin: "使用LinkedIn继续",
        facebook: "使用Facebook继续"
      },
      switch: {
        login: "已有账户？",
        signup: "没有账户？",
        action: "登录"
      }
    },
    toast: {
      success: {
        generated: "内容生成成功！",
        copied: "已复制到剪贴板",
        exported: "文件导出成功"
      },
      error: {
        generation: "内容生成错误",
        copy: "复制错误"
      }
    }
  },
  ja: {
    nav: {
      dashboard: "ダッシュボード",
      billing: "請求",
      settings: "設定",
      login: "ログイン",
      logout: "ログアウト",
      signup: "サインアップ",
      features: "機能",
      pricing: "料金",
      about: "について",
      contact: "お問い合わせ"
    },
    billing: {
      title: "請求とサブスクリプション",
      currentPlan: "現在のプラン",
      upgrade: "プランをアップグレード",
      paymentMethod: "支払い方法",
      billingHistory: "請求履歴",
      nextBilling: "次回請求:",
      active: "アクティブ",
      paid: "支払い済み",
      pending: "保留中",
      change: "変更",
      noHistory: "請求履歴がまだありません",
      freePlan: "無料プラン"
    },
    common: {
      save: "保存",
      cancel: "キャンセル",
      loading: "読み込み中...",
      error: "エラー",
      success: "成功",
      confirm: "確認",
      delete: "削除",
      edit: "編集",
      view: "表示",
      download: "ダウンロード",
      upload: "アップロード",
      search: "検索",
      filter: "フィルター",
      sort: "並び替え",
      export: "エクスポート",
      import: "インポート",
      refresh: "更新",
      back: "戻る",
      next: "次へ",
      previous: "前へ",
      close: "閉じる",
      open: "開く",
      yes: "はい",
      no: "いいえ"
    },
    dashboard: {
      title: "ダッシュボード",
      welcome: "ようこそ",
      overview: "概要",
      analytics: "分析",
      recent: "最近",
      usage: "使用状況",
      plan: "プラン",
      generations: "生成回数"
    },
    form: {
      title: "コンテンツジェネレーター",
      product: {
        name: "商品名",
        placeholder: "商品名を入力..."
      },
      category: "カテゴリー",
      style: "文体",
      generate: "生成",
      generating: "生成中...",
      placeholder: "選択..."
    },
    results: {
      title: "結果",
      empty: "結果を見るためにコンテンツを生成してください",
      regenerate: "再生成",
      export: "エクスポート",
      product: {
        title: "商品タイトル",
        description: "商品説明"
      },
      seo: {
        title: "SEOタイトル"
      },
      meta: {
        description: "メタ説明"
      },
      cta: "コールトゥアクション"
    },
    hero: {
      title: "AI商品説明ジェネレーター",
      subtitle: "数秒で魅力的な商品説明を作成",
      description: "人工知能の力を活用して、訪問者を顧客に変換するSEO最適化された商品説明、タイトル、CTAを生成します。",
      cta: {
        primary: "無料で始める",
        secondary: "デモを見る"
      },
      trusted: "10,000以上の企業に信頼されています"
    },
    features: {
      title: "ビジネスのための強力な機能",
      subtitle: "魅力的なコンテンツを作成するために必要なすべて",
      ai: {
        title: "AI生成",
        description: "ユニークなコンテンツ作成のための高度なAIアルゴリズム"
      },
      seo: {
        title: "SEO最適化",
        description: "検索エンジンの自動最適化"
      },
      multilingual: {
        title: "多言語",
        description: "グローバルリーチのための11以上の言語サポート"
      },
      export: {
        title: "エクスポート",
        description: "様々な形式でエクスポート"
      },
      templates: {
        title: "テンプレート",
        description: "すぐに使えるプロフェッショナルテンプレート"
      },
      analytics: {
        title: "分析",
        description: "詳細なパフォーマンス分析"
      }
    },
    pricing: {
      title: "シンプルで透明な料金",
      subtitle: "あなのビジネスに合ったプランを選択",
      popular: "人気",
      cta: "始める",
      free: {
        title: "無料",
        price: "¥0",
        description: "初心者向け",
        feature1: "月5回の生成",
        feature2: "基本テンプレート",
        feature3: "メールサポート"
      },
      pro: {
        title: "プロフェッショナル",
        price: "¥2,000",
        description: "小規模ビジネス向け",
        feature1: "月500回の生成",
        feature2: "すべてのテンプレート",
        feature3: "優先サポート",
        feature4: "分析機能"
      },
      business: {
        title: "ビジネス",
        price: "¥5,000",
        description: "大規模チーム向け",
        feature1: "無制限の生成",
        feature2: "カスタムテンプレート",
        feature3: "専任マネージャー",
        feature4: "APIアクセス"
      }
    },
    footer: {
      product: "製品",
      company: "会社",
      support: "サポート",
      legal: "法的事項",
      description: "魅力的なコンテンツを作成するためのAIプラットフォーム",
      rights: "すべての権利を保有。"
    },
    auth: {
      modal: {
        title: {
          login: "アカウントにサインイン",
          signup: "アカウントを作成"
        }
      },
      providers: {
        google: "Googleで続行",
        linkedin: "LinkedInで続行",
        facebook: "Facebookで続行"
      },
      switch: {
        login: "すでにアカウントをお持ちですか？",
        signup: "アカウントをお持ちでないですか？",
        action: "サインイン"
      }
    },
    toast: {
      success: {
        generated: "コンテンツが正常に生成されました！",
        copied: "クリップボードにコピーされました",
        exported: "ファイルが正常にエクスポートされました"
      },
      error: {
        generation: "コンテンツ生成エラー",
        copy: "コピーエラー"
      }
    }
  },
  ar: {
    nav: {
      dashboard: "لوحة التحكم",
      billing: "الفواتير",
      settings: "الإعدادات",
      login: "تسجيل الدخول",
      logout: "تسجيل الخروج",
      signup: "إنشاء حساب",
      features: "المميزات",
      pricing: "الأسعار",
      about: "حول",
      contact: "اتصل بنا"
    },
    billing: {
      title: "الفواتير والاشتراك",
      currentPlan: "الخطة الحالية",
      upgrade: "ترقية الخطة",
      paymentMethod: "طريقة الدفع",
      billingHistory: "تاريخ الفواتير",
      nextBilling: "الفاتورة التالية:",
      active: "نشط",
      paid: "مدفوع",
      pending: "في الانتظار",
      change: "تغيير",
      noHistory: "لا يوجد تاريخ فواتير بعد",
      freePlan: "خطة مجانية"
    },
    common: {
      save: "حفظ",
      cancel: "إلغاء",
      loading: "جاري التحميل...",
      error: "خطأ",
      success: "نجح",
      confirm: "تأكيد",
      delete: "حذف",
      edit: "تحرير",
      view: "عرض",
      download: "تحميل",
      upload: "رفع",
      search: "بحث",
      filter: "تصفية",
      sort: "ترتيب",
      export: "تصدير",
      import: "استيراد",
      refresh: "تحديث",
      back: "رجوع",
      next: "التالي",
      previous: "السابق",
      close: "إغلاق",
      open: "فتح",
      yes: "نعم",
      no: "لا"
    },
    dashboard: {
      title: "لوحة التحكم",
      welcome: "مرحباً",
      overview: "نظرة عامة",
      analytics: "التحليلات",
      recent: "الأخيرة",
      usage: "الاستخدام",
      plan: "الخطة",
      generations: "عمليات الإنشاء"
    },
    form: {
      title: "مولد المحتوى",
      product: {
        name: "اسم المنتج",
        placeholder: "أدخل اسم المنتج..."
      },
      category: "الفئة",
      style: "أسلوب الكتابة",
      generate: "إنشاء",
      generating: "جاري الإنشاء...",
      placeholder: "اختر..."
    },
    results: {
      title: "النتائج",
      empty: "قم بإنشاء محتوى لرؤية النتائج",
      regenerate: "إعادة إنشاء",
      export: "تصدير",
      product: {
        title: "عنوان المنتج",
        description: "وصف المنتج"
      },
      seo: {
        title: "عنوان SEO"
      },
      meta: {
        description: "الوصف التعريفي"
      },
      cta: "دعوة للعمل"
    },
    hero: {
      title: "مولد أوصاف المنتجات بالذكاء الاصطناعي",
      subtitle: "أنشئ أوصاف منتجات مقنعة في ثوانٍ",
      description: "استغل قوة الذكاء الاصطناعي لإنشاء أوصاف منتجات وعناوين ودعوات للعمل محسنة لمحركات البحث تحول الزوار إلى عملاء.",
      cta: {
        primary: "ابدأ مجاناً",
        secondary: "شاهد العرض التوضيحي"
      },
      trusted: "موثوق من قبل أكثر من 10,000 شركة"
    },
    features: {
      title: "ميزات قوية لعملك",
      subtitle: "كل ما تحتاجه لإنشاء محتوى مقنع",
      ai: {
        title: "إنشاء بالذكاء الاصطناعي",
        description: "خوارزميات ذكاء اصطناعي متقدمة لإنشاء محتوى فريد"
      },
      seo: {
        title: "تحسين SEO",
        description: "تحسين تلقائي لمحركات البحث"
      },
      multilingual: {
        title: "متعدد اللغات",
        description: "دعم لأكثر من 11 لغة للوصول العالمي"
      },
      export: {
        title: "تصدير",
        description: "تصدير بتنسيقات مختلفة"
      },
      templates: {
        title: "قوالب",
        description: "قوالب احترافية جاهزة للاستخدام"
      },
      analytics: {
        title: "التحليلات",
        description: "تحليلات أداء مفصلة"
      }
    },
    pricing: {
      title: "أسعار بسيطة وشفافة",
      subtitle: "اختر الخطة التي تناسب عملك",
      popular: "شائع",
      cta: "ابدأ",
      free: {
        title: "مجاني",
        price: "$0",
        description: "للمبتدئين",
        feature1: "5 عمليات إنشاء شهرياً",
        feature2: "قوالب أساسية",
        feature3: "دعم بالبريد الإلكتروني"
      },
      pro: {
        title: "احترافي",
        price: "$19",
        description: "للشركات الصغيرة",
        feature1: "500 عملية إنشاء شهرياً",
        feature2: "جميع القوالب",
        feature3: "دعم أولوية",
        feature4: "التحليلات"
      },
      business: {
        title: "الأعمال",
        price: "$49",
        description: "للفرق الكبيرة",
        feature1: "عمليات إنشاء غير محدودة",
        feature2: "قوالب مخصصة",
        feature3: "مدير شخصي",
        feature4: "وصول API"
      }
    },
    footer: {
      product: "المنتج",
      company: "الشركة",
      support: "الدعم",
      legal: "قانوني",
      description: "منصة ذكاء اصطناعي لإنشاء محتوى مقنع",
      rights: "جميع الحقوق محفوظة."
    },
    auth: {
      modal: {
        title: {
          login: "تسجيل الدخول إلى حسابك",
          signup: "إنشاء حسابك"
        }
      },
      providers: {
        google: "المتابعة مع Google",
        linkedin: "المتابعة مع LinkedIn",
        facebook: "المتابعة مع Facebook"
      },
      switch: {
        login: "هل لديك حساب بالفعل؟",
        signup: "ليس لديك حساب؟",
        action: "تسجيل الدخول"
      }
    },
    toast: {
      success: {
        generated: "تم إنشاء المحتوى بنجاح!",
        copied: "تم النسخ إلى الحافظة",
        exported: "تم تصدير الملف بنجاح"
      },
      error: {
        generation: "خطأ في إنشاء المحتوى",
        copy: "خطأ في النسخ"
      }
    }
  }
};

let currentLanguage: LanguageCode = 'en';

export function getCurrentLanguage(): LanguageCode {
  return currentLanguage;
}

export function setLanguage(lang: LanguageCode): void {
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('copyflow-language', lang);
    
    // Set RTL for Arabic
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
  }
}

export function t(lang: LanguageCode, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if no translation found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Initialize language from localStorage on client side
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('copyflow-language') as LanguageCode;
  if (savedLang && savedLang in translations) {
    setLanguage(savedLang);
  }
}
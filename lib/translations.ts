export type LanguageCode = 'uk' | 'en' | 'de' | 'es' | 'fr' | 'it' | 'pl' | 'pt' | 'zh' | 'ja' | 'ar';

export interface TranslationKeys {
  // Navigation
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
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    trusted: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  
  // Form
  form: {
    title: string;
    product: {
      name: string;
      placeholder: string;
    };
    category: string;
    placeholder: string;
    electronics: string;
    clothing: string;
    home: string;
    beauty: string;
    sports: string;
    books: string;
    automotive: string;
    other: string;
    style: string;
    professional: string;
    casual: string;
    luxury: string;
    technical: string;
    creative: string;
    generate: string;
    generating: string;
  };
  
  // Results
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
  
  // Features
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
  
  // Pricing
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
  
  // Billing
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
  
  // Footer
  footer: {
    description: string;
    product: string;
    company: string;
    support: string;
    legal: string;
    rights: string;
  };
  
  // Toast Messages
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
  
  // Common
  common: {
    save: string;
    cancel: string;
    loading: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    continue: string;
  };
}

export const translations: Record<LanguageCode, TranslationKeys> = {
  uk: {
    nav: {
      dashboard: "Панель керування",
      billing: "Білінг",
      settings: "Налаштування",
      login: "Увійти",
      logout: "Вийти",
      features: "Можливості",
      pricing: "Тарифи",
      about: "Про нас",
      contact: "Контакти",
      signup: "Реєстрація"
    },
    hero: {
      title: "AI Генератор Описів Товарів",
      subtitle: "Створюйте SEO-оптимізовані описи за секунди",
      description: "Потужний AI-інструмент для створення привабливих описів товарів, заголовків та CTA для вашого бізнесу",
      trusted: "Довіряють понад 10,000+ компаній",
      cta: {
        primary: "Спробувати безкоштовно",
        secondary: "Дивитися демо"
      }
    },
    form: {
      title: "Генератор контенту",
      product: {
        name: "Назва товару",
        placeholder: "Введіть назву вашого товару"
      },
      category: "Категорія",
      placeholder: "Оберіть категорію",
      electronics: "Електроніка",
      clothing: "Одяг",
      home: "Дім і сад",
      beauty: "Краса",
      sports: "Спорт",
      books: "Книги",
      automotive: "Автомобілі",
      other: "Інше",
      style: "Стиль написання",
      professional: "Професійний",
      casual: "Неформальний",
      luxury: "Преміум",
      technical: "Технічний",
      creative: "Креативний",
      generate: "Згенерувати",
      generating: "Генерація..."
    },
    results: {
      title: "Результати",
      empty: "Заповніть форму та натисніть 'Згенерувати' для створення контенту",
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
    features: {
      title: "Потужні можливості",
      subtitle: "Все що потрібно для створення ідеального контенту",
      ai: {
        title: "AI-генерація",
        description: "Передова технологія штучного інтелекту для створення унікального контенту"
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
        description: "Зручне збереження у різних форматах"
      },
      templates: {
        title: "Шаблони",
        description: "Готові професійні шаблони"
      },
      analytics: {
        title: "Аналітика",
        description: "Детальна статистика ефективності"
      }
    },
    pricing: {
      title: "Прості тарифи",
      subtitle: "Оберіть план що підходить вашому бізнесу",
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
        feature4: "Експорт у всі формати"
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
    billing: {
      title: "Білінг та підписка",
      currentPlan: "Поточний тариф",
      upgrade: "Оновити тариф",
      active: "Активний",
      freePlan: "Безкоштовний план",
      nextBilling: "Наступний платіж:",
      paymentMethod: "Спосіб оплати",
      change: "Змінити",
      billingHistory: "Історія платежів",
      noHistory: "Історія платежів порожня",
      paid: "Сплачено",
      pending: "Очікує"
    },
    footer: {
      description: "AI-платформа для створення контенту нового покоління",
      product: "Продукт",
      company: "Компанія",
      support: "Підтримка",
      legal: "Правова інформація",
      rights: "Всі права захищені."
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
    },
    common: {
      save: "Зберегти",
      cancel: "Скасувати",
      loading: "Завантаження...",
      close: "Закрити",
      back: "Назад",
      next: "Далі",
      previous: "Попередній",
      continue: "Продовжити"
    }
  },
  
  en: {
    nav: {
      dashboard: "Dashboard",
      billing: "Billing",
      settings: "Settings",
      login: "Login",
      logout: "Logout",
      features: "Features",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      signup: "Sign Up"
    },
    hero: {
      title: "AI Product Description Generator",
      subtitle: "Create SEO-optimized descriptions in seconds",
      description: "Powerful AI tool for creating compelling product descriptions, titles, and CTAs for your business",
      trusted: "Trusted by 10,000+ companies",
      cta: {
        primary: "Try for free",
        secondary: "Watch demo"
      }
    },
    form: {
      title: "Content Generator",
      product: {
        name: "Product Name",
        placeholder: "Enter your product name"
      },
      category: "Category",
      placeholder: "Select category",
      electronics: "Electronics",
      clothing: "Clothing",
      home: "Home & Garden",
      beauty: "Beauty",
      sports: "Sports",
      books: "Books",
      automotive: "Automotive",
      other: "Other",
      style: "Writing Style",
      professional: "Professional",
      casual: "Casual",
      luxury: "Luxury",
      technical: "Technical",
      creative: "Creative",
      generate: "Generate",
      generating: "Generating..."
    },
    results: {
      title: "Results",
      empty: "Fill out the form and click 'Generate' to create content",
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
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need to create perfect content",
      ai: {
        title: "AI Generation",
        description: "Advanced artificial intelligence technology for creating unique content"
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
        description: "Convenient saving in various formats"
      },
      templates: {
        title: "Templates",
        description: "Ready-made professional templates"
      },
      analytics: {
        title: "Analytics",
        description: "Detailed performance statistics"
      }
    },
    pricing: {
      title: "Simple Pricing",
      subtitle: "Choose a plan that fits your business",
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
        feature4: "Export to all formats"
      },
      business: {
        title: "Business",
        price: "$59",
        description: "For large teams",
        feature1: "Unlimited generations",
        feature2: "Custom templates",
        feature3: "Personal manager",
        feature4: "API access"
      }
    },
    billing: {
      title: "Billing & Subscription",
      currentPlan: "Current Plan",
      upgrade: "Upgrade Plan",
      active: "Active",
      freePlan: "Free plan",
      nextBilling: "Next billing:",
      paymentMethod: "Payment Method",
      change: "Change",
      billingHistory: "Billing History",
      noHistory: "No billing history yet",
      paid: "Paid",
      pending: "Pending"
    },
    footer: {
      description: "Next-generation AI content creation platform",
      product: "Product",
      company: "Company",
      support: "Support",
      legal: "Legal",
      rights: "All rights reserved."
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
    },
    common: {
      save: "Save",
      cancel: "Cancel",
      loading: "Loading...",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
      continue: "Continue"
    }
  },
  
  de: {
    nav: {
      dashboard: "Dashboard",
      billing: "Abrechnung",
      settings: "Einstellungen",
      login: "Anmelden",
      logout: "Abmelden",
      features: "Funktionen",
      pricing: "Preise",
      about: "Über uns",
      contact: "Kontakt",
      signup: "Registrieren"
    },
    hero: {
      title: "KI-Produktbeschreibungs-Generator",
      subtitle: "Erstellen Sie SEO-optimierte Beschreibungen in Sekunden",
      description: "Leistungsstarkes KI-Tool zur Erstellung überzeugender Produktbeschreibungen, Titel und CTAs für Ihr Unternehmen",
      trusted: "Vertraut von über 10.000 Unternehmen",
      cta: {
        primary: "Kostenlos testen",
        secondary: "Demo ansehen"
      }
    },
    form: {
      title: "Content-Generator",
      product: {
        name: "Produktname",
        placeholder: "Geben Sie Ihren Produktnamen ein"
      },
      category: "Kategorie",
      placeholder: "Kategorie auswählen",
      electronics: "Elektronik",
      clothing: "Kleidung",
      home: "Haus & Garten",
      beauty: "Schönheit",
      sports: "Sport",
      books: "Bücher",
      automotive: "Automobil",
      other: "Andere",
      style: "Schreibstil",
      professional: "Professionell",
      casual: "Lässig",
      luxury: "Luxus",
      technical: "Technisch",
      creative: "Kreativ",
      generate: "Generieren",
      generating: "Generierung..."
    },
    results: {
      title: "Ergebnisse",
      empty: "Füllen Sie das Formular aus und klicken Sie auf 'Generieren', um Inhalte zu erstellen",
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
      cta: "Handlungsaufforderung"
    },
    features: {
      title: "Leistungsstarke Funktionen",
      subtitle: "Alles was Sie brauchen, um perfekte Inhalte zu erstellen",
      ai: {
        title: "KI-Generierung",
        description: "Fortschrittliche KI-Technologie zur Erstellung einzigartiger Inhalte"
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
        description: "Bequemes Speichern in verschiedenen Formaten"
      },
      templates: {
        title: "Vorlagen",
        description: "Fertige professionelle Vorlagen"
      },
      analytics: {
        title: "Analytik",
        description: "Detaillierte Leistungsstatistiken"
      }
    },
    pricing: {
      title: "Einfache Preise",
      subtitle: "Wählen Sie einen Plan, der zu Ihrem Unternehmen passt",
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
        title: "Professionell",
        price: "19€",
        description: "Für kleine Unternehmen",
        feature1: "500 Generierungen pro Monat",
        feature2: "Alle Vorlagen",
        feature3: "Prioritäts-Support",
        feature4: "Export in alle Formate"
      },
      business: {
        title: "Business",
        price: "59€",
        description: "Für große Teams",
        feature1: "Unbegrenzte Generierungen",
        feature2: "Benutzerdefinierte Vorlagen",
        feature3: "Persönlicher Manager",
        feature4: "API-Zugang"
      }
    },
    billing: {
      title: "Abrechnung & Abonnement",
      currentPlan: "Aktueller Plan",
      upgrade: "Plan upgraden",
      active: "Aktiv",
      freePlan: "Kostenloser Plan",
      nextBilling: "Nächste Abrechnung:",
      paymentMethod: "Zahlungsmethode",
      change: "Ändern",
      billingHistory: "Abrechnungshistorie",
      noHistory: "Noch keine Abrechnungshistorie",
      paid: "Bezahlt",
      pending: "Ausstehend"
    },
    footer: {
      description: "KI-Content-Erstellungsplattform der nächsten Generation",
      product: "Produkt",
      company: "Unternehmen",
      support: "Support",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten."
    },
    toast: {
      success: {
        generated: "Inhalt erfolgreich generiert!",
        copied: "In Zwischenablage kopiert",
        exported: "Datei erfolgreich exportiert"
      },
      error: {
        generation: "Fehler bei der Inhaltsgenerierung",
        copy: "Kopierfehler"
      }
    },
    common: {
      save: "Speichern",
      cancel: "Abbrechen",
      loading: "Laden...",
      close: "Schließen",
      back: "Zurück",
      next: "Weiter",
      previous: "Vorherige",
      continue: "Fortfahren"
    }
  },
  
  es: {
    nav: {
      dashboard: "Panel",
      billing: "Facturación",
      settings: "Configuración",
      login: "Iniciar sesión",
      logout: "Cerrar sesión",
      features: "Características",
      pricing: "Precios",
      about: "Acerca de",
      contact: "Contacto",
      signup: "Registrarse"
    },
    hero: {
      title: "Generador de Descripciones de Productos IA",
      subtitle: "Crea descripciones optimizadas para SEO en segundos",
      description: "Herramienta de IA potente para crear descripciones de productos, títulos y CTAs convincentes para tu negocio",
      trusted: "Confiado por más de 10,000 empresas",
      cta: {
        primary: "Probar gratis",
        secondary: "Ver demo"
      }
    },
    form: {
      title: "Generador de Contenido",
      product: {
        name: "Nombre del Producto",
        placeholder: "Ingresa el nombre de tu producto"
      },
      category: "Categoría",
      placeholder: "Seleccionar categoría",
      electronics: "Electrónicos",
      clothing: "Ropa",
      home: "Hogar y Jardín",
      beauty: "Belleza",
      sports: "Deportes",
      books: "Libros",
      automotive: "Automotriz",
      other: "Otro",
      style: "Estilo de Escritura",
      professional: "Profesional",
      casual: "Casual",
      luxury: "Lujo",
      technical: "Técnico",
      creative: "Creativo",
      generate: "Generar",
      generating: "Generando..."
    },
    results: {
      title: "Resultados",
      empty: "Completa el formulario y haz clic en 'Generar' para crear contenido",
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
    features: {
      title: "Características Potentes",
      subtitle: "Todo lo que necesitas para crear contenido perfecto",
      ai: {
        title: "Generación IA",
        description: "Tecnología avanzada de inteligencia artificial para crear contenido único"
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
        description: "Guardado conveniente en varios formatos"
      },
      templates: {
        title: "Plantillas",
        description: "Plantillas profesionales listas para usar"
      },
      analytics: {
        title: "Analíticas",
        description: "Estadísticas detalladas de rendimiento"
      }
    },
    pricing: {
      title: "Precios Simples",
      subtitle: "Elige un plan que se adapte a tu negocio",
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
        feature4: "Exportar a todos los formatos"
      },
      business: {
        title: "Empresarial",
        price: "$59",
        description: "Para equipos grandes",
        feature1: "Generaciones ilimitadas",
        feature2: "Plantillas personalizadas",
        feature3: "Gerente personal",
        feature4: "Acceso API"
      }
    },
    billing: {
      title: "Facturación y Suscripción",
      currentPlan: "Plan Actual",
      upgrade: "Actualizar Plan",
      active: "Activo",
      freePlan: "Plan gratuito",
      nextBilling: "Próxima facturación:",
      paymentMethod: "Método de Pago",
      change: "Cambiar",
      billingHistory: "Historial de Facturación",
      noHistory: "Aún no hay historial de facturación",
      paid: "Pagado",
      pending: "Pendiente"
    },
    footer: {
      description: "Plataforma de creación de contenido IA de próxima generación",
      product: "Producto",
      company: "Empresa",
      support: "Soporte",
      legal: "Legal",
      rights: "Todos los derechos reservados."
    },
    toast: {
      success: {
        generated: "¡Contenido generado exitosamente!",
        copied: "Copiado al portapapeles",
        exported: "Archivo exportado exitosamente"
      },
      error: {
        generation: "Error en la generación de contenido",
        copy: "Error de copia"
      }
    },
    common: {
      save: "Guardar",
      cancel: "Cancelar",
      loading: "Cargando...",
      close: "Cerrar",
      back: "Atrás",
      next: "Siguiente",
      previous: "Anterior",
      continue: "Continuar"
    }
  },
  
  fr: {
    nav: {
      dashboard: "Tableau de bord",
      billing: "Facturation",
      settings: "Paramètres",
      login: "Se connecter",
      logout: "Se déconnecter",
      features: "Fonctionnalités",
      pricing: "Tarifs",
      about: "À propos",
      contact: "Contact",
      signup: "S'inscrire"
    },
    hero: {
      title: "Générateur de Descriptions de Produits IA",
      subtitle: "Créez des descriptions optimisées SEO en secondes",
      description: "Outil IA puissant pour créer des descriptions de produits, titres et CTA convaincants pour votre entreprise",
      trusted: "Fait confiance par plus de 10 000 entreprises",
      cta: {
        primary: "Essayer gratuitement",
        secondary: "Voir la démo"
      }
    },
    form: {
      title: "Générateur de Contenu",
      product: {
        name: "Nom du Produit",
        placeholder: "Entrez le nom de votre produit"
      },
      category: "Catégorie",
      placeholder: "Sélectionner une catégorie",
      electronics: "Électronique",
      clothing: "Vêtements",
      home: "Maison et Jardin",
      beauty: "Beauté",
      sports: "Sports",
      books: "Livres",
      automotive: "Automobile",
      other: "Autre",
      style: "Style d'Écriture",
      professional: "Professionnel",
      casual: "Décontracté",
      luxury: "Luxe",
      technical: "Technique",
      creative: "Créatif",
      generate: "Générer",
      generating: "Génération..."
    },
    results: {
      title: "Résultats",
      empty: "Remplissez le formulaire et cliquez sur 'Générer' pour créer du contenu",
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
    features: {
      title: "Fonctionnalités Puissantes",
      subtitle: "Tout ce dont vous avez besoin pour créer un contenu parfait",
      ai: {
        title: "Génération IA",
        description: "Technologie d'intelligence artificielle avancée pour créer du contenu unique"
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
        description: "Sauvegarde pratique dans divers formats"
      },
      templates: {
        title: "Modèles",
        description: "Modèles professionnels prêts à l'emploi"
      },
      analytics: {
        title: "Analytiques",
        description: "Statistiques de performance détaillées"
      }
    },
    pricing: {
      title: "Tarifs Simples",
      subtitle: "Choisissez un plan qui convient à votre entreprise",
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
        feature4: "Export vers tous les formats"
      },
      business: {
        title: "Entreprise",
        price: "59€",
        description: "Pour les grandes équipes",
        feature1: "Générations illimitées",
        feature2: "Modèles personnalisés",
        feature3: "Gestionnaire personnel",
        feature4: "Accès API"
      }
    },
    billing: {
      title: "Facturation et Abonnement",
      currentPlan: "Plan Actuel",
      upgrade: "Mettre à Niveau le Plan",
      active: "Actif",
      freePlan: "Plan gratuit",
      nextBilling: "Prochaine facturation:",
      paymentMethod: "Méthode de Paiement",
      change: "Changer",
      billingHistory: "Historique de Facturation",
      noHistory: "Aucun historique de facturation pour le moment",
      paid: "Payé",
      pending: "En attente"
    },
    footer: {
      description: "Plateforme de création de contenu IA de nouvelle génération",
      product: "Produit",
      company: "Entreprise",
      support: "Support",
      legal: "Légal",
      rights: "Tous droits réservés."
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
    },
    common: {
      save: "Sauvegarder",
      cancel: "Annuler",
      loading: "Chargement...",
      close: "Fermer",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      continue: "Continuer"
    }
  },
  
  it: {
    nav: {
      dashboard: "Dashboard",
      billing: "Fatturazione",
      settings: "Impostazioni",
      login: "Accedi",
      logout: "Esci",
      features: "Funzionalità",
      pricing: "Prezzi",
      about: "Chi siamo",
      contact: "Contatti",
      signup: "Registrati"
    },
    hero: {
      title: "Generatore di Descrizioni Prodotti IA",
      subtitle: "Crea descrizioni ottimizzate SEO in secondi",
      description: "Potente strumento IA per creare descrizioni prodotti, titoli e CTA convincenti per la tua azienda",
      trusted: "Fidato da oltre 10.000 aziende",
      cta: {
        primary: "Prova gratis",
        secondary: "Guarda demo"
      }
    },
    form: {
      title: "Generatore di Contenuti",
      product: {
        name: "Nome Prodotto",
        placeholder: "Inserisci il nome del tuo prodotto"
      },
      category: "Categoria",
      placeholder: "Seleziona categoria",
      electronics: "Elettronica",
      clothing: "Abbigliamento",
      home: "Casa e Giardino",
      beauty: "Bellezza",
      sports: "Sport",
      books: "Libri",
      automotive: "Automotive",
      other: "Altro",
      style: "Stile di Scrittura",
      professional: "Professionale",
      casual: "Casual",
      luxury: "Lusso",
      technical: "Tecnico",
      creative: "Creativo",
      generate: "Genera",
      generating: "Generazione..."
    },
    results: {
      title: "Risultati",
      empty: "Compila il modulo e clicca 'Genera' per creare contenuti",
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
    features: {
      title: "Funzionalità Potenti",
      subtitle: "Tutto ciò di cui hai bisogno per creare contenuti perfetti",
      ai: {
        title: "Generazione IA",
        description: "Tecnologia avanzata di intelligenza artificiale per creare contenuti unici"
      },
      seo: {
        title: "Ottimizzazione SEO",
        description: "Ottimizzazione automatica per i motori di ricerca"
      },
      multilingual: {
        title: "Multilingue",
        description: "Supporto per 11+ lingue per una portata globale"
      },
      export: {
        title: "Esporta",
        description: "Salvataggio conveniente in vari formati"
      },
      templates: {
        title: "Template",
        description: "Template professionali pronti all'uso"
      },
      analytics: {
        title: "Analytics",
        description: "Statistiche dettagliate delle prestazioni"
      }
    },
    pricing: {
      title: "Prezzi Semplici",
      subtitle: "Scegli un piano adatto alla tua azienda",
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
        feature4: "Esporta in tutti i formati"
      },
      business: {
        title: "Business",
        price: "€59",
        description: "Per grandi team",
        feature1: "Generazioni illimitate",
        feature2: "Template personalizzati",
        feature3: "Manager personale",
        feature4: "Accesso API"
      }
    },
    billing: {
      title: "Fatturazione e Abbonamento",
      currentPlan: "Piano Attuale",
      upgrade: "Aggiorna Piano",
      active: "Attivo",
      freePlan: "Piano gratuito",
      nextBilling: "Prossima fatturazione:",
      paymentMethod: "Metodo di Pagamento",
      change: "Cambia",
      billingHistory: "Storico Fatturazione",
      noHistory: "Nessuno storico di fatturazione ancora",
      paid: "Pagato",
      pending: "In attesa"
    },
    footer: {
      description: "Piattaforma di creazione contenuti IA di nuova generazione",
      product: "Prodotto",
      company: "Azienda",
      support: "Supporto",
      legal: "Legale",
      rights: "Tutti i diritti riservati."
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
    },
    common: {
      save: "Salva",
      cancel: "Annulla",
      loading: "Caricamento...",
      close: "Chiudi",
      back: "Indietro",
      next: "Avanti",
      previous: "Precedente",
      continue: "Continua"
    }
  },
  
  pl: {
    nav: {
      dashboard: "Panel",
      billing: "Rozliczenia",
      settings: "Ustawienia",
      login: "Zaloguj",
      logout: "Wyloguj",
      features: "Funkcje",
      pricing: "Cennik",
      about: "O nas",
      contact: "Kontakt",
      signup: "Zarejestruj"
    },
    hero: {
      title: "Generator Opisów Produktów AI",
      subtitle: "Twórz opisy zoptymalizowane pod SEO w sekundach",
      description: "Potężne narzędzie AI do tworzenia przekonujących opisów produktów, tytułów i CTA dla Twojego biznesu",
      trusted: "Zaufało nam ponad 10 000 firm",
      cta: {
        primary: "Wypróbuj za darmo",
        secondary: "Zobacz demo"
      }
    },
    form: {
      title: "Generator Treści",
      product: {
        name: "Nazwa Produktu",
        placeholder: "Wprowadź nazwę swojego produktu"
      },
      category: "Kategoria",
      placeholder: "Wybierz kategorię",
      electronics: "Elektronika",
      clothing: "Odzież",
      home: "Dom i Ogród",
      beauty: "Uroda",
      sports: "Sport",
      books: "Książki",
      automotive: "Motoryzacja",
      other: "Inne",
      style: "Styl Pisania",
      professional: "Profesjonalny",
      casual: "Swobodny",
      luxury: "Luksusowy",
      technical: "Techniczny",
      creative: "Kreatywny",
      generate: "Generuj",
      generating: "Generowanie..."
    },
    results: {
      title: "Wyniki",
      empty: "Wypełnij formularz i kliknij 'Generuj', aby utworzyć treść",
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
    features: {
      title: "Potężne Funkcje",
      subtitle: "Wszystko czego potrzebujesz do tworzenia idealnej treści",
      ai: {
        title: "Generowanie AI",
        description: "Zaawansowana technologia sztucznej inteligencji do tworzenia unikalnej treści"
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
        description: "Wygodne zapisywanie w różnych formatach"
      },
      templates: {
        title: "Szablony",
        description: "Gotowe profesjonalne szablony"
      },
      analytics: {
        title: "Analityka",
        description: "Szczegółowe statystyki wydajności"
      }
    },
    pricing: {
      title: "Proste Ceny",
      subtitle: "Wybierz plan dopasowany do Twojego biznesu",
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
        feature4: "Eksport do wszystkich formatów"
      },
      business: {
        title: "Biznesowy",
        price: "249 zł",
        description: "Dla dużych zespołów",
        feature1: "Nieograniczone generacje",
        feature2: "Niestandardowe szablony",
        feature3: "Osobisty menedżer",
        feature4: "Dostęp do API"
      }
    },
    billing: {
      title: "Rozliczenia i Subskrypcja",
      currentPlan: "Aktualny Plan",
      upgrade: "Ulepsz Plan",
      active: "Aktywny",
      freePlan: "Plan darmowy",
      nextBilling: "Następne rozliczenie:",
      paymentMethod: "Metoda Płatności",
      change: "Zmień",
      billingHistory: "Historia Rozliczeń",
      noHistory: "Brak historii rozliczeń",
      paid: "Opłacone",
      pending: "Oczekujące"
    },
    footer: {
      description: "Platforma tworzenia treści AI nowej generacji",
      product: "Produkt",
      company: "Firma",
      support: "Wsparcie",
      legal: "Prawne",
      rights: "Wszystkie prawa zastrzeżone."
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
    },
    common: {
      save: "Zapisz",
      cancel: "Anuluj",
      loading: "Ładowanie...",
      close: "Zamknij",
      back: "Wstecz",
      next: "Dalej",
      previous: "Poprzedni",
      continue: "Kontynuuj"
    }
  },
  
  pt: {
    nav: {
      dashboard: "Painel",
      billing: "Faturação",
      settings: "Configurações",
      login: "Entrar",
      logout: "Sair",
      features: "Recursos",
      pricing: "Preços",
      about: "Sobre",
      contact: "Contato",
      signup: "Registrar"
    },
    hero: {
      title: "Gerador de Descrições de Produtos IA",
      subtitle: "Crie descrições otimizadas para SEO em segundos",
      description: "Ferramenta IA poderosa para criar descrições de produtos, títulos e CTAs convincentes para seu negócio",
      trusted: "Confiado por mais de 10.000 empresas",
      cta: {
        primary: "Experimentar grátis",
        secondary: "Ver demo"
      }
    },
    form: {
      title: "Gerador de Conteúdo",
      product: {
        name: "Nome do Produto",
        placeholder: "Digite o nome do seu produto"
      },
      category: "Categoria",
      placeholder: "Selecionar categoria",
      electronics: "Eletrônicos",
      clothing: "Roupas",
      home: "Casa e Jardim",
      beauty: "Beleza",
      sports: "Esportes",
      books: "Livros",
      automotive: "Automotivo",
      other: "Outro",
      style: "Estilo de Escrita",
      professional: "Profissional",
      casual: "Casual",
      luxury: "Luxo",
      technical: "Técnico",
      creative: "Criativo",
      generate: "Gerar",
      generating: "Gerando..."
    },
    results: {
      title: "Resultados",
      empty: "Preencha o formulário e clique em 'Gerar' para criar conteúdo",
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
    features: {
      title: "Recursos Poderosos",
      subtitle: "Tudo que você precisa para criar conteúdo perfeito",
      ai: {
        title: "Geração IA",
        description: "Tecnologia avançada de inteligência artificial para criar conteúdo único"
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
        description: "Salvamento conveniente em vários formatos"
      },
      templates: {
        title: "Modelos",
        description: "Modelos profissionais prontos para usar"
      },
      analytics: {
        title: "Análises",
        description: "Estatísticas detalhadas de desempenho"
      }
    },
    pricing: {
      title: "Preços Simples",
      subtitle: "Escolha um plano que se adapte ao seu negócio",
      popular: "Popular",
      cta: "Começar",
      free: {
        title: "Grátis",
        price: "R$ 0",
        description: "Para iniciantes",
        feature1: "5 gerações por mês",
        feature2: "Modelos básicos",
        feature3: "Suporte por email"
      },
      pro: {
        title: "Profissional",
        price: "R$ 99",
        description: "Para pequenas empresas",
        feature1: "500 gerações por mês",
        feature2: "Todos os modelos",
        feature3: "Suporte prioritário",
        feature4: "Exportar para todos os formatos"
      },
      business: {
        title: "Empresarial",
        price: "R$ 299",
        description: "Para grandes equipes",
        feature1: "Gerações ilimitadas",
        feature2: "Modelos personalizados",
        feature3: "Gerente pessoal",
        feature4: "Acesso à API"
      }
    },
    billing: {
      title: "Faturação e Subscrição",
      currentPlan: "Plano Atual",
      upgrade: "Atualizar Plano",
      active: "Ativo",
      freePlan: "Plano gratuito",
      nextBilling: "Próxima cobrança:",
      paymentMethod: "Método de Pagamento",
      change: "Alterar",
      billingHistory: "Histórico de Faturação",
      noHistory: "Ainda não há histórico de faturação",
      paid: "Pago",
      pending: "Pendente"
    },
    footer: {
      description: "Plataforma de criação de conteúdo IA de próxima geração",
      product: "Produto",
      company: "Empresa",
      support: "Suporte",
      legal: "Legal",
      rights: "Todos os direitos reservados."
    },
    toast: {
      success: {
        generated: "Conteúdo gerado com sucesso!",
        copied: "Copiado para a área de transferência",
        exported: "Arquivo exportado com sucesso"
      },
      error: {
        generation: "Erro na geração de conteúdo",
        copy: "Erro de cópia"
      }
    },
    common: {
      save: "Salvar",
      cancel: "Cancelar",
      loading: "Carregando...",
      close: "Fechar",
      back: "Voltar",
      next: "Próximo",
      previous: "Anterior",
      continue: "Continuar"
    }
  },
  
  zh: {
    nav: {
      dashboard: "仪表板",
      billing: "账单",
      settings: "设置",
      login: "登录",
      logout: "退出",
      features: "功能",
      pricing: "价格",
      about: "关于",
      contact: "联系",
      signup: "注册"
    },
    hero: {
      title: "AI产品描述生成器",
      subtitle: "几秒钟内创建SEO优化的描述",
      description: "强大的AI工具，为您的业务创建引人注目的产品描述、标题和CTA",
      trusted: "超过10,000家公司的信赖",
      cta: {
        primary: "免费试用",
        secondary: "观看演示"
      }
    },
    form: {
      title: "内容生成器",
      product: {
        name: "产品名称",
        placeholder: "输入您的产品名称"
      },
      category: "类别",
      placeholder: "选择类别",
      electronics: "电子产品",
      clothing: "服装",
      home: "家居园艺",
      beauty: "美容",
      sports: "运动",
      books: "图书",
      automotive: "汽车",
      other: "其他",
      style: "写作风格",
      professional: "专业",
      casual: "休闲",
      luxury: "奢华",
      technical: "技术",
      creative: "创意",
      generate: "生成",
      generating: "生成中..."
    },
    results: {
      title: "结果",
      empty: "填写表单并点击\"生成"来创建内容",
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
    features: {
      title: "强大功能",
      subtitle: "创建完美内容所需的一切",
      ai: {
        title: "AI生成",
        description: "先进的人工智能技术创建独特内容"
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
        description: "便捷的多格式保存"
      },
      templates: {
        title: "模板",
        description: "现成的专业模板"
      },
      analytics: {
        title: "分析",
        description: "详细的性能统计"
      }
    },
    pricing: {
      title: "简单定价",
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
        feature4: "导出所有格式"
      },
      business: {
        title: "企业版",
        price: "¥398",
        description: "适合大团队",
        feature1: "无限生成",
        feature2: "自定义模板",
        feature3: "专属经理",
        feature4: "API访问"
      }
    },
    billing: {
      title: "账单和订阅",
      currentPlan: "当前计划",
      upgrade: "升级计划",
      active: "活跃",
      freePlan: "免费计划",
      nextBilling: "下次计费：",
      paymentMethod: "付款方式",
      change: "更改",
      billingHistory: "账单历史",
      noHistory: "暂无账单历史",
      paid: "已付款",
      pending: "待处理"
    },
    footer: {
      description: "下一代AI内容创作平台",
      product: "产品",
      company: "公司",
      support: "支持",
      legal: "法律",
      rights: "版权所有。"
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
    },
    common: {
      save: "保存",
      cancel: "取消",
      loading: "加载中...",
      close: "关闭",
      back: "返回",
      next: "下一步",
      previous: "上一步",
      continue: "继续"
    }
  },
  
  ja: {
    nav: {
      dashboard: "ダッシュボード",
      billing: "請求",
      settings: "設定",
      login: "ログイン",
      logout: "ログアウト",
      features: "機能",
      pricing: "料金",
      about: "概要",
      contact: "お問い合わせ",
      signup: "サインアップ"
    },
    hero: {
      title: "AI商品説明ジェネレーター",
      subtitle: "SEO最適化された説明を数秒で作成",
      description: "ビジネス向けの魅力的な商品説明、タイトル、CTAを作成する強力なAIツール",
      trusted: "10,000社以上に信頼されています",
      cta: {
        primary: "無料で試す",
        secondary: "デモを見る"
      }
    },
    form: {
      title: "コンテンツジェネレーター",
      product: {
        name: "商品名",
        placeholder: "商品名を入力してください"
      },
      category: "カテゴリー",
      placeholder: "カテゴリーを選択",
      electronics: "電子機器",
      clothing: "衣類",
      home: "ホーム＆ガーデン",
      beauty: "美容",
      sports: "スポーツ",
      books: "書籍",
      automotive: "自動車",
      other: "その他",
      style: "文体",
      professional: "プロフェッショナル",
      casual: "カジュアル",
      luxury: "ラグジュアリー",
      technical: "技術的",
      creative: "クリエイティブ",
      generate: "生成",
      generating: "生成中..."
    },
    results: {
      title: "結果",
      empty: "フォームに記入して「生成」をクリックしてコンテンツを作成してください",
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
    features: {
      title: "強力な機能",
      subtitle: "完璧なコンテンツ作成に必要なすべて",
      ai: {
        title: "AI生成",
        description: "ユニークなコンテンツを作成する高度な人工知能技術"
      },
      seo: {
        title: "SEO最適化",
        description: "検索エンジンの自動最適化"
      },
      multilingual: {
        title: "多言語対応",
        description: "グローバルリーチのための11以上の言語サポート"
      },
      export: {
        title: "エクスポート",
        description: "様々な形式での便利な保存"
      },
      templates: {
        title: "テンプレート",
        description: "すぐに使えるプロフェッショナルテンプレート"
      },
      analytics: {
        title: "分析",
        description: "詳細なパフォーマンス統計"
      }
    },
    pricing: {
      title: "シンプルな料金",
      subtitle: "ビジネスに適したプランを選択",
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
        description: "小規模企業向け",
        feature1: "月500回の生成",
        feature2: "すべてのテンプレート",
        feature3: "優先サポート",
        feature4: "すべての形式にエクスポート"
      },
      business: {
        title: "ビジネス",
        price: "¥6,000",
        description: "大規模チーム向け",
        feature1: "無制限の生成",
        feature2: "カスタムテンプレート",
        feature3: "専任マネージャー",
        feature4: "APIアクセス"
      }
    },
    billing: {
      title: "請求とサブスクリプション",
      currentPlan: "現在のプラン",
      upgrade: "プランをアップグレード",
      active: "アクティブ",
      freePlan: "無料プラン",
      nextBilling: "次回請求：",
      paymentMethod: "支払い方法",
      change: "変更",
      billingHistory: "請求履歴",
      noHistory: "請求履歴はまだありません",
      paid: "支払済み",
      pending: "保留中"
    },
    footer: {
      description: "次世代AIコンテンツ作成プラットフォーム",
      product: "製品",
      company: "会社",
      support: "サポート",
      legal: "法的事項",
      rights: "すべての権利を保有。"
    },
    toast: {
      success: {
        generated: "コンテンツが正常に生成されました！",
        copied: "クリップボードにコピーしました",
        exported: "ファイルが正常にエクスポートされました"
      },
      error: {
        generation: "コンテンツ生成エラー",
        copy: "コピーエラー"
      }
    },
    common: {
      save: "保存",
      cancel: "キャンセル",
      loading: "読み込み中...",
      close: "閉じる",
      back: "戻る",
      next: "次へ",
      previous: "前へ",
      continue: "続行"
    }
  },
  
  ar: {
    nav: {
      dashboard: "لوحة التحكم",
      billing: "الفواتير",
      settings: "الإعدادات",
      login: "تسجيل الدخول",
      logout: "تسجيل الخروج",
      features: "المميزات",
      pricing: "الأسعار",
      about: "حول",
      contact: "اتصل بنا",
      signup: "إنشاء حساب"
    },
    hero: {
      title: "مولد أوصاف المنتجات بالذكاء الاصطناعي",
      subtitle: "إنشاء أوصاف محسنة لمحركات البحث في ثوانٍ",
      description: "أداة ذكاء اصطناعي قوية لإنشاء أوصاف منتجات وعناوين ودعوات للعمل مقنعة لعملك",
      trusted: "موثوق من قبل أكثر من 10,000 شركة",
      cta: {
        primary: "جرب مجاناً",
        secondary: "شاهد العرض التوضيحي"
      }
    },
    form: {
      title: "مولد المحتوى",
      product: {
        name: "اسم المنتج",
        placeholder: "أدخل اسم منتجك"
      },
      category: "الفئة",
      placeholder: "اختر الفئة",
      electronics: "الإلكترونيات",
      clothing: "الملابس",
      home: "المنزل والحديقة",
      beauty: "الجمال",
      sports: "الرياضة",
      books: "الكتب",
      automotive: "السيارات",
      other: "أخرى",
      style: "أسلوب الكتابة",
      professional: "مهني",
      casual: "عادي",
      luxury: "فاخر",
      technical: "تقني",
      creative: "إبداعي",
      generate: "إنشاء",
      generating: "جاري الإنشاء..."
    },
    results: {
      title: "النتائج",
      empty: "املأ النموذج واضغط على 'إنشاء' لإنتاج المحتوى",
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
    features: {
      title: "مميزات قوية",
      subtitle: "كل ما تحتاجه لإنشاء محتوى مثالي",
      ai: {
        title: "إنشاء بالذكاء الاصطناعي",
        description: "تقنية ذكاء اصطناعي متقدمة لإنشاء محتوى فريد"
      },
      seo: {
        title: "تحسين محركات البحث",
        description: "تحسين تلقائي لمحركات البحث"
      },
      multilingual: {
        title: "متعدد اللغات",
        description: "دعم أكثر من 11 لغة للوصول العالمي"
      },
      export: {
        title: "تصدير",
        description: "حفظ مريح بتنسيقات مختلفة"
      },
      templates: {
        title: "القوالب",
        description: "قوالب احترافية جاهزة للاستخدام"
      },
      analytics: {
        title: "التحليلات",
        description: "إحصائيات أداء مفصلة"
      }
    },
    pricing: {
      title: "أسعار بسيطة",
      subtitle: "اختر خطة تناسب عملك",
      popular: "شائع",
      cta: "ابدأ",
      free: {
        title: "مجاني",
        price: "0 ريال",
        description: "للمبتدئين",
        feature1: "5 إنشاءات شهرياً",
        feature2: "قوالب أساسية",
        feature3: "دعم بالبريد الإلكتروني"
      },
      pro: {
        title: "احترافي",
        price: "75 ريال",
        description: "للشركات الصغيرة",
        feature1: "500 إنشاء شهرياً",
        feature2: "جميع القوالب",
        feature3: "دعم أولوية",
        feature4: "تصدير لجميع التنسيقات"
      },
      business: {
        title: "الأعمال",
        price: "225 ريال",
        description: "للفرق الكبيرة",
        feature1: "إنشاءات غير محدودة",
        feature2: "قوالب مخصصة",
        feature3: "مدير شخصي",
        feature4: "وصول API"
      }
    },
    billing: {
      title: "الفواتير والاشتراك",
      currentPlan: "الخطة الحالية",
      upgrade: "ترقية الخطة",
      active: "نشط",
      freePlan: "خطة مجانية",
      nextBilling: "الفاتورة التالية:",
      paymentMethod: "طريقة الدفع",
      change: "تغيير",
      billingHistory: "تاريخ الفواتير",
      noHistory: "لا يوجد تاريخ فواتير بعد",
      paid: "مدفوع",
      pending: "معلق"
    },
    footer: {
      description: "منصة إنشاء المحتوى بالذكاء الاصطناعي من الجيل القادم",
      product: "المنتج",
      company: "الشركة",
      support: "الدعم",
      legal: "قانوني",
      rights: "جميع الحقوق محفوظة."
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
    },
    common: {
      save: "حفظ",
      cancel: "إلغاء",
      loading: "جاري التحميل...",
      close: "إغلاق",
      back: "رجوع",
      next: "التالي",
      previous: "السابق",
      continue: "متابعة"
    }
  }
};

// Current language state
let currentLanguage: LanguageCode = 'uk';

// Initialize language from localStorage or default to Ukrainian
if (typeof window !== 'undefined') {
  const savedLanguage = localStorage.getItem('copyflow-language') as LanguageCode;
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
  
  // Set document direction for RTL languages
  if (currentLanguage === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = currentLanguage;
  }
}

// Translation function
export function t(language: LanguageCode, key: string): string {
  const keys = key.split('.');
  let value: any = translations[language] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      // Fallback to English if translation not found
      value = translations.en;
      for (const fallbackKey of keys) {
        value = value?.[fallbackKey];
        if (value === undefined) {
          return key; // Return key if even English translation is missing
        }
      }
      break;
    }
  }
  
  return value || key;
}

// Get current language
export function getCurrentLanguage(): LanguageCode {
  return currentLanguage;
}

// Set language and persist to localStorage
export function setLanguage(language: LanguageCode): void {
  if (translations[language]) {
    currentLanguage = language;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('copyflow-language', language);
      
      // Update document direction and language
      if (language === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = language;
      }
    }
  }
}

// Get available languages
export function getAvailableLanguages(): Array<{ code: LanguageCode; name: string }> {
  return [
    { code: 'uk', name: 'Українська' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'it', name: 'Italiano' },
    { code: 'pl', name: 'Polski' },
    { code: 'pt', name: 'Português' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ar', name: 'العربية' }
  ];
}
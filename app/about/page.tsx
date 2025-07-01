'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">
            {t('about.title', 'About CopyFlow')}
          </h1>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-muted-foreground mb-6">
              {t('about.subtitle', 'Learn more about our AI-powered content generation platform')}
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('about.mission.title', 'Our Mission')}</h2>
                <p>
                  {t('about.mission.description', 'CopyFlow is a powerful AI-powered product description generator that helps businesses create compelling content in seconds. Our mission is to make quality marketing content creation accessible to everyone.')}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('about.features.title', 'What We Offer')}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('about.features.ai', 'AI-powered content generation')}</li>
                  <li>{t('about.features.seo', 'SEO-optimized descriptions')}</li>
                  <li>{t('about.features.multilingual', 'Support for 11+ languages')}</li>
                  <li>{t('about.features.templates', 'Professional templates')}</li>
                  <li>{t('about.features.analytics', 'Performance analytics')}</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('about.team.title', 'Our Team')}</h2>
                <p>
                  {t('about.team.description', 'We are a team of passionate developers, designers, and AI specialists dedicated to revolutionizing content creation for businesses of all sizes.')}
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
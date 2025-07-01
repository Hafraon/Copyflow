'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function PrivacyPage() {
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
            {t('privacy.title', 'Privacy Policy')}
          </h1>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-muted-foreground mb-6">
              {t('privacy.subtitle', 'How we collect, use, and protect your information')}
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.collection.title', 'Information We Collect')}</h2>
                <p>
                  {t('privacy.collection.description', 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.')}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.usage.title', 'How We Use Your Information')}</h2>
                <p>
                  {t('privacy.usage.description', 'We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.')}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.protection.title', 'Data Protection')}</h2>
                <p>
                  {t('privacy.protection.description', 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.')}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact.title', 'Contact Us')}</h2>
                <p>
                  {t('privacy.contact.description', 'If you have any questions about this Privacy Policy, please contact us at privacy@copyflow.com')}
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
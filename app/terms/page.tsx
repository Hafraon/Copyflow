'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function TermsPage() {
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
            {t('terms.title', 'Terms of Service')}
          </h1>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-muted-foreground mb-6">
              {t('terms.subtitle', 'Terms and conditions for using CopyFlow')}
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('terms.acceptance.title', 'Acceptance of Terms')}</h2>
                <p>
                  {t('terms.acceptance.description', 'By accessing and using CopyFlow, you accept and agree to be bound by the terms and provision of this agreement.')}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('terms.service.title', 'Use of Service')}</h2>
                <p>
                  {t('terms.service.description', 'You may use our service for lawful purposes only. You agree not to use the service in any way that violates any applicable laws or regulations.')}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('terms.content.title', 'Content')}</h2>
                <p>
                  {t('terms.content.description', 'You retain ownership of any content you submit to our service. By submitting content, you grant us a license to use, modify, and distribute it as necessary to provide our services.')}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('terms.limitation.title', 'Limitation of Liability')}</h2>
                <p>
                  {t('terms.limitation.description', 'In no event shall CopyFlow be liable for any indirect, incidental, special, consequential, or punitive damages.')}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">{t('terms.contact.title', 'Contact Information')}</h2>
                <p>
                  {t('terms.contact.description', 'If you have any questions about these Terms of Service, please contact us at legal@copyflow.com')}
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
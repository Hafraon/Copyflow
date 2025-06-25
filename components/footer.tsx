"use client";

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t('footer.product'),
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API', href: '/api' },
        { name: 'Documentation', href: '/docs' },
      ]
    },
    {
      title: t('footer.company'),
      links: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: t('footer.support'),
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Status', href: '/status' },
        { name: 'Feedback', href: '/feedback' },
      ]
    },
    {
      title: t('footer.legal'),
      links: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'Security', href: '/security' },
        { name: 'GDPR', href: '/gdpr' },
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">CopyFlow</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CopyFlow. {t('footer.rights')}
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm">
              Terms
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
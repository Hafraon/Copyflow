'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Video,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function HelpPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Book,
      articles: [
        { title: 'How to create your first product description', views: '2.1k' },
        { title: 'Understanding writing styles', views: '1.8k' },
        { title: 'Choosing the right category', views: '1.5k' },
        { title: 'Using Magic Input effectively', views: '1.2k' }
      ]
    },
    {
      id: 'features',
      title: 'Features & Tools',
      icon: HelpCircle,
      articles: [
        { title: 'Magic Input: Text, URL, and File uploads', views: '3.2k' },
        { title: 'Platform-specific optimization', views: '2.8k' },
        { title: 'Emoji settings and customization', views: '2.1k' },
        { title: 'Export options (TXT, CSV, Excel, JSON)', views: '1.9k' }
      ]
    },
    {
      id: 'account',
      title: 'Account & Billing',
      icon: MessageCircle,
      articles: [
        { title: 'Managing your subscription', views: '1.7k' },
        { title: 'Understanding usage limits', views: '1.4k' },
        { title: 'Payment methods and billing', views: '1.1k' },
        { title: 'Upgrading or downgrading plans', views: '980' }
      ]
    },
    {
      id: 'api',
      title: 'API & Integrations',
      icon: Video,
      articles: [
        { title: 'Getting started with CopyFlow API', views: '890' },
        { title: 'Authentication and API keys', views: '750' },
        { title: 'Rate limits and best practices', views: '620' },
        { title: 'Webhook integration guide', views: '540' }
      ]
    }
  ];

  const faqItems = [
    {
      id: 'what-is-copyflow',
      question: 'What is CopyFlow?',
      answer: 'CopyFlow is an AI-powered product description generator that helps e-commerce businesses create compelling, SEO-optimized content in seconds. It supports 11 languages and multiple platforms.'
    },
    {
      id: 'how-does-magic-input-work',
      question: 'How does Magic Input work?',
      answer: 'Magic Input automatically detects whether you\'re entering text, URLs, or uploading files. It can parse product information from major e-commerce platforms and process CSV/Excel files with multiple products.'
    },
    {
      id: 'what-platforms-supported',
      question: 'What platforms are supported?',
      answer: 'CopyFlow supports Amazon, Shopify, AliExpress, Хорошоп, Etsy, eBay, Instagram, Facebook, and provides universal templates that work everywhere.'
    },
    {
      id: 'how-many-languages',
      question: 'How many languages does CopyFlow support?',
      answer: 'CopyFlow supports 11 languages: Ukrainian, English, German, Spanish, French, Italian, Polish, Portuguese, Chinese, Japanese, and Arabic with RTL support.'
    },
    {
      id: 'what-export-formats',
      question: 'What export formats are available?',
      answer: 'You can export your generated content in TXT, CSV, Excel (XLSX), and JSON formats. This makes it easy to import into any e-commerce platform or content management system.'
    },
    {
      id: 'api-access',
      question: 'Do you offer API access?',
      answer: 'Yes! CopyFlow provides a RESTful API for developers. API access is available on Pro and Business plans with different rate limits based on your subscription.'
    }
  ];

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to your questions and learn how to get the most out of CopyFlow
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.articles.slice(0, 3).map((article, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground truncate">{article.title}</span>
                          <Badge variant="secondary" className="text-xs">{article.views}</Badge>
                        </div>
                      ))}
                      <div className="text-center pt-2">
                        <span className="text-xs text-primary cursor-pointer hover:underline">
                          View all {category.articles.length} articles
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFAQ.map((item, index) => (
                  <Collapsible
                    key={item.id}
                    open={openSections.has(item.id)}
                    onOpenChange={() => toggleSection(item.id)}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left border rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="font-medium">{item.question}</span>
                      {openSections.has(item.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
              
              {filteredFAQ.length === 0 && searchQuery && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No results found for "{searchQuery}". Try different keywords or browse categories above.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex gap-4 justify-center">
              <Card className="p-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant help from our support team
                </p>
                <button className="text-primary hover:underline text-sm">Start Chat</button>
              </Card>
              
              <Card className="p-6 text-center">
                <HelpCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us a detailed message
                </p>
                <button className="text-primary hover:underline text-sm">Send Email</button>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
"use client";

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-blue-500 animate-float">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-40 right-20 text-purple-500 animate-float" style={{ animationDelay: '2s' }}>
        <TrendingUp className="w-8 h-8" />
      </div>
      <div className="absolute bottom-40 left-20 text-indigo-500 animate-float" style={{ animationDelay: '4s' }}>
        <Zap className="w-7 h-7" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient">{t('hero.title')}</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-muted-foreground font-medium">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              onClick={scrollToGenerator}
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              {t('hero.cta.secondary')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <p className="text-sm text-muted-foreground mb-8">
              {t('hero.trusted')}
            </p>
            
            {/* Demo Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="glass glass-dark rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-gradient">10,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="glass glass-dark rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-gradient">1M+</div>
                <div className="text-sm text-muted-foreground">Descriptions Generated</div>
              </div>
              <div className="glass glass-dark rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-gradient">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
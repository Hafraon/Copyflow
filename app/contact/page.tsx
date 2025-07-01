'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(t('contact.success', 'Message sent successfully!'));
    }, 1000);
  };

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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              {t('contact.title', 'Contact Us')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle', 'Get in touch with our team')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {t('contact.form.title', 'Send us a message')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder={t('contact.form.firstName', 'First name')}
                      required
                    />
                    <Input 
                      placeholder={t('contact.form.lastName', 'Last name')}
                      required
                    />
                  </div>
                  <Input 
                    type="email" 
                    placeholder={t('contact.form.email', 'Email address')}
                    required
                  />
                  <Input 
                    placeholder={t('contact.form.subject', 'Subject')}
                    required
                  />
                  <Textarea 
                    placeholder={t('contact.form.message', 'Your message')}
                    rows={6}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('contact.form.sending', 'Sending...')
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t('contact.form.send', 'Send Message')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        {t('contact.info.email.title', 'Email')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('contact.info.email.description', 'Send us an email anytime')}
                      </p>
                      <p className="font-medium">support@copyflow.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        {t('contact.info.phone.title', 'Phone')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('contact.info.phone.description', 'Call us during business hours')}
                      </p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        {t('contact.info.address.title', 'Office')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('contact.info.address.description', 'Visit our headquarters')}
                      </p>
                      <p className="font-medium">
                        123 AI Street<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
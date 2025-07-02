'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Download, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { getCurrentLanguage, setLanguage, t } from '@/lib/translations';
import type { LanguageCode } from '@/lib/translations';
import { format } from 'date-fns';

interface BillingData {
  currentPlan: string;
  billingCycle: string;
  nextBillingDate: string;
  paymentMethod: string;
  invoices: Array<{
    id: string;
    date: string;
    amount: number;
    status: string;
    downloadUrl: string;
  }>;
}

export default function BillingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [language, setLang] = useState<LanguageCode>('uk');
  const [billingData, setBillingData] = useState<BillingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchBillingData();
    }
  }, [session]);

  const fetchBillingData = async () => {
    try {
      // Тимчасові демо дані
      setBillingData({
        currentPlan: 'Free',
        billingCycle: 'monthly',
        nextBillingDate: '2024-02-01',
        paymentMethod: 'WayForPay',
        invoices: [
          {
            id: 'INV-001',
            date: '2024-01-01',
            amount: 690,
            status: 'paid',
            downloadUrl: '#'
          }
        ]
      });
    } catch (error) {
      console.error('Failed to fetch billing data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = () => {
    router.push('/pricing');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header language={language} setLanguage={setLang} />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-32 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLang} />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">
              {t(language, 'billing.title')}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Current Plan */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  {t(language, 'billing.currentPlan')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{billingData?.currentPlan || 'Free'}</h3>
                      <Badge variant="secondary">
                        {t(language, 'billing.active')}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {t(language, 'billing.freePlan')}
                    </p>
                  </div>
                  <Button onClick={handleUpgrade}>
                    {t(language, 'billing.upgrade')}
                  </Button>
                </div>

                {billingData && billingData.currentPlan !== 'Free' && billingData.nextBillingDate && (
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {t(language, 'billing.nextBilling')}
                      </span>
                      <span>{format(new Date(billingData.nextBillingDate), 'dd.MM.yyyy')}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {t(language, 'billing.paymentMethod')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <p className="text-muted-foreground">
                    {billingData?.paymentMethod || 'WayForPay'}
                  </p>
                  <Button variant="outline" className="mt-2" size="sm">
                    {t(language, 'billing.change')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {t(language, 'billing.billingHistory')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!billingData || !billingData.invoices || billingData.invoices.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      {t(language, 'billing.noHistory')}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {billingData.invoices.map((invoice) => (
                      <div key={invoice.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">₴{invoice.amount}</p>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(invoice.date), 'dd.MM.yyyy')}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={invoice.status === 'paid' ? 'default' : 'secondary'}>
                            {invoice.status === 'paid' 
                              ? t(language, 'billing.paid')
                              : t(language, 'billing.pending')
                            }
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
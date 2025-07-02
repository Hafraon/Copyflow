"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Download, AlertTriangle, Crown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';

interface BillingData {
  currentPlan: string;
  billingCycle: string;
  nextBillingDate: string;
  paymentMethod: string;
  generationsUsed: number;
  generationsLimit: number;
  invoices: Array<{
    id: string;
    date: string;
    amount: number;
    status: string;
    downloadUrl: string;
  }>;
}

export default function BillingPage() {
  const { t } = useTranslation();
  const [billingData, setBillingData] = useState<BillingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBillingData();
  }, []);

  const fetchBillingData = async () => {
    try {
      // Тимчасові демо дані
      setBillingData({
        currentPlan: 'Free',
        billingCycle: 'monthly',
        nextBillingDate: '2024-02-01',
        paymentMethod: 'WayForPay',
        generationsUsed: 247,
        generationsLimit: 500,
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
    window.location.href = '/#pricing';
  };

  const handleDownloadInvoice = (invoiceId: string) => {
    console.log('Downloading invoice:', invoiceId);
    // В продакшні тут буде генерація PDF або завантаження файлу
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-background">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto">
          <DashboardHeader />
          <div className="container py-6">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/4"></div>
              <div className="h-32 bg-muted rounded"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const usagePercentage = billingData ? (billingData.generationsUsed / billingData.generationsLimit) * 100 : 0;

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="container py-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">
                {t('dashboard.billing.title', 'Billing & Subscription')}
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Current Plan */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-5 w-5 text-yellow-500" />
                    {t('dashboard.billing.currentPlan', 'Current Plan')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{billingData?.currentPlan}</h3>
                        <Badge variant="secondary">
                          {t('dashboard.billing.active', 'Active')}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {billingData?.currentPlan === 'Free' 
                          ? t('dashboard.billing.freePlan', 'Free plan with basic features')
                          : t('dashboard.billing.paidPlan', 'Premium plan with advanced features')
                        }
                      </p>
                    </div>
                    <Button onClick={handleUpgrade} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      {billingData?.currentPlan === 'Free' 
                        ? t('dashboard.billing.upgrade', 'Upgrade Plan')
                        : t('dashboard.billing.changePlan', 'Change Plan')
                      }
                    </Button>
                  </div>

                  {/* Usage Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {t('dashboard.billing.usage', 'Generations Used')}
                      </span>
                      <span className="font-medium">
                        {billingData?.generationsUsed}/{billingData?.generationsLimit}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                      />
                    </div>
                    {usagePercentage > 80 && (
                      <div className="flex items-center gap-2 text-amber-600 text-sm">
                        <AlertTriangle className="h-4 w-4" />
                        {t('dashboard.billing.limitWarning', 'You\'re approaching your monthly limit')}
                      </div>
                    )}
                  </div>

                  {billingData?.currentPlan !== 'Free' && (
                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {t('dashboard.billing.nextBilling', 'Next billing:')}
                        </span>
                        <span>{billingData ? new Date(billingData.nextBillingDate).toLocaleDateString() : 'N/A'}</span>
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
                    {t('dashboard.billing.paymentMethod', 'Payment Method')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="font-medium mb-1">WayForPay</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t('dashboard.billing.securePayments', 'Secure Ukrainian payment system')}
                    </p>
                    <Button variant="outline" size="sm">
                      {t('dashboard.billing.updatePayment', 'Update Payment')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Billing History */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {t('dashboard.billing.history', 'Billing History')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!billingData?.invoices.length ? (
                    <div className="text-center py-8">
                      <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {t('dashboard.billing.noHistory', 'No billing history yet')}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {t('dashboard.billing.historyNote', 'Your invoices will appear here after your first payment')}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {billingData.invoices.map((invoice) => (
                        <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">₴{invoice.amount}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(invoice.date).toLocaleDateString()} • {invoice.id}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant={invoice.status === 'paid' ? 'default' : 'secondary'}>
                              {invoice.status === 'paid' 
                                ? t('dashboard.billing.paid', 'Paid')
                                : t('dashboard.billing.pending', 'Pending')
                              }
                            </Badge>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDownloadInvoice(invoice.id)}
                            >
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
        </div>
      </main>
    </div>
  );
}
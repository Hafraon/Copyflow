"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap,
  Globe,
  Target,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

interface AnalyticsData {
  totalGenerations: number;
  thisMonth: number;
  lastMonth: number;
  topPlatforms: Array<{ name: string; count: number; percentage: number }>;
  topCategories: Array<{ name: string; count: number; percentage: number }>;
  languageDistribution: Array<{ language: string; count: number; percentage: number }>;
  weeklyStats: Array<{ day: string; generations: number }>;
}

export default function AnalyticsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    // Simulate loading analytics data
    const mockAnalytics: AnalyticsData = {
      totalGenerations: 247,
      thisMonth: 89,
      lastMonth: 67,
      topPlatforms: [
        { name: 'Amazon', count: 98, percentage: 40 },
        { name: 'Shopify', count: 74, percentage: 30 },
        { name: 'Universal', count: 49, percentage: 20 },
        { name: 'AliExpress', count: 26, percentage: 10 }
      ],
      topCategories: [
        { name: 'Electronics', count: 89, percentage: 36 },
        { name: 'Clothing', count: 62, percentage: 25 },
        { name: 'Home & Garden', count: 47, percentage: 19 },
        { name: 'Beauty', count: 32, percentage: 13 },
        { name: 'Sports', count: 17, percentage: 7 }
      ],
      languageDistribution: [
        { language: 'English', count: 148, percentage: 60 },
        { language: 'Ukrainian', count: 74, percentage: 30 },
        { language: 'German', count: 15, percentage: 6 },
        { language: 'Spanish', count: 10, percentage: 4 }
      ],
      weeklyStats: [
        { day: 'Mon', generations: 12 },
        { day: 'Tue', generations: 19 },
        { day: 'Wed', generations: 8 },
        { day: 'Thu', generations: 15 },
        { day: 'Fri', generations: 22 },
        { day: 'Sat', generations: 7 },
        { day: 'Sun', generations: 6 }
      ]
    };

    setTimeout(() => {
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, []);

  const growthPercentage = analytics ? 
    Math.round(((analytics.thisMonth - analytics.lastMonth) / analytics.lastMonth) * 100) : 0;

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <main className="flex-1 overflow-auto md:ml-0">
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
        
        <div className="container py-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">{t('dashboard.sidebar.analytics')}</h1>
                <p className="text-muted-foreground">Track your content generation performance</p>
              </div>
              <Badge variant="secondary" className="text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                Last 30 days
              </Badge>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="animate-pulse space-y-3">
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                        <div className="h-8 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/3"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <>
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Generations</p>
                          <p className="text-2xl font-bold">{analytics?.totalGenerations}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Zap className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">This Month</p>
                          <p className="text-2xl font-bold">{analytics?.thisMonth}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {growthPercentage > 0 ? (
                              <ArrowUp className="w-3 h-3 text-green-500" />
                            ) : (
                              <ArrowDown className="w-3 h-3 text-red-500" />
                            )}
                            <span className={`text-xs ${growthPercentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
                              {Math.abs(growthPercentage)}%
                            </span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Platforms Used</p>
                          <p className="text-2xl font-bold">{analytics?.topPlatforms.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                          <Target className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Languages</p>
                          <p className="text-2xl font-bold">{analytics?.languageDistribution.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                          <Globe className="w-6 h-6 text-orange-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts and Detailed Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Top Platforms */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Platforms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {analytics?.topPlatforms.map((platform, index) => (
                          <div key={platform.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <span className="text-xs font-bold">{index + 1}</span>
                              </div>
                              <span className="font-medium">{platform.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-24 bg-muted rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: `${platform.percentage}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium w-12 text-right">{platform.count}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Top Categories */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {analytics?.topCategories.map((category, index) => (
                          <div key={category.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                                <span className="text-xs font-bold">{index + 1}</span>
                              </div>
                              <span className="font-medium">{category.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-24 bg-muted rounded-full h-2">
                                <div 
                                  className="bg-secondary h-2 rounded-full" 
                                  style={{ width: `${category.percentage}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium w-12 text-right">{category.count}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Weekly Activity & Language Distribution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Weekly Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {analytics?.weeklyStats.map((day) => (
                          <div key={day.day} className="flex items-center justify-between">
                            <span className="font-medium w-12">{day.day}</span>
                            <div className="flex-1 mx-4">
                              <div className="w-full bg-muted rounded-full h-3">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" 
                                  style={{ width: `${(day.generations / 25) * 100}%` }}
                                />
                              </div>
                            </div>
                            <span className="text-sm font-medium w-8 text-right">{day.generations}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Language Distribution */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Language Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {analytics?.languageDistribution.map((lang, index) => (
                          <div key={lang.language} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                                <span className="text-xs font-bold">{index + 1}</span>
                              </div>
                              <span className="font-medium">{lang.language}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-24 bg-muted rounded-full h-2">
                                <div 
                                  className="bg-accent h-2 rounded-full" 
                                  style={{ width: `${lang.percentage}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium w-12 text-right">{lang.count}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
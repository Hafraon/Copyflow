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
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown,
  Zap,
  Star,
  ArrowUp,
  ArrowDown,
  Eye,
  Heart
} from 'lucide-react';

interface TrendData {
  id: string;
  keyword: string;
  category: string;
  platform: string;
  searchVolume: number;
  trend: 'up' | 'down' | 'stable';
  changePercentage: number;
  difficulty: 'easy' | 'medium' | 'hard';
  opportunity: number;
}

interface PopularProduct {
  id: string;
  name: string;
  category: string;
  platform: string;
  generationCount: number;
  successRate: number;
  trending: boolean;
}

export default function TrendsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [trends, setTrends] = useState<TrendData[]>([]);
  const [popularProducts, setPopularProducts] = useState<PopularProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    // Simulate loading trends data
    const mockTrends: TrendData[] = [
      {
        id: '1',
        keyword: 'wireless earbuds',
        category: 'electronics',
        platform: 'amazon',
        searchVolume: 89500,
        trend: 'up',
        changePercentage: 23,
        difficulty: 'medium',
        opportunity: 85
      },
      {
        id: '2',
        keyword: 'sustainable fashion',
        category: 'clothing',
        platform: 'shopify',
        searchVolume: 67200,
        trend: 'up',
        changePercentage: 45,
        difficulty: 'easy',
        opportunity: 92
      },
      {
        id: '3',
        keyword: 'smart home devices',
        category: 'electronics',
        platform: 'universal',
        searchVolume: 156000,
        trend: 'stable',
        changePercentage: 2,
        difficulty: 'hard',
        opportunity: 67
      },
      {
        id: '4',
        keyword: 'organic skincare',
        category: 'beauty',
        platform: 'etsy',
        searchVolume: 43800,
        trend: 'up',
        changePercentage: 18,
        difficulty: 'easy',
        opportunity: 88
      },
      {
        id: '5',
        keyword: 'gaming accessories',
        category: 'electronics',
        platform: 'amazon',
        searchVolume: 78900,
        trend: 'down',
        changePercentage: -12,
        difficulty: 'medium',
        opportunity: 72
      }
    ];

    const mockPopularProducts: PopularProduct[] = [
      {
        id: '1',
        name: 'Wireless Bluetooth Headphones',
        category: 'electronics',
        platform: 'amazon',
        generationCount: 156,
        successRate: 94,
        trending: true
      },
      {
        id: '2',
        name: 'Eco-Friendly Water Bottle',
        category: 'home',
        platform: 'shopify',
        generationCount: 89,
        successRate: 87,
        trending: true
      },
      {
        id: '3',
        name: 'Yoga Mat Premium',
        category: 'sports',
        platform: 'universal',
        generationCount: 67,
        successRate: 91,
        trending: false
      },
      {
        id: '4',
        name: 'LED Desk Lamp',
        category: 'home',
        platform: 'amazon',
        generationCount: 54,
        successRate: 89,
        trending: false
      }
    ];

    setTimeout(() => {
      setTrends(mockTrends);
      setPopularProducts(mockPopularProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'hard': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getOpportunityColor = (opportunity: number) => {
    if (opportunity >= 80) return 'text-green-600';
    if (opportunity >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

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
                <h1 className="text-3xl font-bold">{t('dashboard.sidebar.trending')}</h1>
                <p className="text-muted-foreground">Discover trending keywords and popular products</p>
              </div>
              <Badge variant="secondary" className="text-sm">
                <Zap className="w-3 h-3 mr-1" />
                Updated hourly
              </Badge>
            </div>

            {loading ? (
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="animate-pulse space-y-4">
                      <div className="h-6 bg-muted rounded w-1/4"></div>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-4 bg-muted rounded"></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <>
                {/* Trending Keywords */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Trending Keywords
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trends.map((trend, index) => (
                        <motion.div
                          key={trend.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              {trend.trend === 'up' ? (
                                <ArrowUp className="w-4 h-4 text-green-500" />
                              ) : trend.trend === 'down' ? (
                                <ArrowDown className="w-4 h-4 text-red-500" />
                              ) : (
                                <div className="w-4 h-4 bg-gray-400 rounded-full" />
                              )}
                              <span className={`text-sm font-medium ${
                                trend.trend === 'up' ? 'text-green-600' : 
                                trend.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                              }`}>
                                {Math.abs(trend.changePercentage)}%
                              </span>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold">{trend.keyword}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">{trend.category}</Badge>
                                <Badge variant="outline" className="text-xs">{trend.platform}</Badge>
                                <Badge className={`text-xs ${getDifficultyColor(trend.difficulty)}`}>
                                  {trend.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm font-medium">
                              {trend.searchVolume.toLocaleString()} searches/month
                            </div>
                            <div className={`text-sm ${getOpportunityColor(trend.opportunity)}`}>
                              {trend.opportunity}% opportunity
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Products */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-600" />
                      Popular Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {popularProducts.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{product.name}</h3>
                                {product.trending && (
                                  <Badge variant="secondary" className="text-xs">
                                    <Zap className="w-3 h-3 mr-1" />
                                    Trending
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{product.category}</Badge>
                                <Badge variant="outline" className="text-xs">{product.platform}</Badge>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Generations:</span>
                              <span className="font-medium">{product.generationCount}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Success Rate:</span>
                              <span className="font-medium text-green-600">{product.successRate}%</span>
                            </div>
                          </div>
                          
                          <Button variant="outline" size="sm" className="w-full mt-3">
                            <Eye className="w-3 h-3 mr-2" />
                            View Details
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Market Insights */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Market Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <TrendingUp className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Electronics Leading</h3>
                        <p className="text-sm text-muted-foreground">
                          Electronics category shows 34% growth this month with wireless products dominating
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Heart className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Sustainability Rising</h3>
                        <p className="text-sm text-muted-foreground">
                          Eco-friendly and sustainable products seeing 45% increase in search volume
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Star className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Premium Focus</h3>
                        <p className="text-sm text-muted-foreground">
                          Premium and luxury keywords showing higher conversion rates across all platforms
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
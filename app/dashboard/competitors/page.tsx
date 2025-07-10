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
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Search, 
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Star,
  Eye,
  BarChart3
} from 'lucide-react';

interface Competitor {
  id: string;
  name: string;
  domain: string;
  platform: string;
  category: string;
  ranking: number;
  traffic: number;
  keywords: number;
  contentScore: number;
  trend: 'up' | 'down' | 'stable';
  changePercentage: number;
}

interface CompetitorKeyword {
  keyword: string;
  position: number;
  volume: number;
  difficulty: 'easy' | 'medium' | 'hard';
  opportunity: number;
}

export default function CompetitorsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);
  const [competitorKeywords, setCompetitorKeywords] = useState<CompetitorKeyword[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    // Simulate loading competitors data
    const mockCompetitors: Competitor[] = [
      {
        id: '1',
        name: 'TechGear Pro',
        domain: 'techgearpro.com',
        platform: 'shopify',
        category: 'electronics',
        ranking: 1,
        traffic: 245000,
        keywords: 1250,
        contentScore: 94,
        trend: 'up',
        changePercentage: 12
      },
      {
        id: '2',
        name: 'ElectroWorld',
        domain: 'electroworld.com',
        platform: 'amazon',
        category: 'electronics',
        ranking: 2,
        traffic: 189000,
        keywords: 980,
        contentScore: 87,
        trend: 'stable',
        changePercentage: 2
      },
      {
        id: '3',
        name: 'GadgetHub',
        domain: 'gadgethub.store',
        platform: 'universal',
        category: 'electronics',
        ranking: 3,
        traffic: 156000,
        keywords: 756,
        contentScore: 82,
        trend: 'down',
        changePercentage: -8
      },
      {
        id: '4',
        name: 'SmartDevices Co',
        domain: 'smartdevices.co',
        platform: 'shopify',
        category: 'electronics',
        ranking: 4,
        traffic: 134000,
        keywords: 645,
        contentScore: 79,
        trend: 'up',
        changePercentage: 15
      }
    ];

    const mockKeywords: CompetitorKeyword[] = [
      {
        keyword: 'wireless headphones',
        position: 3,
        volume: 89500,
        difficulty: 'medium',
        opportunity: 85
      },
      {
        keyword: 'bluetooth speakers',
        position: 1,
        volume: 67200,
        difficulty: 'easy',
        opportunity: 92
      },
      {
        keyword: 'gaming mouse',
        position: 5,
        volume: 45600,
        difficulty: 'hard',
        opportunity: 67
      },
      {
        keyword: 'smartphone accessories',
        position: 2,
        volume: 78900,
        difficulty: 'medium',
        opportunity: 78
      }
    ];

    setTimeout(() => {
      setCompetitors(mockCompetitors);
      setCompetitorKeywords(mockKeywords);
      setSelectedCompetitor(mockCompetitors[0]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredCompetitors = competitors.filter(competitor =>
    competitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    competitor.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'hard': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
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
                <h1 className="text-3xl font-bold">{t('dashboard.sidebar.competitors')}</h1>
                <p className="text-muted-foreground">Analyze competitor performance and strategies</p>
              </div>
              <Badge variant="secondary" className="text-sm">
                <Users className="w-3 h-3 mr-1" />
                {competitors.length} competitors tracked
              </Badge>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="animate-pulse space-y-4">
                        <div className="h-6 bg-muted rounded w-1/4"></div>
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-16 bg-muted rounded"></div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="animate-pulse space-y-4">
                        <div className="h-6 bg-muted rounded w-1/2"></div>
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-4 bg-muted rounded"></div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Competitors List */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Competitor Analysis</CardTitle>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            placeholder="Search competitors..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 w-64"
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {filteredCompetitors.map((competitor, index) => (
                          <motion.div
                            key={competitor.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                              selectedCompetitor?.id === competitor.id ? 'border-primary bg-primary/5' : ''
                            }`}
                            onClick={() => setSelectedCompetitor(competitor)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                                  #{competitor.ranking}
                                </div>
                                
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold">{competitor.name}</h3>
                                    <Badge variant="outline" className="text-xs">{competitor.platform}</Badge>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <ExternalLink className="w-3 h-3" />
                                    {competitor.domain}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="text-right">
                                <div className="flex items-center gap-2 mb-1">
                                  {competitor.trend === 'up' ? (
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                  ) : competitor.trend === 'down' ? (
                                    <TrendingDown className="w-4 h-4 text-red-500" />
                                  ) : (
                                    <div className="w-4 h-4 bg-gray-400 rounded-full" />
                                  )}
                                  <span className={`text-sm font-medium ${
                                    competitor.trend === 'up' ? 'text-green-600' : 
                                    competitor.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                                  }`}>
                                    {Math.abs(competitor.changePercentage)}%
                                  </span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {competitor.traffic.toLocaleString()} visits/month
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                              <div className="text-center">
                                <div className="text-lg font-bold">{competitor.keywords}</div>
                                <div className="text-xs text-muted-foreground">Keywords</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold">{competitor.contentScore}</div>
                                <div className="text-xs text-muted-foreground">Content Score</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-green-600">
                                  {competitor.ranking === 1 ? '🏆' : competitor.ranking === 2 ? '🥈' : competitor.ranking === 3 ? '🥉' : '📊'}
                                </div>
                                <div className="text-xs text-muted-foreground">Rank</div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Competitor Details */}
                <div>
                  {selectedCompetitor && (
                    <div className="space-y-6">
                      {/* Competitor Overview */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Eye className="w-5 h-5" />
                            {selectedCompetitor.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Domain:</span>
                              <span className="text-sm font-medium">{selectedCompetitor.domain}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Platform:</span>
                              <Badge variant="outline">{selectedCompetitor.platform}</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Category:</span>
                              <span className="text-sm font-medium">{selectedCompetitor.category}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Monthly Traffic:</span>
                              <span className="text-sm font-medium">{selectedCompetitor.traffic.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Content Score:</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-muted rounded-full h-2">
                                  <div 
                                    className="bg-primary h-2 rounded-full" 
                                    style={{ width: `${selectedCompetitor.contentScore}%` }}
                                  />
                                </div>
                                <span className="text-sm font-medium">{selectedCompetitor.contentScore}</span>
                              </div>
                            </div>
                          </div>
                          
                          <Button variant="outline" className="w-full mt-4">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Website
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Top Keywords */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            Top Keywords
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {competitorKeywords.map((keyword, index) => (
                              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                  <div className="font-medium text-sm">{keyword.keyword}</div>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="outline" className="text-xs">
                                      #{keyword.position}
                                    </Badge>
                                    <Badge className={`text-xs ${getDifficultyColor(keyword.difficulty)}`}>
                                      {keyword.difficulty}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium">{keyword.volume.toLocaleString()}</div>
                                  <div className="text-xs text-muted-foreground">{keyword.opportunity}% opp</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
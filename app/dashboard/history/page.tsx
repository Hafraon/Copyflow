"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Search, 
  Download, 
  Trash2, 
  Eye,
  Calendar,
  Filter
} from 'lucide-react';
import { format } from 'date-fns';

interface GenerationHistory {
  id: string;
  productName: string;
  category: string;
  platform: string;
  language: string;
  createdAt: string;
  content: {
    productTitle: string;
    productDescription: string;
    seoTitle: string;
    metaDescription: string;
    callToAction: string;
  };
}

export default function HistoryPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [history, setHistory] = useState<GenerationHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    // Simulate loading history data
    const mockHistory: GenerationHistory[] = [
      {
        id: '1',
        productName: 'Wireless Headphones',
        category: 'electronics',
        platform: 'amazon',
        language: 'en',
        createdAt: '2024-01-15T10:30:00Z',
        content: {
          productTitle: '🎧 Premium Wireless Headphones - Crystal Clear Sound ⭐',
          productDescription: 'Experience premium audio quality with our wireless headphones...',
          seoTitle: 'Premium Wireless Headphones | Buy Online',
          metaDescription: 'Shop premium wireless headphones with crystal clear sound...',
          callToAction: '🛒 Buy Now'
        }
      },
      {
        id: '2',
        productName: 'Gaming Laptop',
        category: 'electronics',
        platform: 'universal',
        language: 'uk',
        createdAt: '2024-01-14T15:45:00Z',
        content: {
          productTitle: '💻 Ігровий ноутбук - Потужна продуктивність ⚡',
          productDescription: 'Відчуйте неймовірну швидкість та продуктивність...',
          seoTitle: 'Ігровий ноутбук | Купити онлайн',
          metaDescription: 'Купуйте ігровий ноутбук з потужною продуктивністю...',
          callToAction: '🛒 Замовити зараз'
        }
      }
    ];

    setTimeout(() => {
      setHistory(mockHistory);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredHistory = history.filter(item => {
    const matchesSearch = item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.content.productTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || item.platform === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const handleExport = (item: GenerationHistory) => {
    const exportData = {
      productName: item.productName,
      ...item.content,
      metadata: {
        category: item.category,
        platform: item.platform,
        language: item.language,
        createdAt: item.createdAt
      }
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `copyflow-${item.productName.replace(/\s+/g, '-').toLowerCase()}.json`);
    linkElement.click();
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
                <h1 className="text-3xl font-bold">{t('dashboard.sidebar.history')}</h1>
                <p className="text-muted-foreground">View and manage your generated content</p>
              </div>
              <Badge variant="secondary" className="text-sm">
                {filteredHistory.length} items
              </Badge>
            </div>

            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search by product name or title..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={selectedFilter === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedFilter('all')}
                    >
                      All
                    </Button>
                    <Button
                      variant={selectedFilter === 'amazon' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedFilter('amazon')}
                    >
                      Amazon
                    </Button>
                    <Button
                      variant={selectedFilter === 'shopify' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedFilter('shopify')}
                    >
                      Shopify
                    </Button>
                    <Button
                      variant={selectedFilter === 'universal' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedFilter('universal')}
                    >
                      Universal
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* History List */}
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="animate-pulse space-y-3">
                        <div className="h-4 bg-muted rounded w-1/4"></div>
                        <div className="h-3 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredHistory.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No history found</h3>
                  <p className="text-muted-foreground">
                    {searchQuery ? 'Try adjusting your search terms' : 'Start generating content to see your history here'}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredHistory.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="font-semibold text-lg">{item.productName}</h3>
                              <Badge variant="outline">{item.platform}</Badge>
                              <Badge variant="secondary">{item.language}</Badge>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                              <div>
                                <span className="text-sm font-medium text-muted-foreground">Title: </span>
                                <span className="text-sm">{item.content.productTitle}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-muted-foreground">Description: </span>
                                <span className="text-sm">{item.content.productDescription.substring(0, 100)}...</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {format(new Date(item.createdAt), 'MMM dd, yyyy HH:mm')}
                            </div>
                          </div>
                          
                          <div className="flex gap-2 ml-4">
                            <Button variant="ghost" size="sm" onClick={() => handleExport(item)}>
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleDelete(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
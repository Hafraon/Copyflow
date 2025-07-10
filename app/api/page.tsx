'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Key, Zap, Shield, Globe, BarChart3 } from 'lucide-react';

export default function APIPage() {
  const { t } = useTranslation();

  const endpoints = [
    {
      method: 'POST',
      path: '/api/generate',
      description: 'Generate product content',
      parameters: ['productName', 'category', 'writingStyle', 'language', 'platform'],
      response: 'Generated content object'
    },
    {
      method: 'POST',
      path: '/api/generate-advanced',
      description: 'Advanced generation with multiple products',
      parameters: ['products[]', 'options', 'platform', 'exportFormat'],
      response: 'Batch generated content'
    },
    {
      method: 'GET',
      path: '/api/usage',
      description: 'Get current usage statistics',
      parameters: ['api_key'],
      response: 'Usage statistics object'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Generation',
      description: 'Generate content in under 3 seconds'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Support for 11 languages out of the box'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Detailed usage analytics and reporting'
    }
  ];

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
            <h1 className="text-4xl font-bold mb-4">
              CopyFlow API Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate AI-powered content generation into your applications with our RESTful API
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Get your API key</h3>
                  <p className="text-muted-foreground">Sign up for a CopyFlow account and generate your API key in the dashboard.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Make your first request</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
{`curl -X POST https://api.copyflow.ai/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "productName": "Wireless Headphones",
    "category": "electronics",
    "writingStyle": "professional",
    "language": "en",
    "platform": "amazon"
  }'`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Endpoints */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                API Endpoints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant={endpoint.method === 'POST' ? 'default' : 'secondary'}>
                        {endpoint.method}
                      </Badge>
                      <code className="font-mono text-sm">{endpoint.path}</code>
                    </div>
                    <p className="text-muted-foreground mb-3">{endpoint.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Parameters</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {endpoint.parameters.map((param, i) => (
                            <li key={i}>• {param}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Response</h4>
                        <p className="text-sm text-muted-foreground">{endpoint.response}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rate Limits */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Rate Limits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Free Plan</h3>
                  <p className="text-2xl font-bold text-muted-foreground">100</p>
                  <p className="text-sm text-muted-foreground">requests per hour</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Pro Plan</h3>
                  <p className="text-2xl font-bold text-primary">1,000</p>
                  <p className="text-sm text-muted-foreground">requests per hour</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Business Plan</h3>
                  <p className="text-2xl font-bold text-primary">10,000</p>
                  <p className="text-sm text-muted-foreground">requests per hour</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers using CopyFlow API to power their applications
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get API Key</Button>
              <Button variant="outline" size="lg">View Examples</Button>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
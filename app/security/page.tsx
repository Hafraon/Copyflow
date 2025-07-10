'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Key, 
  FileCheck,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function SecurityPage() {
  const { t } = useTranslation();

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using AES-256 encryption',
      status: 'implemented'
    },
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'Multi-factor authentication and OAuth 2.0 integration',
      status: 'implemented'
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Hosted on secure cloud infrastructure with 99.9% uptime',
      status: 'implemented'
    },
    {
      icon: Key,
      title: 'API Security',
      description: 'Rate limiting, API key authentication, and request validation',
      status: 'implemented'
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'GDPR compliant with strict data handling policies',
      status: 'implemented'
    },
    {
      icon: FileCheck,
      title: 'Regular Audits',
      description: 'Regular security audits and penetration testing',
      status: 'ongoing'
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified', year: '2024' },
    { name: 'GDPR Compliance', status: 'Compliant', year: '2024' },
    { name: 'ISO 27001', status: 'In Progress', year: '2024' },
    { name: 'CCPA Compliance', status: 'Compliant', year: '2024' }
  ];

  const securityPractices = [
    'Regular security training for all employees',
    'Automated vulnerability scanning and monitoring',
    'Incident response plan and 24/7 monitoring',
    'Data backup and disaster recovery procedures',
    'Secure development lifecycle (SDLC)',
    'Third-party security assessments'
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
            <h1 className="text-4xl font-bold mb-4">Security & Compliance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your data security and privacy are our top priorities. Learn about our comprehensive security measures and compliance standards.
            </p>
          </div>

          {/* Security Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Security Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{feature.title}</h3>
                          <Badge 
                            variant={feature.status === 'implemented' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {feature.status === 'implemented' ? (
                              <CheckCircle className="w-3 h-3 mr-1" />
                            ) : (
                              <AlertTriangle className="w-3 h-3 mr-1" />
                            )}
                            {feature.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={cert.name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">Updated {cert.year}</p>
                      </div>
                      <Badge 
                        variant={cert.status === 'Certified' || cert.status === 'Compliant' ? 'default' : 'secondary'}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Security Practices */}
            <Card>
              <CardHeader>
                <CardTitle>Security Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {securityPractices.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{practice}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Protection */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Data Protection & Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">What data we collect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Account information (name, email)</li>
                    <li>• Product data you input for generation</li>
                    <li>• Usage analytics and performance metrics</li>
                    <li>• Payment information (processed by secure providers)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">How we protect it</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• End-to-end encryption for all data transmission</li>
                    <li>• Encrypted storage with regular security updates</li>
                    <li>• Access controls and audit logging</li>
                    <li>• Regular data backups and disaster recovery</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incident Response */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Incident Response</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 monitoring and automated threat detection systems
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Immediate containment and mitigation procedures
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Recovery</h3>
                  <p className="text-sm text-muted-foreground">
                    Full system restoration and post-incident analysis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Security Team */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Security Questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you have security concerns or questions about our practices, please contact our security team.
            </p>
            <div className="flex gap-4 justify-center">
              <Card className="p-6 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Security Team</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Report security vulnerabilities
                </p>
                <a href="mailto:security@copyflow.com" className="text-primary hover:underline text-sm">
                  security@copyflow.com
                </a>
              </Card>
              
              <Card className="p-6 text-center">
                <FileCheck className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Compliance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Questions about compliance
                </p>
                <a href="mailto:compliance@copyflow.com" className="text-primary hover:underline text-sm">
                  compliance@copyflow.com
                </a>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
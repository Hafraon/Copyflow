'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  MessageSquare, 
  Star, 
  Lightbulb, 
  Bug, 
  Heart,
  Send,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

export default function FeedbackPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    rating: 0,
    title: '',
    description: '',
    email: '',
    name: ''
  });

  const feedbackTypes = [
    { id: 'feature', label: 'Feature Request', icon: Lightbulb, color: 'bg-blue-500' },
    { id: 'bug', label: 'Bug Report', icon: Bug, color: 'bg-red-500' },
    { id: 'improvement', label: 'Improvement', icon: Star, color: 'bg-yellow-500' },
    { id: 'general', label: 'General Feedback', icon: MessageSquare, color: 'bg-green-500' },
    { id: 'compliment', label: 'Compliment', icon: Heart, color: 'bg-pink-500' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Feedback submitted:', formData);
      setSubmitted(true);
      toast.success('Thank you for your feedback!');
    } catch (error) {
      toast.error('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your feedback has been submitted successfully. We appreciate you taking the time to help us improve CopyFlow.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setSubmitted(false)}>
                Submit Another Feedback
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                Back to Home
              </Button>
            </div>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">We Value Your Feedback</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us improve CopyFlow by sharing your thoughts, suggestions, or reporting issues
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feedback Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Share Your Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Feedback Type */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">
                        What type of feedback do you have?
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {feedbackTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.type === type.id
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, type: type.id }))}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center`}>
                                <type.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="font-medium">{type.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">
                        How would you rate your overall experience?
                      </Label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingClick(star)}
                            className={`w-8 h-8 transition-colors ${
                              star <= formData.rating
                                ? 'text-yellow-500'
                                : 'text-muted-foreground hover:text-yellow-400'
                            }`}
                          >
                            <Star className="w-full h-full fill-current" />
                          </button>
                        ))}
                        {formData.rating > 0 && (
                          <span className="ml-2 text-sm text-muted-foreground">
                            {formData.rating} out of 5 stars
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        placeholder="Brief summary of your feedback"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        required
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Please provide detailed feedback..."
                        rows={6}
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        required
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name (Optional)</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email (Optional)</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting || !formData.type || !formData.title || !formData.description}
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Feedback
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Community Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Feature Requests</span>
                    <Badge variant="secondary">127</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Bug Reports</span>
                    <Badge variant="secondary">23</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Improvements</span>
                    <Badge variant="secondary">89</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Compliments</span>
                    <Badge variant="secondary">456</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Feedback Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Be specific and detailed in your feedback</p>
                  <p>• Include steps to reproduce for bug reports</p>
                  <p>• Suggest solutions when possible</p>
                  <p>• Be respectful and constructive</p>
                  <p>• Check existing feedback to avoid duplicates</p>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to feedback within 24-48 hours. 
                    Critical bug reports are prioritized and addressed immediately.
                  </p>
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
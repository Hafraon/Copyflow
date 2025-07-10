// Usage tracking and analytics for production monitoring
interface UsageEvent {
  userId?: string;
  sessionId: string;
  event: string;
  data?: any;
  timestamp: number;
  userAgent?: string;
  ip?: string;
}

interface UserUsage {
  userId: string;
  plan: 'free' | 'pro' | 'business';
  generationsUsed: number;
  generationsLimit: number;
  lastUsed: number;
  features: string[];
}

class UsageTracker {
  private events: UsageEvent[] = [];
  private userUsage: Map<string, UserUsage> = new Map();

  // Track user events
  track(event: Omit<UsageEvent, 'timestamp'>): void {
    const usageEvent: UsageEvent = {
      ...event,
      timestamp: Date.now()
    };
    
    this.events.push(usageEvent);
    
    // Keep only last 10000 events in memory
    if (this.events.length > 10000) {
      this.events = this.events.slice(-10000);
    }
    
    // Update user usage if it's a generation event
    if (event.event === 'content_generated' && event.userId) {
      this.updateUserUsage(event.userId, event.data);
    }
  }

  // Update user usage statistics
  private updateUserUsage(userId: string, data: any): void {
    const usage = this.userUsage.get(userId) || {
      userId,
      plan: 'free',
      generationsUsed: 0,
      generationsLimit: this.getGenerationLimit('free'),
      lastUsed: Date.now(),
      features: []
    };

    usage.generationsUsed += data?.productCount || 1;
    usage.lastUsed = Date.now();
    
    // Track features used
    if (data?.features) {
      data.features.forEach((feature: string) => {
        if (!usage.features.includes(feature)) {
          usage.features.push(feature);
        }
      });
    }

    this.userUsage.set(userId, usage);
  }

  // Get generation limit based on plan
  private getGenerationLimit(plan: string): number {
    switch (plan) {
      case 'pro':
        return 1000;
      case 'business':
        return 10000;
      default:
        return 100;
    }
  }

  // Check if user can generate content
  canGenerate(userId: string, productCount: number = 1): {
    allowed: boolean;
    remaining: number;
    limit: number;
  } {
    const usage = this.userUsage.get(userId);
    
    if (!usage) {
      return {
        allowed: true,
        remaining: this.getGenerationLimit('free') - productCount,
        limit: this.getGenerationLimit('free')
      };
    }

    const remaining = usage.generationsLimit - usage.generationsUsed;
    
    return {
      allowed: remaining >= productCount,
      remaining: Math.max(0, remaining - productCount),
      limit: usage.generationsLimit
    };
  }

  // Get user usage statistics
  getUserUsage(userId: string): UserUsage | null {
    return this.userUsage.get(userId) || null;
  }

  // Update user plan
  updateUserPlan(userId: string, plan: 'free' | 'pro' | 'business'): void {
    const usage = this.userUsage.get(userId) || {
      userId,
      plan: 'free',
      generationsUsed: 0,
      generationsLimit: this.getGenerationLimit('free'),
      lastUsed: Date.now(),
      features: []
    };

    usage.plan = plan;
    usage.generationsLimit = this.getGenerationLimit(plan);
    
    this.userUsage.set(userId, usage);
  }

  // Get analytics data
  getAnalytics(timeframe: 'hour' | 'day' | 'week' | 'month' = 'day'): {
    totalEvents: number;
    uniqueUsers: number;
    topEvents: Array<{ event: string; count: number }>;
    generationsCount: number;
  } {
    const now = Date.now();
    const timeframes = {
      hour: 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000
    };
    
    const cutoff = now - timeframes[timeframe];
    const recentEvents = this.events.filter(event => event.timestamp > cutoff);
    
    const uniqueUsers = new Set(
      recentEvents
        .filter(event => event.userId)
        .map(event => event.userId)
    ).size;
    
    const eventCounts = recentEvents.reduce((acc, event) => {
      acc[event.event] = (acc[event.event] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topEvents = Object.entries(eventCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([event, count]) => ({ event, count }));
    
    const generationsCount = eventCounts['content_generated'] || 0;
    
    return {
      totalEvents: recentEvents.length,
      uniqueUsers,
      topEvents,
      generationsCount
    };
  }

  // Export usage data (for backup/analysis)
  exportData(): {
    events: UsageEvent[];
    userUsage: Array<UserUsage>;
    exportedAt: number;
  } {
    return {
      events: this.events,
      userUsage: Array.from(this.userUsage.values()),
      exportedAt: Date.now()
    };
  }

  // Reset user usage (for new billing cycle)
  resetUserUsage(userId: string): void {
    const usage = this.userUsage.get(userId);
    if (usage) {
      usage.generationsUsed = 0;
      this.userUsage.set(userId, usage);
    }
  }
}

// Global usage tracker instance
export const usageTracker = new UsageTracker();

// Helper functions for common tracking scenarios
export function trackContentGeneration(
  userId: string | undefined,
  sessionId: string,
  data: {
    productCount: number;
    platform: string;
    language: string;
    features: string[];
  }
): void {
  usageTracker.track({
    userId,
    sessionId,
    event: 'content_generated',
    data
  });
}

export function trackUserLogin(userId: string, sessionId: string): void {
  usageTracker.track({
    userId,
    sessionId,
    event: 'user_login'
  });
}

export function trackFeatureUsage(
  userId: string | undefined,
  sessionId: string,
  feature: string
): void {
  usageTracker.track({
    userId,
    sessionId,
    event: 'feature_used',
    data: { feature }
  });
}

export function trackError(
  userId: string | undefined,
  sessionId: string,
  error: string,
  context?: any
): void {
  usageTracker.track({
    userId,
    sessionId,
    event: 'error_occurred',
    data: { error, context }
  });
}
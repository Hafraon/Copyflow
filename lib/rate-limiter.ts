// Rate limiting implementation for production use
interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  keyGenerator?: (req: any) => string; // Function to generate unique keys
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

class RateLimiter {
  private store: RateLimitStore = {};
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
    
    // Clean up expired entries every minute
    setInterval(() => {
      this.cleanup();
    }, 60000);
  }

  async isAllowed(identifier: string): Promise<{
    allowed: boolean;
    remaining: number;
    resetTime: number;
  }> {
    const now = Date.now();
    const key = identifier;
    
    // Get or create entry
    let entry = this.store[key];
    
    if (!entry || now > entry.resetTime) {
      // Create new entry or reset expired one
      entry = {
        count: 0,
        resetTime: now + this.config.windowMs
      };
      this.store[key] = entry;
    }
    
    // Check if limit exceeded
    if (entry.count >= this.config.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime
      };
    }
    
    // Increment counter
    entry.count++;
    
    return {
      allowed: true,
      remaining: this.config.maxRequests - entry.count,
      resetTime: entry.resetTime
    };
  }

  private cleanup(): void {
    const now = Date.now();
    Object.keys(this.store).forEach(key => {
      if (this.store[key].resetTime < now) {
        delete this.store[key];
      }
    });
  }

  reset(identifier: string): void {
    delete this.store[identifier];
  }
}

// Create rate limiters for different endpoints
export const apiRateLimiter = new RateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 100 // 100 requests per hour for free users
});

export const proApiRateLimiter = new RateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 1000 // 1000 requests per hour for pro users
});

export const businessApiRateLimiter = new RateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 10000 // 10000 requests per hour for business users
});

// Helper function to get appropriate rate limiter based on user plan
export function getRateLimiter(userPlan: string = 'free'): RateLimiter {
  switch (userPlan.toLowerCase()) {
    case 'pro':
      return proApiRateLimiter;
    case 'business':
    case 'enterprise':
      return businessApiRateLimiter;
    default:
      return apiRateLimiter;
  }
}

// Middleware function for Next.js API routes
export function withRateLimit(handler: any, userPlan: string = 'free') {
  return async (req: any, res: any) => {
    const rateLimiter = getRateLimiter(userPlan);
    const identifier = req.ip || req.headers['x-forwarded-for'] || 'anonymous';
    
    const result = await rateLimiter.isAllowed(identifier);
    
    // Set rate limit headers
    res.setHeader('X-RateLimit-Limit', rateLimiter['config'].maxRequests);
    res.setHeader('X-RateLimit-Remaining', result.remaining);
    res.setHeader('X-RateLimit-Reset', Math.ceil(result.resetTime / 1000));
    
    if (!result.allowed) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        message: `Too many requests. Limit: ${rateLimiter['config'].maxRequests} per hour`,
        resetTime: result.resetTime
      });
    }
    
    return handler(req, res);
  };
}
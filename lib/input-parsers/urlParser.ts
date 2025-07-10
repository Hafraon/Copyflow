import { ParsedProduct } from '@/types/magic-input';

export const URL_REGEX = /^https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}/i;

export function isValidUrl(url: string): boolean {
  return URL_REGEX.test(url);
}

export function detectPlatform(url: string): string {
  const lowerUrl = url.toLowerCase();
  
  if (lowerUrl.includes('amazon.')) return 'Amazon';
  if (lowerUrl.includes('aliexpress.')) return 'AliExpress';
  if (lowerUrl.includes('shopify')) return 'Shopify';
  if (lowerUrl.includes('etsy.')) return 'Etsy';
  if (lowerUrl.includes('ebay.')) return 'eBay';
  if (lowerUrl.includes('rozetka.com.ua')) return 'Rozetka';
  if (lowerUrl.includes('prom.ua')) return 'Prom.ua';
  if (lowerUrl.includes('horoshop.ua')) return 'Хорошоп';
  
  return 'Unknown Platform';
}

export async function parseUrl(url: string): Promise<ParsedProduct> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const platform = detectPlatform(url);
  
  // Mock product data based on platform
  const mockProducts: Record<string, ParsedProduct> = {
    'Amazon': {
      name: 'Premium Wireless Headphones',
      price: '$89.99',
      description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
      url: url,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    'AliExpress': {
      name: 'Smart Fitness Tracker',
      price: '$24.99',
      description: 'Advanced fitness tracker with heart rate monitoring and sleep tracking.',
      url: url,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    'Shopify': {
      name: 'Organic Cotton T-Shirt',
      price: '$29.99',
      description: 'Comfortable organic cotton t-shirt available in multiple colors and sizes.',
      url: url,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    'Rozetka': {
      name: 'Смартфон Samsung Galaxy',
      price: '15,999 ₴',
      description: 'Потужний смартфон з відмінною камерою та довгим часом роботи батареї.',
      url: url,
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    'Хорошоп': {
      name: 'Кавоварка автоматична',
      price: '8,500 ₴',
      description: 'Автоматична кавоварка з вбудованою кавомолкою та програмами приготування.',
      url: url,
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  };

  return mockProducts[platform] || {
    name: `Product from ${platform}`,
    price: '$49.99',
    description: `High-quality product imported from ${platform} with excellent features and competitive pricing.`,
    url: url,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=300'
  };
}
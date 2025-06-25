import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CopyFlow - AI Product Description Generator',
  description: 'Generate SEO-optimized product descriptions, titles, and CTAs in seconds with AI-powered technology',
  keywords: 'AI, product descriptions, SEO, e-commerce, content generation, copywriting',
  authors: [{ name: 'CopyFlow Team' }],
  creator: 'CopyFlow',
  publisher: 'CopyFlow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://copyflow.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'uk-UA': '/uk-UA',
    },
  },
  openGraph: {
    title: 'CopyFlow - AI Product Description Generator',
    description: 'Generate SEO-optimized product descriptions, titles, and CTAs in seconds',
    url: 'https://copyflow.ai',
    siteName: 'CopyFlow',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CopyFlow - AI Product Description Generator',
    description: 'Generate SEO-optimized product descriptions, titles, and CTAs in seconds',
    creator: '@copyflow',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
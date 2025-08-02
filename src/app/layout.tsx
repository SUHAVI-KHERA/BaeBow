import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/CartProvider';
import { WishlistProvider } from '@/context/WishlistProvider';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';

export const metadata: Metadata = {
  title: 'BaeBow: Confidence in Every Curve',
  description: 'Stylish, comfortable, and body-inclusive western officewear for Indian women.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <WishlistProvider>
          <CartProvider>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
            <Toaster />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}

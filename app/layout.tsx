import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BP Media + Partners | Experiential Marketing & Event Production Agency',
  description: 'BP Media + Partners is a premium experiential marketing, event production, and public relations agency based in Miami with international operations. We create unforgettable brand experiences for global brands.',
  keywords: ['experiential marketing', 'event production', 'public relations', 'brand activations', 'Miami agency', 'corporate events', 'cultural productions'],
  authors: [{ name: 'BP Media + Partners' }],
  openGraph: {
    title: 'BP Media + Partners | Experiential Marketing & Event Production',
    description: 'We create unforgettable brand experiences for global brands.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BP Media + Partners',
    description: 'Premium experiential marketing and event production agency.',
  },
  
icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

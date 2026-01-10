import type { ReactNode } from 'react'

import { Inter, Open_Sans, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: 'Demo: %s - Ink | Shadcn Studio',
    default: 'Demo: Ink - Blog Landing Page | Shadcn Studio'
  },
  description:
    'Explore the Ink Landing Page, a modern and creative template designed to showcase your ideas and projects.',
  robots: 'index,follow',
  keywords: ['Ink Landing Page', 'creative template', 'modern design', 'showcase projects'],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: {
      template: 'Demo: %s - Ink | Shadcn Studio',
      default: 'Demo: Ink - Blog Landing Page | Shadcn Studio'
    },
    description:
      'Explore the Ink Landing Page, a modern and creative template designed to showcase your ideas and projects.',
    type: 'website',
    siteName: 'Ink - Blog Landing Page',
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Ink - Blog Landing Page | Shadcn Studio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: 'Demo: %s - Ink | Shadcn Studio',
      default: 'Demo: Ink - Blog Landing Page | Shadcn Studio'
    },
    description:
      'Explore the Ink Landing Page, a modern and creative template designed to showcase your ideas and projects.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        `${inter.variable}, ${openSans.variable}, ${geistMono.variable}`,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout

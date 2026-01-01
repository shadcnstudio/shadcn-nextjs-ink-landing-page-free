import type { ReactNode } from 'react'

import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@/lib/utils'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s - Template Name',
    default: 'Template Name - Template Slogan'
  },
  description: 'Template Description',
  robots: 'index,follow',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: {
      template: '%s - Template Name',
      default: 'Template Name - Template Slogan'
    },
    description: 'Template Description',
    type: 'website',
    siteName: 'Template Name',
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    images: [
      {
        url: 'https://template.com/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Template Slogan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s - Template Name',
      default: 'Template Name - Template Slogan'
    },
    description: 'Template Description'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(geistSans.variable, geistMono.variable, 'flex min-h-full w-full scroll-smooth antialiased')}
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

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
    template: '%s - Ink Landing Page',
    default: 'Ink Landing Page - Your Gateway to Creativity'
  },
  description:
    'Explore the Ink Landing Page, a modern and creative template designed to showcase your ideas and projects.',
  robots: 'index,follow',
  keywords: ['Ink Landing Page', 'creative template', 'modern design', 'showcase projects'],
  openGraph: {
    title: {
      template: '%s - Ink Landing Page',
      default: 'Ink Landing Page - Your Gateway to Creativity'
    },
    description:
      'Explore the Ink Landing Page, a modern and creative template designed to showcase your ideas and projects.',
    type: 'website',
    siteName: 'Ink Landing Page',
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    images: [
      {
        url: 'https://template.com/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Ink Landing Page - Your Gateway to Creativity'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s - Ink Landing Page',
      default: 'Ink Landing Page - Your Gateway to Creativity'
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

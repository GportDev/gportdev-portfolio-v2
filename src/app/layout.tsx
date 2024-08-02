import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/Header/Header'
import { Providers } from '@/components/providers/Providers'
import './globals.css'

const GeistMono = localFont({
  src: [
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-UltraBlack.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-Black.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geist-Mono/GeistMono-UltraLight.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    template: '%s | GportDev',
    default: 'GportDev | Gabriel Porteiro',
  },
  description: "A normal man using computers to solve human's problems.",
  keywords: [],
  openGraph: {
    images: '/share-image.png',
    type: 'website',
    locale: 'pt-BR',
    url: 'https://www.gportdev.com',
    siteName: 'GportDev',
    title: 'GportDev | Gabriel Porteiro',
    description: "A normal man using computers to solve human's problems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${GeistMono.className} mx-auto min-h-screen max-w-[1200px] text-balance pb-16`}
      >
        <SpeedInsights />
        <Analytics />
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

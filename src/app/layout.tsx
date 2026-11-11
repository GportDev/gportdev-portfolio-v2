import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Providers } from '@/components/providers/Providers'
import { profile } from '@/lib/data/profile'
import './globals.css'

const geistMono = localFont({
  src: '../../public/fonts/Geist-Mono/GeistMonoVariableVF.woff2',
  weight: '100 900',
  variable: '--font-geist-mono',
  display: 'swap',
})

const description =
  'Gabriel Porteiro, full-stack software engineer at SEO Gets and founder of Fondor Labs. React, TypeScript, Go and Python. Former Brazilian Air Force pilot. Live resume and portfolio.'

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    template: '%s | GportDev',
    default: 'Gabriel Porteiro · Full-Stack Software Engineer',
  },
  description,
  keywords: [
    'Gabriel Porteiro',
    'GportDev',
    'full-stack software engineer',
    'React',
    'TypeScript',
    'Go',
    'Python',
    'Next.js',
    'SaaS',
    'Stripe',
    'MCP',
    'SEO Gets',
    'Fondor Labs',
    'Cookeville',
    'Tennessee Tech',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    images: '/share-image.png',
    type: 'profile',
    locale: 'en_US',
    url: profile.site,
    siteName: 'GportDev',
    title: 'Gabriel Porteiro · Full-Stack Software Engineer',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Porteiro · Full-Stack Software Engineer',
    description,
    images: '/share-image.png',
  },
  robots: { index: true, follow: true },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#1a1a1b',
  colorScheme: 'dark',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: 'GportDev',
  url: profile.site,
  email: `mailto:${profile.email}`,
  jobTitle: profile.headline,
  worksFor: {
    '@type': 'Organization',
    name: 'SEO Gets',
    url: 'https://seogets.com',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Tennessee Technological University',
    },
    { '@type': 'CollegeOrUniversity', name: 'Academia da Força Aérea' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cookeville',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  sameAs: [profile.links.github, profile.links.linkedin],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={geistMono.variable}>
      <body className='min-h-screen font-mono'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <a
          href='#main'
          className='sr-only z-[60] rounded-lg bg-green px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3'
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

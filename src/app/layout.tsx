import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Toaster from '@/components/toaster'
import site from '@/config/site'
import '@/styles/globals.css'
import cn from '@/utils/cn'

import Providers from './providers'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    site: '@krafanid',
    // siteId: '1152256803746377730',
    creator: '@krafanid',
    // creatorId: '1152256803746377730',
    images: [`${site.url}/images/og.png`]
  },
  keywords: site.keywords,
  creator: 'DwiNugroho',
  openGraph: {
    url: site.url,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en-US',
    images: [
      {
        url: `${site.url}/images/og.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [...site.favicons]
  }
}

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff'
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#000000'
    }
  ]
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const calcom = localFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-calcom'
})

const monaspaceNeon = localFont({
  src: '../../public/fonts/MonaspaceNeon-Regular.woff',
  variable: '--font-monaspace-neon'
})

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html
      lang='en-US'
      className={cn(
        inter.variable,
        calcom.variable,
        monaspaceNeon.variable,
        'scroll-smooth'
      )}
      suppressHydrationWarning
    >
      <body className='relative overflow-x-hidden font-default'>
        <Providers>
          <Header />
          <main
            id='skip-nav'
            className='mx-auto mb-16 max-w-5xl px-6 py-24 sm:px-8'
          >
            {children}
          </main>
          <Toaster />
          <Footer />
          <div className='absolute inset-0 overflow-hidden -z-10'>
            <Image
              draggable={false}
              width={833}
              height={822}
              quality={10}
              className='absolute right-0 top-[-160px] -z-10 opacity-70 dark:opacity-50'
              src='/images/gradient-right.png'
              alt='Gradient background'
              priority
            />
            <Image
              draggable={false}
              width={866}
              height={811}
              quality={10}
              className='absolute left-0 top-1/2 -z-10 -translate-y-1/2 opacity-90 dark:opacity-50'
              src='/images/gradient-left.png'
              alt='Gradient background'
              priority
            />
            <Image
              draggable={false}
              width={866}
              height={811}
              quality={10}
              className='absolute bottom-0 left-1/2 -z-10 opacity-70 dark:opacity-30'
              src='/images/gradient-left.png'
              alt='Gradient background'
              priority
            />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

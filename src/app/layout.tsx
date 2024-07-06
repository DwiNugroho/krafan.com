import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import '@/styles/main.css'
import { Footer, Navbar, ProgressProvider, ThemeProvider } from '@/components'
import site from '@/constants/site'
import { createOgImageURL } from '@/lib/open-graph'
import { cn } from '@/lib/utils'

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
  openGraph: {
    url: site.url,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en-US',
    images: [
      {
        url: createOgImageURL(),
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    site: '@dwirockss',
    // siteId: '',
    creator: '@dwirockss',
    // creatorId: '',
    images: [createOgImageURL()]
  },
  keywords: site.keywords,
  creator: site.githubUsername,
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
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

const mona = localFont({
  src: '../../public/fonts/mona-sans/Mona-Sans.woff2',
  variable: '--font-mona'
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body className={cn(inter.variable, mona.variable, inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <ProgressProvider>
            <div className='relative flex min-h-screen flex-col'>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import '@/styles/main.css'
import { Footer, Navbar, ProgressProvider, ThemeProvider } from '@/components'
import site from '@/constants/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  ...site,
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

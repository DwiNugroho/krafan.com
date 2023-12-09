import Script from 'next/script'

import { env } from '@/env'

const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA_KEY}`}
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${env.NEXT_PUBLIC_GA_KEY}');
        `}
      </Script>
    </>
  )
}

export default Analytics

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import Script from 'next/script'

import { env } from '@/env'

const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <VercelAnalytics />
      <Script
        async
        data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        src={`${env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
      />
    </>
  )
}

export default Analytics

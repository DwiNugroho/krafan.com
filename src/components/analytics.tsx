import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <VercelAnalytics />
    </>
  )
}

export default Analytics

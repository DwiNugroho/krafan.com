import { type MetadataRoute } from 'next'

import site from '@/constants/site'

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/404', '/500', '/api/*', '/og/*']
    }
  ],
  sitemap: `${site.url}/sitemap.xml`,
  host: `${site.url}`
})

export default robots

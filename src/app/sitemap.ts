import { allPages } from 'contentlayer/generated'
import { type MetadataRoute } from 'next'

import site from '@/constants/site'
import { getAllBlogPosts, getAllProjects } from '@/lib/mdx'

const sitemap = (): MetadataRoute.Sitemap => {
  const blogs = getAllBlogPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date.split('T')[0]
  }))

  const routes = [
    '',
    '/blog',
    '/project',
    ...allPages.map((page) => `/${page.slug}`),
    ...getAllProjects().map((project) => `/projects/${project.slug}`)
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...blogs]
}

export default sitemap

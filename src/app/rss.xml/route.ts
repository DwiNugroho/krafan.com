import { NextResponse } from 'next/server'
import RSS from 'rss'

import site from '@/constants/site'
import { getAllBlogPosts } from '@/lib/mdx'
import { createOgImageURL } from '@/lib/open-graph'

export const GET = () => {
  const feed = new RSS({
    title: "Krafan's Blog",
    description: 'A digital garden and blog by Dwi Nugroho.',
    site_url: `${site.url}`,
    feed_url: `${site.url}/rss.xml`,
    language: 'en-US',
    image_url: createOgImageURL()
  })

  const posts = getAllBlogPosts()

  for (const post of posts) {
    const { title, summary, date, slug } = post

    feed.item({
      title,
      url: `${site.url}/blog/${slug}`,
      date,
      description: summary,
      author: 'Dwi Nugroho'
    })
  }

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}

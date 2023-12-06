import Hero from '@/components/hero'
import Posts from '@/components/posts'
import Projects from '@/components/projects'
import site from '@/config/site'
import { getAllPosts, getAllProjects } from '@/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: site.url
  }
}

export const runtime = 'edge'

const HomePage = () => {
  const posts = getAllPosts({
    limit: 4
  })

  const projects = getAllProjects({ limit: 2 })

  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <Posts posts={posts} />
    </>
  )
}

export default HomePage

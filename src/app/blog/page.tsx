import type { Metadata, ResolvingMetadata } from 'next'

import FilteredPosts from '@/components/filtered-posts'
import PageTitle from '@/components/page-title'
import site from '@/config/site'
import getAllPosts from '@/lib/mdx'

export const runtime = 'edge'
const title = 'Blog'
const description =
  'Discover insightful articles on software and knowledge-sharing since December 2023'

type BlogPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/blog`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/blog`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const BlogPage = () => {
  const posts = getAllPosts()

  return (
    <>
      <PageTitle
        title='Blog'
        description={`Hey there! I kicked off my article journey back in December 2023, diving into the realms of software and knowledge-sharing. So far, I've dropped ${posts.length} gems on my blog. Feel free to explore them by tossing their titles into the search box below. Happy reading! 📚`}
      />
      <FilteredPosts posts={posts} />
    </>
  )
}

export default BlogPage

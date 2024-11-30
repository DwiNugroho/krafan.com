import { Metadata, ResolvingMetadata } from 'next'

import { PostCard } from '@/components'
import site from '@/constants/site'
import { getAllBlogPosts } from '@/lib/mdx'
import { createOgImageURL } from '@/lib/open-graph'

type BlogPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

const title = 'Blog'
const description =
  'Discover insightful articles on software and knowledge-sharing since November 2023'
const url = site.url + '/blog'

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
      canonical: url
    },
    openGraph: {
      ...previousOpenGraph,
      url,
      title,
      description,
      images: [
        {
          url: createOgImageURL('', { title }),
          width: 1200,
          height: 630,
          alt: description,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
      images: [createOgImageURL('', { title })]
    }
  }
}

export default function Project() {
  const blogs = getAllBlogPosts()

  return (
    <>
      <div className='relative space-y-10 py-8 md:py-12'>
        <div className='container space-y-3'>
          <h1 className='font-mona text-4xl font-bold'>Blog</h1>
          <p className='text-lg text-muted-foreground'>
            I kicked off my article journey back in November 2023, diving into
            the realms of software and knowledge-sharing. So far, I&apos;ve
            dropped 3 gems on my blog.
          </p>
        </div>
        <div className='container'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
            {blogs.map((blog) => (
              <PostCard {...blog} key={blog._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

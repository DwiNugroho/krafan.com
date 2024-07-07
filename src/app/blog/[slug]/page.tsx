import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import type { Article, WithContext } from 'schema-dts'

import Mdx from '@/components/mdx'
import site from '@/constants/site'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx'
import { createOgImageURL } from '@/lib/open-graph'

import Comment from './comment'
import Header from './header'
import TableOfContent from './table-of-content'

type BlogPageProps = {
  params: {
    slug: string
  }
}

export const generateStaticParams = (): Array<BlogPageProps['params']> => {
  return getAllBlogPosts().map((blog) => ({
    slug: blog.slug
  }))
}

export const generateMetadata = async (
  props: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  const post = getBlogPostBySlug(props.params.slug)
  if (!post) return {}

  const title = post.title
  const description = post.summary
  const url = `${site.url}/blog/${post.slug}`
  const ISOPublishedTime = new Date(post.date).toISOString()
  const ISOModifiedTime = new Date(post.modifiedTime).toISOString()

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      ...previousOpenGraph,
      type: 'article',
      url,
      title,
      description,
      publishedTime: ISOPublishedTime,
      modifiedTime: ISOModifiedTime,
      images: [
        {
          url: createOgImageURL('/blog', {
            title,
            date: post.date.split('T')[0]
          }),
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
      images: [
        createOgImageURL('/blog', {
          title,
          date: post.date.split('T')[0]
        })
      ]
    }
  }
}

export default function BlogDetailPage(props: BlogPageProps) {
  const blog = getBlogPostBySlug(props.params.slug)

  if (!blog) {
    return notFound()
  }

  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: blog.title,
    description: blog.summary,
    datePublished: blog.date,
    dateModified: blog.modifiedTime,
    image: createOgImageURL('/blog', {
      title: blog.title,
      date: blog.date.split('T')[0]
    }),
    author: {
      '@type': 'Person',
      name: site.githubUsername,
      url: site.url
    },
    publisher: {
      '@type': 'Person',
      name: site.githubUsername,
      url: site.url
    }
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='container space-y-16 py-8'>
        <Header {...blog} />
        <div className='grid grid-cols-3 gap-20'>
          <div className='col-span-3 lg:col-span-2'>
            <Mdx code={blog.body.code} />
          </div>
          <div className='hidden lg:inline'>
            <TableOfContent {...blog} />
          </div>
        </div>
        <div className='mx-auto max-w-[800px]'>
          <Comment />
        </div>
      </div>
    </>
  )
}

import { notFound } from 'next/navigation'

import Mdx from '@/components/mdx'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx'

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

export default function BlogDetailPage(props: BlogPageProps) {
  const blog = getBlogPostBySlug(props.params.slug)

  if (!blog) {
    return notFound()
  }

  return (
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
  )
}

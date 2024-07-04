import { PostCard } from '@/components'
import { getAllBlogPosts } from '@/lib/mdx'

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

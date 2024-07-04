import { Blogs, GetInTouch, Hero, Projects } from '@/components/home'
import { GridBackground } from '@/components/svg'
import { getAllBlogPosts, getAllProjects } from '@/lib/mdx'

export default function Home() {
  const projects = getAllProjects({ limit: 2 })
  const blogs = getAllBlogPosts({ limit: 6 })

  return (
    <>
      <GridBackground className='absolute right-0 top-0 h-full max-h-[1200px] w-full stroke-gray-900/10 [mask-image:radial-gradient(100%_100%_at_100%_0%,white,transparent)] dark:stroke-gray-100/10' />
      <div className='relative flex w-full flex-col gap-24 py-8 md:gap-40 md:py-12'>
        <Hero />
        <Projects projects={projects} />
        <GetInTouch />
        <Blogs blogs={blogs} />
      </div>
    </>
  )
}

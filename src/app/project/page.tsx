import { ProjectCard } from '@/components'
import { getAllProjects } from '@/lib/mdx'

export default function Project() {
  const projects = getAllProjects()

  return (
    <>
      <div className='relative space-y-10 py-8 md:py-12'>
        <div className='container space-y-3'>
          <h1 className='font-mona text-4xl font-bold'>
            Portfolio Showcase 🚀
          </h1>
          <p className='text-lg text-muted-foreground'>
            Browse through my programming development projects and witness the
            digital magic I&apos;ve crafted.
          </p>
        </div>
        <div className='container'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {projects.map((item) => (
              <ProjectCard {...item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

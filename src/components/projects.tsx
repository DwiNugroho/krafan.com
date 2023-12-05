import { IconArrowRight } from '@tabler/icons-react'
import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

import ProjectCard from '@/components/project-card'

const Projects = () => {
  return (
    <div className='my-16 flex flex-col'>
      <h2 className='mb-8 text-3xl font-bold'>Projects</h2>
      <div className='grid gap-8 md:grid-cols-2'>
        {allProjects.slice(0, 2).map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
      <div className='flex'>
        <Link
          href='/projects'
          className='group my-8 flex items-center gap-4 text-lg font-medium'
        >
          <span>All Projects</span>
          <IconArrowRight className='h-4 w-4 transition duration-200 group-hover:translate-x-1' />
        </Link>
      </div>
    </div>
  )
}

export default Projects

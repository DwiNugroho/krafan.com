import { allProjects } from 'contentlayer/generated'
import type { Metadata, ResolvingMetadata } from 'next'

import PageTitle from '@/components/page-title'
import ProjectCard from '@/components/project-card'
import site from '@/config/site'

export const runtime = 'edge'
const title = 'Portfolio'
const description =
  'Explore a showcase of my programming development projects, where digital magic comes to life. Discover sleek designs and powerful functionalities that define my coding journey. Dive into my portfolio now for inspiration! 💻✨'

type ProjectsPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: ProjectsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/projects`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/projects`,
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

const ProjectsPage = () => {
  return (
    <>
      <PageTitle
        title='Portfolio Showcase 🚀'
        description={
          "Browse through my programming development projects and witness the digital magic I've crafted. Get inspired by sleek designs and powerful functionalities. Dive in now! 💻✨"
        }
      />
      <div className='grid gap-8 md:grid-cols-2'>
        {allProjects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </>
  )
}

export default ProjectsPage

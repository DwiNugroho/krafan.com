import { Metadata, ResolvingMetadata } from 'next'

import { ProjectCard } from '@/components'
import site from '@/constants/site'
import { getAllProjects } from '@/lib/mdx'
import { createOgImageURL } from '@/lib/open-graph'

type ProjectPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

const title = 'Portfolio'
const description =
  'Explore a showcase of my programming development projects, where digital magic comes to life'
const url = site.url + '/project'

export const generateMetadata = async (
  _: ProjectPageProps,
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

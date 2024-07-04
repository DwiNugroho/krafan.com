import NextLink from 'next/link'
import { notFound } from 'next/navigation'
import { FiArrowUpRight } from 'react-icons/fi'

import { Image } from '@/components'
import Mdx from '@/components/mdx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { buttonVariants } from '@/components/ui/button'
import getIconByName from '@/lib/get-icon-by-name'
import { getAllProjects, getProjectBySlug } from '@/lib/mdx'
import { cn, validateAndAddHttps } from '@/lib/utils'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export const generateStaticParams = (): Array<ProjectPageProps['params']> => {
  return getAllProjects().map((project) => ({
    slug: project.slug
  }))
}

export const ProjectDetailPage = (props: ProjectPageProps) => {
  const project = getProjectBySlug(props.params.slug)

  if (!project) {
    return notFound()
  }

  return (
    <div className='container space-y-8 py-12'>
      <div className='mx-auto max-w-[800px]'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/project'>Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='space-y-6'>
        <div
          className={cn(
            'mx-auto flex aspect-video w-full max-w-[1000px] flex-col items-center justify-center rounded-md bg-gradient-to-br',
            project.background
          )}
        >
          <div className='relative aspect-video w-[80%] overflow-hidden rounded-sm'>
            <Image
              src={`/img/projects/${project.slug}/cover.png`}
              fill
              sizes='100%'
              alt={project.name}
              lazy={false}
            />
          </div>
        </div>
        <div className='mx-auto flex max-w-[800px] flex-wrap items-center gap-4'>
          {validateAndAddHttps(project.homepage) && (
            <NextLink
              href={validateAndAddHttps(project.homepage)}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'group bg-foreground text-background transition-transform ease-in-out hover:bg-foreground/90 hover:text-background'
              )}
              target='_blank'
            >
              Visit Project{' '}
              <FiArrowUpRight
                size={20}
                className='ml-2 group-hover:rotate-12'
              />
            </NextLink>
          )}
          {validateAndAddHttps(project.github) && (
            <NextLink
              href={validateAndAddHttps(project.github)}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'bg-foreground text-background hover:bg-foreground/90 hover:text-background'
              )}
              target='_blank'
            >
              Source Code <FiArrowUpRight size={20} className='ml-2' />
            </NextLink>
          )}
          {project.techstack.map((item, index) => {
            const Icon = getIconByName(item.label)
            return (
              <div
                key={`techstack-${index}`}
                className='flex items-center gap-2 text-foreground/80'
              >
                <Icon size={24} />
                <p>{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='mx-auto max-w-[800px] pt-4'>
        <Mdx code={project.body.code} />
      </div>
    </div>
  )
}

export default ProjectDetailPage

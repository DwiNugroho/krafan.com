import NextLink from 'next/link'
import React from 'react'

import { Project } from '@/lib/mdx'
import { cn } from '@/lib/utils'

import { Image } from './index'
import { TiltCard } from './index'

const ProjectCard: React.FC<Project> = (props) => {
  return (
    <NextLink href={`/project/${props.slug}`}>
      <TiltCard
        className={cn(
          'flex aspect-video w-full flex-col gap-6 rounded-md bg-gradient-to-br p-6 shadow-md',
          props.background
        )}
      >
        <p className='text-center font-mona font-bold uppercase text-white'>
          {props.name}
        </p>
        <div
          style={{
            transform: 'translateZ(75px)',
            transformStyle: 'preserve-3d'
          }}
          className='relative mx-auto aspect-video w-[80%] overflow-hidden rounded-md bg-white shadow-xl'
        >
          <Image
            src={`/img/projects/${props.slug}/cover.png`}
            alt={`${props.name} - Krafan Project`}
            fill
            sizes='100%'
            className='h-full w-full object-cover'
          />
        </div>
      </TiltCard>
    </NextLink>
  )
}

export { ProjectCard }

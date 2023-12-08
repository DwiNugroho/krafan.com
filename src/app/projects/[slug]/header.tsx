'use client'

import { IconBrandGithub, IconHome } from '@tabler/icons-react'
import { type Project } from 'contentlayer/generated'
import { motion } from 'framer-motion'

import ImageZoom from '@/components/image-zoom'
import Image from '@/components/mdx/image'

import getIconByName from '@/utils/get-icon-by-name'

const animation = {
  hide: {
    x: -30,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

type HeaderProps = Project

const Header = (props: HeaderProps & { slug: string }) => {
  const { name, description, homepage, github, techstack, slug } = props

  const logo = `/images/projects/${slug}/logo.png`

  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='space-y-4'>
        <motion.div
          className='flex items-start gap-3'
          initial={animation.hide}
          animate={animation.show}
        >
          <Image
            src={logo}
            width={40}
            height={40}
            alt={name}
            className='mt-2'
          />
          <div className='flex flex-col'>
            <div className='text-2xl font-bold'>{name}</div>
            <div>{description}</div>
          </div>
        </motion.div>
        <motion.div
          className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          {homepage && (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={homepage}
              className='flex items-center'
            >
              <IconHome size={20} className='mr-2 inline-block' />
              {homepage.replace('https://', '').replace('https://www.', '')}
            </a>
          )}
          {github && (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={github}
              className='flex items-center'
            >
              <IconBrandGithub size={20} className='mr-2 inline-block' />
              {github
                .replace('https://github.com/', '')
                .replace('https://www.github.com/', '')}
            </a>
          )}
        </motion.div>
      </div>
      <div className='w-full'>
        <ImageZoom
          zoomImg={{
            src: `/images/projects/${slug}/cover.png`,
            alt: name
          }}
        >
          <Image
            src={`/images/projects/${slug}/cover.png`}
            className='rounded-lg aspect-[40/21] relative'
            sizes='100%'
            fill
            quality={100}
            lazy={false}
            alt={name}
          />
        </ImageZoom>
      </div>
      <div className='mb-8 flex flex-wrap gap-2'>
        {techstack.map((t, index) => {
          const { label } = t

          const Icon = getIconByName(label)

          return (
            <div key={label} className='flex items-center justify-center gap-1'>
              <Icon strokeWidth={1.5} size={16} />
              <div className='text-sm'>
                {label}
                {index < techstack.length - 1 && ','}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Header

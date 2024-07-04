'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

import { Project } from '@/lib/mdx'

import { ProjectCard } from '../'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

// const projects = [
//   {
//     link: 'www.digiexpert.id',
//     background: 'from-pink-700 to-pink-300',
//     image:
//       'https://www.krafan.com/_next/image?url=%2Fimages%2Fprojects%2Fdigiexpert%2Fscreenshot-1.png&w=1920&q=100'
//   },
//   {
//     link: 'www.fazztrack.com',
//     background: 'from-orange-300 to-orange-500',
//     image:
//       'https://www.krafan.com/_next/image?url=%2Fimages%2Fprojects%2Ffazztrack%2Fscreenshot-5.png&w=1920&q=100'
//   },
//   {
//     link: 'og.krafan.com',
//     background: 'from-blue-300 to-blue-500',
//     image: '/img/open-graph-web.png'
//   },
//   {
//     link: 'www.digiexpert.id',
//     background: 'from-pink-700 to-pink-300',
//     image:
//       'https://www.krafan.com/_next/image?url=%2Fimages%2Fprojects%2Fdigiexpert%2Fscreenshot-1.png&w=1920&q=100'
//   }
// ]

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={cardsRef}
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      className='container flex flex-col gap-8 md:gap-16'
      transition={{
        duration: 0.5
      }}
    >
      <p className='text-center font-mona text-3xl font-bold md:text-4xl'>
        <mark>Selected Projects</mark>
      </p>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {projects.map((item) => (
          <ProjectCard {...item} key={item._id} />
        ))}
      </div>
    </motion.div>
  )
}

export { Projects }

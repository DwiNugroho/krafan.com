'use client'

import { motion, useInView } from 'framer-motion'
import NextLink from 'next/link'
import { useRef } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

import { BlogPost } from '@/lib/mdx'

import { PostCard } from '../post-card'
import { buttonVariants } from '../ui/button'

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

const Blogs: React.FC<{ blogs: BlogPost[] }> = ({ blogs }) => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={cardsRef}
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      className='container flex flex-col gap-8'
      transition={{
        duration: 0.5
      }}
    >
      <div className='relative flex items-center justify-between'>
        <p className='font-mona text-3xl font-bold md:text-4xl'>
          <mark>Blog</mark>
        </p>
        <NextLink
          href='/blog'
          className={buttonVariants({ variant: 'outline' })}
        >
          <span>All Blog</span>
          <MdArrowRightAlt size={20} className='ml-3' />
        </NextLink>
      </div>
      <div className='grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
        {blogs.map((blog) => (
          <PostCard {...blog} key={blog._id} />
        ))}
      </div>
    </motion.div>
  )
}

export { Blogs }

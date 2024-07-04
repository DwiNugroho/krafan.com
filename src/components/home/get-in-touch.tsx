'use client'

import { motion, useAnimate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

import { cn } from '@/lib/utils'

import { Image } from '../image'
import { ReactangleCard } from '../reactangle-card'
import { Pointer } from '../svg'
import { GridBackground } from '../svg'
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

const GetInTouch = () => {
  const [scope, animate] = useAnimate()
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })

  useEffect(() => {
    void animate(
      [
        ['#pointer', { left: 240, top: 72 }, { duration: 0 }],
        ['#mobile-app', { opacity: 1, scale: 1.06 }, { duration: 0.3 }],
        [
          '#pointer',
          { left: 50, top: 102 },
          { at: '+0.5', duration: 0.5, ease: 'easeInOut' }
        ],
        [
          '#mobile-app',
          { opacity: 0.4, scale: 1 },
          { at: '-0.3', duration: 0.1 }
        ],
        ['#seo-optimization', { opacity: 1, scale: 1.06 }, { duration: 0.3 }],
        [
          '#pointer',
          { left: 280, top: 236 },
          { at: '+0.5', duration: 0.5, ease: 'easeInOut' }
        ],
        [
          '#seo-optimization',
          { opacity: 0.4, scale: 1 },
          { at: '-0.3', duration: 0.1 }
        ],
        ['#web-dev', { opacity: 1, scale: 1.06 }, { duration: 0.3 }],
        [
          '#pointer',
          { left: 88, top: 272 },
          { at: '+0.5', duration: 0.5, ease: 'easeInOut' }
        ],
        ['#web-dev', { opacity: 0.4, scale: 1 }, { at: '-0.3', duration: 0.1 }],
        ['#webflow', { opacity: 1, scale: 1.06 }, { duration: 0.3 }],
        [
          '#pointer',
          { left: 240, top: 72 },
          { at: '+0.5', duration: 0.5, ease: 'easeInOut' }
        ],
        ['#webflow', { opacity: 0.4, scale: 1 }, { at: '-0.3', duration: 0.1 }]
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    )
  }, [animate])

  return (
    <div className='container overflow-hidden'>
      <motion.div
        className='relative flex flex-col items-center gap-2 overflow-hidden rounded-md bg-black/[0.02] p-8 dark:bg-white/[0.02] lg:flex-row lg:gap-24 lg:py-0'
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        variants={variants}
        ref={cardsRef}
        transition={{
          duration: 0.5
        }}
      >
        <GridBackground className='absolute -right-2 -top-2 h-full w-full stroke-gray-900/10 [mask-image:radial-gradient(100%_100%_at_100%_0%,white,transparent)] dark:stroke-gray-100/10' />
        <div
          className='relative mx-auto h-[320px] w-full max-w-[390px] lg:mx-0'
          ref={scope}
        >
          {/* <div className='absolute left-1/2 top-1/2 size-20 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-blue-600' /> */}
          <Image
            src='/img/avatar.png'
            alt='krafan services'
            width={100}
            height={100}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg'
          />
          <ReactangleCard
            id='webflow'
            className='absolute bottom-12 left-4 bg-background px-3 py-1 text-xs font-bold opacity-40'
          >
            Webflow Development
          </ReactangleCard>

          <ReactangleCard
            id='seo-optimization'
            className='absolute left-0 top-20 bg-background px-3 py-1 text-xs font-bold opacity-40'
          >
            SEO Optimization
          </ReactangleCard>

          <ReactangleCard
            id='web-dev'
            className='absolute bottom-20 right-1 bg-background px-3 py-1 text-xs font-bold opacity-40'
          >
            Web Development
          </ReactangleCard>

          <ReactangleCard
            id='mobile-app'
            className='absolute right-2 top-12 bg-background px-3 py-1 text-xs font-bold opacity-40'
          >
            Mobile App Development
          </ReactangleCard>

          <div id='pointer' className='absolute'>
            <Pointer className='text-primary' />
            <span className='relative left-4 whitespace-nowrap rounded-3xl bg-primary px-2 py-1 text-xs text-white'>
              Dwi Nugroho
            </span>
          </div>
        </div>

        <div className='relative flex w-full flex-col items-center gap-4 text-center lg:items-start lg:text-start'>
          <p className='font-mona text-4xl font-bold'>
            Need a Reliable Developer?
          </p>
          <p className='text-lg text-foreground/60'>
            Reach out to discuss how we can collaborate to bring your projects
            to life. Together, we can achieve outstanding results.
          </p>
          <a
            href='#'
            className={cn(
              buttonVariants(),
              'mt-4 flex items-center gap-4 rounded-sm md:min-w-[160px]'
            )}
          >
            <span className='font-mona font-bold tracking-wide'>Hire Me</span>
            <MdArrowRightAlt size={28} />
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export { GetInTouch }

'use client'

import dayjs from 'dayjs'
import React from 'react'
import { useEvent } from 'react-use'

import ImageZoom from '@/components/image-zoom'
import Image from '@/components/mdx/image'
import { Skeleton } from '@/components/ui'

type HeaderProps = {
  date: string
  title: string
  slug: string
}

const Header = (props: HeaderProps) => {
  const { date, title, slug } = props
  const [formattedDate, setFormattedDate] = React.useState('')
  const [commentCounter, setCommentCounter] = React.useState(-1)

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('MMMM DD, YYYY'))
  }, [date])

  useEvent('message', (e: MessageEvent) => {
    if (e.origin !== 'https://giscus.app') return
    if (!(typeof e.data === 'object' && e.data.giscus)) return

    const giscus = e.data.giscus

    if (giscus.error) {
      setCommentCounter(0)
      return
    }

    if (giscus.discussion) {
      setCommentCounter(
        (giscus.discussion.totalCommentCount as number) +
          (giscus.discussion.totalReplyCount as number)
      )
    }
  })

  return (
    <div className='space-y-16 py-16'>
      <div className='space-y-16 sm:px-8'>
        <h1 className='text-center font-calcom text-4xl font-bold md:text-5xl'>
          {title}
        </h1>
        <div className='grid grid-cols-2 text-sm max-md:gap-8 md:grid-cols-3'>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Written by</div>
            <a
              href='https://github.com/DwiNugroho'
              rel='noopener noreferrer'
              target='_blank'
              className='flex items-center gap-2'
            >
              <Image
                src='/images/avatar.png'
                className='rounded-full'
                width={24}
                height={24}
                alt='Dwi Nugroho'
              />
              Dwi Nugroho
            </a>
          </div>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Published on</div>
            <div>
              {formattedDate || <Skeleton className='h-6 w-32 rounded-md' />}
            </div>
          </div>
          <div className='space-y-1 md:mx-auto'>
            <div className='text-muted-foreground'>Comments</div>
            {commentCounter === -1 ? (
              <Skeleton className='h-6 w-32 rounded-md' />
            ) : (
              <div>{commentCounter}</div>
            )}
          </div>
        </div>
      </div>
      <ImageZoom
        zoomImg={{
          src: `/images/blog/${slug}/cover.png`,
          alt: title
        }}
      >
        <Image
          src={`/images/blog/${slug}/cover.png`}
          className='rounded-lg'
          width={1200}
          height={630}
          lazy={false}
          alt={title}
        />
      </ImageZoom>
    </div>
  )
}

export default Header

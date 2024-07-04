'use client'
import dayjs from 'dayjs'
import NextLink from 'next/link'
import React from 'react'

import { BlogPost } from '@/lib/mdx'

import { Image } from './image'

const PostCard: React.FC<BlogPost> = (props) => {
  const [formattedDate, setFormattedDate] = React.useState('')
  React.useEffect(() => {
    setFormattedDate(dayjs(props.date).format('MMMM DD, YYYY'))
  }, [props.date])
  return (
    <NextLink
      href={`/blog/${props.slug}`}
      className='group relative cursor-pointer'
    >
      <div className='aspect-video w-full overflow-hidden rounded bg-neutral-100 transition-transform duration-200 group-hover:-rotate-1 dark:bg-neutral-900'>
        <div className='relative mx-auto mt-12 aspect-video w-[84%] overflow-hidden rounded transition-transform duration-200 group-hover:-translate-y-2 group-hover:rotate-2'>
          <Image
            src={`/img/blogs/${props.slug}/cover.png`}
            alt='sadsad'
            fill
            sizes='100%'
            className='h-full w-full object-cover'
          />
        </div>
      </div>

      <div className='p-2'>
        <p className='mt-2 text-sm text-foreground/60'>{formattedDate}</p>
        <span title={props.title}>
          <p className='mt-1 line-clamp-2 font-mona text-xl font-bold'>
            {props.title}
          </p>
        </span>
        <span title={props.summary}>
          <p className='mt-3 line-clamp-2 text-lg text-foreground/60'>
            {props.summary}
          </p>
        </span>
      </div>
    </NextLink>
  )
}

export { PostCard }

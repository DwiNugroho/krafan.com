'use client'
import dayjs from 'dayjs'
import NextLink from 'next/link'
import React from 'react'
import { useEvent } from 'react-use'

import { Image } from '@/components'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { LINKEDIN_LINK } from '@/constants/links'
import { BlogPost } from '@/lib/mdx'

const Header: React.FC<BlogPost> = (props) => {
  const [formattedDate, setFormattedDate] = React.useState('')
  const [commentCounter, setCommentCounter] = React.useState(-1)

  React.useEffect(() => {
    setFormattedDate(dayjs(props.date).format('MMMM DD, YYYY'))
  }, [props.date])

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
    <div className='space-y-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/blog'>Blogs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='line-clamp-1'>
              {props.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='font-mona text-3xl font-bold md:text-4xl md:leading-[48px]'>
        {props.title}
      </h1>

      <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5'>
        <div className='space-y-2'>
          <p className='text-muted-foreground'>Written by</p>
          <NextLink
            href={LINKEDIN_LINK.href}
            target='_blank'
            className='flex items-start gap-2'
          >
            <Image
              src='/img/avatar.png'
              alt='Dwi Nugroho'
              width={24}
              height={24}
              className='min-w-[24px] rounded-full'
            />
            Dwi Nugroho
          </NextLink>
        </div>
        <div className='space-y-2'>
          <p className='text-muted-foreground'>Published on</p>
          <p>{formattedDate}</p>
        </div>
        <div className='space-y-2'>
          <p className='text-muted-foreground'>Comments</p>
          <p>{commentCounter >= 0 ? commentCounter : 0}</p>
        </div>
      </div>
    </div>
  )
}

export default Header

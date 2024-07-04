'use client'

import NextLink from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

import { CopyButton } from '../copy-button'
import { ImageZoom } from '../image-zoom'

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, children, className, ...rest } = props

    if ((href as string).startsWith('/')) {
      return (
        <NextLink href={href as string} className={cn(className)} {...rest}>
          {children}
        </NextLink>
      )
    }

    if ((href as string).startsWith('#')) {
      return (
        <a href={href} className={cn(className)} {...rest}>
          {children}
        </a>
      )
    }

    return (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        className={cn(className)}
        {...rest}
      >
        {children}
      </a>
    )
  },
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => {
    const { children, ...rest } = props

    const textInput = React.useRef<HTMLPreElement>(null)

    const [text, setText] = React.useState<string>('')

    React.useEffect(() => {
      if (textInput.current) {
        setText(textInput.current.textContent ?? '')
      }
    }, [])

    return (
      <div className='relative'>
        <pre ref={textInput} {...rest}>
          {children}
        </pre>
        <CopyButton value={text} className='absolute right-4 top-3' />
      </div>
    )
  },
  Image: ({ ...props }: React.ComponentPropsWithoutRef<typeof ImageZoom>) => {
    return <ImageZoom {...props} />
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.4rem] pb-0 pt-[0.2rem] text-sm before:content-[""] after:content-[""]',
        className
      )}
      {...props}
    />
  ),
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
}

const Mdx: React.FC<{ code: string }> = ({ code }) => {
  const Component = useMDXComponent(code)

  return (
    <div className='prose w-full max-w-none dark:prose-invert md:prose-lg'>
      <Component components={components} />
    </div>
  )
}

export default Mdx

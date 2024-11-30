'use client'

import NextImage from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

export type ImageProps = {
  lazy?: boolean
} & React.ComponentPropsWithoutRef<typeof NextImage>

const Image = (props: ImageProps) => {
  const { alt, src, className, quality, lazy = true, ...rest } = props
  const [isLoading, setLoading] = React.useState(true)

  return (
    <NextImage
      className={cn(
        className,
        'transition-[scale,filter] duration-700',
        isLoading && 'scale-[1.02] animate-pulse blur-lg grayscale'
      )}
      src={src}
      alt={alt}
      loading={lazy ? 'lazy' : undefined}
      priority={!lazy}
      quality={quality || 100}
      onLoad={() => setLoading(false)}
      draggable={false}
      {...rest}
    />
  )
}

Image.displayName = 'Image'

export { Image }

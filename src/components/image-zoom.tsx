'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { Portal } from '@/hooks/portal'
import { cn } from '@/lib/utils'

import { Image, ImageProps } from './image'

export const ImageZoom = ({
  alt,
  className,
  fill,
  width,
  height,
  sizes,
  ...props
}: ImageProps) => {
  const [zoomed, setZoomed] = useState(false)

  return (
    <>
      <Image
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        {...props}
        onClick={() => setZoomed(true)}
        className={cn(className, 'cursor-zoom-in')}
      />
      <Portal>
        <AnimatePresence>
          {zoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='fixed inset-0 z-50 flex h-screen w-screen cursor-zoom-out flex-col items-center justify-center bg-foreground/80'
              onClick={() => setZoomed(false)}
            >
              <motion.div
                initial={{ scale: 0.6 }}
                animate={{
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 180,
                    ease: 'easeInOut'
                  }
                }}
                exit={{ opacity: 0, transition: { ease: 'easeInOut' } }}
                className='relative flex h-[90%] w-[90%] flex-col items-center justify-center overflow-hidden'
              >
                <Image
                  alt={alt}
                  {...props}
                  fill
                  sizes='100%'
                  className='!mb-0 !mt-0 h-full w-full object-contain'
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  )
}

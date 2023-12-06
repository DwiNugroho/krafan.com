'use client'

import cn from '@/utils/cn'

import ImageZoom from '../image-zoom'
import Image from './image'

export type GalleryProps = {
  sources: string[]
}

const Gallery = ({ sources }: GalleryProps) => {
  return (
    <div className='w-full grid-cols-3 space-y-4 sm:space-y-0 sm:grid sm:gap-4 sm:grid-rows-3'>
      {sources.map((img, index) => (
        <div
          key={index}
          className={cn('w-full', {
            'col-span-2 row-span-2 h-full': index === 1
          })}
        >
          <ImageZoom zoomImg={{ src: img }}>
            <Image
              src={img}
              width={1200}
              height={630}
              alt='krafan - gallery'
              className='rounded'
            />
          </ImageZoom>
        </div>
      ))}
    </div>
  )
}
export default Gallery

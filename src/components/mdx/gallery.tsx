'use client'

import ImageZoom from '../image-zoom'
import Image from './image'

import cn from '@/utils/cn'

export type GalleryProps = {
  sources: string[]
}

const Gallery = ({ sources }: GalleryProps) => {
  return (
    <div className='w-full grid-cols-3 space-y-4 sm:space-y-0 sm:grid sm:gap-4 sm:grid-rows-3'>
      {sources.map((img, index) => (
        <div
          key={index}
          className={cn({ 'col-span-2 row-span-2': index === 1 })}
        >
          <ImageZoom zoomImg={{ src: img }}>
            <Image
              src={img}
              fill
              sizes='100%'
              alt='krafan - gallery'
              className={cn('w-full relative rounded-md', {
                'aspect-[40/21.4]': index === 1,
                'aspect-[40/21]': index !== 1
              })}
            />
          </ImageZoom>
        </div>
      ))}
    </div>
  )
}
export default Gallery

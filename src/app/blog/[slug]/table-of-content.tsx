'use client'
import React from 'react'

import useScrollspy from '@/hooks/use-scrollspy'
import { getHeadings } from '@/lib/get-headings'
import { BlogPost } from '@/lib/mdx'
import { cn } from '@/lib/utils'

const TableOfContent: React.FC<BlogPost> = (props) => {
  const headings = getHeadings(props.body.raw)

  const activeId = useScrollspy(
    headings.map((heading) => heading.id),
    { rootMargin: '0% 0% -72% 0%' }
  )

  return (
    <div className='sticky top-20 w-full'>
      <p className='mb-4 text-lg font-semibold'>On This Page</p>
      <div className='flex flex-col gap-2'>
        {headings.map((item) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            style={{ paddingLeft: (item.level - 2) * 20 }}
            className={cn(
              'text-sm text-muted-foreground hover:text-foreground',
              {
                'text-foreground': item.id === activeId
              }
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TableOfContent

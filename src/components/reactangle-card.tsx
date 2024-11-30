import React from 'react'

import { cn } from '@/lib/utils'

const ReactangleCard: React.FC<
  React.PropsWithChildren & { className?: string; id?: string }
> = ({ id, className, children }) => {
  return (
    <div
      id={id || ''}
      className={cn(
        'relative border border-foreground px-4 py-2',
        className || ''
      )}
    >
      {[
        '-top-[4px] -left-[4px]',
        '-top-[4px] -right-[4px]',
        '-bottom-[4px] -right-[4px]',
        '-bottom-[4px] -left-[4px]'
      ].map((item, index) => (
        <div
          key={index}
          className={cn(
            'absolute h-[8px] w-[8px] border border-foreground bg-primary',
            item
          )}
        ></div>
      ))}
      <span className='relative'>{children}</span>
    </div>
  )
}

export { ReactangleCard }

import type { Metadata } from 'next'
import NextLink from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: '404'
}

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-12'>
      <h1 className='text-center font-mona text-[140px] font-bold text-foreground/80'>
        404
      </h1>
      <p className='-mt-4 text-2xl text-foreground/60'>
        It seems you got a little bit lost
      </p>
      <NextLink
        href='/'
        className={cn(`mt-12`, buttonVariants({ variant: 'outline' }))}
      >
        Back to Homepage
      </NextLink>
    </div>
  )
}

export default NotFound

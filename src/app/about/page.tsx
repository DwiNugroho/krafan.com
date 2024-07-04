import { notFound } from 'next/navigation'

import Mdx from '@/components/mdx'
import { Separator } from '@/components/ui/separator'
import { getPageBySlug } from '@/lib/mdx'

export default function Project() {
  const page = getPageBySlug('about')

  if (!page) {
    notFound()
  }

  return (
    <div className='w-full py-12'>
      <div className='container'>
        <div className='mx-auto max-w-[1000px] space-y-4'>
          <h1 className='font-mona text-5xl font-bold'>About</h1>
          <p className='text-xl text-muted-foreground'>
            Hi there! I am Dwi Nugroho 👋
          </p>
        </div>
      </div>
      <Separator className='my-8' />
      <div className='container'>
        <div className='mx-auto max-w-[1000px]'>
          <Mdx code={page?.body.code} />
        </div>
      </div>
    </div>
  )
}

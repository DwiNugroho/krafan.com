import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import Mdx from '@/components/mdx'
import { Separator } from '@/components/ui/separator'
import site from '@/constants/site'
import { getPageBySlug } from '@/lib/mdx'
import { createOgImageURL } from '@/lib/open-graph'

type AboutPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

const title = 'About'
const description =
  'Dwi Nugroho - Passionate frontend engineer crafting awesome digital experiences'
const url = site.url + '/about'

export const generateMetadata = async (
  _: AboutPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      ...previousOpenGraph,
      url,
      title,
      description,
      images: [
        {
          url: createOgImageURL('', { title }),
          width: 1200,
          height: 630,
          alt: description,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
      images: [createOgImageURL('', { title })]
    }
  }
}

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

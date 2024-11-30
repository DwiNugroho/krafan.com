import { ImageResponse } from 'next/og'
import { NextResponse } from 'next/server'

import site from '@/constants/site'
import { cn } from '@/lib/utils'

// Route segment config
export const runtime = 'edge'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')

    const monaReguler = await (
      await fetch(
        new URL(
          '../../../public/fonts/mona-sans/TTF/MonaSans-Regular.ttf',
          import.meta.url
        )
      )
    ).arrayBuffer()
    const monaSemibold = await (
      await fetch(
        new URL(
          '../../../public/fonts/mona-sans/TTF/MonaSans-SemiBold.ttf',
          import.meta.url
        )
      )
    ).arrayBuffer()
    const monaBold = await (
      await fetch(
        new URL(
          '../../../public/fonts/mona-sans/TTF/MonaSans-Bold.ttf',
          import.meta.url
        )
      )
    ).arrayBuffer()

    return new ImageResponse(
      (
        <div
          tw='w-full h-full flex items-center justify-center relative bg-white'
          style={{ fontFamily: 'Mona' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.url + '/img/grid-background.png'}
            alt='krafan - background'
            tw='absolute inset-0 opacity-60'
          />
          <div tw='relative flex flex-col text-center items-center p-24'>
            {title && (
              <p tw='text-8xl uppercase font-bold bg-white p-2 leading-[60px] text-neutral-900'>
                {title}
              </p>
            )}
            <p
              tw={cn(
                'uppercase font-bold bg-white p-2',
                title ? 'text-xl text-neutral-600' : 'text-7xl text-neutral-900'
              )}
            >
              WWW.KRAFAN.COM
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Mona',
            data: monaReguler,
            weight: 400,
            style: 'normal'
          },
          {
            name: 'Mona',
            data: monaSemibold,
            weight: 600,
            style: 'normal'
          },
          {
            name: 'Mona',
            data: monaBold,
            weight: 700,
            style: 'normal'
          }
        ]
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to generate image'
      },
      {
        status: 500
      }
    )
  }
}

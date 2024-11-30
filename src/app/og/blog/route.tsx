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
    const date = searchParams.get('date')

    const monaReguler = await (
      await fetch(
        new URL(
          '../../../../public/fonts/mona-sans/TTF/MonaSans-Regular.ttf',
          import.meta.url
        )
      )
    ).arrayBuffer()
    const monaSemibold = await (
      await fetch(
        new URL(
          '../../../../public/fonts/mona-sans/TTF/MonaSans-SemiBold.ttf',
          import.meta.url
        )
      )
    ).arrayBuffer()
    const monaBold = await (
      await fetch(
        new URL(
          '../../../../public/fonts/mona-sans/TTF/MonaSans-Bold.ttf',
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
            width={1200}
            height={630}
            tw='absolute inset-0 opacity-60'
          />
          <div tw='relative flex flex-col text-center items-center p-24'>
            <div tw='w-full flex flex-col'>
              <p tw='text-5xl capitalize font-bold bg-white p-2 leading-[60px] text-neutral-900'>
                {title}
              </p>
            </div>
            <div tw='flex'>
              <div tw='flex flex-col text-center items-center'>
                <p tw='mb-0 text-lg text-neutral-500'>Written by</p>
                <div tw='flex items-center mt-1'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={site.url + '/img/avatar.png'}
                    alt='Dwi Nugroho'
                    width={24}
                    height={24}
                    tw='mr-2 rounded-full'
                  />
                  <p tw='text-xl mt-0 mb-0 font-bold'>Dwi Nugroho</p>
                </div>
              </div>
              {date && (
                <>
                  <div tw='flex mx-16'></div>
                  <div tw='flex flex-col text-center items-center'>
                    <p tw='mb-0 text-lg text-neutral-500'>Published on</p>
                    <p tw='text-xl mt-1 font-bold'>{date}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <p
            tw={cn(
              'uppercase font-bold bg-white p-2 text-xl absolute bottom-4 right-12'
            )}
          >
            WWW.KRAFAN.COM
          </p>
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

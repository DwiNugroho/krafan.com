import { ImageResponse } from 'next/og'
import { NextResponse } from 'next/server'

import site from '@/constants/site'
import { cn } from '@/lib/utils'

export const runtime = 'edge'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const img = searchParams.get('img')

    return new ImageResponse(
      (
        <div
          tw={cn(
            'w-full h-full flex items-center justify-center relative bg-white'
          )}
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
          <div tw='relative flex flex-col text-center items-center p-16'>
            {img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt='krafan - project'
                tw='max-w-full max-h-full border border-neutral-400 rounded-md shadow-xl'
              />
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630
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

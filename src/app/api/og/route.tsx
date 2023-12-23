/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/og'
import { NextResponse } from 'next/server'

import site from '@/config/site'

export const runtime = 'edge'

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')
    const date = searchParams.get('date')
    const url = searchParams.get('url') ?? 'krafan.com'
    const img = searchParams.get('img')

    if (!title) {
      return NextResponse.json(
        {
          error: 'Missing title'
        },
        {
          status: 400
        }
      )
    }

    const getTitleFontSize = () => {
      if (img) {
        if (title.length > 50) return 'text-3xl'
        if (title.length > 40) return 'text-4xl'
        return 'text-6xl'
      }
      if (title.length > 50) return 'text-4xl'
      if (title.length > 40) return 'text-5xl'
      return 'text-7xl'
    }

    const interSemiBold = await (
      await fetch(
        new URL('../../../../public/fonts/Inter-SemiBold.ttf', import.meta.url)
      )
    ).arrayBuffer()

    const CalSansSemiBold = await (
      await fetch(
        new URL(
          '../../../../public/fonts/CalSans-SemiBold.ttf',
          import.meta.url
        )
      )
    ).arrayBuffer()

    const [fontInterSemiBold, fontCalSansSemiBold] = await Promise.all([
      interSemiBold,
      CalSansSemiBold
    ])

    return new ImageResponse(
      (
        <div
          tw='w-full h-full flex'
          style={{
            backgroundImage: `url(${site.url}/images/og-background.png)`
          }}
        >
          <div tw=' h-full flex-1 flex flex-col px-14 py-12 text-white justify-between'>
            <div tw='text-3xl font-semibold' style={{ fontFamily: 'Inter' }}>
              {date}
            </div>
            <div
              tw={`${getTitleFontSize()}`}
              style={{
                fontFamily: 'Cal Sans'
              }}
            >
              {title}
            </div>
            <div tw='flex justify-between items-center'>
              <div tw='text-3xl font-semibold' style={{ fontFamily: 'Inter' }}>
                {url}
              </div>
            </div>
          </div>
          {img && (
            <div tw='h-full flex-1 flex p-12'>
              <div tw='h-full flex-1 flex relative overflow-hidden rounded-lg border border-gray-800'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${site.url}${img}`}
                  alt={title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontInterSemiBold,
            weight: 600,
            style: 'normal'
          },
          {
            name: 'Cal Sans',
            data: fontCalSansSemiBold,
            weight: 700,
            style: 'normal'
          }
        ]
      }
    )
  } catch {
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

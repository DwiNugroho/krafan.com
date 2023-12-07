'use client'
import { TypeAnimation } from 'react-type-animation'

import { CrossOutUnderline } from '@/components/ui'
import { HERO_LINKS, LINKEDIN_LINK } from '@/config/links'

const Hero = () => {
  return (
    <div className='my-12 flex flex-col items-center space-y-8 text-center md:my-28'>
      <h1 className='text-5xl font-extrabold text-foreground sm:text-6xl'>
        Welcome to 🚀{' '}
        <span className='relative'>
          Krafan
          <CrossOutUnderline className='absolute !inset-x-0 -bottom-3 w-full' />
        </span>
      </h1>
      <p className='text-2xl font-semibold text-muted-foreground'>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Digial Garden',
            1000,
            'Creative Portfolio',
            1000
          ]}
          speed={1}
          repeat={Number.POSITIVE_INFINITY}
        />
        By{' '}
        <a href={LINKEDIN_LINK.href} className='text-foreground'>
          Dwi Nugroho
        </a>
      </p>
      <div className=' flex gap-6'>
        {HERO_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.label}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Hero

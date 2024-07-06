import NextLink from 'next/link'

import { FOOTER_LINKS, HERO_LINKS } from '@/constants/links'

import { Krafan } from './svg'

const Footer = () => {
  return (
    <footer className='container'>
      <div className='grid grid-cols-1 gap-8 py-16 sm:grid-cols-3 lg:grid-cols-6'>
        <div className='flex flex-col items-start sm:col-span-3'>
          <NextLink href='/' className='flex items-center gap-3 tracking-wider'>
            <Krafan width={28} height={28} />{' '}
            <p className='mb-0 select-none font-mona text-2xl font-extrabold'>
              KRAFAN
            </p>
          </NextLink>

          <p className='mt-6 max-w-[360px] text-muted-foreground'>
            The digital garden and creative portfolio of Dwi Nugroho, where
            innovation meets design.
          </p>
        </div>
        {FOOTER_LINKS.map((item) => (
          <div className='flex flex-col gap-4' key={item.id}>
            <p className='font-mona text-lg font-bold uppercase'>
              {item.title}
            </p>
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-muted-foreground hover:text-foreground'
                target={link.target}
              >
                {link.title}
              </a>
            ))}
          </div>
        ))}
        <div className='flex flex-col gap-4'>
          <p className='font-mona text-lg font-bold uppercase'>GET IN TOUCH</p>
          <div className='flex items-center gap-4'>
            {HERO_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className='text-muted-foreground hover:text-foreground'
                aria-label={item.label}
                target='_blank'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

import { MdArrowRightAlt } from 'react-icons/md'

import { Image, ReactangleCard } from '@/components'
import { Pointer } from '@/components/svg'
import { buttonVariants } from '@/components/ui/button'
import { HERO_LINKS, LINKEDIN_LINK } from '@/constants/links'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className='container flex flex-col-reverse items-center justify-between gap-12 md:flex-row xl:gap-24'>
      <div className='flex flex-1 flex-col items-start gap-8'>
        <ReactangleCard className='-rotate-1'>
          <p className='mb-0 select-none font-mona'>Hi There!</p>
        </ReactangleCard>
        <h1 className='font-mona text-3xl leading-[40px] tracking-wide lg:text-5xl lg:leading-[60px] xl:text-6xl xl:leading-[80px]'>
          I&apos;m{' '}
          <a href={LINKEDIN_LINK.href} className='font-bold'>
            Dwi Nugroho
          </a>
          , Frontend Engineer
        </h1>
        <p className='font-inter text-xl leading-7 tracking-wide text-foreground/70 lg:max-w-[560px] xl:text-2xl xl:leading-9'>
          Experienced Frontend Engineer with 4+ years of specialization in Web
          Development.
        </p>
        <div className='flex items-center gap-6'>
          <a
            href='#'
            className={cn(
              buttonVariants(),
              'flex items-center gap-4 rounded-sm md:min-w-[160px]'
            )}
          >
            <span className='font-mona font-bold tracking-wide'>Hire Me</span>
            <MdArrowRightAlt size={28} />
          </a>
          <div className='flex items-center gap-4'>
            {HERO_LINKS.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className='text-foreground/60 hover:text-foreground'
                target='_blank'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='relative mb-12 aspect-square w-full max-w-[420px] select-none md:max-w-[280px] lg:mb-32 lg:max-w-[360px] xl:max-w-[420px]'>
        <Image
          src='/img/avatar-decor.png'
          alt='Dwi Nugroho'
          fill
          sizes='100%'
          lazy={false}
        />
        <div className='absolute -right-8 bottom-4 md:-right-16'>
          <div className='flex flex-row'>
            <Pointer width='24' height='26' className='-mt-5 text-yellow-300' />
            <div className='rounded-full bg-yellow-300 px-4 py-[4px]'>
              <p className='font-bold text-black'>Frontend Engineer</p>
            </div>
          </div>
        </div>
        <div className='absolute -bottom-12 -left-8 md:-left-16'>
          <div className='flex flex-row-reverse'>
            <Pointer
              width='24'
              height='26'
              className='-mt-4 rotate-90 text-sky-700'
            />
            <div className='rounded-full bg-sky-700 px-4 py-[4px]'>
              <p className='font-bold text-white'>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }

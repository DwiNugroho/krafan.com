import NextLink from 'next/link'

import { Logo } from '@/components/ui'
import { FOOTER_LINKS, HERO_LINKS, type Link } from '@/config/links'

const FooterLink = (props: Link) => {
  const { title, href } = props

  if (href.startsWith('/')) {
    return (
      <NextLink
        href={href}
        className='text-muted-foreground transition-colors duration-150 hover:text-foreground'
      >
        {title}
      </NextLink>
    )
  }

  return (
    <a
      href={href}
      className='text-muted-foreground transition-colors duration-150 hover:text-foreground'
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a>
  )
}

const Footer = () => {
  return (
    <footer className='mx-auto flex max-w-5xl flex-col px-8 pb-8'>
      <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        <div className='col-span-2 mb-10 flex flex-col items-start gap-8 sm:col-span-3 md:col-span-1 lg:col-span-2'>
          <NextLink href='/' className='flex items-center gap-4'>
            <Logo width={40} height={40} />
            <p className='text-xl font-bold text-foreground sm:text-2xl'>
              Krafan
            </p>
          </NextLink>
        </div>
        {FOOTER_LINKS.map((list) => (
          <div
            key={list.id}
            className='mb-10 flex flex-col items-start gap-4 pr-4'
          >
            <p className='text-lg font-semibold uppercase'>{list.title}</p>
            {list.links.map((link) => (
              <FooterLink key={link.title} {...link} />
            ))}
          </div>
        ))}
        <div className='mb-10 flex flex-col gap-4'>
          <p className='text-lg font-semibold uppercase'>GET IN TOUCH</p>
          <div className='flex gap-6'>
            {HERO_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.label}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground transition-colors duration-150 hover:text-foreground'
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-8 flex items-center justify-between text-sm'>
        <div>&copy; {new Date().getFullYear()} Dwi Nugroho</div>
      </div>
    </footer>
  )
}

export default Footer

{
  /* <div className='flex gap-6'>
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
</div> */
}

import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

export type Link = {
  href: string
  title: string
  target?: string
}

type HeroLinks = Array<{
  id: string
  label: string
  icon: React.ReactNode
  href: string
}>

type HeaderLinks = Array<{
  icon?: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  title: string
  links: Link[]
}>

export const LINKEDIN_LINK: Link = {
  title: 'linkedin',
  href: 'https://www.linkedin.com/in/dwi-nugroho'
}

export const HEADER_LINKS: HeaderLinks = [
  {
    href: '/blog',
    text: 'Blog'
  },
  {
    href: '/project',
    text: 'Projects'
  },
  {
    href: '/about',
    text: 'About'
  }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    title: 'Features',
    links: [
      {
        href: '/blog',
        title: 'Blog'
      },
      {
        href: '/project',
        title: 'Projects'
      },
      {
        href: '/about',
        title: 'About'
      }
    ]
  },
  {
    id: 2,
    title: 'Contact',
    links: [
      {
        href: 'mailto: work@krafan.com',
        title: 'work@krafan.com',
        target: '_blank'
      },
      {
        href: 'https://wa.me/6282116961709',
        title: '+62 821 1696 1709',
        target: '_blank'
      }
    ]
  }
]

export const HERO_LINKS: HeroLinks = [
  {
    id: 'github',
    label: 'GitHub',
    icon: <FiGithub size={28} />,
    href: 'https://github.com/dwinugroho'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: <FiInstagram size={28} />,
    href: 'https://www.instagram.com/dwirocks'
  },
  {
    id: 'linkedin',
    label: LINKEDIN_LINK.title,
    icon: <FiLinkedin size={28} />,
    href: LINKEDIN_LINK.href
  }
]

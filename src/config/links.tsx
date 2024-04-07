import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconFlame,
  IconPencil,
  IconUserCircle
} from '@tabler/icons-react'

export type Link = {
  href: string
  title: string
}

type HeroLinks = Array<{
  id: string
  label: string
  icon: React.ReactNode
  href: string
}>

type HeaderLinks = Array<{
  icon: React.ReactNode
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
    icon: <IconPencil size={14} />,
    href: '/blog',
    text: 'Blog'
  },
  {
    icon: <IconFlame size={14} />,
    href: '/projects',
    text: 'Projects'
  },
  {
    icon: <IconUserCircle size={14} />,
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
        href: '/projects',
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
        title: 'work@krafan.com'
      },
      {
        href: 'https://wa.me/6282116961709',
        title: '+62 821 1696 1709'
      }
    ]
  }
]

export const HERO_LINKS: HeroLinks = [
  {
    id: 'github',
    label: 'GitHub',
    icon: <IconBrandGithub size={28} />,
    href: 'https://github.com/dwinugroho'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: <IconBrandInstagram size={28} />,
    href: 'https://www.instagram.com/dwirocks'
  },
  {
    id: 'linkedin',
    label: LINKEDIN_LINK.title,
    icon: <IconBrandLinkedin size={28} />,
    href: LINKEDIN_LINK.href
  }
]

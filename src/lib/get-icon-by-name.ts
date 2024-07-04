import { IconBase } from 'react-icons'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiNextjsFill } from 'react-icons/ri'
import { SiMdx, SiNuxtdotjs, SiTailwindcss } from 'react-icons/si'

const getIconByName = (name: string): typeof IconBase => {
  switch (name) {
    case 'Typescript': {
      return BiLogoTypescript
    }
    case 'Next.js': {
      return RiNextjsFill
    }
    case 'MDX': {
      return SiMdx
    }
    case 'Tailwindcss': {
      return SiTailwindcss
    }
    case 'Nuxt': {
      return SiNuxtdotjs
    }
    default: {
      throw new Error('Icon not found')
    }
  }
}

export default getIconByName

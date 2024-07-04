import { BiLogoPostgresql } from 'react-icons/bi'
import {
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaPhp,
  FaReact,
  FaVuejs
} from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiNextdotjs, SiNuxtdotjs } from 'react-icons/si'

export const stacks = [
  {
    title: 'React.Js',
    icon: FaReact
  },
  {
    title: 'Next.Js',
    icon: SiNextdotjs
  },
  {
    title: 'Vue.Js',
    icon: FaVuejs
  },
  {
    title: 'Nuxt.Js',
    icon: SiNuxtdotjs
  },
  {
    title: 'TailwindCSS',
    icon: RiTailwindCssFill
  },
  {
    title: 'HTML',
    icon: FaHtml5
  },
  {
    title: 'CSS',
    icon: FaCss3Alt
  },
  {
    title: 'PHP',
    icon: FaPhp
  },
  { title: 'Node.Js', icon: FaNode },
  {
    title: 'PostgreSQL',
    icon: BiLogoPostgresql
  }
]

const Stacks = () => {
  return (
    <div className='relative flex flex-col gap-8'>
      <div className='container flex max-w-[600px] items-center gap-4 text-center'>
        <div className='h-[1px] w-full bg-gradient-to-l from-foreground/80 to-transparent'></div>
        <p className='whitespace-nowrap uppercase text-foreground/80'>
          Tech Stacks
        </p>
        <div className='h-[1px] w-full bg-gradient-to-r from-foreground/80 to-transparent'></div>
      </div>
      <div className='group flex animate-marquee select-none items-center gap-16 whitespace-nowrap hover:[animation-play-state:paused]'>
        {[...stacks, ...stacks].map((item, index) => (
          <a
            href='#'
            key={`stack-${index}`}
            className='flex items-center gap-4 text-foreground/40 hover:!text-foreground group-hover:text-foreground/40'
          >
            <item.icon size={32} />
            <p className='font-mona text-xl font-semibold'>{item.title}</p>
          </a>
        ))}
      </div>
      <div className='container mt-3 flex max-w-[600px] items-center text-center'>
        <div className='h-[1px] w-full bg-gradient-to-l from-foreground/80 to-transparent'></div>
        <div className='h-[1px] w-full bg-gradient-to-r from-foreground/80 to-transparent'></div>
      </div>
    </div>
  )
}

export { Stacks }

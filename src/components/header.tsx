'use client'

import Link from 'next/link'
import React from 'react'

import CommandMenu from '@/components/command-menu'
import MobileNav from '@/components/mobile-nav'
import Navbar from '@/components/navbar'
import { Logo } from '@/components/ui'
import cn from '@/utils/cn'

import ThemeSwitch from './theme-switch'
import { Separator } from './ui/separator'

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => document.removeEventListener('scroll', changeBackground)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 bg-background/30 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors duration-500',
        isScrolled && 'bg-background/80'
      )}
    >
      <div className='mx-auto flex h-[72px] max-w-7xl items-center justify-between px-8'>
        <Link
          href='/'
          className='flex items-center justify-center gap-1'
          aria-label='Homepage'
        >
          <Logo width={40} height={40} />
        </Link>
        <div className='flex items-center gap-2'>
          <Navbar />
          <Separator orientation='vertical' className='h-6' />
          <ThemeSwitch />
          <CommandMenu />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header

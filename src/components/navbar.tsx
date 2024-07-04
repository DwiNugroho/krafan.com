'use client'
import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

import { HEADER_LINKS } from '@/constants/links'
import { cn } from '@/lib/utils'

import { Krafan } from './svg'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const Navbar = () => {
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = React.useState(false)
  const [drawer, setDrawer] = React.useState(false)

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    changeBackground()
    document.addEventListener('scroll', changeBackground)

    return () => document.removeEventListener('scroll', changeBackground)
  }, [])
  return (
    <div
      className={cn(
        'sticky top-0 z-50 flex flex-col saturate-100 transition-all duration-200',
        {
          'bg-background/40 backdrop-blur-[20px] dark:bg-[#121212]/40':
            isScrolled
        }
      )}
    >
      <div
        className={cn(
          'container relative z-50 flex w-full items-center justify-between transition-all duration-200',
          isScrolled ? 'py-6' : 'py-10'
        )}
      >
        <NextLink
          href='/'
          className='flex items-center gap-3 tracking-wider'
          onClick={() => setDrawer(false)}
        >
          <Krafan width={28} height={28} />{' '}
          <p className='mb-0 select-none font-mona text-2xl font-extrabold'>
            KRAFAN
          </p>
        </NextLink>
        <div className='flex h-5 items-center space-x-2 md:space-x-4'>
          <div className='hidden md:inline'>
            <div className='flex space-x-8'>
              {HEADER_LINKS.map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-md rounded py-2 font-medium transition-colors duration-150',
                    {
                      'text-foreground/70 hover:text-foreground':
                        item.href !== pathname,
                      'text-foreground': item.href === pathname
                    }
                  )}
                >
                  {item.text}
                </NextLink>
              ))}
            </div>
          </div>
          <Separator orientation='vertical' className='hidden md:inline' />
          <ThemeSwitcher />
          <Button
            variant='ghost'
            className='md:hidden'
            size='sm'
            onClick={() => setDrawer(!drawer)}
          >
            <RxHamburgerMenu size={24} />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {drawer && (
          <motion.div
            variants={{
              visible: {
                opacity: 1
              },
              hidden: {
                opacity: 0
              }
            }}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='absolute left-0 right-0 top-0 flex h-screen w-full flex-col bg-foreground/60 dark:bg-background/60 md:hidden'
          >
            <motion.div
              variants={{
                visible: {
                  height: 'auto',
                  transition: {
                    duration: 0.3
                  }
                },
                hidden: {
                  height: 0
                }
              }}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='relative overflow-hidden bg-background'
            >
              <motion.ul
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.2,
                      staggerChildren: 0.07
                    }
                  },
                  hidden: {
                    opacity: 0,
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1
                    }
                  }
                }}
                initial='hidden'
                animate='visible'
                exit='hidden'
                className='container space-y-6 pb-12 pt-28'
              >
                {HEADER_LINKS.map((item) => (
                  <motion.li
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      hidden: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      }
                    }}
                    key={item.href}
                    onClick={() => setDrawer(false)}
                  >
                    <NextLink
                      href={item.href}
                      className='block w-full text-center text-xl font-semibold text-foreground/80 hover:text-foreground'
                    >
                      {item.text}
                    </NextLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <div
              className='w-full flex-1 cursor-pointer'
              onClick={() => setDrawer(false)}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar }

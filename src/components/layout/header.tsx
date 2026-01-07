'use client'

import { useEffect, useState } from 'react'

import { MailIcon, MenuIcon } from 'lucide-react'

import { ModeToggle } from '@/components/layout/mode-toggle'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

import { cn } from '@/lib/utils'

import InkLogo from '@/assets/svg/ink-logo'

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-17.5 w-full transition-all duration-300',
        {
          'bg-background shadow-sm': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-3'>
          <InkLogo />
          <span className='text-primary text-[20px] font-semibold'>INK</span>
        </a>

        {/* Navigation */}
        <MenuNavigation navigationData={navigationData} className='max-lg:hidden' />

        {/* Actions */}
        <div className='flex gap-4'>
          <ModeToggle />
          <Button variant='outline' className='max-sm:hidden' asChild>
            <a href='#get-in-touch'>Get in Touch</a>
          </Button>

          {/* Navigation for small screens */}
          <div className='flex gap-3'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='outline' size='icon' className='sm:hidden' asChild>
                  <a href='#get-in-touch'>
                    <MailIcon />
                    <span className='sr-only'>Get in Touch</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Get in Touch</TooltipContent>
            </Tooltip>

            <MenuDropdown
              align='end'
              navigationData={navigationData}
              trigger={
                <Button variant='outline' size='icon' className='lg:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

'use client'

import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/layout/mode-toggle'

import { cn } from '@/lib/utils'

const Header = () => {
  const pathname = usePathname()

  return (
    <div className='flex h-16 items-center justify-between gap-4 border-b px-6'>
      <a href='/'>Template Name</a>

      <nav className='flex items-center gap-4'>
        <a
          href='/'
          className={cn('text-muted-foreground hover:text-foreground active:text-foreground font-medium', {
            'text-primary': pathname === '/'
          })}
        >
          Home
        </a>
        <a
          href='/contact'
          className={cn('text-muted-foreground hover:text-foreground active:text-foreground font-medium', {
            'text-primary': pathname === '/contact'
          })}
        >
          Contact
        </a>
      </nav>

      <div className='flex items-center gap-2'>
        <ModeToggle />
        <Button variant='outline' asChild>
          <a href='/login'>Login</a>
        </Button>
      </div>
    </div>
  )
}

export default Header

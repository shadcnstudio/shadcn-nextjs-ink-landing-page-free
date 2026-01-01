'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/layout/mode-toggle'

import { cn } from '@/lib/utils'

const Header = () => {
  const pathname = usePathname()

  return (
    <div className='flex h-16 items-center justify-between gap-4 border-b px-6'>
      <Link href='/'>Template Name</Link>

      <nav className='flex items-center gap-4'>
        <Link
          href='/'
          className={cn('text-muted-foreground hover:text-foreground active:text-foreground font-medium', {
            'text-primary': pathname === '/'
          })}
        >
          Home
        </Link>
        <Link
          href='/contact'
          className={cn('text-muted-foreground hover:text-foreground active:text-foreground font-medium', {
            'text-primary': pathname === '/contact'
          })}
        >
          Contact
        </Link>
      </nav>

      <div className='flex items-center gap-2'>
        <ModeToggle />
        <Button variant='outline' asChild>
          <Link href='/login'>Login</Link>
        </Button>
      </div>
    </div>
  )
}

export default Header

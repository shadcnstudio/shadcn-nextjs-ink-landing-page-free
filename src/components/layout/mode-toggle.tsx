'use client'

import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant='outline'
      size='icon'
      className='relative'
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      <SunIcon className='scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <MoonStarIcon className='absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

export { ModeToggle }

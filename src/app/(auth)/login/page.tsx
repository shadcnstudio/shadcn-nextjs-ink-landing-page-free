import Link from 'next/link'
import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Login',
  robots: 'noindex,nofollow',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/login`
  }
}

const LoginPage = () => {
  return (
    <div className='space-y-4 p-6'>
      <h1>Login Page</h1>

      <div className='flex items-center gap-4'>
        <Button variant='outline' asChild>
          <Link href='/register'>Create Account</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href='/'>Back to home</Link>
        </Button>
      </div>
    </div>
  )
}

export default LoginPage

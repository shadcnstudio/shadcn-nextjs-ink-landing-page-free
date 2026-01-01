import Link from 'next/link'
import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Register',
  robots: 'noindex,nofollow',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/register`
  }
}

const RegisterPage = () => {
  return (
    <div className='space-y-4 p-6'>
      <h1>Register Page</h1>

      <div className='flex items-center gap-4'>
        <Button variant='outline' asChild>
          <Link href='/login'>Already have an account?</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href='/'>Back to home</Link>
        </Button>
      </div>
    </div>
  )
}

export default RegisterPage

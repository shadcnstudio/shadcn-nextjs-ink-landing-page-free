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
          <a href='/login'>Already have an account?</a>
        </Button>
        <Button variant='outline' asChild>
          <a href='/'>Back to home</a>
        </Button>
      </div>
    </div>
  )
}

export default RegisterPage

import type { ReactNode } from 'react'

import Header from '@/components/layout/header'

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='flex h-full w-full min-w-0 flex-col'>
      <Header />
      <main className='flex flex-1 flex-col'>{children}</main>
    </div>
  )
}

export default PagesLayout

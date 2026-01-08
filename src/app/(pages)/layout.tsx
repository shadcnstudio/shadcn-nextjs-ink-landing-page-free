import type { ReactNode } from 'react'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

import type { NavigationSection } from '@/components/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '/#home'
  },
  {
    title: 'Categories',
    href: '/#categories'
  },
  {
    title: 'Team',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  }
]

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col pt-16'>{children}</main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default PagesLayout

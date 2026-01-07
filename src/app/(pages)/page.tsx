import { allBlogPosts } from '@/blog'

import HeroSection from '@/components/blocks/hero-section/hero-section'
import Blog from '@/components/blocks/blog-component/blog-component'
import CTA from '@/components/blocks/cta-section/cta-section'

const Home = () => {
  return (
    <div>
      <HeroSection blogdata={allBlogPosts} />
      <Blog />
      <CTA />
    </div>
  )
}

export default Home

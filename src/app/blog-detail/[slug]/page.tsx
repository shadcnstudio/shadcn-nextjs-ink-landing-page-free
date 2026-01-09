import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { notFound } from 'next/navigation'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import CTA from '@/components/blocks/cta-section/cta-section'
import Blog from '@/components/blocks/blog-related-post/blog-related-post'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { DynamicToc } from '@/components/table-of-contents/dynamic-toc'

import type { NavigationSection } from '@/components/blocks/menu-navigation'
import { allBlogPosts, blogContentMap, getBlogPostBySlug, getRelatedPosts, type BlogPost } from '@/blog'

// Navigation data
const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '/#'
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  return allBlogPosts.map(post => ({
    slug: post.slug
  }))
}

// Default content for posts without specific content
const DefaultContent = ({ post }: { post: BlogPost }) => (
  <section className='space-y-8'>
    <div className='flex items-start gap-4'>
      <span className='text-3xl'>📝</span>
      <div>
        <h2 className='text-foreground mb-4 text-2xl font-semibold'>{post.title}</h2>
        <p className='text-muted-foreground text-xl leading-relaxed'>{post.description}</p>
      </div>
    </div>

    <div className='space-y-6'>
      <p className='text-muted-foreground'>
        This is a comprehensive guide about {post.title.toLowerCase()}. The content covers essential topics related to{' '}
        {post.category.toLowerCase()} and provides practical insights for implementation.
      </p>

      <div className='border-border rounded-lg border p-6'>
        <h3 className='text-foreground mb-2 font-semibold'>Key Topics Covered</h3>
        <ul className='text-muted-foreground list-inside list-disc space-y-2'>
          {post.tags.map((tag: string, index: number) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

// Navigation component for previous/next posts
const PostNavigation = ({ currentPost }: { currentPost: BlogPost }) => {
  // Sort posts by ID in descending order (same as in blog component)
  const sortedPosts = allBlogPosts.sort((a, b) => b.id - a.id)
  const currentIndex = sortedPosts.findIndex(post => post.id === currentPost.id)

  // Previous post is the one with lower index (newer post, higher ID)
  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null

  // Next post is the one with higher index (older post, lower ID)
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null

  return (
    <div className='flex w-full justify-between'>
      {previousPost ? (
        <Link href={`/blog-detail/${previousPost.slug}`}>
          <Button
            className='rounded-[8px] bg-sky-600/10 text-sky-600 hover:bg-sky-600/20 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/20 dark:focus-visible:ring-sky-400/40'
            variant='outline'
          >
            <ChevronLeftIcon className='size-4' />
            Previous Post
          </Button>
        </Link>
      ) : null}

      {nextPost ? (
        <Link className='ms-auto' href={`/blog-detail/${nextPost.slug}`}>
          <Button className='rounded-[8px]' variant='outline'>
            Next Post
            <ChevronRightIcon className='size-4' />
          </Button>
        </Link>
      ) : null}
    </div>
  )
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params in Next.js 15+
  const resolvedParams = await params

  // Find the blog post by slug
  const post = getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)

  // Get content for this slug
  const renderContent = () => {
    const ContentComponent = blogContentMap[post.slug]

    return ContentComponent ? <ContentComponent /> : <DefaultContent post={post} />
  }

  return (
    <div>
      <Header navigationData={navigationData} />
      <main className='flex flex-col pt-16'>
        <section className='py-8 sm:pt-16 sm:pb-24'>
          <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8'>
            <div className='gap-16 md:grid md:grid-cols-5 lg:grid-cols-7'>
              <div className='hidden md:col-span-2 md:block lg:col-span-2'>
                <DynamicToc />
              </div>

              <div className='space-y-12 md:col-span-3 lg:col-span-5'>
                <div className='space-y-6'>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href='/#categories'>Blog</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{post.category}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>

                  <h1 className='text-foreground text-4xl font-semibold'>{post.title}</h1>

                  <p className='text-muted-foreground text-xl'>{post.description}</p>

                  <Separator />

                  <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-11.5'>
                        <AvatarImage src={post.avatarUrl} alt={post.author} />
                        <AvatarFallback className='text-xs'>
                          {post.author
                            .split(' ')
                            .map(n => n[0])
                            .join('')
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className='flex flex-col gap-1'>
                        <span className='text-muted-foreground text-sm'>Written by</span>
                        <span className='text-foreground text-sm font-medium'>{post.author}</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <span className='text-muted-foreground text-sm'>Read Time</span>
                      <span className='text-foreground text-sm font-medium'>{post.readTime} minute read</span>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <span className='text-muted-foreground text-sm'>Posted on</span>
                      <span className='text-foreground text-sm font-medium'>{post.date}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={post.imageUrl} alt={post.imageAlt} className='max-h-148 w-full rounded-[8px]' />
                </div>

                <article id='content' className='space-y-12'>
                  {renderContent()}
                </article>

                <PostNavigation currentPost={post} />
              </div>
            </div>
          </div>
        </section>

        <Blog blogPosts={relatedPosts} />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

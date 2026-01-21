import Link from 'next/link'
import type { Metadata } from 'next'

import { getPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Welcome to our blog. Stay updated with the latest news and articles.',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'Template Name',
      description: 'Template Description',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-US'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#webpage`,
      name: 'Blog',
      description: 'Welcome to our blog. Stay updated with the latest news and articles.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/blog`]
      }
    }
  ]
}

const BlogPage = async () => {
  const posts = await getPosts()

  return (
    <div className='p-6'>
      <h1>Blog Page</h1>
      <div className='mx-auto grid w-full max-w-7xl grid-cols-3 gap-6 px-8'>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className='space-y-2 rounded-xl border p-6 shadow-sm'>
            <img src={post.image} alt={post.title} className='rounded-md' />
            <div>
              <span className='bg-destructive/10 text-destructive rounded-full px-2 py-0.5 text-xs'>
                {post.category}
              </span>
            </div>
            <h2 className='text-3xl font-semibold'>{post.title}</h2>
            <p>{post.description}</p>
            <div className='flex justify-between text-sm'>
              <span>{post.author?.name}</span>
              <span className='text-muted-foreground'>
                {new Date(post.publishedAt ?? '').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </div>
  )
}

export default BlogPage

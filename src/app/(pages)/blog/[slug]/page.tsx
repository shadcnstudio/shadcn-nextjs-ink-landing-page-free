import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import MDXContent from '@/components/mdx-content'

import { getPostBySlug, getPosts } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  const { metadata } = post

  return {
    title: `Blog: ${metadata.title}`,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${metadata.slug}`
    }
  }
}

export const dynamicParams = false

const BlogDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post

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
        name: `Blog: ${metadata.title}`,
        description: metadata.description,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${metadata.slug}`,
        isPartOf: {
          '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
        },
        potentialAction: {
          '@type': 'ReadAction',
          target: [`${process.env.NEXT_PUBLIC_APP_URL}/blog/${metadata.slug}`]
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${process.env.NEXT_PUBLIC_APP_URL}`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${process.env.NEXT_PUBLIC_APP_URL}/blog`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: metadata.title,
            item: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${metadata.slug}`
          }
        ]
      }
    ]
  }

  return (
    <>
      <section className='mx-auto w-full max-w-7xl p-6'>
        <Breadcrumb className='mb-6'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='/'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='/blog'>Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{metadata.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className='mb-8 flex items-center justify-between'>
          <p className='font-medium'>By {metadata.author}</p>
          <p className='text-muted-foreground text-sm'>
            {new Date(metadata.publishedAt ?? '').toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        <img src={metadata.image} alt={metadata.title} className='mx-auto mb-8 max-w-xl rounded-xl' />

        <MDXContent source={content} />

        {/* Add JSON-LD to your page */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
          }}
        />
      </section>
    </>
  )
}

export default BlogDetailsPage

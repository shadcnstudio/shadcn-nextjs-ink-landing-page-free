import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with us. We're here to help and answer any questions you may have.",
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact`
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
      name: 'Contact Us',
      description: "Get in touch with us. We're here to help and answer any questions you may have.",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/contact`]
      }
    }
  ]
}

const ContactUsPage = () => {
  return (
    <div className='p-6'>
      <h1>Contact Us Page</h1>
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

export default ContactUsPage

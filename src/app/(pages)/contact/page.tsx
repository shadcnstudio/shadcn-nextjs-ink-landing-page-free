import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with us. We're here to help and answer any questions you may have.",
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact`
  }
}

const ContactUsPage = () => {
  return (
    <div className='p-6'>
      <h1>Contact Us Page</h1>
    </div>
  )
}

export default ContactUsPage

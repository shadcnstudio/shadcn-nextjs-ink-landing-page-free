import type { JSX } from 'react'

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote-client/rsc'

const components: MDXRemoteProps['components'] = {
  h1: ({ children }) => <h1 className='text-4xl font-bold'>{children}</h1>,
  h2: ({ children }) => <h2 className='mt-6 text-3xl font-semibold'>{children}</h2>,
  p: ({ children }) => <p className='mt-4 text-base'>{children}</p>,
  ul: ({ children }) => <ul className='mt-4 list-disc pl-6'>{children}</ul>,
  ol: ({ children }) => <ol className='mt-4 list-decimal pl-6'>{children}</ol>,
  li: ({ children }) => <li className='mt-2'>{children}</li>,
  hr: () => <hr className='my-6' />
}

const MDXContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}

export default MDXContent

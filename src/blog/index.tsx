// Central export for all blog posts data and content
import { componentSystemDesignData, ComponentSystemDesignContent } from './scaling-design-component-system'
import { userBehaviorDesignData, UserBehaviorDesignContent } from './user-behavior-design'
import { productLaunchChecklistData, ProductLaunchChecklistContent } from './product-launch-checklist'
import { empathyDrivenDesignData, EmpathyDrivenDesignContent } from './empathy-driven-design'
import { fastAppsBlueprintData, FastAppsBlueprintContent } from './fast-apps-blueprint'
import { productKPIsTrackingData, ProductKPIsTrackingContent } from './product-kpis-tracking'
import { aiDrivenWorkflowsData, AIDrivenWorkflowsContent } from './ai-driven-workflows'
import { scalableCodeData, ScalableCodeContent } from './scalable-code'

// Blog post type
export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  date: string
  category: string
  author: string
  avatarUrl: string
  readTime: number
  tags: string[]
  featured: boolean
}

// All blog posts data
export const allBlogPosts: BlogPost[] = [
  componentSystemDesignData,
  userBehaviorDesignData,
  productLaunchChecklistData,
  empathyDrivenDesignData,
  fastAppsBlueprintData,
  productKPIsTrackingData,
  aiDrivenWorkflowsData,
  scalableCodeData
]

// Content components mapping
export const blogContentMap: { [key: string]: () => React.ReactElement } = {
  'scaling-design-component-system': ComponentSystemDesignContent,
  'product-launch-checklist': ProductLaunchChecklistContent,
  'user-behavior-design': UserBehaviorDesignContent,
  'empathy-driven-design': EmpathyDrivenDesignContent,
  'fast-apps-blueprint': FastAppsBlueprintContent,
  'product-kpis-tracking': ProductKPIsTrackingContent,
  'ai-driven-workflows': AIDrivenWorkflowsContent,
  'scalable-code': ScalableCodeContent
}

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return allBlogPosts.find(post => post.slug === slug)
}

// Helper function to get featured posts
export const getFeaturedPosts = (): BlogPost[] => {
  return allBlogPosts.filter(post => post.featured)
}

// Helper function to get related posts (same category, exclude current post)
export const getRelatedPosts = (currentSlug: string, currentCategory: string, limit: number = 3): BlogPost[] => {
  // First try to get posts from same category
  const sameCategoryPosts = allBlogPosts.filter(post => post.category === currentCategory && post.slug !== currentSlug)

  // If we have enough posts from same category, use them
  if (sameCategoryPosts.length >= limit) {
    return sameCategoryPosts.slice(0, limit)
  }

  // If not enough posts from same category, fill with other posts (exclude current)
  const otherPosts = allBlogPosts.filter(post => post.category !== currentCategory && post.slug !== currentSlug)

  return [...sameCategoryPosts, ...otherPosts].slice(0, limit)
}

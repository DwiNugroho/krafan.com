import {
  allBlogPosts,
  allPages,
  allProjects,
  BlogPost as BlogPostType,
  Page as PagesType,
  Project as ProjectType
} from 'contentlayer/generated'

type Config = {
  limit?: number
}

export type Project = ProjectType

export const getAllProjects = (config: Config = {}): Project[] => {
  const { limit = allProjects.length } = config
  return allProjects
    .filter((project) => project.published)
    .sort((a, b) => b.id - a.id)
    .slice(0, limit)
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return getAllProjects().find((project) => project.slug === slug)
}

export type BlogPost = BlogPostType

export const getAllBlogPosts = (config: Config = {}): BlogPost[] => {
  const { limit = allBlogPosts.length } = config
  return allBlogPosts
    .filter((post) => post.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, limit)
}

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllBlogPosts().find((blog) => blog.slug === slug)
}

export type Page = PagesType

export const getPageBySlug = (slug: string): Page | undefined => {
  return allPages.find((page) => page.slug === slug)
}

import { pick } from 'contentlayer/client'
import { allBlogPosts, allProjects } from 'contentlayer/generated'

type GetAllConfig = {
  limit?: number
}

export const getAllPosts = (config: GetAllConfig = {}) => {
  const { limit = allBlogPosts.length } = config

  const posts = [...allBlogPosts]

  return posts
    .filter((post) => post.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, limit)
    .map((post) =>
      pick(post, ['_id', 'slug', 'title', 'summary', 'date', 'published'])
    )
}

export const getAllProjects = (config: GetAllConfig = {}) => {
  const { limit = allProjects.length } = config

  return allProjects.sort((a, b) => b.id - a.id).slice(0, limit)
}

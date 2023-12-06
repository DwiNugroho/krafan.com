import { pick } from 'contentlayer/client'
import { allBlogPosts, allProjects } from 'contentlayer/generated'

type GetAllConfig = {
  limit?: number
  sorted?: boolean
}

export const getAllPosts = (config: GetAllConfig = {}) => {
  const { limit = allBlogPosts.length, sorted = true } = config

  const posts = allBlogPosts

  if (sorted) {
    return posts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    )
  }

  return posts
    .slice(0, limit)
    .filter((post) => post.published)
    .map((post) =>
      pick(post, ['_id', 'slug', 'title', 'summary', 'date', 'published'])
    )
}

export const getAllProjects = (config: GetAllConfig = {}) => {
  const { limit = allProjects.length } = config

  return allProjects.sort((a, b) => b.id - a.id).slice(0, limit)
}

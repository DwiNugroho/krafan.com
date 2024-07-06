import site from '@/constants/site'

export const createOgImageURL = (
  slug: '' | '/blog' | '/project' = '',
  query: { [key: string]: string | undefined | null } = {}
) => {
  const url = new URL(site.url + '/og' + slug)

  Object.keys(query).forEach((key) => {
    if (query[key]) {
      url.searchParams.append(key, query[key])
    }
  })

  return url.toString()
}

import { type IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  githubUsername: string
  favicons: IconDescriptor[]
}

const prodBaseURL = 'https://krafan.com'
const devBaseURL = 'http://127.0.0.1:3000'

const site: Site = {
  url: process.env.NODE_ENV === 'production' ? prodBaseURL : devBaseURL,
  title: 'Krafan',
  name: 'Krafan',
  keywords: [
    'DwiNugroho',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Dwi Nugroho'
  ],
  titleTemplate: '- Krafan',
  description: 'Digital Garden • Creative Portfolio • By Dwi Nugroho',
  githubUsername: 'DwiNugroho',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png'
    }
  ]
}

export default site

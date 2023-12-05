'use client'

const editURL = (slug: string) =>
  `https://github.com/DwiNugroho/krafan.com/blob/main/src/content/blog/${slug}.mdx?plain=1`

type FooterProps = {
  slug: string
  modifiedTime: string
}

const Footer = (props: FooterProps) => {
  const { slug } = props

  return (
    <div className='my-8 flex w-full items-center justify-between py-4 text-sm max-sm:flex-col max-sm:items-start max-sm:gap-4'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={editURL(slug)}
        className='text-muted-foreground transition-colors duration-150 hover:text-foreground'
      >
        Edit on GitHub
      </a>
    </div>
  )
}

export default Footer

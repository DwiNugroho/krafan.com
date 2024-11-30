import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files'
import { type Root } from 'hast'
// import { s } from 'hastscript'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { codeImport } from 'remark-code-import'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

import getLanguageIconByExtension from './src/lib/get-language-icon-by-extension'

const Techstack = defineNestedType(() => ({
  name: 'Techstack',
  fields: {
    label: {
      type: 'string',
      description: 'The label of the techstack',
      required: true
    }
  }
}))

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  fields: {
    published: {
      type: 'boolean'
    },
    id: {
      type: 'number',
      description: 'The id of the project',
      required: true
    },
    name: {
      type: 'string',
      description: 'The name of the project',
      required: true
    },
    description: {
      type: 'string',
      description: 'The description of the project',
      required: true
    },
    homepage: {
      type: 'string',
      description: "The link to the project's homepage",
      required: false
    },
    github: {
      type: 'string',
      description: "The url to the project's github page",
      required: false
    },
    background: {
      type: 'string',
      description: 'The background of project card',
      required: true
    },
    techstack: {
      type: 'list',
      of: Techstack,
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blogs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog post',
      required: true
    },
    date: {
      type: 'string',
      description: 'The date of the blog post',
      required: true
    },
    modifiedTime: {
      type: 'string',
      description: 'The modified time of the blog post',
      required: true
    },
    summary: {
      type: 'string',
      description: 'The summary of the blog post',
      required: true
    },
    published: {
      type: 'boolean',
      description: 'The status of Blog is published or not',
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Project, BlogPost, Page],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      [
        //@ts-ignore
        rehypePrettyCode,
        {
          theme: 'andromeeda'
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: [],
            ariaLabel: 'Link to section'
          }
        }
      ],
      () => (tree: Root) => {
        visit(tree, 'element', (node) => {
          if (node?.type === 'element' && node?.tagName === 'figure') {
            const titleFigure: any = node.children[0]

            if (
              titleFigure.properties['data-rehype-pretty-code-title'] !==
              undefined
            ) {
              const icon = getLanguageIconByExtension(
                titleFigure.properties['data-language'] as string
              )

              if (icon) {
                titleFigure.children.unshift(icon)
              }
            }
          }
          return
        })
      }
    ]
  }
})

import { s } from 'hastscript'

import { cn } from './utils'

const generateIcon = (path: string, color?: string, className?: string) =>
  s(
    'svg',
    {
      role: 'img',
      viewBox: '0 0 24 24',
      width: '16',
      height: '16',
      xmlns: 'http://www.w3.org/2000/svg',
      fill: color ?? 'currentColor',
      className: cn('rounded-[2px]', className)
    },
    [
      s('path', {
        d: path
      })
    ]
  )

const getLanguageIconByExtension = (extension: string) => {
  switch (extension) {
    case 'js':
    case 'jsx':
    case 'cjs':
    case 'mjs': {
      return generateIcon(
        'M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583'
      )
    }
    case 'bash': {
      return generateIcon(
        'm11 12l-7.071 7.071l-1.414-1.414L8.172 12L2.515 6.343L3.929 4.93zm0 7h10v2H11z'
      )
    }
    default: {
      return undefined
    }
  }
}

export default getLanguageIconByExtension

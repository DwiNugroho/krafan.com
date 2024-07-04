import { type Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx,md,mdx}',
    './app/**/*.{ts,tsx,md,mdx}',
    './src/**/*.{ts,tsx,md,mdx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 60s linear infinite'
      },
      fontFamily: {
        default: ['var(--font-inter)'],
        inter: ['var(--font-inter)'],
        mona: ['var(--font-mona)']
      },

      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              position: 'relative',
              scrollMarginTop: '96px',
              '& a::before': {
                content: 'none !important'
              }
            },
            img: {
              margin: '0 auto'
            },
            pre: {
              padding: '1rem 0 !important',
              '> code': {
                padding: '0 !important',
                backgroundColor: 'transparent',
                '> [data-line]': {
                  borderLeft: '4px solid transparent',
                  padding: '0.1rem 1.8rem 0.1rem 0 !important',
                  'counter-increment': 'step-counter',
                  '&:before': {
                    content: 'counter(step-counter)',
                    display: 'inline-block',
                    'text-align': 'right',
                    width: '1.8rem',
                    marginRight: '20px',
                    color: 'rgba(255,255,255,0.2)'
                  }
                },
                '> [data-highlighted-line]': {
                  borderLeftColor: 'rgba(255,255,255,0.4)',
                  background: 'rgba(255,255,255,0.04)'
                }
              },
              mark: {
                background: 'none'
              },
              '&::-webkit-scrollbar': {
                width: '4px',
                height: '12px'
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'hsl(var(--muted) / 0.1)'
              }
            },
            '[data-language="bash"],[data-language="txt"]': {
              '> code': {
                '> [data-line]': {
                  padding: '0.1rem 1.8rem 0.1rem 1rem !important',
                  '&:before': {
                    display: 'none'
                  }
                }
              }
            },
            '[data-rehype-pretty-code-title]': {
              backgroundColor: 'rgb(35, 38, 46)',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              padding: '8px 20px',
              fontSize: '14px !important',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'rgba(255,255,255,0.8)',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              'user-select': 'none'
            },
            '[data-rehype-pretty-code-title] ~ div > pre': {
              marginTop: '0 !important',
              borderTopLeftRadius: '0 !important',
              borderTopRightRadius: '0 !important',
              borderTopWidth: '0'
            },
            '[data-rehype-pretty-code-title] ~ div > .copy-button': {
              top: '-30px !important'
            }
          }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
} satisfies Config

export default config

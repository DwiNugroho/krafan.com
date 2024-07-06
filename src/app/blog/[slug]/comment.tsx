'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'
import React from 'react'

import GISCUS_CONFIG from '@/constants/giscus'

const Comment = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    GISCUS_CONFIG() && (
      <div className='my-8'>
        <Giscus
          repo={'' as `${string}/${string}`}
          repoId={''}
          mapping={'number'}
          theme={resolvedTheme}
          {...GISCUS_CONFIG()}
        />
      </div>
    )
  )
}
export default Comment

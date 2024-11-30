import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GISCUS_REPO: z.string().optional(),
    NEXT_PUBLIC_GISCUS_REPOSITORY_ID: z.string().optional(),
    NEXT_PUBLIC_GISCUS_CATEGORY: z.string().optional(),
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: z.string().optional()
  },
  runtimeEnv: {
    NEXT_PUBLIC_GISCUS_REPO: process.env.NEXT_PUBLIC_GISCUS_REPO,
    NEXT_PUBLIC_GISCUS_REPOSITORY_ID:
      process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    NEXT_PUBLIC_GISCUS_CATEGORY: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID
  }
})

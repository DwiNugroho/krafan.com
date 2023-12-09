// @ts-check
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/* c8 ignore start */
export const env = createEnv({
  skipValidation: process.env.CI === 'true' || process.env.NODE_ENV === 'test',
  client: {
    NEXT_PUBLIC_GISCUS_REPO: z.string().min(1),
    NEXT_PUBLIC_GISCUS_REPOSITORY_ID: z.string().min(1),
    NEXT_PUBLIC_GISCUS_CATEGORY: z.string().min(1),
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: z.string().min(1)
  },
  runtimeEnv: {
    NEXT_PUBLIC_GISCUS_REPO: process.env.NEXT_PUBLIC_GISCUS_REPO,
    NEXT_PUBLIC_GISCUS_REPOSITORY_ID:
      process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    NEXT_PUBLIC_GISCUS_CATEGORY: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID
  }
})
/* c8 ignore stop */

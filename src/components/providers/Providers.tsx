'use client'

import { MotionConfig } from 'motion/react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
  })
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {/* "user" turns off transform/layout motion for prefers-reduced-motion, keeps opacity. */}
      <MotionConfig reducedMotion='user'>{children}</MotionConfig>
    </PostHogProvider>
  )
}

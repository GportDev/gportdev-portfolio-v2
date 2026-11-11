'use client'

import { Download } from 'lucide-react'
import posthog from 'posthog-js'
import { profile } from '@/lib/data/profile'

const variants = {
  primary: 'bg-green text-ink shadow-glow hover:bg-green-light',
  ghost:
    'border border-line-strong bg-surface text-white hover:border-green/50 hover:bg-surface-strong',
}

export function ResumeButton({
  variant = 'primary',
}: {
  variant?: keyof typeof variants
}) {
  return (
    <a
      href={profile.resume}
      download
      onClick={() => posthog.capture('Resume Downloaded')}
      className={`press inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold ${variants[variant]}`}
    >
      <Download className='size-4' strokeWidth={2.25} />
      Download resume
    </a>
  )
}

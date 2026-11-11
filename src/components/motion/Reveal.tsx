'use client'

import { motion } from 'motion/react'
import { EASE_OUT } from '@/lib/ease'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Distance in px the element travels up while fading in. */
  y?: number
  as?: 'div' | 'li' | 'section' | 'article'
}

/** Fades content up once, the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = 'div',
}: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  )
}

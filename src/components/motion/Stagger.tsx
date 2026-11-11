'use client'

import { type Variants, motion } from 'motion/react'
import { EASE_OUT } from '@/lib/ease'

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
}

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
}

type Tag = 'div' | 'ul' | 'ol'

/** Children wrapped in <StaggerItem> cascade in once the group enters view. */
export function Stagger({
  children,
  className,
  stagger = 0.05,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  as?: Tag
}) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      variants={container}
      custom={stagger}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
    >
      {children}
    </Component>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li'
}) {
  const Component = motion[as]
  return (
    <Component className={className} variants={item}>
      {children}
    </Component>
  )
}

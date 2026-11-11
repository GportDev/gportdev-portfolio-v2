'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

/** Wraps the journey list; draws its vertical line as the reader scrolls. */
export function JourneyLine({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 55%'],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={ref} className='relative'>
      <div
        aria-hidden
        className='absolute top-2 bottom-2 left-[19px] w-px bg-line lg:left-1/2 lg:-translate-x-1/2'
      />
      <motion.div
        aria-hidden
        style={{ scaleY }}
        className='absolute top-2 bottom-2 left-[19px] w-px origin-top bg-linear-to-b from-green-light via-green to-green/0 lg:left-1/2 lg:-translate-x-1/2'
      />
      {children}
    </div>
  )
}

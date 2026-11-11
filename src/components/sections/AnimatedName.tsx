'use client'

import { motion } from 'motion/react'
import { EASE_OUT } from '@/lib/ease'

/** Letters rise out of a soft blur, one after another. Plays once on load. */
export function AnimatedName({ text }: { text: string }) {
  const words = text.split(' ')
  let i = 0
  return (
    <h1
      aria-label={text}
      className='text-[2.75rem] leading-[1.02] font-bold tracking-tight sm:text-7xl lg:text-[5.5rem]'
    >
      {words.map((word, w) => (
        <span key={w} aria-hidden className='inline-block whitespace-nowrap'>
          {word.split('').map((char) => {
            const delay = 0.15 + i++ * 0.035
            return (
              <motion.span
                key={`${char}-${delay}`}
                className='inline-block'
                initial={{ opacity: 0, y: '0.35em', filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay }}
              >
                {char}
              </motion.span>
            )
          })}
          {w < words.length - 1 && <span className='inline-block'>&nbsp;</span>}
        </span>
      ))}
    </h1>
  )
}

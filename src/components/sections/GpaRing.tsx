'use client'

import { motion } from 'motion/react'
import { EASE_OUT } from '@/lib/ease'

/** Ring that fills to GPA / 4.0 the first time it comes into view. */
export function GpaRing({ gpa, size = 112 }: { gpa: number; size?: number }) {
  const stroke = 8
  const r = (size - stroke) / 2
  return (
    <div
      className='relative shrink-0'
      style={{ width: size, height: size }}
      role='img'
      aria-label={`GPA ${gpa.toFixed(1)} out of 4.0`}
    >
      <svg width={size} height={size} className='-rotate-90'>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill='none'
          strokeWidth={stroke}
          className='stroke-white/8'
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill='none'
          strokeWidth={stroke}
          strokeLinecap='round'
          className='stroke-green-light'
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: gpa / 4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.2 }}
        />
      </svg>
      <div className='absolute inset-0 grid place-items-center text-center'>
        <div>
          <p className='tabular text-2xl leading-none font-bold'>
            {gpa.toFixed(1)}
          </p>
          <p className='mt-1 text-[10px] tracking-widest text-faint uppercase'>
            GPA
          </p>
        </div>
      </div>
    </div>
  )
}

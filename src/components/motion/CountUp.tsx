'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

const format = (n: number) => new Intl.NumberFormat('en-US').format(n)

/**
 * Renders the real number on the server (good for SEO and no-JS), resets to
 * zero before first paint on the client, then counts up once in view.
 */
export function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1.4,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const reduce = useReducedMotion()

  useLayoutEffect(() => {
    if (reduce || !ref.current) return
    ref.current.textContent = `${prefix}0${suffix}`
  }, [prefix, suffix, reduce])

  useEffect(() => {
    if (!inView || reduce || !ref.current) return
    const node = ref.current
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${format(Math.round(v))}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, reduce, value, prefix, suffix, duration])

  return (
    <span ref={ref} className={className}>
      {`${prefix}${format(value)}${suffix}`}
    </span>
  )
}

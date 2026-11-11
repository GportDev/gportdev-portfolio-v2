'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { RichText } from '@/components/ui/RichText'
import { StatusBadge } from '@/components/ui/StatusBadge'
import type { FeatureArea } from '@/lib/data/experience'
import { EASE_OUT } from '@/lib/ease'

/** Height of an element, kept current with ResizeObserver. 'auto' until measured. */
function useMeasuredHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [height, setHeight] = useState<number | 'auto'>('auto')
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.borderBoxSize[0].blockSize)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return [ref, height] as const
}

/** Tabs over the feature areas of the featured role. */
export function FeatureExplorer({ features }: { features: FeatureArea[] }) {
  const [activeId, setActiveId] = useState(features[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const baseId = useId()
  const active = features.find((f) => f.id === activeId) ?? features[0]
  const [contentRef, contentHeight] = useMeasuredHeight<HTMLDivElement>()
  const reduceMotion = useReducedMotion()

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const keys = [
      'ArrowDown',
      'ArrowRight',
      'ArrowUp',
      'ArrowLeft',
      'Home',
      'End',
    ]
    if (!keys.includes(e.key)) return
    e.preventDefault()
    let next = index
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight')
      next = (index + 1) % features.length
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft')
      next = (index - 1 + features.length) % features.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = features.length - 1
    setActiveId(features[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className='grid gap-4 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-6'>
      <div
        role='tablist'
        aria-label='What I built at SEO Gets'
        aria-orientation='vertical'
        className='-mx-4 flex snap-x [scrollbar-width:none] gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0'
      >
        {features.map((f, i) => {
          const selected = f.id === activeId
          return (
            <button
              key={f.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role='tab'
              id={`${baseId}-tab-${f.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(f.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`press relative flex shrink-0 snap-start items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-left text-sm whitespace-nowrap lg:whitespace-normal ${
                selected ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId={`${baseId}-feature-pill`}
                  className='absolute inset-0 rounded-xl border border-green/40 bg-green/10'
                  transition={{ type: 'spring', duration: 0.4, bounce: 0.12 }}
                />
              )}
              <span aria-hidden className='relative text-base'>
                {f.emoji}
              </span>
              <span className='relative'>{f.title}</span>
              {f.badge && (
                <span className='relative rounded-full border border-amber-300/30 bg-amber-300/10 px-1.5 py-px text-[10px] text-amber-200'>
                  {f.badge}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div
        role='tabpanel'
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        className='overflow-hidden rounded-2xl border border-line bg-ink/60'
      >
        {/* Height follows the content so the page below glides instead of jumping. */}
        <motion.div
          initial={false}
          animate={{ height: contentHeight }}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: EASE_OUT }}
        >
          <div ref={contentRef} className='relative p-5 sm:p-7'>
            <AnimatePresence mode='popLayout' initial={false}>
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{
                  opacity: 0,
                  y: -4,
                  filter: 'blur(4px)',
                  transition: { duration: 0.12, ease: EASE_OUT },
                }}
                transition={{ duration: 0.24, ease: EASE_OUT }}
              >
                <div className='flex flex-wrap items-center gap-3'>
                  <span aria-hidden className='text-3xl'>
                    {active.emoji}
                  </span>
                  <h4 className='text-xl font-semibold sm:text-2xl'>
                    {active.title}
                  </h4>
                  <span className='rounded-full border border-line px-2.5 py-0.5 text-xs text-faint'>
                    {active.period}
                  </span>
                  {active.badge && (
                    <StatusBadge status='building' label={active.badge} />
                  )}
                </div>
                <p className='mt-4 leading-relaxed text-pretty text-white/85'>
                  <RichText text={active.blurb} />
                </p>
                {active.stats && (
                  <dl className='mt-6 flex flex-wrap gap-3'>
                    {active.stats.map((m) => (
                      <div
                        key={m.label}
                        className='rounded-xl border border-green/30 bg-green/10 px-4 py-3'
                      >
                        <dt className='sr-only'>{m.label}</dt>
                        <dd className='tabular text-2xl leading-none font-bold text-green-light'>
                          {m.value}
                        </dd>
                        <dd className='mt-1.5 text-xs text-muted'>{m.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {active.bullets.length > 0 && (
                  <ul className='mt-5 space-y-3'>
                    {active.bullets.map((b) => (
                      <li
                        key={b}
                        className='flex gap-3 text-sm leading-relaxed text-muted'
                      >
                        <span
                          aria-hidden
                          className='mt-2 size-1.5 shrink-0 rounded-full bg-green'
                        />
                        <span>
                          <RichText text={b} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

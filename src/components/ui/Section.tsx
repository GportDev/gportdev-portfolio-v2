import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'

export function Section({
  id,
  index,
  eyebrow,
  title,
  emoji,
  icon: Icon,
  description,
  children,
  className = '',
}: {
  id: string
  index: string
  eyebrow: string
  title: string
  emoji: string
  icon: LucideIcon
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <div className='mx-auto max-w-[1200px] px-4 sm:px-6'>
        <Reveal>
          <p className='flex items-center gap-3 text-xs tracking-[0.2em] text-faint uppercase'>
            <span className='tabular text-green'>{index}</span>
            <span aria-hidden className='h-px w-8 bg-line-strong' />
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className='mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-3xl font-bold tracking-tight sm:text-5xl'
          >
            <span
              aria-hidden
              className='grid size-11 shrink-0 place-items-center rounded-xl border border-green/30 bg-green/10 text-green-light shadow-glow sm:size-12'
            >
              <Icon className='size-5 sm:size-6' strokeWidth={1.75} />
            </span>
            <span>{title}</span>
            <span aria-hidden className='text-2xl sm:text-4xl'>
              {emoji}
            </span>
          </h2>
          {description && (
            <p className='mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg'>
              {description}
            </p>
          )}
        </Reveal>
        <div className='mt-10 sm:mt-14'>{children}</div>
      </div>
    </section>
  )
}

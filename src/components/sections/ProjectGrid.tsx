'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Lock } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { TechList } from '@/components/ui/TechPill'
import { GitHubIcon } from '@/components/ui/icons'
import type { Project, ProjectStatus } from '@/lib/data/projects'
import { EASE_OUT } from '@/lib/ease'

type Filter = 'all' | ProjectStatus

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live' },
  { id: 'building', label: 'Building' },
]

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('all')
  const shown = projects.filter((p) => filter === 'all' || p.status === filter)
  const count = (f: Filter) =>
    f === 'all'
      ? projects.length
      : projects.filter((p) => p.status === f).length

  return (
    <div>
      <div
        role='radiogroup'
        aria-label='Filter projects by status'
        className='inline-flex rounded-xl border border-line bg-surface p-1'
      >
        {filters.map((f) => {
          const selected = filter === f.id
          return (
            <button
              key={f.id}
              role='radio'
              aria-checked={selected}
              onClick={() => setFilter(f.id)}
              className={`press relative rounded-lg px-3.5 py-1.5 text-sm ${
                selected ? 'text-ink' : 'text-muted hover:text-white'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId='project-filter'
                  className='absolute inset-0 rounded-lg bg-green-light'
                  transition={{ type: 'spring', duration: 0.35, bounce: 0.12 }}
                />
              )}
              <span className='relative'>
                {f.label}{' '}
                <span className={selected ? 'text-ink/60' : 'text-faint'}>
                  {count(f.id)}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <motion.ul
        layout
        className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-6'
      >
        <AnimatePresence mode='popLayout' initial={false}>
          {shown.map((p) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className={p.featured ? 'lg:col-span-3' : 'lg:col-span-2'}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  )
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article
      className={`lift flex h-full flex-col rounded-3xl border bg-surface p-5 sm:p-6 ${
        p.featured ? 'border-green/25' : 'border-line'
      }`}
    >
      <div className='flex items-start justify-between gap-3'>
        <span
          aria-hidden
          className='grid size-12 place-items-center rounded-2xl border border-line bg-ink/60 text-2xl'
        >
          {p.emoji}
        </span>
        <StatusBadge status={p.status} pulse={p.status === 'live'} />
      </div>
      <h3 className='mt-5 text-xl font-bold'>{p.name}</h3>
      <p className='mt-1 text-xs text-faint'>
        {p.context} · <span className='tabular'>{p.period}</span>
      </p>
      <p className='mt-4 text-sm leading-relaxed text-pretty text-white/85'>
        {p.description}
      </p>
      <ul className='mt-4 space-y-1.5'>
        {p.highlights.map((h) => (
          <li key={h} className='flex items-start gap-2 text-sm text-muted'>
            <Check aria-hidden className='mt-0.5 size-4 shrink-0 text-green' />
            {h}
          </li>
        ))}
      </ul>
      <div className='mt-5'>
        <TechList items={p.tools} max={p.featured ? 7 : 5} />
      </div>
      <div className='mt-auto flex flex-wrap items-center gap-2 pt-6'>
        {p.live && (
          <a
            href={p.live}
            target='_blank'
            rel='noreferrer'
            className='press group inline-flex items-center gap-1.5 rounded-lg bg-green/15 px-3 py-1.5 text-sm text-green-light hover:bg-green/25'
          >
            Visit
            <ArrowUpRight className='nudge-out size-3.5' />
          </a>
        )}
        {p.code && (
          <a
            href={p.code}
            target='_blank'
            rel='noreferrer'
            className='press inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm text-white/80 hover:border-green/50 hover:text-white'
          >
            <GitHubIcon className='size-3.5' />
            Code
          </a>
        )}
        {!p.code && (
          <span className='inline-flex items-center gap-1.5 text-xs text-faint'>
            <Lock className='size-3' />
            Private repo
          </span>
        )}
      </div>
    </article>
  )
}

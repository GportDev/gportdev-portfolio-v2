import { ArrowUpRight, Briefcase, MapPin } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { OrgLogo } from '@/components/ui/OrgLogo'
import { Section } from '@/components/ui/Section'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { TechList } from '@/components/ui/TechPill'
import {
  type Experience as ExperienceT,
  type Metric,
  experiences,
  seoGets,
} from '@/lib/data/experience'
import { FeatureExplorer } from './FeatureExplorer'

export function Experience() {
  return (
    <Section
      id='experience'
      index='03'
      eyebrow='Experience'
      title="Where I've shipped"
      emoji='💼'
      icon={Briefcase}
      description='Startups, fintech, a research lab and the Air Force. Most recent first.'
    >
      <Reveal>
        <FeaturedRole />
      </Reveal>
      <ol className='mt-6 space-y-6'>
        {experiences.map((exp) => (
          <Reveal as='li' key={exp.id}>
            <RoleCard exp={exp} />
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

function MetricRow({ metrics }: { metrics: Metric[] }) {
  return (
    <dl className='flex flex-wrap gap-2'>
      {metrics.map((m) => (
        <div
          key={m.label}
          className='rounded-xl border border-line bg-surface px-3 py-2'
        >
          <dt className='sr-only'>{m.label}</dt>
          <dd className='tabular text-lg leading-none font-bold text-green-light'>
            {m.value}
          </dd>
          <dd className='mt-1 text-[11px] text-faint'>{m.label}</dd>
        </div>
      ))}
    </dl>
  )
}

function Links({ links }: { links?: ExperienceT['links'] }) {
  if (!links?.length) return null
  return (
    <ul className='flex flex-wrap gap-2'>
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target='_blank'
            rel='noreferrer'
            className='press group inline-flex items-center gap-1 rounded-lg border border-line px-2.5 py-1 text-xs text-white/80 hover:border-green/50 hover:text-green-light'
          >
            {l.label}
            <ArrowUpRight className='nudge-out size-3' />
          </a>
        </li>
      ))}
    </ul>
  )
}

function FeaturedRole() {
  const exp = seoGets
  return (
    <article className='relative overflow-hidden rounded-3xl border border-green/30 bg-linear-to-b from-green/[0.07] to-transparent p-5 sm:p-8'>
      <div
        aria-hidden
        className='pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-green/15 blur-3xl'
      />
      <div className='relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
        <div className='flex items-start gap-4'>
          <OrgLogo mark={exp.mark} name={exp.company} size='lg' />
          <div>
            <div className='flex flex-wrap items-center gap-2.5'>
              <h3 className='text-2xl font-bold sm:text-3xl'>{exp.company}</h3>
              <StatusBadge status='current' />
            </div>
            <p className='mt-1 text-white/90'>{exp.roles[0].title}</p>
            <p className='mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-faint'>
              <span className='tabular'>{exp.period}</span>
              <span className='inline-flex items-center gap-1'>
                <MapPin className='size-3.5' />
                {exp.location}
              </span>
            </p>
          </div>
        </div>
        {exp.metrics && <MetricRow metrics={exp.metrics} />}
      </div>

      <p className='relative mt-6 max-w-3xl leading-relaxed text-pretty text-white/85'>
        {exp.summary}
      </p>

      <div className='relative mt-8'>
        <p className='mb-3 text-xs tracking-[0.18em] text-faint uppercase'>
          What I built · pick one
        </p>
        <FeatureExplorer features={exp.features} />
      </div>

      <div className='relative mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <TechList items={exp.tools} />
        <Links links={exp.links} />
      </div>
    </article>
  )
}

function RoleCard({ exp }: { exp: ExperienceT }) {
  return (
    <article className='lift grid gap-6 rounded-3xl border border-line bg-surface p-5 sm:p-8 lg:grid-cols-[18rem_1fr] lg:gap-10'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-start gap-4'>
          <OrgLogo mark={exp.mark} name={exp.company} />
          <div className='min-w-0'>
            <h3 className='flex items-center gap-2 text-xl font-bold'>
              {exp.company}
              <span aria-hidden className='text-lg'>
                {exp.emoji}
              </span>
            </h3>
            <p className='tabular mt-1 text-sm text-faint'>{exp.period}</p>
            <p className='mt-0.5 text-sm text-faint'>{exp.location}</p>
          </div>
        </div>
        {exp.current && (
          <div>
            <StatusBadge status='current' />
          </div>
        )}
        {exp.metrics && <MetricRow metrics={exp.metrics} />}
        <Links links={exp.links} />
      </div>

      <div className='min-w-0'>
        <p className='leading-relaxed text-pretty text-white/85'>
          {exp.summary}
        </p>
        <ol
          className={`mt-6 space-y-6 ${
            exp.roles.length > 1 ? 'border-l border-line pl-5' : ''
          }`}
        >
          {exp.roles.map((role) => (
            <li key={role.title} className='relative'>
              {exp.roles.length > 1 && (
                <span
                  aria-hidden
                  className='absolute top-1.5 -left-[24.5px] size-2 rounded-full border border-green bg-ink'
                />
              )}
              <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                <h4 className='font-semibold'>{role.title}</h4>
                <span className='tabular text-xs text-faint'>
                  {role.period}
                  {role.type ? ` · ${role.type}` : ''}
                </span>
              </div>
              {role.bullets && (
                <ul className='mt-3 space-y-2'>
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      className='flex gap-3 text-sm leading-relaxed text-muted'
                    >
                      <span
                        aria-hidden
                        className='mt-2 size-1.5 shrink-0 rounded-full bg-green/80'
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        {exp.tools.length > 0 && (
          <div className='mt-6'>
            <TechList items={exp.tools} />
          </div>
        )}
      </div>
    </article>
  )
}

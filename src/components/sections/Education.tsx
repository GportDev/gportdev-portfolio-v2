import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { OrgLogo } from '@/components/ui/OrgLogo'
import { Section } from '@/components/ui/Section'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { education } from '@/lib/data/education'
import { GpaRing } from './GpaRing'

export function Education() {
  const [main, ...rest] = education
  return (
    <Section
      id='education'
      index='05'
      eyebrow='Education'
      title='Education'
      emoji='🎓'
      icon={GraduationCap}
    >
      <Reveal>
        <article className='relative overflow-hidden rounded-3xl border border-green/25 bg-linear-to-br from-green/[0.07] to-transparent p-5 sm:p-8'>
          <div className='flex flex-col gap-8 sm:flex-row sm:items-center'>
            <GpaRing gpa={main.gpa} />
            <div className='min-w-0'>
              <div className='flex flex-wrap items-center gap-2.5'>
                {main.mark ? (
                  <OrgLogo mark={main.mark} name={main.school} />
                ) : (
                  <span aria-hidden className='text-2xl'>
                    {main.emoji}
                  </span>
                )}
                {main.status && (
                  <StatusBadge
                    status='graduated'
                    label={main.status}
                    pulse={false}
                  />
                )}
                <span className='tabular text-sm text-faint'>
                  {main.period}
                </span>
              </div>
              <h3 className='mt-3 text-2xl font-bold sm:text-3xl'>
                {main.degree}
              </h3>
              <p className='mt-1 text-white/85'>{main.school}</p>
              {main.detail && (
                <p className='mt-1 text-sm text-green-light'>{main.detail}</p>
              )}
            </div>
          </div>
          <ul className='mt-8 flex flex-wrap gap-2'>
            {main.activities.map((a) => (
              <li
                key={a}
                className='rounded-full border border-line bg-surface px-3 py-1 text-xs text-white/80'
              >
                {a}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>

      <Stagger className='mt-4 grid gap-4 md:grid-cols-2'>
        {rest.map((e) => (
          <StaggerItem key={e.id}>
            <article className='lift h-full rounded-3xl border border-line bg-surface p-5 sm:p-6'>
              <div className='flex items-start justify-between gap-4'>
                {e.mark ? (
                  <OrgLogo mark={e.mark} name={e.school} />
                ) : (
                  <span aria-hidden className='text-2xl'>
                    {e.emoji}
                  </span>
                )}
                <span className='tabular rounded-full border border-line px-2.5 py-0.5 text-xs text-white/80'>
                  GPA {e.gpa.toFixed(1)}
                </span>
              </div>
              <h3 className='mt-4 text-lg font-bold'>{e.degree}</h3>
              <p className='mt-1 text-sm text-white/85'>{e.school}</p>
              <p className='tabular mt-1 text-xs text-faint'>{e.period}</p>
              <ul className='mt-4 space-y-1.5'>
                {e.activities.map((a) => (
                  <li key={a} className='flex gap-2 text-sm text-muted'>
                    <span aria-hidden className='text-green'>
                      ›
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

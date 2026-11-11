import { BadgeCheck, BookOpen } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/ui/Section'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { certifications, courses } from '@/lib/data/certifications'

export function Certifications() {
  return (
    <Section
      id='certifications'
      index='07'
      eyebrow='Credentials'
      title='Certifications & courses'
      emoji='📜'
      icon={BadgeCheck}
    >
      <div className='grid gap-4 lg:grid-cols-[1.2fr_0.8fr]'>
        <Reveal>
          <ul className='divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface'>
            {certifications.map((c) => (
              <li key={c.title} className='flex items-start gap-4 p-5'>
                <span
                  aria-hidden
                  className='grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-ink/60 text-xl'
                >
                  {c.emoji}
                </span>
                <div className='min-w-0 flex-1'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <h3 className='font-semibold'>{c.title}</h3>
                    {c.validUntil && (
                      <StatusBadge
                        status='active'
                        label={`Active · until ${c.validUntil}`}
                        pulse={false}
                      />
                    )}
                  </div>
                  <p className='mt-1 text-sm text-muted'>
                    {c.issuer} · <span className='tabular'>{c.issued}</span>
                  </p>
                  {c.credentialId && (
                    <p className='tabular mt-1 text-xs text-faint'>
                      Credential ID {c.credentialId}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className='h-full rounded-3xl border border-line bg-surface p-5 sm:p-6'>
            <h3 className='flex items-center gap-2 font-semibold'>
              <BookOpen className='size-4 text-green' />
              Courses & bootcamps
            </h3>
            <ul className='mt-4 space-y-3'>
              {courses.map((c) => (
                <li
                  key={c.title}
                  className='flex items-start justify-between gap-4 text-sm'
                >
                  <div>
                    <p className='text-white/90'>{c.title}</p>
                    <p className='text-xs text-faint'>{c.provider}</p>
                  </div>
                  {c.year && (
                    <span className='tabular shrink-0 text-xs text-faint'>
                      {c.year}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

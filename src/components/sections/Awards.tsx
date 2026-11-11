import { Trophy } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Section } from '@/components/ui/Section'
import { awards } from '@/lib/data/awards'

export function Awards() {
  return (
    <Section
      id='awards'
      index='06'
      eyebrow='Recognition'
      title='Honors & awards'
      emoji='🏆'
      icon={Trophy}
    >
      <Stagger as='ul' className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {awards.map((a) => (
          <StaggerItem
            as='li'
            key={a.title}
            className={
              a.featured ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
            }
          >
            <article
              className={`lift relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 sm:p-6 ${
                a.featured
                  ? 'border-green/35 bg-linear-to-br from-green/15 via-green/[0.04] to-transparent'
                  : 'border-line bg-surface'
              }`}
            >
              <div className='flex items-start justify-between gap-3'>
                <span
                  aria-hidden
                  className={a.featured ? 'text-5xl' : 'text-3xl'}
                >
                  {a.emoji}
                </span>
                {a.year && (
                  <span className='tabular rounded-full border border-line px-2.5 py-0.5 text-xs text-white/75'>
                    {a.year}
                  </span>
                )}
              </div>
              <h3
                className={`mt-5 font-bold ${a.featured ? 'text-2xl' : 'text-lg'}`}
              >
                {a.title}
              </h3>
              <p className='mt-1 text-xs text-green-light'>{a.issuer}</p>
              <p className='mt-3 text-sm leading-relaxed text-pretty text-muted'>
                {a.detail}
              </p>
              {a.featured && (
                <p className='mt-auto pt-8 text-sm text-white/85'>
                  <span className='tabular text-4xl font-bold text-green-light'>
                    1
                  </span>
                  <span className='text-faint'> of </span>
                  <span className='tabular text-4xl font-bold text-green-light'>
                    50
                  </span>
                  <span className='block text-xs text-faint'>
                    from 2,000+ applicants
                  </span>
                </p>
              )}
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

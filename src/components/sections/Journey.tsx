import { Plane } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/ui/Section'
import { journey } from '@/lib/data/journey'
import { JourneyLine } from './JourneyLine'

export function Journey() {
  return (
    <Section
      id='journey'
      index='02'
      eyebrow='Journey'
      title='From cockpit to codebase'
      emoji='✈️'
      icon={Plane}
      description='Eight years, four colleges, two countries, one career switch. The short version.'
    >
      <JourneyLine>
        <ol className='space-y-8 lg:space-y-4'>
          {journey.map((m, i) => {
            const right = i % 2 === 1
            return (
              <li
                key={m.year}
                className='relative grid grid-cols-[40px_1fr] gap-4 lg:grid-cols-[1fr_40px_1fr] lg:gap-8'
              >
                <span
                  aria-hidden
                  className='z-10 grid size-10 place-items-center rounded-full border border-green/40 bg-ink text-lg shadow-glow lg:col-start-2 lg:row-start-1'
                >
                  {m.emoji}
                </span>
                <Reveal
                  y={12}
                  className={`pb-1 lg:row-start-1 ${
                    right ? 'lg:col-start-3' : 'lg:col-start-1 lg:text-right'
                  }`}
                >
                  <p className='tabular text-sm font-semibold text-green'>
                    {m.year}
                  </p>
                  <h3 className='mt-1 text-lg font-semibold'>{m.title}</h3>
                  <p
                    className={`mt-1 max-w-sm text-sm leading-relaxed text-muted ${
                      right ? '' : 'lg:ml-auto'
                    }`}
                  >
                    {m.detail}
                  </p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </JourneyLine>
    </Section>
  )
}

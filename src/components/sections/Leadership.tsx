import { Users } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Section } from '@/components/ui/Section'
import { languages, leadership } from '@/lib/data/leadership'

export function Leadership() {
  return (
    <Section
      id='leadership'
      index='08'
      eyebrow='Community'
      title='Leadership'
      emoji='🤝'
      icon={Users}
    >
      <Stagger as='ul' className='grid gap-3 md:grid-cols-2'>
        {leadership.map((l) => (
          <StaggerItem as='li' key={l.role}>
            <div className='lift flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-4 sm:p-5'>
              <span aria-hidden className='text-2xl'>
                {l.emoji}
              </span>
              <div className='min-w-0'>
                <p className='font-medium text-white/90'>{l.role}</p>
                <p className='mt-1 text-sm text-faint'>
                  {l.org} · <span className='tabular'>{l.period}</span>
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <ul className='mt-6 flex flex-wrap gap-2' aria-label='Languages'>
        {languages.map((l) => (
          <li
            key={l.name}
            className='inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm'
          >
            <span aria-hidden>{l.flag}</span>
            {l.name}
            <span className='text-faint'>· {l.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

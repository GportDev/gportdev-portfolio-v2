import { Wrench } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Section } from '@/components/ui/Section'
import { TechList } from '@/components/ui/TechPill'
import { skillGroups } from '@/lib/data/skills'

export function Toolbox() {
  return (
    <Section
      id='toolbox'
      index='09'
      eyebrow='Stack'
      title='Toolbox'
      emoji='🧰'
      icon={Wrench}
      description='What I use day to day, grouped by layer.'
    >
      <Stagger className='columns-1 gap-4 md:columns-2 lg:columns-3'>
        {skillGroups.map((g) => (
          <StaggerItem key={g.title} className='mb-4 break-inside-avoid'>
            <div className='rounded-3xl border border-line bg-surface p-5 sm:p-6'>
              <h3 className='flex items-center gap-2 font-semibold'>
                <span aria-hidden>{g.emoji}</span>
                {g.title}
              </h3>
              <div className='mt-4'>
                <TechList items={g.tools} size='md' />
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

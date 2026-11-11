import { Rocket } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/ui/Section'
import { projects } from '@/lib/data/projects'
import { ProjectGrid } from './ProjectGrid'

export function Projects() {
  return (
    <Section
      id='projects'
      index='04'
      eyebrow='Projects'
      title='Things I’m building'
      emoji='🚀'
      icon={Rocket}
      description='Client platforms from Fondor Labs and products I build on my own time, live or in progress.'
    >
      <Reveal>
        <ProjectGrid projects={projects} />
      </Reveal>
    </Section>
  )
}

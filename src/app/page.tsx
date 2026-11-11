import { Awards } from '@/components/sections/Awards'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Impact } from '@/components/sections/Impact'
import { Journey } from '@/components/sections/Journey'
import { Leadership } from '@/components/sections/Leadership'
import { Projects } from '@/components/sections/Projects'
import { Toolbox } from '@/components/sections/Toolbox'

export default function Home() {
  return (
    <main id='main'>
      <Hero />
      <Impact />
      <Journey />
      <Experience />
      <Projects />
      <Education />
      <Awards />
      <Certifications />
      <Leadership />
      <Toolbox />
      <Contact />
    </main>
  )
}

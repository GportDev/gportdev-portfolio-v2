export type Certification = {
  title: string
  issuer: string
  issued: string
  validUntil?: string
  credentialId?: string
  emoji: string
}

export const certifications: Certification[] = [
  {
    title: 'Responsible Conduct of Research for Engineers',
    issuer: 'CITI Program',
    issued: 'Feb 2024',
    validUntil: 'Feb 2027',
    credentialId: '61175425',
    emoji: '🔬',
  },
  {
    title: 'Certified Scrum Developer® (CSD®)',
    issuer: 'Scrum Alliance',
    issued: 'Feb 2023',
    credentialId: '1741889',
    emoji: '🔁',
  },
  {
    title: 'Blockchain Advanced',
    issuer: 'FIAP',
    issued: 'Jun 2022',
    emoji: '⛓️',
  },
  {
    title: 'HTML5, CSS3 & JavaScript',
    issuer: 'ProgramadorBr',
    issued: 'Aug 2021',
    emoji: '🧱',
  },
]

export type Course = { title: string; provider: string; year?: string }

export const courses: Course[] = [
  {
    title: 'Optimize Your Resume for Applicant Tracking Systems',
    provider: 'LinkedIn Learning',
  },
  { title: 'Creating Great First Impressions', provider: 'LinkedIn Learning' },
  { title: 'Job Skills: Learning the Basics', provider: 'LinkedIn Learning' },
  {
    title: 'Business Etiquette: Phone, Email, and Text',
    provider: 'LinkedIn Learning',
  },
  {
    title: 'Ignite Lab: event platform with React + GraphQL',
    provider: 'Rocketseat',
    year: '2022',
  },
  {
    title: 'Imersão React: chat app with Next.js',
    provider: 'Alura',
    year: '2022',
  },
  {
    title: 'NLW Heat: real-time app with React',
    provider: 'Rocketseat',
    year: '2021',
  },
  { title: 'Imersão Dev: JavaScript', provider: 'Alura', year: '2021' },
]

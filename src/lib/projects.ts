import { ToolsType } from './tech-tools'

export type Project = {
  image: string
  title: string
  description: string
  link: string
  gitHubLink: string
  usedTools: (keyof ToolsType)[]
  duration: string
  role: string
  learned: string[]
}

export const employeeProjects: Project[] = [
  {
    image: 'TTU',
    title: 'NDN-Hydra - Tennessee Tech University',
    description:
      'Federated decentralized system for researches based on the Named Data Network protocols',
    link: 'https://www.academysphera.com',
    gitHubLink: '',
    usedTools: ['Python'],
    duration: 'Jan 2024 - Present',
    role: 'Research assistant',
    learned: [],
  },
  {
    image: 'Sphera Academy',
    title: 'Sphera Academy',
    description:
      'E-learning platform for students seeking for international opportunities.',
    link: 'https://www.academysphera.com',
    gitHubLink: '',
    usedTools: [
      'NextJS',
      'Tailwind',
      'Typescript',
      'PostgreSQL',
      'DigitalOcean',
    ],
    duration: 'Aug 2023 - May 2024',
    role: 'Full-Stack Developer',
    learned: [],
  },
  {
    image: 'DM',
    title: 'DM Pag',
    description:
      'Buy-now-pay-later application that work for both, enrolled companies and general clients.',
    link: 'https://www.vocedm.com.br/portal/dmpag',
    gitHubLink: '',
    usedTools: ['Flutter', 'GoLang', 'Typescript', 'ReactJS', 'Tailwind'],
    duration: 'Jan 2022 - Aug 2023',
    role: 'Entry-Level Full-Stack Developer',
    learned: ['Math', 'Azul', 'Flutter'],
  },
]

export const personalProjects: Project[] = []

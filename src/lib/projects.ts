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
    learned: [
      'Refactor legacy code and better document the new version.',
      'Use Python Notebooks to automate infrastructure setup.',
      'Create deployment workflows using GitHub Actions.',
      'Create and maintain python projects.',
      'Deploy packages on PyPi.',
    ],
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
    learned: [
      'Create an authentication flow using Supabase, NextAuth and Resend.',
      'Optimize queries to improve user experiences requesting data.',
      'Send notifications and alerts by email using Resend.',
      'Create a full-stack application as a solo developer.',
      'Integrate payment gateway and paywall using Stripe.',
      'Manage content in a open-source CMS (Strapi).',
      'Collect and analyze data from platform use.',
      'Deploy a web application on DigitalOcean.',
      'Manage a SaaS project from end-to-end.',
    ],
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
    learned: [
      'Different approaches to design a financial application for thousands of users.',
      'Create and deploy a web application using ReactJS.',
      'NoSQL database uses for transaction tracking.',
      'Develop a mobile application using Flutter.',
      'How to work in a agile team.',
    ],
  },
]

export const personalProjects: Project[] = []

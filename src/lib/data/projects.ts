import type { ToolKey } from './tools'

export type ProjectStatus = 'live' | 'building'

export type Project = {
  id: string
  name: string
  emoji: string
  context: string
  status: ProjectStatus
  period: string
  description: string
  highlights: string[]
  tools: ToolKey[]
  live?: string
  code?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'ademicon',
    name: 'Ademicon Global Hub',
    emoji: '🏢',
    context: 'Fondor Labs · Client platform',
    status: 'live',
    period: '2026',
    description:
      "The commercial platform Ademicon Global's sales team runs on: leads, pipeline, R1/R2 meeting calendar, remarketing, a sales simulator, and a full-screen TV panel for the sales floor.",
    highlights: [
      '~500 commits, in production',
      'Monorepo with shared auth, UI, DB and API-client packages',
      'OpenAPI + Orval generated clients and Zod schemas',
    ],
    tools: [
      'React',
      'TypeScript',
      'Express',
      'Drizzle',
      'Neon',
      'TanStack',
      'Shadcn',
    ],
    featured: true,
  },
  {
    id: 'abordiq',
    name: 'AbordIQ',
    emoji: '🎯',
    context: 'Fondor Labs · Product',
    status: 'building',
    period: '2026',
    description:
      'Multi-tenant B2B SaaS that trains new sales consultants with an AI copilot, voice roleplay against AI customers, adaptive lessons and performance analytics.',
    highlights: [
      'Org isolation, 4-role RBAC, invitations, audit logs',
      'i18n in English, Portuguese and Spanish',
      'Retrieval on PostgreSQL + pgvector',
    ],
    tools: ['NextJS', 'FastAPI', 'Python', 'PostgreSQL', 'pgvector', 'Docker'],
    live: 'https://abordiq.vercel.app',
    featured: true,
  },
  {
    id: 'resume-maker',
    name: 'Resume Maker',
    emoji: '📄',
    context: 'Personal',
    status: 'live',
    period: '2026',
    description:
      'An AI workspace for job hunting. Track applications on a board, score fit with cited evidence, tailor resumes and cover letters, and export PDFs.',
    highlights: [
      'Explained fit score with evidence from your own history',
      'Notion-style live-preview Markdown editor',
      'Claude or OpenAI through the AI SDK',
    ],
    tools: [
      'ReactRouter',
      'React',
      'AISDK',
      'Claude',
      'Drizzle',
      'Neon',
      'BetterAuth',
    ],
    live: 'https://resume-maker-ochre-seven.vercel.app',
    code: 'https://github.com/GportDev/resume-maker',
  },
  {
    id: 'money-airport',
    name: 'The Money Airport',
    emoji: '🛬',
    context: 'Personal',
    status: 'building',
    period: '2026',
    description:
      'Budget control and wealth management: linked bank accounts, categorized transactions, cash-flow forecasting and a widget dashboard.',
    highlights: [
      'Plaid account linking',
      'Cash-flow page and API',
      'End-to-end tests with Playwright',
    ],
    tools: [
      'TypeScript',
      'React',
      'NodeJS',
      'Drizzle',
      'Plaid',
      'Docker',
      'Playwright',
    ],
    code: 'https://github.com/GportDev/the-money-airport',
  },
  {
    id: 'cookeville-buzz',
    name: 'The Cookeville Buzz',
    emoji: '🐝',
    context: 'Personal · with Julia',
    status: 'live',
    period: 'Feb 2025 – Present',
    description:
      'Local newsletter and events calendar for Putnam County, Tennessee. A Python scraper gathers events so the calendar fills itself.',
    highlights: [
      'Weekly events calendar',
      'Python event scraper',
      'Newsletter subscriptions',
    ],
    tools: ['NextJS', 'TypeScript', 'Python', 'Vercel'],
    live: 'https://www.cookevillebuzz.com',
  },
  {
    id: 'annuity',
    name: 'Annuity Calculator',
    emoji: '🧮',
    context: 'MATH 4550 · Financial math',
    status: 'live',
    period: 'Dec 2025',
    description:
      'Present and future value of growing and declining annuities, geometric or arithmetic, ordinary or due, updated live as you type.',
    highlights: [
      'PV/FV toggle',
      'Geometric and arithmetic growth',
      'Copy results',
    ],
    tools: ['React', 'TypeScript', 'Tailwind'],
    live: 'https://annuity-calculator-math-4550.vercel.app',
    code: 'https://github.com/GportDev/annuity-calculator-Math-4550',
  },
]

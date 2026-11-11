import type { ToolKey } from './tools'

export type SkillGroup = { title: string; emoji: string; tools: ToolKey[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front end',
    emoji: '🎨',
    tools: [
      'React',
      'NextJS',
      'TypeScript',
      'ReactRouter',
      'Tailwind',
      'TanStack',
      'Zustand',
      'Radix',
      'Shadcn',
      'Motion',
      'Flutter',
    ],
  },
  {
    title: 'Back end & data',
    emoji: '🗄️',
    tools: [
      'Go',
      'NodeJS',
      'Python',
      'FastAPI',
      'Express',
      'PostgreSQL',
      'MySQL',
      'DuckDB',
      'BigQuery',
      'Drizzle',
      'MongoDB',
      'SQLite',
    ],
  },
  {
    title: 'AI & LLMs',
    emoji: '🤖',
    tools: [
      'Claude',
      'OpenAI',
      'AISDK',
      'MCP',
      'ToolCalling',
      'StructuredOutput',
      'Prompting',
      'pgvector',
    ],
  },
  {
    title: 'SaaS & billing',
    emoji: '💳',
    tools: [
      'Stripe',
      'Paddle',
      'Plaid',
      'BetterAuth',
      'Supabase',
      'Neon',
      'PostHog',
      'Sentry',
    ],
  },
  {
    title: 'DevOps & testing',
    emoji: '🧪',
    tools: [
      'Docker',
      'GitHubActions',
      'Vercel',
      'DigitalOcean',
      'Playwright',
      'Vitest',
      'Git',
    ],
  },
]

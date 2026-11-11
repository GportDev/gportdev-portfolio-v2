const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`

export type Tool = {
  name: string
  logo?: string
  /** Logo is dark and needs inverting on the dark background. */
  invert?: boolean
}

export const tools = {
  React: { name: 'React', logo: devicon('react/react-original') },
  NextJS: { name: 'Next.js', logo: devicon('nextjs/nextjs-original') },
  TypeScript: {
    name: 'TypeScript',
    logo: devicon('typescript/typescript-original'),
  },
  JavaScript: {
    name: 'JavaScript',
    logo: devicon('javascript/javascript-original'),
  },
  Tailwind: {
    name: 'Tailwind CSS',
    logo: devicon('tailwindcss/tailwindcss-original'),
  },
  ReactRouter: {
    name: 'React Router',
    logo: devicon('reactrouter/reactrouter-original'),
  },
  TanStack: { name: 'TanStack Query' },
  Zustand: { name: 'Zustand' },
  Radix: { name: 'Radix UI' },
  Shadcn: { name: 'shadcn/ui' },
  Motion: { name: 'Motion' },
  Flutter: { name: 'Flutter', logo: devicon('flutter/flutter-original') },
  Go: { name: 'Go', logo: devicon('go/go-original') },
  Python: { name: 'Python', logo: devicon('python/python-original') },
  NodeJS: { name: 'Node.js', logo: devicon('nodejs/nodejs-original') },
  Express: {
    name: 'Express',
    logo: devicon('express/express-original'),
    invert: true,
  },
  FastAPI: { name: 'FastAPI', logo: devicon('fastapi/fastapi-original') },
  PostgreSQL: {
    name: 'PostgreSQL',
    logo: devicon('postgresql/postgresql-original'),
  },
  MySQL: { name: 'MySQL', logo: devicon('mysql/mysql-original') },
  SQLite: { name: 'SQLite', logo: devicon('sqlite/sqlite-original') },
  MongoDB: { name: 'MongoDB', logo: devicon('mongodb/mongodb-original') },
  DuckDB: { name: 'DuckDB', logo: devicon('duckdb/duckdb-original') },
  BigQuery: {
    name: 'BigQuery',
    logo: devicon('googlecloud/googlecloud-original'),
  },
  Drizzle: { name: 'Drizzle ORM' },
  Supabase: { name: 'Supabase', logo: devicon('supabase/supabase-original') },
  Neon: { name: 'Neon Postgres' },
  pgvector: { name: 'pgvector' },
  Strapi: { name: 'Strapi CMS' },
  Claude: { name: 'Claude API', logo: devicon('claude/claude-original') },
  AISDK: { name: 'AI SDK' },
  MCP: { name: 'MCP' },
  OpenAI: { name: 'OpenAI API' },
  Prompting: { name: 'Prompt engineering' },
  StructuredOutput: { name: 'Structured output' },
  ToolCalling: { name: 'Tool calling & agents' },
  Paddle: { name: 'Paddle' },
  Stripe: { name: 'Stripe' },
  Plaid: { name: 'Plaid' },
  BetterAuth: { name: 'Better Auth' },
  PostHog: { name: 'PostHog' },
  Sentry: { name: 'Sentry', logo: devicon('sentry/sentry-original') },
  Docker: { name: 'Docker', logo: devicon('docker/docker-original') },
  GitHubActions: {
    name: 'GitHub Actions',
    logo: devicon('githubactions/githubactions-original'),
  },
  Vercel: {
    name: 'Vercel',
    logo: devicon('vercel/vercel-original'),
    invert: true,
  },
  DigitalOcean: {
    name: 'DigitalOcean',
    logo: devicon('digitalocean/digitalocean-original'),
  },
  Playwright: {
    name: 'Playwright',
    logo: devicon('playwright/playwright-original'),
  },
  Vitest: { name: 'Vitest', logo: devicon('vitest/vitest-original') },
  Git: { name: 'Git', logo: devicon('git/git-original') },
  Figma: { name: 'Figma', logo: devicon('figma/figma-original') },
  Cpp: { name: 'C++', logo: devicon('cplusplus/cplusplus-original') },
  C: { name: 'C', logo: devicon('c/c-original') },
  Jupyter: { name: 'Jupyter', logo: devicon('jupyter/jupyter-original') },
} satisfies Record<string, Tool>

export type ToolKey = keyof typeof tools

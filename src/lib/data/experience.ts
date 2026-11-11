import type { ToolKey } from './tools'

export type OrgMark =
  | { kind: 'logo'; logo: 'TTU' | 'DM' | 'Sphera' }
  | {
      kind: 'image'
      src: string
      /** 'cover' fills the tile (square logos); 'contain' pads crests and shields. */
      fit: 'cover' | 'contain'
    }
  | { kind: 'mark'; text: string; tone: 'green' | 'blue' | 'amber' | 'slate' }

export type Metric = { value: string; label: string }

export type Role = {
  title: string
  period: string
  type?: string
  bullets?: string[]
}

export type Experience = {
  id: string
  company: string
  emoji: string
  mark: OrgMark
  location: string
  period: string
  current?: boolean
  summary: string
  metrics?: Metric[]
  roles: Role[]
  tools: ToolKey[]
  links?: { label: string; href: string }[]
}

export type FeatureArea = {
  id: string
  emoji: string
  title: string
  period: string
  /** Shown as a pill next to the title, e.g. work that hasn't launched yet. */
  badge?: 'Beta' | 'Building'
  blurb: string
  /** Big numbers shown above the bullets. */
  stats?: Metric[]
  bullets: string[]
}

/** The featured role. Feature areas drive the interactive explorer. */
export const seoGets: Experience & { features: FeatureArea[] } = {
  id: 'seo-gets',
  company: 'SEO Gets',
  emoji: '📈',
  mark: { kind: 'image', src: '/logos/seo-gets.svg', fit: 'cover' },
  location: 'Cookeville, TN · Hybrid',
  period: 'Sep 2025 – Present',
  current: true,
  summary:
    "Main engineer of an SEO analytics SaaS built on Google Search Console and GA4. I own the product end to end, from the React app and Go API to billing and AI, and I double as the company's CFO.",
  metrics: [
    { value: '+127%', label: 'revenue' },
    { value: '+80%', label: 'customers' },
    { value: '+27%', label: 'ARPA' },
    { value: '1,000+', label: 'extension users' },
  ],
  roles: [
    {
      title: 'Full-Stack Software Engineer & CFO',
      period: 'Sep 2025 – Present',
    },
  ],
  tools: [
    'React',
    'TypeScript',
    'Go',
    'MySQL',
    'DuckDB',
    'BigQuery',
    'Stripe',
    'Claude',
    'MCP',
    'TanStack',
    'Zustand',
    'Tailwind',
    'Radix',
    'PostHog',
    'Sentry',
  ],
  links: [{ label: 'seogets.com', href: 'https://seogets.com' }],
  features: [
    {
      id: 'api',
      emoji: '🧩',
      title: 'Public API',
      period: 'Now',
      badge: 'Beta',
      blurb:
        "What I'm building now. A public API that lets customers pull their SEO Gets data into their own tools.",
      bullets: [],
    },
    {
      id: 'billing',
      emoji: '💳',
      title: 'Per-property billing',
      period: '2026',
      blurb:
        'I rewrote how SEO Gets charges customers. Tier plans and coupons became graduated per-property pricing, and every business rule behind them changed.',
      stats: [
        { value: '2 weeks', label: 'idea to production' },
        { value: 'Solo', label: 'with AI agents' },
      ],
      bullets: [
        'New pricing engine, checkout, entitlements and paywalls across the server and app.',
        'Backfilled existing customers and kept legacy Stripe and Paddle plans working.',
      ],
    },
    {
      id: 'ai',
      emoji: '🤖',
      title: 'AI assistant',
      period: 'May – Oct 2026',
      badge: 'Beta',
      blurb:
        'Chat with your SEO data. In beta, not launched yet. It streams answers, shows its tool calls, and charges usage against team credits.',
      bullets: [
        "Also built one-click setup. Claude generates a site's topic clusters and content groups in the background.",
      ],
    },
    {
      id: 'mcp',
      emoji: '🔌',
      title: 'MCP server',
      period: 'Aug – Oct 2026',
      blurb:
        "Lets AI agents like Claude and ChatGPT query a customer's SEO Gets data directly.",
      bullets: [
        'Released MCP 2.0.1 and 2.0.2, plus the setup guide and a ChatGPT plugin.',
      ],
    },
    {
      id: 'analytics',
      emoji: '📊',
      title: 'GA4 & analytics engine',
      period: 'Jan – Oct 2026',
      blurb:
        'Built the GA4 dashboard, including an Organic vs LLM traffic chart. Under it, one analytics layer merges GSC and GA4 for every endpoint.',
      bullets: [
        'Tuned DuckDB and query paths so large portfolios stay fast and stop hitting memory limits.',
      ],
    },
    {
      id: 'reports',
      emoji: '🔎',
      title: 'SEO reports',
      period: 'Jan – Sep 2026',
      blurb:
        'Indexing, cannibalization, striking-distance and content-decay reports, plus a Strategy Plan audit that turns them into next steps.',
      bullets: [],
    },
    {
      id: 'growth',
      emoji: '🚀',
      title: 'Onboarding & growth',
      period: 'Jan – Oct 2026',
      blurb:
        'Three onboarding redesigns and a Chrome extension that brings SEO Gets into the browser.',
      stats: [{ value: '1,000+', label: 'recurring extension users' }],
      bullets: [],
    },
    {
      id: 'ops',
      emoji: '🛡️',
      title: 'Admin & security',
      period: 'Apr – Oct 2026',
      blurb:
        'The internal CRM and KPI dashboards the team runs the business on, plus closing an IDOR and tightening access checks.',
      bullets: [],
    },
  ],
}

export const experiences: Experience[] = [
  {
    id: 'fondor-labs',
    company: 'Fondor Labs',
    emoji: '🛫',
    mark: { kind: 'image', src: '/logos/fondor-labs.png', fit: 'cover' },
    location: 'United States · Remote',
    period: '2026 – Present',
    current: true,
    summary:
      'I founded Fondor Labs, a US-based software studio that builds for clients and for itself. I lead the engineering.',
    roles: [
      {
        title: 'Founder & Software Engineer',
        period: '2026 – Present',
        bullets: [
          "Shipped Ademicon Global's commercial hub to production: leads, pipeline, meeting calendar, remarketing, sales simulator and a kiosk TV sales floor.",
          'Building AbordIQ, a multi-tenant AI sales-enablement SaaS with copilot guidance, voice roleplay and adaptive training.',
        ],
      },
    ],
    tools: [
      'React',
      'TypeScript',
      'NextJS',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Drizzle',
      'Neon',
    ],
  },
  {
    id: 'ttu',
    company: 'Tennessee Tech',
    emoji: '🔬',
    mark: { kind: 'logo', logo: 'TTU' },
    location: 'Cookeville, TN · Hybrid',
    period: 'Jan 2024 – Jan 2025',
    summary:
      'Research assistant on NDN-Hydra, a federated data repository built on Named Data Networking, in the Next Generation of Internet and Network lab.',
    metrics: [
      { value: '−70%', label: 'network deploy time' },
      { value: '−40%', label: 'deployment cycles' },
    ],
    roles: [
      {
        title: 'Research Assistant',
        period: 'Jan 2024 – Jan 2025',
        type: 'Part-time',
        bullets: [
          'Cut network deployment time by 70% by automating scalable, distributed topology creation with Python.',
          'Cut deployment cycles by 40% with GitHub Actions CI/CD and published releases of ndn-hydra to PyPI.',
          'Refactored every Python repository to PEP 8 and tested the system end to end on the FABRIC research testbed.',
          'Summarized and co-wrote parts of academic papers on distributed systems and network topologies.',
        ],
      },
    ],
    tools: ['Python', 'GitHubActions', 'SQLite', 'Jupyter', 'Docker'],
    links: [
      { label: 'ndn-hydra', href: 'https://github.com/tntech-ngin/ndn-hydra' },
      { label: 'Docs', href: 'https://ndn-hydra.readthedocs.io' },
    ],
  },
  {
    id: 'sphera',
    company: 'Sphera Academy',
    emoji: '🎥',
    mark: { kind: 'logo', logo: 'Sphera' },
    location: 'Brazil · Remote',
    period: 'May 2023 – Dec 2023',
    summary:
      'Co-founded an e-learning platform for students chasing international opportunities, built as paid client work for USTAY Immigration. I designed the architecture and built the whole product.',
    metrics: [
      { value: '6 mo', label: 'idea to launch' },
      { value: '<0.9s', label: 'full-page loads' },
      { value: '135+', label: 'currencies' },
    ],
    roles: [
      {
        title: 'Co-Founder & Full-Stack Developer',
        period: 'May 2023 – Dec 2023',
        bullets: [
          'Designed, architected and built the platform end to end with Next.js in 6 months on a tight budget.',
          'Integrated MUX video into a custom Strapi + PostgreSQL CMS, serving 5,000+ entries with sub-0.9s full-page loads.',
          'Stripe paywall supporting 135+ currencies, plus auth with NextAuth and Supabase and email alerts with Resend.',
        ],
      },
    ],
    tools: [
      'NextJS',
      'TypeScript',
      'Tailwind',
      'PostgreSQL',
      'Strapi',
      'Stripe',
      'Supabase',
      'DigitalOcean',
    ],
  },
  {
    id: 'dm',
    company: 'DM Card',
    emoji: '💳',
    mark: { kind: 'logo', logo: 'DM' },
    location: 'São José dos Campos, Brazil',
    period: 'Dec 2021 – Nov 2024',
    summary:
      'Fintech behind DMPag, a buy-now-pay-later platform. Started as an intern, earned a full-time offer in 6 months, and was later sponsored through college.',
    metrics: [
      { value: '2,000+', label: 'BNPL users' },
      { value: '$100k+', label: 'in sales' },
      { value: '−80%', label: 'onboarding time' },
    ],
    roles: [
      {
        title: 'Sponsored Undergrad Student',
        period: 'Aug 2023 – Nov 2024',
        type: 'Scholarship',
        bullets: [
          'DM sponsored part of my Computer Science degree at Tennessee Tech.',
        ],
      },
      {
        title: 'Software Developer I',
        period: 'Dec 2022 – Aug 2023',
        type: 'Full-time',
        bullets: [
          'Built the front end of DMPag, used by 2,000+ people across 60 companies, with React and Go.',
          'Cut client onboarding time by 80% with automated registration flows.',
          'Shipped a cross-platform Flutter app with the team in two weeks.',
          'Designed a two-year learning plan for interns covering engineering fundamentals and communication.',
        ],
      },
      {
        title: 'Full-Stack Developer Intern',
        period: 'Dec 2021 – Dec 2022',
        type: 'Internship',
        bullets: [
          'First intern to receive a full-time offer within 6 months.',
          'Rotated through Software Engineering, Data Science and Cybersecurity, and built a credit card application platform with React and Python.',
        ],
      },
    ],
    tools: [
      'React',
      'TypeScript',
      'Go',
      'NextJS',
      'Flutter',
      'Python',
      'MongoDB',
    ],
  },
  {
    id: 'afa',
    company: 'Brazilian Air Force Academy',
    emoji: '✈️',
    mark: { kind: 'image', src: '/logos/afa.png', fit: 'contain' },
    location: 'Pirassununga, Brazil',
    period: 'Jan 2019 – Jul 2021',
    summary: 'Flight-officer training, before I switched to software.',
    metrics: [
      { value: 'Top 10', label: 'of 98 pilots' },
      { value: '85%', label: 'missions aced' },
    ],
    roles: [
      {
        title: 'Aviator Cadet',
        period: 'Jan 2019 – Jul 2021',
        bullets: [
          'Solo pilot of the Neiva T-25 Universal, finishing in the top ten of 98 pilots.',
          'Aced 85% of missions and earned leadership accolades five years in a row.',
          'Leadership mentor of the 1st Squadron.',
        ],
      },
    ],
    tools: [],
  },
]

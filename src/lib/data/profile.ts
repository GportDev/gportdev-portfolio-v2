export const profile = {
  name: 'Gabriel Porteiro',
  fullName: 'Gabriel da Silva Porteiro',
  handle: 'GPORTDEV',
  headline: 'Full-Stack Software Engineer',
  company: 'SEO Gets',
  tagline: 'Using computers to solve human problems.',
  intro:
    'Former Air Force pilot, now a software engineer. I build SaaS products end to end in React, Go and Python, mostly billing, analytics and AI features.',
  location: 'Cookeville, TN',
  openToWork: false,
  email: 'gportdev@gmail.com',
  site: 'https://www.gportdev.com',
  resume: '/Gabriel-Porteiro.pdf',
  links: {
    github: 'https://github.com/GportDev',
    linkedin: 'https://www.linkedin.com/in/gabriel-porteiro',
    notion: 'https://gportdev.notion.site/',
  },
  /** Shown in the hero "flight panel". Edit freely. */
  now: [
    {
      emoji: '💼',
      label: 'Shipping',
      value: 'Public API (beta) at SEO Gets',
    },
    { emoji: '🚀', label: 'Building', value: 'AbordIQ at Fondor Labs' },
    { emoji: '🪚', label: 'Learning', value: 'Woodworking' },
    {
      emoji: '🎓',
      label: 'Graduated',
      value: 'B.S. Computer Science',
    },
    { emoji: '📍', label: 'Based in', value: 'Cookeville, Tennessee' },
  ],
  lastUpdated: 'Nov 2026',
} as const

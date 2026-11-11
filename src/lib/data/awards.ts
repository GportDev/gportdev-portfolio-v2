export type Award = {
  title: string
  issuer: string
  year: string
  emoji: string
  detail: string
  featured?: boolean
}

export const awards: Award[] = [
  {
    title: 'Generation Google Scholarship',
    issuer: 'Google',
    year: '2024',
    emoji: '🏅',
    detail:
      'One of 50 scholars picked from 2,000+ applicants, and the first Tennessee Tech student to receive it.',
    featured: true,
  },
  {
    title: 'Featured in Jornal de Brasília',
    issuer: 'Coluna Analice Nicolau',
    year: '2026',
    emoji: '📰',
    detail:
      'Profile on the path from military aviation to software leadership in the US.',
  },
  {
    title: 'BrightonSEO San Diego',
    issuer: 'SEO Gets',
    year: '2026',
    emoji: '🎤',
    detail:
      'Represented SEO Gets at our first sponsored booth, demoing the product to SEOs.',
  },
  {
    title: 'Engineering Joint Council Scholarship',
    issuer: 'Tennessee Tech',
    year: '2024',
    emoji: '🏛️',
    detail: 'Scholarship for engineering and computing students.',
  },
  {
    title: 'Honors Academic Scholarship',
    issuer: 'Tennessee Tech',
    year: '',
    emoji: '📚',
    detail: 'Merit scholarship for the Honors Program.',
  },
  {
    title: 'Multicultural Enhancement Scholarship',
    issuer: 'Tennessee Tech',
    year: '',
    emoji: '🌎',
    detail: 'Scholarship for international students.',
  },
  {
    title: "Dean's List",
    issuer: 'Tennessee Tech',
    year: '',
    emoji: '🗒️',
    detail: 'Academic honor at Tennessee Tech.',
  },
  {
    title: 'Military Merit accolade',
    issuer: 'Brazilian Air Force Academy',
    year: '2019 – 2021',
    emoji: '🎖️',
    detail:
      'Awarded for doctrine and discipline. I also earned leadership accolades five years in a row.',
  },
]

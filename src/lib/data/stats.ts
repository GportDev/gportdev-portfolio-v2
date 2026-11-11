export type Stat = {
  value: number
  prefix?: string
  suffix?: string
  label: string
  source: string
  emoji: string
  trend?: 'up' | 'down'
}

export const stats: Stat[] = [
  {
    value: 127,
    prefix: '+',
    suffix: '%',
    label: 'revenue growth',
    source: 'SEO Gets',
    emoji: '📈',
    trend: 'up',
  },
  {
    value: 80,
    prefix: '+',
    suffix: '%',
    label: 'more paying customers',
    source: 'SEO Gets',
    emoji: '🧲',
    trend: 'up',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'recurring Chrome extension users',
    source: 'SEO Gets',
    emoji: '🧩',
  },
  {
    value: 2000,
    suffix: '+',
    label: 'BNPL users across 60 companies',
    source: 'DM Card',
    emoji: '💳',
  },
  {
    value: 80,
    prefix: '−',
    suffix: '%',
    label: 'client onboarding time',
    source: 'DM Card',
    emoji: '⚡',
    trend: 'down',
  },
  {
    value: 70,
    prefix: '−',
    suffix: '%',
    label: 'network deployment time',
    source: 'Tennessee Tech',
    emoji: '🛰️',
    trend: 'down',
  },
  {
    value: 135,
    suffix: '+',
    label: 'currencies behind one paywall',
    source: 'Sphera Academy',
    emoji: '🌍',
  },
  {
    value: 10,
    prefix: 'Top ',
    label: 'of 98 pilots in the squadron',
    source: 'Air Force Academy',
    emoji: '✈️',
  },
]

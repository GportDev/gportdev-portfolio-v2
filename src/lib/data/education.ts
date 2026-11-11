import type { OrgMark } from './experience'

export type Education = {
  id: string
  school: string
  emoji: string
  mark?: OrgMark
  degree: string
  detail?: string
  period: string
  gpa: number
  status?: string
  activities: string[]
  featured?: boolean
}

export const education: Education[] = [
  {
    id: 'ttu',
    school: 'Tennessee Technological University',
    emoji: '🎓',
    mark: { kind: 'logo', logo: 'TTU' },
    degree: 'B.S. Computer Science',
    detail: 'Minor in Mathematics · Cum Laude · in Cursu Honorum',
    period: 'Aug 2023 – May 2026',
    gpa: 3.8,
    status: 'Graduated',
    activities: [
      'Honors Council member',
      'Honors Program “Big-sib” mentor',
      'Global Ambassador for International Students',
      'International rep, University Strategic Plan Group',
      'Dean’s List',
      'Brazilian Jiu-Jitsu Club',
    ],
    featured: true,
  },
  {
    id: 'afa',
    school: 'Brazilian Air Force Academy (AFA)',
    emoji: '✈️',
    mark: { kind: 'image', src: '/logos/afa.png', fit: 'contain' },
    degree: 'B.A. Public Administration & Aeronautical Sciences',
    detail: 'Flight-officer program, double major',
    period: 'Jan 2019 – Jul 2021',
    gpa: 3.6,
    activities: [
      'Element leader, 1st Squadron',
      'VP, Christian Cadets Association',
      'Water polo and judo athlete',
      'Electronic warfare club',
    ],
  },
  {
    id: 'epcar',
    school: 'EPCAR · Air Force Cadet Prep School',
    emoji: '🎖️',
    mark: { kind: 'image', src: '/logos/epcar.png', fit: 'contain' },
    degree: 'High school, military leadership',
    period: 'Jan 2016 – Dec 2018',
    gpa: 3.8,
    activities: [
      'Chief physical-training monitor, 2nd Squadron',
      'Math and physics olympiads (OBMEP, Kangaroo, OBF)',
    ],
  },
]

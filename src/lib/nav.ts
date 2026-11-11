export const navItems = [
  { id: 'impact', label: 'Impact' },
  { id: 'journey', label: 'Journey' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
] as const

export type NavId = (typeof navItems)[number]['id']

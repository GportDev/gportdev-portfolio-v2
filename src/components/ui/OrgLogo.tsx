import Image from 'next/image'
import type { OrgMark } from '@/lib/data/experience'
import DM from './logos/DM'
import SpheraAcademy from './logos/SpheraAcademy'
import TTU from './logos/TTU'

const tones = {
  green: 'from-green/40 to-green/5 text-green-light border-green/40',
  blue: 'from-sky-400/35 to-sky-400/5 text-sky-200 border-sky-300/35',
  amber: 'from-amber-300/35 to-amber-300/5 text-amber-100 border-amber-300/35',
  slate: 'from-white/20 to-white/0 text-white border-white/25',
} as const

export function OrgLogo({
  mark,
  name,
  size = 'md',
}: {
  mark: OrgMark
  name: string
  size?: 'md' | 'lg'
}) {
  const box = size === 'lg' ? 'size-14 rounded-2xl' : 'size-12 rounded-xl'

  if (mark.kind === 'logo') {
    const Logo = { TTU, DM, Sphera: SpheraAcademy }[mark.logo]
    return (
      <span
        role='img'
        aria-label={`${name} logo`}
        className={`${box} block shrink-0 overflow-hidden`}
      >
        <Logo className='size-full' />
      </span>
    )
  }

  if (mark.kind === 'image') {
    const contain = mark.fit === 'contain'
    return (
      <span
        className={`${box} relative block shrink-0 overflow-hidden border ${
          contain
            ? 'border-line bg-white/[0.04] p-1.5'
            : 'border-line-strong bg-black'
        }`}
      >
        <Image
          src={mark.src}
          alt={`${name} logo`}
          width={112}
          height={112}
          unoptimized={mark.src.endsWith('.svg')}
          className={`size-full ${contain ? 'object-contain' : 'object-cover'}`}
        />
      </span>
    )
  }

  return (
    <span
      role='img'
      aria-label={`${name} logo`}
      className={`${box} grid shrink-0 place-items-center border bg-linear-to-br text-sm font-bold tracking-tight ${tones[mark.tone]}`}
    >
      {mark.text}
    </span>
  )
}

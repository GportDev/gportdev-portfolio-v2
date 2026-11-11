import Image from 'next/image'
import { type Tool, type ToolKey, tools } from '@/lib/data/tools'

export function TechPill({
  tool,
  size = 'sm',
}: {
  tool: ToolKey
  size?: 'sm' | 'md'
}) {
  const t: Tool = tools[tool]
  const md = size === 'md'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-surface text-white/80 ${
        md ? 'px-3 py-1.5 text-sm' : 'px-2.5 py-1 text-xs'
      }`}
    >
      {t.logo ? (
        <Image
          src={t.logo}
          alt=''
          width={md ? 16 : 14}
          height={md ? 16 : 14}
          unoptimized
          className={t.invert ? 'invert' : undefined}
        />
      ) : (
        <span aria-hidden className='size-1.5 rounded-full bg-green' />
      )}
      {t.name}
    </span>
  )
}

export function TechList({
  items,
  max,
  size,
}: {
  items: ToolKey[]
  max?: number
  size?: 'sm' | 'md'
}) {
  const shown = max ? items.slice(0, max) : items
  const rest = items.length - shown.length
  return (
    <ul className='flex flex-wrap gap-2' aria-label='Tech used'>
      {shown.map((tool) => (
        <li key={tool}>
          <TechPill tool={tool} size={size} />
        </li>
      ))}
      {rest > 0 && (
        <li className='inline-flex items-center px-1 text-xs text-faint'>
          +{rest} more
        </li>
      )}
    </ul>
  )
}

const styles = {
  live: {
    label: 'Live',
    dot: 'bg-green-light',
    pill: 'border-green/40 bg-green/10 text-green-light',
  },
  building: {
    label: 'Building',
    dot: 'bg-amber-300',
    pill: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  },
  current: {
    label: 'Current',
    dot: 'bg-green-light',
    pill: 'border-green/40 bg-green/10 text-green-light',
  },
  graduated: {
    label: 'Graduated',
    dot: 'bg-green-light',
    pill: 'border-green/40 bg-green/10 text-green-light',
  },
  active: {
    label: 'Active',
    dot: 'bg-green-light',
    pill: 'border-green/40 bg-green/10 text-green-light',
  },
} as const

export type Status = keyof typeof styles

/** Pill with a pulsing dot. Pulse is decorative and stops under reduced motion. */
export function StatusBadge({
  status,
  label,
  pulse = true,
}: {
  status: Status
  label?: string
  pulse?: boolean
}) {
  const s = styles[status]
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-medium ${s.pill}`}
    >
      <span aria-hidden className='relative flex size-1.5'>
        {pulse && (
          <span
            className={`absolute inset-0 animate-pulse-dot rounded-full ${s.dot}`}
          />
        )}
        <span className={`relative size-1.5 rounded-full ${s.dot}`} />
      </span>
      {label ?? s.label}
    </span>
  )
}

import { TrendingDown, TrendingUp } from 'lucide-react'
import { CountUp } from '@/components/motion/CountUp'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Section } from '@/components/ui/Section'
import { stats } from '@/lib/data/stats'

export function Impact() {
  return (
    <Section
      id='impact'
      index='01'
      eyebrow='Impact'
      title='By the numbers'
      emoji='📈'
      icon={TrendingUp}
      description='Outcomes from the products I built and the places I worked. Real numbers, with the source next to each one.'
    >
      <Stagger
        as='ul'
        className='grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4 lg:gap-4'
      >
        {stats.map((stat) => (
          <StaggerItem as='li' key={`${stat.source}-${stat.label}`}>
            <div className='lift flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-5 sm:p-6'>
              <div className='flex items-start justify-between'>
                <span aria-hidden className='text-2xl'>
                  {stat.emoji}
                </span>
                {stat.trend === 'up' && (
                  <TrendingUp aria-hidden className='size-4 text-green' />
                )}
                {stat.trend === 'down' && (
                  <TrendingDown aria-hidden className='size-4 text-green' />
                )}
              </div>
              <div className='mt-6'>
                <p className='tabular text-4xl font-bold tracking-tight text-green-light sm:text-5xl'>
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className='mt-2 text-sm leading-snug text-white/85'>
                  {stat.label}
                </p>
                <p className='mt-4 inline-flex rounded-full border border-line px-2 py-0.5 text-[11px] text-faint'>
                  {stat.source}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

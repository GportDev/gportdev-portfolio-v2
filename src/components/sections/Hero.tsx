import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { ResumeButton } from '@/components/ui/ResumeButton'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { profile } from '@/lib/data/profile'
import { AnimatedName } from './AnimatedName'

const socials = [
  { label: 'GitHub', href: profile.links.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export function Hero() {
  return (
    <section id='top' className='relative isolate overflow-hidden'>
      <Aurora />
      <div className='mx-auto grid max-w-[1200px] items-center gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.25fr_0.75fr] lg:pt-32 lg:pb-28'>
        <div>
          <Reveal y={8}>
            <div className='flex flex-wrap items-center gap-3 text-sm text-muted'>
              {profile.openToWork && (
                <StatusBadge status='live' label='Open to work' />
              )}
              <span className='inline-flex items-center gap-1.5'>
                <MapPin className='size-3.5 text-green' />
                {profile.location}
              </span>
            </div>
            <p className='mt-8 font-mono text-sm text-green'>
              <span className='text-faint'>~ $</span> whoami
            </p>
          </Reveal>

          <div className='mt-3'>
            <AnimatedName text={profile.name} />
          </div>

          <Reveal delay={0.55} y={10}>
            <p className='mt-6 text-lg font-medium sm:text-2xl'>
              {profile.headline}{' '}
              <span className='text-glow text-green-light'>
                @ {profile.company}
              </span>
            </p>
            <p className='mt-5 max-w-xl leading-relaxed text-pretty text-muted sm:text-lg'>
              {profile.intro}
            </p>

            <div className='mt-9 flex flex-wrap items-center gap-3'>
              <ResumeButton />
              <a
                href='#experience'
                className='press group inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface px-5 py-3 font-semibold hover:border-green/50 hover:bg-surface-strong'
              >
                See my work
                <ArrowDown className='nudge-down size-4' />
              </a>
            </div>

            <ul className='mt-8 flex items-center gap-2'>
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel='noreferrer'
                    aria-label={label}
                    className='press grid size-11 place-items-center rounded-xl border border-line bg-surface text-white/80 hover:border-green/50 hover:text-green-light'
                  >
                    <Icon className='size-5' />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.75} y={20}>
          <NowPanel />
        </Reveal>
      </div>
    </section>
  )
}

function NowPanel() {
  return (
    <div className='overflow-hidden rounded-2xl border border-line-strong bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur'>
      <div className='flex items-center gap-2 border-b border-line px-4 py-3'>
        <span className='size-2.5 rounded-full bg-white/15' />
        <span className='size-2.5 rounded-full bg-white/15' />
        <span className='size-2.5 rounded-full bg-green/70' />
        <span className='ml-2 text-xs text-faint'>now.log</span>
      </div>
      <ul className='divide-y divide-line'>
        {profile.now.map((row) => (
          <li key={row.label} className='flex items-start gap-3 px-4 py-4'>
            <span aria-hidden className='text-lg leading-6'>
              {row.emoji}
            </span>
            <div className='min-w-0'>
              <p className='text-[11px] tracking-[0.18em] text-faint uppercase'>
                {row.label}
              </p>
              <p className='mt-0.5 text-sm text-white/90'>{row.value}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className='border-t border-line px-4 py-3 text-xs text-faint'>
        <span className='text-green'>›</span> last updated {profile.lastUpdated}
      </p>
    </div>
  )
}

/** Soft drifting aqua light. Transform-only, so it stays on the compositor. */
function Aurora() {
  return (
    <div aria-hidden className='pointer-events-none absolute inset-0 -z-10'>
      <div className='bg-dots absolute inset-0 mask-[radial-gradient(ellipse_at_top,black_30%,transparent_75%)]' />
      <div className='absolute -top-1/3 left-1/2 h-[120%] w-[140%] -translate-x-1/2'>
        <div className='size-full animate-aurora bg-[radial-gradient(40%_35%_at_30%_40%,rgb(55_170_156/0.22),transparent_70%),radial-gradient(30%_30%_at_75%_30%,rgb(148_243_228/0.12),transparent_70%)] will-change-transform' />
      </div>
    </div>
  )
}

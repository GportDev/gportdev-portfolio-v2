import { Mail } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { ResumeButton } from '@/components/ui/ResumeButton'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { profile } from '@/lib/data/profile'
import { CopyEmail } from './CopyEmail'

export function Contact() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-title'
      className='scroll-mt-24 py-20 sm:py-28'
    >
      <div className='mx-auto max-w-[1200px] px-4 sm:px-6'>
        <Reveal>
          <div className='relative overflow-hidden rounded-[2rem] border border-green/30 bg-linear-to-br from-green/15 via-ink/60 to-ink/80 px-5 py-14 text-center sm:px-10 sm:py-20'>
            <div
              aria-hidden
              className='bg-dots pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]'
            />
            <div className='relative'>
              <p className='flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-faint uppercase'>
                <span className='tabular text-green'>10</span>
                <span aria-hidden className='h-px w-8 bg-line-strong' />
                Contact
              </p>
              <h2
                id='contact-title'
                className='mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-5xl'
              >
                Want to work together? <span aria-hidden>✈️</span>
              </h2>
              <p className='mx-auto mt-5 max-w-xl text-pretty text-muted sm:text-lg'>
                Have a project for Fondor Labs, or want to talk engineering?
                Email is the fastest way to reach me.
              </p>
              <div className='mt-9 flex flex-wrap items-center justify-center gap-3'>
                <CopyEmail email={profile.email} />
                <ResumeButton variant='ghost' />
              </div>
              <ul className='mt-8 flex items-center justify-center gap-2'>
                {[
                  {
                    label: 'GitHub',
                    href: profile.links.github,
                    Icon: GitHubIcon,
                  },
                  {
                    label: 'LinkedIn',
                    href: profile.links.linkedin,
                    Icon: LinkedInIcon,
                  },
                  {
                    label: 'Email',
                    href: `mailto:${profile.email}`,
                    Icon: Mail,
                  },
                ].map(({ label, href, Icon }) => (
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

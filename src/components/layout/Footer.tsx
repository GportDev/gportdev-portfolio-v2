import { profile } from '@/lib/data/profile'

export function Footer() {
  return (
    <footer className='border-t border-line'>
      <div className='mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6'>
        <p>
          <span className='font-bold text-white/80'>&lt;GPORTDEV/&gt;</span> ·
          Last updated {profile.lastUpdated}
        </p>
        <a
          href={profile.links.notion}
          target='_blank'
          rel='noreferrer'
          className='w-fit transition-colors duration-150 hover:text-green-light'
        >
          Tech summaries
        </a>
      </div>
    </footer>
  )
}

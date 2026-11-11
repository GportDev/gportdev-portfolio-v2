'use client'

import { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { motion } from 'motion/react'
import { EASE_OUT } from '@/lib/ease'
import { navItems } from '@/lib/nav'

/** Section the reader is in: whichever crosses a line ~40% down the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    // Watch every section, so the pill clears while reading ones not in the nav.
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main section[id]')
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))

    const onScroll = () => {
      if (window.scrollY < 200) setActive(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return active
}

export function Header() {
  const active = useActiveSection()
  const inNav = navItems.some((item) => item.id === active)

  // The pill stays on the last nav item it reached and fades out while the
  // reader is in a section the nav doesn't list, instead of vanishing.
  const [pillId, setPillId] = useState<string | null>(null)
  if (inNav && active !== pillId) setPillId(active)

  return (
    <header className='sticky top-0 z-50 px-0 lg:top-4 lg:px-6'>
      <nav
        aria-label='Main'
        className='mx-auto flex max-w-[1200px] items-center justify-between gap-4 border-b border-line bg-black/70 px-4 py-3 backdrop-blur-md sm:px-6 lg:rounded-full lg:border lg:py-2.5 lg:pr-2.5'
      >
        <a
          href='#top'
          className='press shrink-0 font-bold tracking-tight hover:text-green-light'
        >
          &lt;GPORTDEV/&gt;
        </a>

        <ul className='hidden items-center gap-1 lg:flex'>
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id} className='relative'>
                {pillId === item.id && (
                  <motion.span
                    layoutId='nav-pill'
                    className='absolute inset-0 rounded-full border border-green/40 bg-green/15'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inNav ? 1 : 0 }}
                    transition={{
                      layout: { type: 'spring', duration: 0.45, bounce: 0.15 },
                      opacity: { duration: 0.15, ease: EASE_OUT },
                    }}
                  />
                )}
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-green-light'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <MobileMenu active={active} />
      </nav>
    </header>
  )
}

function MobileMenu({ active }: { active: string | null }) {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        aria-label='Open menu'
        className='press grid size-10 place-items-center rounded-xl border border-line bg-surface lg:hidden'
      >
        <Menu className='size-5' />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='end'
          sideOffset={10}
          className='z-50 min-w-48 origin-(--radix-dropdown-menu-content-transform-origin) rounded-2xl border border-line-strong bg-black/95 p-1.5 shadow-2xl backdrop-blur-md data-[state=closed]:animate-pop-out data-[state=open]:animate-pop-in'
        >
          {navItems.map((item) => (
            <DropdownMenu.Item key={item.id} asChild>
              <a
                href={`#${item.id}`}
                className={`block rounded-xl px-3 py-2.5 text-sm outline-none data-highlighted:bg-white/8 ${
                  active === item.id ? 'text-green-light' : 'text-white/85'
                }`}
              >
                {item.label}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

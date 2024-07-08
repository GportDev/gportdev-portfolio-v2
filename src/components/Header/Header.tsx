import React from 'react'
import Link from 'next/link'
import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu'

export default function Header() {
  return (
    <header className='py-4'>
      <nav className='flex justify-between'>
        <Link
          href='/'
          className='hover:text-green transition-all hover:scale-105'
        >
          {' '}
          &lt;GPORTDEV/&gt;{' '}
        </Link>
        <div className='hidden gap-4 lg:flex'>
          <Link
            href='#'
            className='hover:text-green transition-all hover:scale-105'
          >
            Projects
          </Link>
          <Link
            href='#'
            className='hover:text-green transition-all hover:scale-105'
          >
            Tech Summaries
          </Link>
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  )
}

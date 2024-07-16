import React from 'react'
import Link from 'next/link'
import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu'

export default function Header() {
  return (
    <header className='p-6'>
      <nav className='flex justify-between lg:text-xl'>
        <Link
          href='/'
          className='font-bold transition-all hover:scale-105 hover:text-green'
        >
          {' '}
          &lt;GPORTDEV/&gt;{' '}
        </Link>
        <div className='hidden gap-8 lg:flex'>
          <Link
            href='/projects'
            className='transition-all hover:scale-105 hover:text-green'
          >
            Projects
          </Link>
          <Link
            href='/tech-summaries'
            className='transition-all hover:scale-105 hover:text-green'
          >
            Tech Summaries
          </Link>
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  )
}

import React from 'react'
import Link from 'next/link'
import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-gradient-to-br from-black/70 to-gray-green/70 p-6 backdrop-blur lg:top-5 lg:rounded-full'>
      <nav className='flex justify-between text-xl'>
        <Link
          href='/'
          className='font-bold transition-all hover:scale-105 hover:text-green hover:drop-shadow-[0px_0px_16px_rgba(148,243,228,0.35)]'
        >
          {' '}
          &lt;GPORTDEV/&gt;{' '}
        </Link>
        <div className='hidden gap-8 lg:flex'>
          <Link
            href='/projects'
            className='transition-all hover:scale-105 hover:font-black hover:text-green hover:drop-shadow-[0px_0px_16px_rgba(148,243,228,0.35)]'
          >
            Projects
          </Link>
          <Link
            href='https://gportdev.notion.site/'
            target='blank'
            className='transition-all hover:scale-105 hover:font-black hover:text-green hover:drop-shadow-[0px_0px_16px_rgba(148,243,228,0.35)]'
          >
            Tech Summaries
          </Link>
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  )
}

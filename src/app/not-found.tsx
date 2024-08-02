import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='my-16 flex h-full flex-col items-center'>
      <h1 className='text-6xl'>404</h1>
      <h2 className='text-3xl'>Sorry, page not found</h2>
      <Link
        href='/'
        className='mx-auto mt-16 w-fit cursor-pointer rounded-lg bg-green p-3 font-bold text-white transition-all hover:scale-105 hover:shadow-md hover:shadow-white/15 lg:p-4'
      >
        Go Back to Home
      </Link>
    </section>
  )
}

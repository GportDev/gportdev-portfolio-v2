'use client'

import React from 'react'

export default function ScrollLink({
  targetId,
  children,
}: {
  targetId: string
  children: React.ReactNode
}) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      className='cursor-pointer text-base transition-all hover:scale-105 hover:font-black hover:text-green hover:drop-shadow-[0px_0px_16px_rgba(148,243,228,0.35)] active:text-green lg:text-xl'
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

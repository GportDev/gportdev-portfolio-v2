'use client'

import posthog from 'posthog-js'
import React from 'react'

export default function ResumeDownload() {
  return (
    <div
      onClick={() => posthog.capture('Resume Downloaded')}
      className='mx-auto mt-16 w-fit cursor-pointer rounded-lg bg-green p-3 font-bold text-white transition-all hover:scale-105 hover:shadow-md hover:shadow-white/15 lg:p-4'
    >
      <a href='/Gabriel-Porteiro.pdf' target='blank' download={true}>
        Download my resume
      </a>
    </div>
  )
}

import {
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  DoubleArrowDownIcon,
} from '@radix-ui/react-icons'
import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='my-16 flex h-full flex-col items-center'>
      <div className='text-center'>
        <div className='type-writer'>
          <h1 className='animate-blink text-4xl font-bold lg:text-6xl'>
            GABRIEL PORTEIRO
          </h1>
        </div>
        <h2 className='lg:text-3xl'>FULL-STACK SOFTWARE DEVELOPER</h2>
        <p className='mt-8 lg:mt-16 lg:text-xl'>
          Using computers to <br className='lg:hidden' /> solve human&apos;s
          problems!
        </p>
        <div className='mt-16 flex justify-center gap-8 lg:gap-16'>
          <Link href='https://github.com/gportdev' target='blank'>
            <GitHubLogoIcon className='h-12 w-12 transition-all hover:scale-105 hover:text-green hover:drop-shadow-[0px_0px_16px_rgba(148,243,228,0.35)] lg:h-16 lg:w-16' />
          </Link>
          <Link href='mailto:gportdev@gmail.com' target='blank'>
            <EnvelopeClosedIcon className='h-12 w-12 transition-all hover:scale-105 hover:text-green hover:drop-shadow-[0px_0px_16px_rgba(148,243,228,0.35)] lg:h-16 lg:w-16' />
          </Link>
          <Link href='https://linkedin.com/in/gabriel-porteiro' target='blank'>
            <LinkedInLogoIcon className='h-12 w-12 transition-all hover:scale-105 hover:text-green hover:drop-shadow-[0px_0px_16px_rgba(148,243,228,0.35)] lg:h-16 lg:w-16' />
          </Link>
        </div>
        <div className='mx-auto mt-16 w-fit cursor-pointer rounded-lg bg-green p-3 font-bold text-white transition-all hover:scale-105 hover:shadow-md hover:shadow-white/15 lg:p-4'>
          <a href='/Gabriel-resume.pdf' target='blank' download={true}>
            Download my resume
          </a>
        </div>
        <div className='mt-16 flex justify-center gap-8 lg:gap-16'>
          <DoubleArrowDownIcon className='mt-8 h-16 w-16 animate-bounce text-green drop-shadow-[0px_0px_16px_rgba(148,243,228,0.35)] transition-all lg:h-24 lg:w-24' />
        </div>
      </div>
    </section>
  )
}

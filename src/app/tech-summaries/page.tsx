import { NotionLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import Link from 'next/link'
import SummaryCard from '@/components/UI/SummaryCard/SummaryCard'
import { summaries } from '@/lib/summaries'

export default function TechSummaries() {
  return (
    <section className='flex h-full flex-col items-center justify-center py-16'>
      <div className='px-6 text-center'>
        <div className='type-writer'>
          <h1 className='animate-blink w-fit text-4xl font-bold lg:text-6xl'>
            Tech Summaries
          </h1>
          <h2 className='mt-8 lg:mt-16 lg:text-xl'>
            I like to document what I learn and make it public to anyone that
            may use it
          </h2>
          <div className='mt-16'>
            <Link
              href='https://gportdev.notion.site/'
              target='blank'
              className='mx-auto flex w-fit cursor-pointer gap-2 rounded-lg bg-green p-3 font-bold text-white transition-all hover:scale-105 hover:shadow-md hover:shadow-white/15 lg:p-4'
            >
              View in
              <p className='flex items-center gap-1.5'>
                <NotionLogoIcon className='h-4 w-4 lg:h-6 lg:w-6' /> Notion
              </p>
            </Link>
          </div>
        </div>

        <div className='mt-16 flex w-full flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6'>
          {summaries.map((summary) => {
            return <SummaryCard content={summary} key={summary.title} />
          })}
        </div>
      </div>
    </section>
  )
}

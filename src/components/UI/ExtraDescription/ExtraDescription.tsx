'use client'

import * as Accordion from '@radix-ui/react-accordion'
import {
  CheckCircledIcon,
  ChevronDownIcon,
  ClockIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import React from 'react'

export default function ExtraDescription({
  duration,
  role,
  learned,
}: {
  duration: string
  role: string
  learned: string
}) {
  return (
    <Accordion.Root className='' type='single' collapsible>
      <Accordion.Item className='overflow-hidden' value='item-1'>
        <Accordion.Header>
          <Accordion.Trigger className='group flex items-center justify-between gap-4 rounded-lg bg-green/60 px-3 py-1 outline-none transition-all hover:bg-green/80'>
            Know more
            <ChevronDownIcon className='transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180' />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className='overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown'>
          <div className='mt-4 space-y-4'>
            <div className='flex flex-wrap items-center gap-4'>
              <div className='flex items-center gap-2'>
                <ClockIcon className='text-green' />
                {duration}
              </div>
              <div className='flex items-center gap-2'>
                <PersonIcon className='text-green' />
                {role}
              </div>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <CheckCircledIcon className='text-green' />
                <h4>What I learned with that project?</h4>
              </div>
              <p className='mt-2'>{learned}</p>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

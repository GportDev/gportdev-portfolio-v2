'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
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
          <Accordion.Trigger className='group flex items-center justify-between gap-4 outline-none'>
            Know more
            <ChevronDownIcon className='transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180' />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className='data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden'>
          <div className='mt-4'>
            <h4>Duration: </h4>
            <p> - {duration}</p>
            <br />
            <h4>My role:</h4>
            <p> - {role}</p>
            <br />
            <h4>What I learned with that project?</h4>
            <p> - {learned}</p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

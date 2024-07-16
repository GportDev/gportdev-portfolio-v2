'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'
import Link from 'next/link'

export default function HamburgerMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='lg:hidden'>
          <HamburgerMenuIcon fill='#FFF' height={24} width={24} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='mr-3 rounded-lg border border-white bg-gradient-to-br from-black to-gray-green p-4 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=top]:animate-slideDownAndFade'
          sideOffset={5}
        >
          <DropdownMenu.Arrow className='-translate-x-[6px] fill-white' />

          <DropdownMenu.Item>
            <Link href='/projects' className='text-sm'>
              Projects
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href='/tech-summaries' className='text-sm'>
              Tech Sumaries
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

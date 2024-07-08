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
          className='data-[side=top]:animate-slideDownAndFade data-[side=bottom]:animate-slideUpAndFade to-gray-green mr-3 rounded-lg border border-white bg-gradient-to-br from-black p-4 will-change-[opacity,transform]'
          sideOffset={5}
        >
          <DropdownMenu.Arrow className='-translate-x-[6px] fill-white' />
          <DropdownMenu.Item>
            <Link href='#' className='text-sm'>
              Projects
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href='#' className='text-sm'>
              Tech Sumaries
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

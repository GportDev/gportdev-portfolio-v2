'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'
import Link from 'next/link'
import ScrollLink from '../ScrollLink/ScrollLink'

export default function HamburgerMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='lg:hidden'>
          <HamburgerMenuIcon fill='#FFF' height={32} width={32} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='z-50 mr-3 flex flex-col gap-4 rounded-lg border border-white bg-gradient-to-br from-black to-gray-green p-6 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=top]:animate-slideDownAndFade'
          sideOffset={5}
        >
          <DropdownMenu.Arrow className='-translate-x-[6px] fill-white' />

          <DropdownMenu.Item>
            <ScrollLink targetId='projects'>Projects</ScrollLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link
              href='https://gportdev.notion.site/'
              target='blank'
              className='text-base active:text-green'
            >
              Tech Sumaries
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

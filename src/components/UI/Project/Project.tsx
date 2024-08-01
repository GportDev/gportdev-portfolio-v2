import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { tools, ToolsType } from '@/lib/tech-tools'
import ExtraDescription from '../ExtraDescription/ExtraDescription'

export default function Project({
  image,
  title,
  description,
  link,
  gitHubLink,
  duration,
  role,
  learned,
  usedTools,
}: {
  image: JSX.Element
  title: string
  description: string
  link: string
  gitHubLink: string
  duration: string
  role: string
  learned: string[]
  usedTools: (keyof ToolsType)[]
}) {
  return (
    <div className='flex w-full flex-col justify-between gap-8 rounded-lg lg:flex-row'>
      <div className='flex w-full flex-col justify-between gap-8 text-left'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <Link
              href={link}
              target='blank'
              className='flex w-fit items-center justify-center'
            >
              {image}
            </Link>
            <h3 className='flex items-center gap-4 text-2xl font-semibold'>
              {title}
              {gitHubLink !== '' && (
                <Link
                  href={gitHubLink}
                  target='blank'
                  className='transition-all hover:scale-105 hover:text-green'
                >
                  <GitHubLogoIcon className='h-6 w-6' />
                </Link>
              )}
            </h3>
          </div>

          <p>{description}</p>

          <div className='flex flex-wrap gap-6'>
            {usedTools.map((tool, index) => {
              return (
                <div
                  key={tool + index}
                  className='flex items-center gap-2 rounded-lg border px-3 py-1.5'
                >
                  <Image
                    src={tools[tool].logo}
                    alt={`${tool} badge`}
                    width={20}
                    height={20}
                  />
                  <p className='text-sm'>{tools[tool].name}</p>
                </div>
              )
            })}
          </div>

          <ExtraDescription duration={duration} role={role} learned={learned} />
        </div>
      </div>
    </div>
  )
}

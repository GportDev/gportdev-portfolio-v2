import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { tools, ToolsType } from '@/lib/tech-tools'
import ExtraDescription from '../ExtraDescription/ExtraDescription'

export default function Project({
  index,
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
  index: number
  image: string
  title: string
  description: string
  link: string
  gitHubLink: string
  duration: string
  role: string
  learned: string
  usedTools: (keyof ToolsType)[]
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`flex w-full flex-col justify-between gap-8 overflow-hidden rounded-lg ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      <Link href={link} target='blank' className='lg:max-w-[50%]'>
        <Image
          src={image}
          alt='Sphera Academy Logo'
          width={1080}
          height={1080}
          className='rounded-lg transition-all hover:scale-105'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
        />
      </Link>

      <div className='flex w-full flex-col justify-between gap-8 text-left'>
        <div className='space-y-6'>
          <h3 className='flex items-center gap-4 text-2xl font-semibold'>
            {gitHubLink !== '' && (
              <Link href={gitHubLink} target='blank'>
                <GitHubLogoIcon className='h-6 w-6' />
              </Link>
            )}
            {title}
          </h3>
          <p>{description}</p>
          <div className='flex gap-6'>
            {usedTools.map((tool) => {
              return (
                <Image
                  key={tool}
                  src={tools[tool]}
                  alt={`${tool} badge`}
                  width={80}
                  height={224}
                />
              )
            })}
          </div>
        </div>
        <ExtraDescription duration={duration} role={role} learned={learned} />
      </div>
    </div>
  )
}

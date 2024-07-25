import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Summary } from '@/lib/summaries'

export default function SummaryCard({ content }: { content: Summary }) {
  const isDone =
    content.status === 'Done'
      ? 'bg-green'
      : content.status === 'Doing'
        ? 'bg-orange-400/70'
        : 'bg-gray-600/60'

  return (
    <Link
      href={content.link}
      className='flex items-center gap-4 rounded-lg border-[0.5px] border-white p-4 text-left transition-all hover:scale-105 hover:bg-gray-green/40'
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              src={content.icon}
              alt={content.title}
              width={32}
              height={32}
            />
            <h3 className='font-bold lg:text-xl'>{content.title}</h3>
          </div>
          <div className={`${isDone} rounded-full px-4 py-1 text-sm font-bold`}>
            <p>{content.status}</p>
          </div>
        </div>
        <p className='text-sm lg:text-base'>{content.description}</p>
      </div>
    </Link>
  )
}

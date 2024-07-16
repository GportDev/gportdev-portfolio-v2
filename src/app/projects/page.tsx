import React from 'react'
import Project from '@/components/UI/Project/Project'
import { personalProjects } from '@/lib/projects'
import { ToolsType } from '@/lib/tech-tools'

export default function Projects() {
  return (
    <section className='flex h-full flex-col items-center justify-center'>
      <div className='mt-16 w-full px-6 text-center'>
        <div className='type-writer mx-auto w-fit'>
          <h1 className='animate-blink text-4xl font-bold lg:text-6xl'>
            Projects
          </h1>
        </div>

        <div className='space-y-[64px]'>
          <section className='mt-16 w-full'>
            <h2 className='text-2xl font-semibold underline underline-offset-2 lg:text-3xl'>
              Personal
            </h2>
            <div className='mt-8 space-y-16'>
              {personalProjects.map((project, index) => {
                return (
                  <Project
                    index={index + 1}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    gitHubLink={project.gitHubLink}
                    duration={project.duration}
                    role={project.role}
                    learned={project.learned}
                    image={project.image}
                    usedTools={project.usedTools as (keyof ToolsType)[]}
                  />
                )
              })}
            </div>
          </section>

          <section className='mt-16 w-full'>
            <h2 className='text-2xl font-semibold underline underline-offset-2 lg:text-3xl'>
              Worked on as employee
            </h2>
            <div className='mt-8 space-y-16'></div>
          </section>
        </div>
      </div>
    </section>
  )
}

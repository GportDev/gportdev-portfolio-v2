import React from 'react'
import Project from '@/components/UI/Project/Project'
import { employeeProjects, personalProjects } from '@/lib/projects'
import { ToolsType } from '@/lib/tech-tools'
import { logoConverter } from '@/utils/logo-converter'

export default function Projects() {
  return (
    <section className='flex h-full min-h-screen flex-col items-center justify-center'>
      <div className='w-full px-6 text-center'>
        <div className='mx-auto w-fit'>
          <h1 className='animate-blink text-4xl font-bold lg:text-6xl'>
            Projects
          </h1>
        </div>

        <div className='space-y-[64px]'>
          {personalProjects.length !== 0 && (
            <section className='mt-16 w-full'>
              <h2 className='text-2xl font-semibold underline underline-offset-2 lg:text-3xl'>
                Personal
              </h2>
              <div className='mt-8 space-y-16'>
                {personalProjects &&
                  personalProjects.map((project) => {
                    return (
                      <Project
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        gitHubLink={project.gitHubLink}
                        duration={project.duration}
                        role={project.role}
                        learned={project.learned}
                        image={logoConverter(project.image)}
                        usedTools={project.usedTools as (keyof ToolsType)[]}
                      />
                    )
                  })}
              </div>
            </section>
          )}

          <section className='mt-16 w-full'>
            <h2 className='text-2xl font-semibold underline underline-offset-2 lg:text-3xl'>
              Worked on as employee
            </h2>
            <div className='mt-8 space-y-16'>
              {employeeProjects.map((project) => {
                return (
                  <Project
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    gitHubLink={project.gitHubLink}
                    duration={project.duration}
                    role={project.role}
                    learned={project.learned}
                    image={logoConverter(project.image)}
                    usedTools={project.usedTools as (keyof ToolsType)[]}
                  />
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

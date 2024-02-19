import React from 'react'
import Image1Project from '@/assets/image-project-1.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='bg-black py-12'>
         <div className='max-w-screen-lg mx-auto  '>

              <div className='p-4'>
                  <h2 className='font-normal capitalize text-white font-Sora text-center text-t32 '> 
                    <div>my <span className='font-bold'>projects</span></div>
                  </h2>
              </div>
              <ProjectCard
                  image={Image1Project}
                  no="01"
                  title="Crypto screener project"
                  description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                  when an unknown printer took a galley of type and scrambled it to specimen book."
                  reverse={true}
              
              />
                <ProjectCard
                  image={Image1Project}
                  no="02"
                  title="Crypto screener project"
                  description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                  when an unknown printer took a galley of type and scrambled it to specimen book."
                  reverse={false}
              
              />
                <ProjectCard
                  image={Image1Project}
                  no="03"
                  title="Crypto screener project"
                  description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                  when an unknown printer took a galley of type and scrambled it to specimen book."
                  reverse={true}
              
              />

    </div>

    </div>
   
  )
}

export default Projects
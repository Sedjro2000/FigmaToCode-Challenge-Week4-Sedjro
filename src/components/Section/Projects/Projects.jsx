import React from 'react'
import Image1Project from '@/assets/image-project-1.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='bg-black'>
         <div className='max-w-screen-lg mx-auto '>
        <ProjectCard
            image={Image1Project}
            description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            when an unknown printer took a galley of type and scrambled it to specimen book."
            reverse={true}
        
        />

    </div>

    </div>
   
  )
}

export default Projects
import React from 'react'
import ExperienceCard from './ExperienceCard'
import Google from '@/assets/google.png'
import Youtube from '@/assets/youtube.png'
import Apple from '@/assets/apple.png'

const Experience = () => {
  return (
    <div className='bg-black mt-16 p-8 py-16'>

        <h2 className='font-normal capitalize text-white font-Sora text-center text-t32 my-6'> 
              <div>my <span className='font-bold'>experiences</span></div>
        </h2>
        <div className='max-w-screen-lg mx-auto flex flex-col space-y-6 '>
        <ExperienceCard
        
        company="Lead Software Engineer at Google"
        year="Nov 2019 - Present"
        description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
        logoSrc={Google}
        />
        <ExperienceCard 
        company="Software enginneer at youtube"
        year="Jun 2017 - Oct 2019"
        description="At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
        logoSrc={Youtube}
        />
        <ExperienceCard 
        company="Junior software enginneer at Apple"
        year="Jun 2016 - Dec 2017"
        description="During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."
        logoSrc={Apple}
        />



    </div>
    </div>
    
  )
}

export default Experience
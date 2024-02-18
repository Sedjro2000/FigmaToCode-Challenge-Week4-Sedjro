import React from 'react'
import SkillCard from './SkillCard'
import IconJs from '@/assets/icon-javscript.png'
import IconSass from '@/assets/icon-sass.png'
import IconGit from '@/assets/icon-git.png'


const Skills = () => {
  return (
    <div className=' max-w-screen-lg mx-auto  mt-16 p-4 '>
        <div className='p-4'>
            <h2 className='font-normal capitalize text-black font-Sora text-center text-t32 '> 
              <div>my <span className='font-bold'>Skills</span></div>
            </h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4  mt-10'>
           
           <SkillCard  src={IconGit} text="Git" />
           <SkillCard  src={IconSass} text="Sass"/>
           <SkillCard  src={IconGit} text="Git" />
           <SkillCard  src={IconJs} text="Javascript"/>
           <SkillCard  src={IconGit} text="Git" />
           <SkillCard  src={IconSass} text="Sass"/>
           <SkillCard  src={IconGit} text="Git" />
           <SkillCard  src={IconSass} text="Sass"/>
           <SkillCard  src={IconGit} text="Git" />
           <SkillCard  src={IconSass} text="Sass"/>
        </div>
       
    </div>
  )
}

export default Skills
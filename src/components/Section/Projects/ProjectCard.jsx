import React from 'react'

const ProjectCard = ({ image, description, no, title,  reverse }) => {
    const flexDirection = reverse ? 'md:flex-row-reverse' : 'flex-row';
  return (
    <div className={`flex ${flexDirection} items-center justify-center gap-4 flex-wrap md:flex-nowrap my-8`}>
         <img src={image} alt="Image" className="  ml-4 object-cover" />
         <div className='flex flex-col space-y-4'>
          <div className=' text-white font-bold font-Sora uppercase text-start text-t32'>{no} </div>
            <h2 className=' text-white font-bold capitalize  font-Sora text-start text-t24'>{title}</h2>
            <p className="font normal font-Sora text-zinc-500">{description}</p>
         </div>
         

    </div>
  )
}

export default ProjectCard
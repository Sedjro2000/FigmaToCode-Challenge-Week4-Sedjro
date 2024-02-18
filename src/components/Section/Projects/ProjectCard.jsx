import React from 'react'

const ProjectCard = ({ image, description, reverse }) => {
    const flexDirection = reverse ? 'md:flex-row-reverse' : 'flex-row';
  return (
    <div className={`flex ${flexDirection} items-center justify-center gap-4 flex-wrap md:flex-nowrap`}>
         <img src={image} alt="Image" className="  ml-4 object-cover" />
         <p className="text-white">{description}</p>

    </div>
  )
}

export default ProjectCard
import React from 'react'



const ExperienceCard = ({ company, year, description,logoSrc }) => {
  return (
    
      <div className='p-4  text-white border border-zinc-500 rounded-lg '>
        <div className="flex flex-wrap">
              <div className=" flex w-[850px] space-x-4 px-4 ">
                <img src={logoSrc} alt="Google" className='mr-4' />
                <h4 className='font-bold font-Sora mt-1'>{company}</h4>
              </div>
              <div className="flex-1  text-zinc-300 mt-4 md:mt-0">{year}</div>
        </div>
        <div className=" flex mt-4 ">
          <p className='font-normal  text-zinc-300'>
              {description}
          </p>
        </div>
    </div>

    
  )
}

export default ExperienceCard
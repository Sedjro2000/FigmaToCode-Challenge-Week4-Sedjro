import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <div className='max-w-screen-lg mx-auto mb-4'>
      <div className='p-4'>
            <h2 className='font-bold capitalize text-black font-Sora text-center text-t24'> My Testimonial</h2>
        </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3  mt-8 '>
       <TestimonialCard 
          text="I recently had to jump on 10+ different calls across eight different countries to find the right owner."  
          name="Evren Shah"
          profession="Designer"
          bg="white"
          
      />
     
       <TestimonialCard 
          text="I recently had to jump on 10+ different calls across eight different countries to find the right owner."  
          name="Flora Sheen"
          profession="Designer"
          bg="black"
          
      />
       <TestimonialCard 
          text="I recently had to jump on 10+ different calls across eight different countries to find the right owner."  
          name="Evren Shah"
          profession="Designer"
          bg="white"
      />
    </div>
    </div>
    
  )
}

export default Testimonial


import React from 'react'
import Banner from '@/assets/Banner.png'
import ButtonUi from '@/components/ui/Button/ButtonUi'

const Hero = () => {
  return (
    <div className='max-w-screen-lg mx-auto mt-8'>
      <div className='flex flex-col md:flex-row md:flex-nowrap '>
          <div className='order-2 md:order-1 md:w-[600px] text-start'>
            <h1 className=' font-normal font-Sora text-t32 capitalize'>
              <div> Hello i'm <span className='font-bold'>Sèdjro SELOVE.</span></div>
              <div>  <span className='font-bold'>Frontend</span>  Developer</div>
              <div> Based in <span className='font-bold'>Benin</span></div>
            </h1>
            <p className='font-normal font-Sora capitalize text-gray-600 mt-4'>
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            </p>
          </div>
          <div className='order-1 md:order-2 md:w-[889px] mb-8 md:mb-0 '>
                <img src={Banner} alt="Banner" />
          </div>
    </div>

    </div>
  )
}

export default Hero
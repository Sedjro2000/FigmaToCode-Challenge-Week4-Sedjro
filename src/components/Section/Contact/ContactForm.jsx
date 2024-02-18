import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ButtonUi from '@/components/ui/Button/ButtonUi'
import Social1Icon from '../../../assets/social-icon1.png'
import Social2Icon from '../../../assets/social-icon2.png'
import Social3Icon from '../../../assets/social-icon3.png'
import Social4Icon from '../../../assets/social-icon4.png'
import Talk from '@/assets/talk.png'
const ContactForm = () => {
  return (
    <div className='max-w-screen-lg mx-auto mt-8'>
        <div className='flex flex-col md:flex-row max-w-[1216px] '>

            <div className='flex flex-col flex-1 p-4 pr-12 space-y-6 md:space-y-0 md:space-x-6 md:flex-col md:w-1/2 border border-green-800'>
                <Input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full md:w-[500px]" 
                />
                <Input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full md:w-[500px]" 
                />
                <Input 
                    type="url"
                    id="website"
                    name="website"
                    placeholder="Your Website(if exists)"
                    className="w-full md:w-[500px]" 
                />
                <Textarea 
                    placeholder="How can I help ?"
                    className="w-full md:w-[500px]"
                    rows="4"
                />
                <div className='flex space-x-4 w-full md:w-[500px]'>
                    <ButtonUi 
                        text="Get in Touch"
                        className="flex-1 border border-black"
                        color="red-600"
                    />
                    
                    <ButtonUi 
                        icon={Social1Icon}
                        className="bg-white border  border-black"
                        
                    />
                    <ButtonUi 
                        icon={Social2Icon}
                        className="bg-white border border-black"
                    />
                    <ButtonUi 
                        icon={Social3Icon}
                        className="bg-white border border-black"
                    />
                    <ButtonUi 
                        icon={Social4Icon}
                        className=" border border-black"
                        
                    />

                </div>
            </div> 

        <div className='border border-red-800 flex flex-col w-full md:w-[608px]'>
            <h1 className='font-bold text-t24 font-Sora text-black capitalize flex'>
                let's <span><img src={Talk} alt="Talk" className='h-5 w-5 ml-2 mr-2'  /></span>for 
                something special
               
            </h1>
                
           
        </div> 

      </div>

    </div>
    
  )
}

export default ContactForm

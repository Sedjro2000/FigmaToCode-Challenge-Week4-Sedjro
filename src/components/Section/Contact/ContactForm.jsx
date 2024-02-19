import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ButtonUi from '@/components/ui/Button/ButtonUi'
import Social1Icon from '@/assets/social-icon1.png'
import Social2Icon from '@/assets/social-icon2.png'
import Social3Icon from '@/assets/social-icon3.png'
import Social4Icon from '@/assets/social-icon4.png'


const ContactForm = () => {
  return (
    <div className='max-w-screen-lg mx-auto mt-8'>
        <div className='flex space-x-12 flex-wrap md:flex-nowrap  md:space-x-8 my-16 '>
            <div className='flex flex-col space-y-4 text-zinc-500'>
                <Input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className=""
                />
                 <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className=""
                />
                 <Input 
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Your Website(if exists)"
                    className=""
                />
                <Textarea 
                    rows={4} 
                    name="message"  
                    id="message"  
                    placeholder="How can I help"  
                    className=""
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
            <div className='flex flex-col space-y-4'>
                <div className='p-4'>
                    <h2 className='font-normal capitalize text-black font-Sora text-start text-t32 '> 
                        <div>my <span className='font-bold'>Let's Talk</span></div>
                    </h2>
                </div>
                <p className='font-normal font-Sora text-zinc-500'>
                    Let’s
                    talk
                    for
                    Something special
                    I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                </p>
                <div className='flex flex-col text-black font-Sora text-t16 font-bold space-y-4'>
                    <a href="">Youremail@gmail.com</a>
                    <a href="">1234567890</a>
                </div>

            </div>

        </div>

       
    </div>
    
  )
}

export default ContactForm

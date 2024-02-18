import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const TestimonialCard = ({text, name, profession, bg}) => {
  
 

  return (
    
      <div className={`max-w-[370px] max-h-[398px] w-full h-full shadow-md rounded-2xl overflow-hidden flex flex-col items-center p-6 bg-${bg}`}>
        <Avatar className="w-[96px] h-[96px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className={`font-Sora ${bg === 'white' ? 'text-gray-600' : 'text-white'} w-[290px] text-center mt-8`}>{text}</p>
        <div className={`border ${bg=='white' ? 'border-black' : 'border-white'}    w-[120px] h-[2px] mt-6`} ></div>
        <h5 className={`font-semibold ${bg === 'white' ? 'text-black' : 'text-white'} font-Sora mt-6`}>{name}</h5>
        <h6 className={`font-semibold ${bg === 'white' ? 'text-gray-600' : 'text-white'} font-Sora mt-6`}>{profession}</h6>
      </div>
    );
  
}


export default TestimonialCard
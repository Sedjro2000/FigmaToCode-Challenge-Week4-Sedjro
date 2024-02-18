import React from 'react';
import LogoIcon from '../../assets/Group.png'

const Logo = () => {
  return (
    <div className=' flex items-centerborder border-blue-400'>
        <img src={LogoIcon} alt="Logo" className='mr-4' />
        <span className="text-xl font-bold">Personal</span>
  
    </div>
    
  )
};

export default Logo;

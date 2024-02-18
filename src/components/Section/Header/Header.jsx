import React , {useState} from 'react'
import Logo from '../../ui/Logo'
import Menu from './Menu'
import Download from '@/assets/download.png'
import ButtonUi from '@/components/ui/Button/ButtonUi'







const Header = () => {
  
    
  return (
    <header className='flex items-center justify-between p-4 my-4  max-w-screen-lg mx-auto '>
        <Logo />
        <Menu />
        <ButtonUi text="Resume" icon={Download} />
        
        

       
      
        
        

        
    </header>
   
      
  )
}

export default Header
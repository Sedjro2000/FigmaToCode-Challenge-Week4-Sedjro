import React from 'react'
import { Button } from '../button'

const ButtonUi = ({ text, icon,  ...props }) => {
  return (
    <Button className=  {`flex items-center space-x-2  `}  {...props}>
       {text}
       {icon && <img src={icon} alt="Icon" className="h-5 w-5 ml-2" />}
    </Button>
  )
}

export default ButtonUi
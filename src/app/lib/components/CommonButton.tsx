import React from 'react'
import { ButtonType } from '../types/type'

const CommonButton = ({className,type="filled",onClick,title}:ButtonType) => {
   const varientStyle = type == "filled"? "bg-white text-black":"text-black border-black";
    
  return (
    <div>
      <button className={`${className} ${varientStyle}`} onClick={onClick}>{title}</button>
    </div>
  )
}

export default CommonButton

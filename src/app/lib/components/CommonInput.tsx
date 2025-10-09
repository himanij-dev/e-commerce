import React from 'react'
import { InputType } from '../types/type'

const CommonInput = ({type,placeholder}:InputType) => {
  return (
    <div>
      <input type={type} placeholder={placeholder}/>
    </div>
  )
}

export default CommonInput

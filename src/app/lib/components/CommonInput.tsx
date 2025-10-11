import React from 'react'
import { InputType } from '../types/type'

const CommonInput = ({type,placeholder, ...rest}:InputType) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} {...rest}/>
    </div>
  )
}

export default CommonInput

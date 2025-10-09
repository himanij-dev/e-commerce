import Image from 'next/image'
import React from 'react'
import CommonButton from './CommonButton'
import { NewAndPopularDataType } from '../types/type'

const NewAndPopularCard = ({imagesrc, buttonTitle,title}:NewAndPopularDataType) => {
  return (
    <div className='w-full h-full relative'>
      <div className='relative w-full h-full'>
      <Image src= {imagesrc} alt="Popular Card Image" fill/>
      </div>
      <div className='w-full inset-0 absolute bg-black/10 z-10'></div>
       <div className='absolute inset-0 z-20 text-white flex flex-col justify-center items-center'>
        <div className='text-center w-fit'>
        <p className="text-24">{title}</p>
        <CommonButton title={buttonTitle} className='py-3 mt-6 px-5'/>
        </div>
      </div>

    </div>
  )
}

export default NewAndPopularCard

import CommonButton from '@/app/lib/components/CommonButton'
import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <div className='w-full   h-[calc(100vh-72px)] relative'>
      <div className='w-full h-full relative'>
      <Image src="/images/heroImage.png" alt='hero image' className='object-cover' fill/>
      </div>
      <div className='w-full inset-0 absolute bg-black/20 z-10'></div>
      <div className='absolute inset-0 z-20 text-white flex flex-col justify-center pl-60 '>
        <div className='text-center w-fit'>
        <h2 className='text-44'>Your Cozy Era</h2>
        <p className="text-24">Get peak comfy-chic</p>
        <p className="text-24">with new winter essentials</p>
        <CommonButton title='SHOP NOW' className='w-full py-3 mt-6'/>
        </div>
      </div>
    </div>
  )
}

export default Herosection

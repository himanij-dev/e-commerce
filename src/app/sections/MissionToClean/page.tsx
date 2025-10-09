import CommonButton from '@/app/lib/components/CommonButton'
import Image from 'next/image'
import React from 'react'

const MissionToClean = () => {
  return (
    <div className='relative w-full h-[300px] mt-20 px-20'>
       <div className='w-full h-full relative'>
      <Image src="/images/missionToClean.png" alt='hero image' className='object-cover' fill/>
      </div>
      {/* <div className='w-full inset-0 absolute bg-black/20 z-10 px-20'></div> */}
      <div className='absolute inset-0 z-20 text-white flex flex-col justify-center items-center px-20'>
        <div className='text-center w-fit'>
        <p className="text-24">We’re on a Mission To Clean Up the Industry</p>
        <p className="text-24">Read about our progress in our latest Impact Report.</p>
        <CommonButton title='Learn more' className='w-full py-3 mt-6'/>
        </div>
      </div>
    </div>
  )
}

export default MissionToClean

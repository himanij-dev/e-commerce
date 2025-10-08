import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <div className='w-full  border-2 border-red-300'>
      <div className='w-full  border-8 border-blue-700'>
      <Image src="/images/heroImage.png" alt='hero image' className=' object-cover' fill/>
      </div>
    </div>
  )
}

export default Herosection

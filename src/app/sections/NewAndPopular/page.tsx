import NewAndPopularCard from '@/app/lib/components/NewAndPopularCard'
import { NewAndPopularData } from '@/app/lib/data/data'
import { NewAndPopularDataType } from '@/app/lib/types/type'
import React from 'react'

const NewAndPopular = () => {

  const renderCards=(item:NewAndPopularDataType,index:number)=>{
  return(
   <div className='w-1/3 h-[25vw]' key={index}>
    <NewAndPopularCard buttonTitle={item.buttonTitle} title={item.title} imagesrc={item.imagesrc}/>
   </div>
  )
  }

  return (
    <div className='flex justify-center gap-10 mt-20 px-20'>
      {NewAndPopularData.map(renderCards)}
    </div>
  )
}

export default NewAndPopular

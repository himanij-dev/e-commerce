import React from 'react'
import Herosection from './sections/Herosection/page'
import ShopbyCategory from './sections/ShopbyCategory/page'
import NewAndPopular from './sections/NewAndPopular/page'
import MissionToClean from './sections/MissionToClean/page'
import Footer from './lib/components/Footer'

const page = () => {
  return (
    <div >
      <Herosection/>
      <ShopbyCategory/>
      <NewAndPopular/>
      <MissionToClean/>
      <Footer/>
    </div>
  )
}

export default page

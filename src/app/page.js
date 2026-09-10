import Buildings from '@/components/modules/Buildings'
import Facilities from '@/components/modules/Facilities'
import Gallery360 from '@/components/modules/Gallery360'
import HeroSectionAnimated from '@/components/modules/Hero'
import Reviews from '@/components/modules/Reviews'
import Rooms from '@/components/modules/Rooms'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSectionAnimated />
      <Buildings />
      <Rooms />
      <Gallery360 />
      <Facilities />
      <Reviews /> 
    </div>
  )
}

export default page
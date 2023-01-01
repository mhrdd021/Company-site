import React from 'react'
import Banner from './homepage/Banner'
import Slider from './homepage/slider/Slider'
import Steps from './homepage/stepbystep/Steps'
import CTA from './homepage/cta/CTA'

const Home = () => {
  return (
    <div>
        <Banner />
        <div className='bg-zinc-900'>
          <Steps />
          <Slider />
        </div>
        <CTA />
    </div>
  )
}

export default Home
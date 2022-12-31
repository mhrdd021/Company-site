import React from 'react'
import BannerImage from '../../../images/bannerImage.svg'

const Banner = () => {
  return (
    <div className='w-full h-full flex justify-between'>
      <div className='w-6/12'>
        <h1 className='text-white text-center text-4xl bold'>
          hello my freinds
        </h1>
      </div>

      <div className='w-6/12'>
        <img src={BannerImage} className='m-24'></img>
      </div>
    </div>
  )
}

export default Banner

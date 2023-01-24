import React from 'react'
import BannerImage from '../../../images/bannerIMG.png'
import './Banner.css'

const Banner = () => {

  return (
    <div className='w-full flex justify-between banner'>
        
          <div className='w-6/12 mx-auto relative top-1/4 text-container'>
            <h1 className='text-white text-left text-4xl bold'>
              DEVELOPMENT <br/>
              AND SOFTWARE
            </h1>
            <p className='w-4/6 mt-4'>
            Our vision is for all causes to be able to use digital comms to create positive social and environmental impact.

            We’re proud to be a B Corp and our commitment to mission-aligned work means we only work with people who share our values of being people-centered, ethical and driven to create change.
            </p>
            <button className="button-29 mt-8" role="button">Request Demo</button>
          </div>
        
        <div className='w-6/12 relative top-1/4 imgcontainer'>
          <img src={BannerImage} className="w-10/12 mx-auto my-auto"></img>
        </div>
    </div>
  )
}

export default Banner

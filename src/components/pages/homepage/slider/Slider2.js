import React from 'react'
import Adobe from '../../../../images/adobe.png'
import '../slider/Slider.css'
const Slider2 = () => {
  return (
    <div className='text-white card adobe-card'>
        <img src={Adobe}></img>
        <h2 className='text-center text-2xl'>Adobe</h2>
        <p className='text-center px-2 pb-4 mt-4'>
        Adobe XD is a vector design tool for web and
        mobile applications, developed and published
        by Adobe Inc. It is available for macOS and
        Windows, and there are versions for iOS and
        Android to help preview the result of work
        directly on mobile devices.
        </p>
    </div>
  )
}

export default Slider2
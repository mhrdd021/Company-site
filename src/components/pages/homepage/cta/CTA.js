import React from 'react'
import "./CTA.css"

const CTA = () => {
  return (
    <div className='w-12/12 mx-auto h-96 cta flex justify-between'>
        <div className='w-10/12 mx-auto mt-16'>
          <h1 className='text-white text-center text-4xl w-12/12'>Let it to us.</h1>
          <h2 className='text-white text-center text-3xl mt-4'>We know what you want <br />and we know what is your goal.</h2>

          <h1 className='text-center border-red-500 border-2 w-fit mx-auto py-2 px-4 text-xl rounded-lg duration-300 mt-8 bg-red-600 text-white hover:scale-110'>
            Request Demo
          </h1>
        </div>
    </div>
  )
}

export default CTA
import React from 'react'
import Html from '../../../../images/html.png'
import '../slider/Slider.css'
const Slider1 = () => {
  return (
    <div className='text-white card html-card'>
        <img src={Html}></img>
        <h2 className='text-center text-2xl'>HTML</h2>
        <p className='text-center px-2 pb-4 mt-4'>
        The HyperText Markup Language or HTML is the standard markup 
        language for documents designed to be displayed in a web browser.
        It can be assisted by technologies such as Cascading Style 
        Sheets and scripting languages such as JavaScript.
        </p>
    </div>
  )
}

export default Slider1
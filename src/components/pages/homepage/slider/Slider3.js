import React from 'react'
import Vue from '../../../../images/vue.png'
import '../slider/Slider.css'
const Slider3 = () => {
  return (
    <div className='text-white card vue-card'>
        <img src={Vue}></img>
        <h2 className='text-center text-2xl'>Vue Js</h2>
        <p className='text-center px-2 pb-4 mt-4'>
        Vue.js is an open-source model–view–viewmodel
        front end JavaScript framework for building user 
        interfaces and single-page applications. It was 
        created by Evan You, and is maintained by him 
        and the rest of the active core team members.
        </p>
    </div>
  )
}

export default Slider3
import React from 'react'
import './Advantages.css'
import Rocket from '../../../../images/rocket.png'
import Seo from '../../../../images/seo.png'
const Advantages = () => {
  return (
    <div className='w-10/12 mx-auto flex ADVcontainer'>
        <div className='w-5/12' style={{backGround:"blue"}}>
            <h1 className='text-4xl relative top-1/4' style={{color:"#2FA6FF"}}>What advantages can you earn from us?</h1>
            <h3 className='text-white text-xl font-thin mt-8 relative top-1/4'>
                this is just a few things that our team gives to you
                and make youre project better and more useable.
                however these are free for our customer but you can order another 
                thing and add some more to youre website
            </h3>
        </div>

        <div className='w-7/12 flex ADVcard-container'>

            <div className='w-5/12 block mt-12 mx-2'>

                <div className='block text-white text-center p-8 rounded-lg my-4 card1'>
                    <img src={Rocket} className="w-12 mx-auto"></img>
                    <h1>SPEED</h1>
                    <h3>
                        great speed for each site is one of the best factor that 
                        could interact the customer's and users of you're website
                    </h3>
                </div>

                <div className='block text-white text-center p-8 rounded-lg my-4 card1'>
                    <img src={Seo} className="w-12 mx-auto"></img>
                    <h1>SPEED</h1>
                    <h3>
                        great speed for each site is one of the best factor that 
                        could interact the customer's and users of you're website
                    </h3>
                </div>

            </div>

            <div className='w-5/12 block mx-2'>

                <div className='block text-white text-center p-8 rounded-lg my-4 card1'>
                    <img src={Rocket} className="w-12 mx-auto"></img>
                    <h1>SPEED</h1>
                    <h3>
                        great speed for each site is one of the best factor that 
                        could interact the customer's and users of you're website
                    </h3>
                </div>

                <div className='block text-white text-center p-8 rounded-lg my-4 card1'>
                    <img src={Rocket} className="w-12 mx-auto"></img>
                    <h1>SPEED</h1>
                    <h3>
                        great speed for each site is one of the best factor that 
                        could interact the customer's and users of you're website
                    </h3>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Advantages
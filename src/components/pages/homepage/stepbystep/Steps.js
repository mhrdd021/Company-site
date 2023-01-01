import React from 'react'
import Business from '../../../../images/business.png'
import { BiSupport } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import { BsFileEarmarkText } from 'react-icons/bs';

const Steps = () => {
  return (
    <div className='text-white flex'>
        <div>
            <img src={Business} className="w-10/12"></img>
        </div>

        <div className='ml-8 mt-10'>
            <h3 className='text-purple-600'>little sumary about how we work</h3>
            <h1 className='text-3xl'>how we could co-work?</h1>

            <div className='flex my-4'>
                <div className='bg-purple-700 rounded-full p-4 h-fit mt-4'>
                    <BiSupport />
                </div>
                <div className='ml-4'>
                    <h1 className='text-2xl'>1-Counseling</h1>
                    <p className='w-8/12'>
                        first our Consultant calls you and understand actually
                        what you want from us or what you expect from us
                    </p>
                </div>
            </div>
            
            <div className='flex my-4'>
                <div className='bg-purple-700 rounded-full p-4 h-fit mt-4'>
                    <BsFileEarmarkText />
                </div>
                <div className='ml-4'>
                    <h1 className='text-2xl'>2-Contract</h1>
                    <p className='w-8/12'>
                        After that we can make contract with each
                        other and negotiating on project
                    </p>
                </div>
            </div>

            <div className='flex my-4'>
                <div className='bg-purple-700 rounded-full p-4 h-fit mt-4 text-white'>
                    <BiCodeAlt />
                </div>
                <div className='ml-4'>
                    <h1 className='text-2xl'>3-Programing</h1>
                    <p className='w-8/12'>
                        Now we know what you actually want and its time to
                        work and making the order
                    </p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Steps
import React from 'react'
import { FaWhatsapp, FaMailBulk, FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className=" sm:h-[100px] bg-[#161616] p-12 flex lg:flex-row flex-col justify-between items-center mx-auto">

            <p className='text-white'>&copy; <span className='font-extrabold primary-color'> DeOracleEdge</span></p>
            <div className='flex gap-2 flex-col items-center lg:items-start test '>
            <p className='text-gray-600 lg:text-lg text-sm '><FaMailBulk className='inline-block mr-2' /> busayaooni@gmail.com</p> 
            <p className='text-gray-600 lg:text-lg text-sm'><FaWhatsapp className='inline-block mr-2' /> +234 8155 247 644</p> 
            <p className='text-gray-600 lg:text-lg text-sm'><FaLocationArrow className='inline-block mr-2' /> No.11, Adejokun Street, Isheri Ojodu Berger, Lagos State.</p> 
            </div>
            </div>
    </div>
  )
}

export default Footer
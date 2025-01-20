import React from 'react'
import heroImage from '../assets/me.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      <div className='my-auto mx-auto col-span-1 w-[300px] h-auto lg:w-[400px] '>
          <img src={heroImage} alt='hero' className='rounded-full' />
      </div>
      <div className='col-span-2 my-auto px-5'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'> <span className= 'primary-color'>I'm a </span> <br /> <TypeAnimation
          sequence={[
            'WebDev',
            1000,
            'Frontend Dev',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1em' }}
          repeat={Infinity}
        /></h1>
        <p className='text-white sm:text-lg my-6 lg:text-xl'>I'm Oni Abdullahi Oluwabusayo (DeOracleEdge) Frontend Developer with a passion for creating beautiful and functional websites.</p>

        <div className='my-8'>
          <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXX' className='px-6 py-3 w-full mr-4 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white'>Hire Me</a>
          <a href='#contact' className='px-6 py-3 w-full rounded-xl   border border-gray-400 hover:bg-gradient-to-r from-orange-500 to-pink-500 hover:border-none text-white'>Contact Me</a>
        </div>
      </div>
        
        
    </div>
  )
}

export default Hero
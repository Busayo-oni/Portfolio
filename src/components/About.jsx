import React from 'react'
import about from '../assets/me2.jpg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-1 " id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16 '>

        <div className='mt-4 md:mt-0  text-left flex '>
         <div className='my-auto mx-6'>
            <h1 className='text-4xl font-bold mb-4 primary-color'>About Me</h1>
            <p className='text-base lg:text-lg'>I am a passionate and dedicated individual with a strong work ethic. I am currently pursuing a Bachelor's degree in Computer Science and Engineering, where I am actively engaged in learning and growing. I am excited about the opportunities that lie ahead and am eager to contribute my skills and knowledge to any team or project.</p>
          </div>
        </div>
          <img src={about} alt="" width={300} height={300} className='rounded-3xl mx-auto py-8 md:py-0 ' />

      </div>
      
    </div>
  )
}

export default About
import { motion } from 'framer-motion'
import heroImage from '../assets/me.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] min-h-screen mx-auto py-8 bg-black px-4'>
      
      {/* Image */}
      <motion.div
        className='my-auto mx-auto col-span-1 w-[300px] h-auto lg:w-[400px]'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={heroImage} alt='hero' className='rounded-full shadow-lg' />
      </motion.div>

      {/* Text */}
      <motion.div
        className='col-span-2 px-5 my-auto'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl'>
          <span className='primary-color'>I'm a </span><br />
          <TypeAnimation
            sequence={[
              'WebDev',
              1500,
              'Frontend Dev',
              1500,
              'UI Engineer',
              1500,
              'React Wizard',
              1500,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='text-pink-600'
          />
        </h1>

        <p className='my-6 text-white sm:text-lg lg:text-xl'>
          I am Oni Abdullahi Oluwabusayo (DeOracleEdge), a frontend developer with a passion for crafting beautiful and functional web experiences.</p>

        <div className='flex flex-col gap-4 my-8 sm:flex-row'>
          <a
            href='https://www.linkedin.com/in/busayo-oni-b72472345/'
            className='px-6 py-3 text-center text-white rounded-xl bg-gradient-to-br from-orange-500 to-pink-500'
          >
            Hire Me
          </a>
          <a
            href='#contact'
            className='px-6 py-3 text-center text-white border border-gray-400 rounded-xl hover:bg-gradient-to-r from-orange-500 to-pink-500 hover:border-none'
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero

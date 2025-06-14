import React from 'react'
import { motion } from 'framer-motion'
import about from '../assets/me2.jpg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 px-4" id="about">
      <div className="items-center gap-8 md:grid md:grid-cols-2">
        
        <motion.div
          className="py-8 mx-auto md:py-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={about}
            alt="About me"
            width={300}
            height={300}
            className="mx-auto rounded-3xl"
          />
        </motion.div>

        <motion.div
          className="mt-4 text-left md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-bold primary-color">About Me</h1>
          <p className="text-base lg:text-lg">
            I'm a frontend developer and Computer Science student with a deep
            passion for building beautiful, performant web experiences.
            Whether I'm creating sleek UI components, bringing ideas to life
            with animations, or solving real-world problems with code, I'm
            always excited to learn, build, and grow.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About

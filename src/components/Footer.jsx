import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaMailBulk, FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.div
      className="bg-[#161616]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto sm:h-[100px] p-8 sm:p-12 flex lg:flex-row flex-col justify-between items-center gap-6 sm:gap-0">
        
        <p className="text-sm text-center text-white sm:text-base">
          &copy; <span className="font-extrabold primary-color">DeOracleEdge</span>
        </p>

        <div className="flex flex-col items-center gap-1 text-sm text-gray-400 lg:items-start sm:text-base sm:gap-2">
          <p>
            <FaMailBulk className="inline-block mr-2 text-pink-600" />
            <a href="mailto:busayaooni@gmail.com" className="transition-colors hover:text-white">
              busayaooni@gmail.com
            </a>
          </p>
          <p>
            <FaWhatsapp className="inline-block mr-2 text-green-500" />
            <a
              href="https://wa.me/2348155247644"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              +234 8155 247 644
            </a>
          </p>
          <p className="text-center lg:text-left">
            <FaLocationArrow className="inline-block mr-2 text-blue-400" />
            No.11, Adejokun Street, Isheri Ojodu Berger, Lagos State.
          </p>
        </div>
        
      </div>
    </motion.div>
  )
}

export default Footer

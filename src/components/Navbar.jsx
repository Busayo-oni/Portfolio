import React, { useState } from 'react'
import Logo from '../assets/supreme.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => setNav(!nav)
  const handleClose = () => setNav(false)

  return (
    <div className="border border-gray-600 bg-black text-gray-400 h-[100px] sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center h-full px-5 max-w-[1200px] mx-auto">

        {/* Logo */}
        <div>
          <img className="object-contain w-[150px]" src={Logo} alt="logo" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden space-x-5 text-lg md:flex">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#work" className="hover:text-white">Work</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

        {/* Hamburger Icon (only on small screens) */}
        <div onClick={handleNav} className="block cursor-pointer md:hidden">
          {nav ? <AiOutlineClose className="text-3xl" /> : <AiOutlineMenu className="text-3xl" />}
        </div>

        {/* Overlay Background when sidebar is open */}
        {nav && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={handleClose}
          ></div>
        )}

        {/* Mobile Sidebar (only on small screens) */}
        <div
          className={`fixed top-0 left-0 h-full w-[60%] bg-[#202121] z-50 p-8 transition-transform duration-500 md:hidden ${
            nav ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <img className="object-contain w-[150px]" src={Logo} alt="logo" />
          </div>
          <ul className="mt-6 space-y-4 text-2xl">
            <li><a href="#about" onClick={handleClose} className="block hover:text-white">About</a></li>
            <li><a href="#work" onClick={handleClose} className="block hover:text-white">Work</a></li>
            <li><a href="#contact" onClick={handleClose} className="block hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

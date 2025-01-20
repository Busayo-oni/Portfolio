import React, {useState} from 'react'
import Logo from '../assets/supreme.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    
        <div className="border border-gray-600 bg-black text-gray-400 h-[100px]  mx-auto sticky top-0 z-50">
            <div className="flex justify-between items-center h-full px-5">
                <div className=" "><img className='object-contain w-[150px]' src={Logo} alt="logo" /></div>
                <div className="hidden md:flex">
                    <ul className="flex space-x-5">
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            <div onClick={handleNav} className="block md:hidden mr-6  ">
                {nav ? <AiOutlineClose className='text-3xl' /> : <AiOutlineMenu className='text-3xl' />}

            </div> 
            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 '
                : 'fixed left-[-100%] '
            }>
                <div className=" pl-8 pt-8 "><img className='object-contain w-[150px]' src={Logo} alt="logo" /></div>
                <ul className="p-8 text-2xl">
                    <li className='p-2'><a href="#about">About</a></li>
                    <li className='p-2'><a href="#work">Work</a></li>
                    <li className='p-2'><a href="#contact">Contact</a></li>
                </ul>
                    
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import image from '../assets/logo.png'
import {FaYoutube,FaGithub,FaXTwitter ,FaInstagram ,FaLinkedinIn} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex items-center justify-evenly w-screen h-[3rem] m-0 p-0 bg-[#121924] text-white'>
      <div className='flex items-center opacity-65'>
      Designed and Developed by &nbsp; <span className='text-green-300'>Mayank Pandey</span>
      </div>
      <div className='flex items-center opacity-75'>
      Copyright © 2025 &nbsp; <span className='text-green-300'>MP</span>
      </div>
      <div className='flex items-center gap-[2rem] '>
            <a className='h-[1.7rem] w-[1.7rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm  rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white '  href="https://github.com/Mayank-Pandey-Ji" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
            <a className='h-[1.7rem] w-[1.7rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm  rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white ' href="https://www.youtube.com/@intrepidmayank4653" target='_blank' rel="noopener noreferrer"><FaYoutube/></a>
            <a className='h-[1.7rem] w-[1.7rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm  rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white ' href="https://x.com/__mayankpandey_" target='_blank' rel="noopener noreferrer"><FaXTwitter/></a>
            <a className='h-[1.7rem] w-[1.7rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm  rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white ' href="https://www.linkedin.com/in/mayank-pandey-ji/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn/></a>
            <a className='h-[1.7rem] w-[1.7rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm  rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white ' href="https://www.instagram.com/__mayank___pandey__/" target='_blank' rel="noopener noreferrer"><FaInstagram/></a>
          </div>
    </div>
  )
}

export default Footer

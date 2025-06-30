import React from 'react'
import { FaYoutube, FaGithub, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-[#121924] text-white py-4 px-6'>
      <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>

        {/* Left Text */}
        <div className='opacity-65 text-sm text-center md:text-left'>
          Designed and Developed by <span className='text-green-300'>Mayank Pandey</span>
        </div>

        {/* Center Text */}
        <div className='opacity-75 text-sm text-center'>
          Copyright © 2025 <span className='text-green-300'>MP</span>
        </div>

        {/* Social Icons */}
        <div className='flex gap-4 justify-center'>
          <a className='h-7 w-7 flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white'
            href="https://github.com/Mayank-Pandey-Ji" target='_blank' rel="noopener noreferrer"><FaGithub /></a>

          <a className='h-7 w-7 flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white'
            href="https://www.youtube.com/@intrepidmayank4653" target='_blank' rel="noopener noreferrer"><FaYoutube /></a>

          <a className='h-7 w-7 flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white'
            href="https://x.com/__mayankpandey_" target='_blank' rel="noopener noreferrer"><FaXTwitter /></a>

          <a className='h-7 w-7 flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white'
            href="https://www.linkedin.com/in/mayank-pandey-ji/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>

          <a className='h-7 w-7 flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-sm rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white'
            href="https://www.instagram.com/__mayank___pandey__/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer

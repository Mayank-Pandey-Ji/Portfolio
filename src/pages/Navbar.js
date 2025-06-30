import React, { useState } from 'react'
import sign from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { ImHome } from "react-icons/im";
import { IoIosInformationCircle } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import Typewriter from 'typewriter-effect';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navv fixed top-0 w-full z-50 bg-[#02050a] text-white'>
      <div className='flex justify-between items-center h-20 font-sans px-4 md:px-10 max-w-[1300px] mx-auto'>

        {/* Logo */}
        <Link to='/'>
          <img src={sign} alt='logo' className='h-20 pt-2 hover:scale-110 transition-all duration-300' />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex justify-between items-center gap-16'>
          <Link to='/home'>
            <div className='flex items-center gap-2 hover-underline'>
              <ImHome />
              <p>Home</p>
            </div>
          </Link>

          <Link to='/about'>
            <div className='flex items-center gap-2 hover-underline'>
              <IoIosInformationCircle />
              <p>About</p>
            </div>
          </Link>

          <Link to='/project'>
            <div className='flex items-center gap-2 hover-underline'>
              <FaFolderOpen />
              <p>Projects</p>
            </div>
          </Link>

          <Link to='/contact'>
            <div className='flex items-center gap-2 hover-underline'>
              <IoMdContact />
              <p>Contact Me</p>
            </div>
          </Link>

          <div className='flex items-center gap-2 min-w-[150px] cursor-pointer'>
            <div className='menu-wrap'>
              <ul className='menu'>
                <li className='menu-item w-44'>
                  <a className='hover-underline' href='#'>
                    <Typewriter
                      options={{
                        strings: ['Coding Platforms '],
                        autoStart: true,
                        loop: true,
                        cursorClassName: 'curr'
                      }}
                    />
                  </a>
                  <ul className='drop-menu'>
                    <li className='drop-menu-item'>
                      <a target='_blank' rel="noopener noreferrer" href="https://leetcode.com/u/mayank_pandey_ji/">
                        <div className='flex items-center gap-3'><SiLeetcode /> LeetCode</div>
                      </a>
                    </li>
                    <li className='drop-menu-item'>
                      <a target='_blank' rel="noopener noreferrer" href="https://www.codechef.com/users/mayank_pandey1">
                        <div className='flex items-center gap-3'><SiCodechef /> CodeChef</div>
                      </a>
                    </li>
                    <li className='drop-menu-item'>
                      <a target='_blank' rel="noopener noreferrer" href="https://codeforces.com/profile/mayank_pandey_ji">
                        <div className='flex items-center gap-3'><SiCodeforces /> Codeforces</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden z-50'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-[#02050a] gap-6 py-6'>
          <Link to='/home' onClick={() => setIsOpen(false)} className='flex gap-2 items-center'>
            <ImHome />
            <p>Home</p>
          </Link>
          <Link to='/about' onClick={() => setIsOpen(false)} className='flex gap-2 items-center'>
            <IoIosInformationCircle />
            <p>About</p>
          </Link>
          <Link to='/project' onClick={() => setIsOpen(false)} className='flex gap-2 items-center'>
            <FaFolderOpen />
            <p>Projects</p>
          </Link>
          <Link to='/contact' onClick={() => setIsOpen(false)} className='flex gap-2 items-center'>
            <IoMdContact />
            <p>Contact Me</p>
          </Link>

          {/* Coding Platforms */}
          <div className='flex flex-col gap-2 text-center'>
            <div>
              <Typewriter
                options={{
                  strings: ['Coding Platforms'],
                  autoStart: true,
                  loop: true,
                  cursorClassName: 'curr'
                }}
              />
            </div>
            <a href="https://leetcode.com/u/mayank_pandey_ji/"  className='flex items-center gap-2 justify-center'><SiLeetcode />LeetCode</a>
            <a href="https://www.codechef.com/users/mayank_pandey1" className='flex items-center gap-2 justify-center'><SiCodechef />CodeChef</a>
            <a href="https://codeforces.com/profile/mayank_pandey_ji" className='flex items-center gap-2 justify-center'><SiCodeforces />Codeforces</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

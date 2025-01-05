import React from 'react'
import sign from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { ImHome } from "react-icons/im";
import { IoIosInformationCircle } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { SiLeetcode , SiCodechef ,SiCodeforces } from "react-icons/si";
import Typewriter from 'typewriter-effect';


const Navbar = () => {
  return (
    <div className='navv flex justify-between mx-auto z-999 text-white items-center h-20 font-sans fixed  w-[1300px] top-0 z-50'>
      <Link to='/'  >
        <img src={sign} className='h-40 my-auto pt-2 ml-10 hover:scale-110 transition-all ease-out duration-300' />
      </Link>

      <div className='flex justify-between items-center gap-16 mr-14  '>
        <Link to='/home'>
            <div className='flex justify-center items-center gap-2 hover-underline'>
                <ImHome/>
                <p>Home</p>
            </div>
        </Link>
       

        <Link to='/about' >
        <div className='flex justify-center items-center gap-2 hover-underline'>
            <IoIosInformationCircle/>
            <p>About</p>
        </div>
        </Link>
        

        <Link to='/project' >
        <div className='flex justify-center items-center gap-2 hover-underline'>
            <FaFolderOpen/>
            <p>Projects</p>
        </div>
        </Link>


        <Link to='/contact' >
        <div className='flex justify-center items-center gap-2 hover-underline'>
           <IoMdContact/>
            <p>Contact Me</p>
        </div>
        </Link>

        <div className='flex justify-center items-center gap-2  min-w-[150px] cursor-pointer'>
            <div class="menu-wrap">
                <ul class="menu">
                    <li class="menu-item w-44">
                        <a className='hover-underline' href="#"><Typewriter
                              options={{
                                strings: ['Coding Platforms '],
                                autoStart: true,
                                loop: true,
                                cursorClassName:'curr'
                              }}
                          /></a>
                        <ul class="drop-menu">
                            <li class="drop-menu-item">
                                <a  target='_blank' href="https://leetcode.com/u/mayank_pandey_ji/"><div className='flex items-center gap-3'><SiLeetcode/> LeetCode</div></a>
                            </li>
                            <li class="drop-menu-item">
                                <a target='_blank' href="https://www.codechef.com/users/mayank_pandey1"><div className='flex items-center gap-3'><SiCodechef/> CodeChef</div></a>
                            </li>
                            <li class="drop-menu-item">
                                <a target='_blank' href="https://codeforces.com/profile/mayank_pandey_ji"><div className='flex items-center  gap-3'><SiCodeforces/> Codeforces</div></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

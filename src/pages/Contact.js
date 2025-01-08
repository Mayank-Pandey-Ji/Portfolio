import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { FaPhone , FaLocationDot,FaYoutube,FaGithub,FaXTwitter ,FaInstagram ,FaLinkedinIn} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='flex flex-col items-center min-h-screen w-screen bg-[#02050a]' >
      <Navbar/>
      <div className='flex flex-col text-white items-center font-mono w-[1300px] mt-[42rem] border-4 border-[#4e5665] border-opacity-10 p-[3rem] '>
        <p className='opacity-60 text-xl -mt-[10rem] pb-[1rem]'>get in touch</p>
        <h1 className='text-5xl font-extrabold opacity-80'>CONTACT</h1>
        <div className='flex items-center pt-[4rem] gap-4 justify-center w-[100%]'>
            <div className="left flex flex-col gap-[2rem] w-[40%]">
              <div className='flex items-center gap-4 opacity-60 bg-[#4e5665] bg-opacity-20 h-[4rem] rounded-md'><div className='flex items-center gap-[1rem] pl-[2rem]'><div className='bg-gray-700 w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-full'><FaPhone/></div> <div className='flex items-center gap-1'><span className='text-green-300'>+91</span> 8200725753</div></div></div>
              <div className='flex items-center gap-4 opacity-60 bg-[#4e5665] bg-opacity-20 h-[4rem] rounded-md'><div className='flex items-center gap-[1rem] pl-[2rem]'><div className='bg-gray-700 w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-full'><MdEmail/></div> pandeymayank1099@gmail.com</div></div>
              <div className='flex items-center gap-4 opacity-60 bg-[#4e5665] bg-opacity-20 h-[4rem] rounded-md'><div className='flex items-center gap-[1rem] pl-[2rem]'><div className='bg-gray-700 w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-full'><FaLocationDot/></div> Mirzapur, Uttar Pradesh</div></div>
            </div>
            <div className="mid  w-1 bg-white bg-opacity-50 h-[22rem] mx-[1rem] rounded-lg"></div>
            <div className="right w-[40%]">
              <form action="" className='flex flex-col gap-[2rem]'>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="first_name">First Name</label>
                  <input className='bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md' type="text" id='first_name' placeholder='Mayank' />
                </div>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="last_name">Last Name</label>
                  <input className='bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md' type="text" id='last_name' placeholder='Pandey' />
                </div>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="email">Email</label>
                  <input className='bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md' type="email" id='email' placeholder='abcde@fgh.com' />
                </div>
                
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="message">Your Message</label>
                  <input className='bg-[#4e5665] bg-opacity-20 pl-[1rem] h-[12rem] rounded-md' type="text" id='message'/>
                </div>
                <button className='liquid btn w-[25%] h-[50px] flex justify-center items-center' type="submit">Send</button>
              </form>
            </div>

        </div>
      </div>

      <div className='text-white flex flex-col items-center mt-[4rem] justify-center'>
        <h1 className='opacity-60 text-2xl'>Feel free to <span className='text-green-400'>connect</span> with me</h1>
          <div className='flex p-[2rem] items-center gap-[2rem] '>
            <a className='h-[3rem] w-[3rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-3xl rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white '  href="https://github.com/Mayank-Pandey-Ji" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
            <a className='h-[3rem] w-[3rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-3xl rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white ' href="https://www.youtube.com/@intrepidmayank4653" target='_blank' rel="noopener noreferrer"><FaYoutube/></a>
            <a className='h-[3rem] w-[3rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-3xl rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white ' href="https://x.com/__mayankpandey_" target='_blank' rel="noopener noreferrer"><FaXTwitter/></a>
            <a className='h-[3rem] w-[3rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-3xl rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white ' href="https://www.linkedin.com/in/mayank-pandey-ji/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn/></a>
            <a className='h-[3rem] w-[3rem] flex justify-center items-center hover:bg-white hover:bg-opacity-50 hover:text-[#02050a] text-3xl rounded-full bg-[#02050a] text-white opacity-75 transition-all duration-700 ease-out border-2 border-opacity-45 border-white ' href="https://www.instagram.com/__mayank___pandey__/" target='_blank' rel="noopener noreferrer"><FaInstagram/></a>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact

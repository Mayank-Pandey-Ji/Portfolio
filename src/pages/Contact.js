import React from 'react'
import Navbar from './Navbar'
import { FaPhone , FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='flex flex-col items-center min-h-screen w-screen bg-[#02050a]' >
      <Navbar/>
      <div className='flex flex-col text-white pt-72 items-center'>
        <p>get in touch</p>
        <h1>CONTACT</h1>
        <div className='flex'>
            <div className="left">
              <div><FaPhone/> <span>+91</span> 8200725753</div>
              <div><MdEmail/> pandeymayank1099@gmail.com</div>
              <div><FaLocationDot/> Mirzapur, Uttar Pradesh</div>
            </div>
            <div className="mid"></div>
            <div className="right">
              <form action="" className='flex flex-col'>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id='first_name' placeholder='Mayank' />
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id='last_name' placeholder='Mayank' />
                <label htmlFor="message">Your Message</label>
                <input type="text" id='message'/>
                <button type="submit">Send</button>
              </form>
            </div>

        </div>
      </div>

      <div className='text-white'>
        <h1>also you can connect with me through</h1>
          {/* social media icons  */}
      </div>
    </div>
  )
}

export default Contact

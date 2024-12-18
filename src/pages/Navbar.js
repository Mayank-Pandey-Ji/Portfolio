import React from 'react'
import sign from '../assets/logo.png'
import home from '../assets/home.svg'
import folder from '../assets/folder.svg'
import man from '../assets/man.svg'
import contact from '../assets/contact.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-between top-0'>
      <Link to='/' >
        <div className='ml-10' >
            <img src={sign} className='w-52' />
        </div>
      </Link>

      <div className='flex justify-between items-center gap-12 mr-12'>
        <Link to='/home'>
            <div className='flex justify-center items-center'>
                <img src={home} className='w-10 '/>
                <p>Home</p>
            </div>
        </Link>
       

        <Link to='/about' >
        <div className='flex justify-center items-center'>
            <img src={man} className='w-9' />
            <p>About</p>
        </div>
        </Link>
        

        <Link to='/project' >
        <div className='flex justify-center items-center'>
            <img src={folder} className='w-8'/>
            <p>Projects</p>
        </div>
        </Link>


        <Link to='/contact' >
        <div className='flex justify-center items-center'>
            <img src={contact} className='w-8' />
            <p>Contact Me</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

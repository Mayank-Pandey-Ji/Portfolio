import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { FaPhone , FaLocationDot,FaYoutube,FaGithub,FaXTwitter ,FaInstagram ,FaLinkedinIn} from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { MdEmail } from "react-icons/md";
const Contact = () => {

  const [ init, setInit ] = useState(false);
  const [fname , setfname] = useState("");
  const [lname , setlname] = useState("");
  const [email , setemail] = useState("");
  
      // this should be run only once per application lifetime
      useEffect(() => {
          initParticlesEngine(async (engine) => {
              // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
              // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
              // starting from v2 you can add only the features you need reducing the bundle size
              //await loadAll(engine);
              //await loadFull(engine);
              await loadSlim(engine);
              //await loadBasic(engine);
          }).then(() => {
              setInit(true);
          });
      }, []);
  
      const particlesLoaded = (container) => {
          console.log(container);
      };

      function submithanlder()
      {

      }
   

  return (
    <div className='flex flex-col items-center min-h-screen w-screen bg-[#02050a] pt-24' >

{ init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 8,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 250,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 7 },
                    },
                },
                detectRetina: true,
            }}
        />
}


      <Navbar/>
      <div className='flex flex-col text-white items-center font-mono sm:w-[1300px] sm:mt-[42rem] mt-[60rem] border-4 border-[#4e5665] border-opacity-10 sm:p-[3rem] p-[1rem] w-[100%]'>
        <p className='opacity-60 text-xl -mt-[6rem] pb-[1rem]'>get in touch</p>
        <h1 className='text-5xl font-extrabold opacity-80'>CONTACT</h1>
        <div className='sm:flex sm:flex-row flex flex-col items-center pt-[4rem] gap-4 justify-center w-[100%]'>
            <div className="left flex flex-col gap-[2rem] sm:w-[40%] w-[100%]">
              <div className='flex items-center gap-4 opacity-60 bg-[#4e5665] bg-opacity-20 h-[4rem] rounded-md'><div className='flex items-center gap-[1rem] pl-[2rem]'><div className='bg-gray-700 w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-full'><FaPhone/></div> <div className='flex items-center gap-1'><span className='text-green-300'>+91</span> 8200725753</div></div></div>
              <div className='flex items-center gap-4 opacity-60 bg-[#4e5665] bg-opacity-20 h-[4rem] rounded-md'><div className='flex items-center gap-[1rem] pl-[2rem]'><div className='bg-gray-700 w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-full'><MdEmail/></div> pandeymayank1099@gmail.com</div></div>
              <div className='flex items-center gap-4 opacity-60 bg-[#4e5665] bg-opacity-20 h-[4rem] rounded-md'><div className='flex items-center gap-[1rem] pl-[2rem]'><div className='bg-gray-700 w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-full'><FaLocationDot/></div> Mirzapur, Uttar Pradesh</div></div>
            </div>
            <div className="mid  sm:w-1 bg-white bg-opacity-30 sm:h-[22rem] w-[97vw] h-1 sm:mx-[1rem] rounded-lg"></div>
            <div className="right sm:w-[40%] w-[100%]">
              <form action="" className='flex flex-col gap-[2rem]'>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="first_name">First Name</label>
                  <input className='bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md' type="text" id='first_name' placeholder='Mayank' value={fname} onChange={(e)=> setfname(e.target.value)}/>
                </div>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="last_name">Last Name</label>
                  <input className='bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md' type="text" id='last_name' placeholder='Pandey' value={lname} onChange={(e)=> setlname(e.target.value)} />
                </div>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="email">Email</label>
                  <input className='bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md' type="email" id='email' placeholder='abcde@fgh.com' value={email} onChange={(e)=> setemail(e.target.value)} />
                </div>
                
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="message">Your Message</label>
                  <input className='bg-[#4e5665] bg-opacity-20 pl-[1rem] h-[12rem] rounded-md' type="text" id='message'/>
                </div>
                <button onSubmit={submithanlder()} className='liquid btn w-[25%] h-[50px] flex justify-center items-center' type="submit">Send</button>
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

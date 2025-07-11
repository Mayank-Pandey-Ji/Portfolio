import React from 'react'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';
import profile from '../assets/profile.png';
import download from '../assets/download.png'
import Footer from './Footer';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import image from '../assets/banner-scaled.jpg'
import { motion } from 'framer-motion';
const Home = () => {

  const [ init, setInit ] = useState(false);
 
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
 
  return (
    <div className=" bg-[#02050a] sm:bg-[url('./assets/banner-scaled.jpg')]  bg-cover bg-center text-green-300 flex flex-col items-center w-screen" >
      { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    
                    image:{image}
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
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 8,
                        },
                        repulse: {
                            distance: 20,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#55e6a5",
                        distance: 150,
                        enable: true,
                        opacity: 0.7,
                        width: 1,
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
                        value: 150,
                    },
                    opacity: {
                        value: 0.5,
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
        <div className=' sm:flex sm:flex-row flex flex-col md:mt-[9rem] mt-[12rem] max-w-[1300px] items-center  justify-between'>
            <div className="leftpart flex flex-col sm:w-[50%] w-[80%] ">
                <div className="intro flex flex-col gap-4">
                  <h1 className='flex items-center'>
                    <span className='text-white sm:text-6xl sm:min-w-[21.3rem]  min-w-[11rem] text-3xl font-mono font-extrabold' >
                        <Typewriter
                              options={{
                                strings: ['Hello ' , 'Hola ' , 'Bonjour ' , 'Ciao ' , 'こんにちは' , '你好 ' , ],
                                autoStart: true,
                                loop: true,
                                cursorClassName:'curr',
                                deleteSpeed:110,
                                delay:'natural',
                              }}
                         />
                    </span>

                    
                    <span className=" wave text-3xl sm:text-6xl " role="img" aria-labelledby="wave">
                    👋🏻
                    </span>
                    
                  </h1>

                  <h2 className='text-white text-2xl'>I'm <span className=' text-green-300 font-extrabold tracking-wider text-5xl px-3'>Mayank Pandey</span></h2>

                    <h2 className='text-white sm:text-4xl text-2xl font-mono font-semibold '>
                        <Typewriter
                              options={{
                                strings: ['Web Developer ' ,'Freelancer ', 'Competitive Programmer '],
                                autoStart: true,
                                loop: true,
                                cursorClassName:'curs'
                              }}
                          />
                    </h2>

                </div>

                <div className="description text-white opacity-65 mt-10">
                I’m a 3rd-year BTech student in Electronics, passionate about web development and problem-solving. Proficient in the MERN stack and DSA, I’m honing my skills on platforms like LeetCode and CodeChef. Beyond coding, I love football, sketching, and gaming, and I’ve mentored over 10,000 students as a tutor. I’m always eager to learn, grow, and collaborate to build impactful solutions.
                </div>

                <div className="resume mt-7">
                      <a href="https://drive.google.com/file/d/1T7FzgiR10hnZ5nRvLjnN4Clmve25XBAP/view?usp=sharing">
                      <button className=' liquid btn'>
                              Download Resume
                      </button>
                      </a>
                </div>
            </div>    

            <div className="rightpart relative sm:w-[50%] w-[80%]">
                    <img src={download}  className=' frame sm:absolute sm:w-[75%] w-[95%] sm:translate-y-8 rotate-1 md:block hidden' alt="" 
                    />
                    <motion.img src={profile} alt="" className=' w-[100%] sm:ml-[7rem] '
                        initial={{ opacity: 0, scale:0.7 }} // Initial state: invisible and slightly above
                        whileInView={{ opacity: 1, scale:1}} // Final state: visible and in place
                        transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
                    />
            </div>
        </div>

      <Footer/>

    </div>
  )
}

export default Home

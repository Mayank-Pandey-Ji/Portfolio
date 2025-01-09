import React from 'react'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';
import Footer from './Footer';
import { RiTailwindCssFill } from "react-icons/ri";
import { DiGit,DiGithubBadge ,DiHtml5 ,DiJsBadge ,DiNodejs ,DiReact} from "react-icons/di";
import { CgCPlusPlus ,CgWindows } from "react-icons/cg";
import { VscVscode } from "react-icons/vsc";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress,SiMongodb,SiWondersharefilmora,SiPostman } from "react-icons/si";
import { FaHandPointRight } from "react-icons/fa";
import about from '../assets/about.png'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const About = () => {

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
    <div className='aboutsec bg-[#02050a] flex flex-col items-center w-screen min-h-screen'>

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
                        value: 0.5,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 1, max: 8 },
                    },
                },
                detectRetina: true,
            }}
        />
}


      <Navbar  />

        <div className="first_section flex max-w-[1300px] items-center pt-[75rem]">
          <div className="left_side flex flex-col  w-[60%] gap-8">
              <h1 className='text-white text-4xl mx-auto' >
              Know Who <span className='text-green-300' >I'M</span>
              </h1>
              <div className="mid-part text-xl w-[92%] ml-5">
                <p className='text-white'>Hi Everyone, I am <span className='text-green-300'>Mayank Pandey</span> from <span className='text-green-300'>Mirzapur</span>, Uttar Pradesh, <span className='text-green-300' >India</span>.</p>
                <p className='text-white' >I am currently pursuing a <span className='text-green-300' >B.Tech</span> degree from <span className='text-green-300'>Kamla Nehru Institute of Technology</span>, Sultanpur. I am currently in my <span className='text-green-300' >3rd</span> year.</p>
              </div>
              <p className=' text-white text-xl ml-5'>Apart from coding, some other activities that I love to do!</p>
              <div className='flex flex-col text-white ml-[3rem] -mt-8 text-xl' >
                  <p className='flex items-center gap-2'><span><FaHandPointRight/></span>
                    <Typewriter
                                    options={{
                                      strings: ['Sketching' , 'Playing Football' , 'Travelling' ],
                                      autoStart: true,
                                      loop: true,
                                      cursorClassName:'curr'
                                    }}
                              />
                    </p>
                  <p className='flex items-center gap-2'><span><FaHandPointRight/></span>
                    <Typewriter
                                    options={{
                                      strings: [ 'Playing Football' ,'Travelling' , 'Sketching' ],
                                      autoStart: true,
                                      loop: true,
                                      cursorClassName:'curr'
                                    }}
                              />
                  </p>
                  <p className='flex items-center gap-2'><span><FaHandPointRight/></span>
                    <Typewriter
                                    options={{
                                      strings: [ 'Travelling' , 'Sketching' ,'Playing Football' ],
                                      autoStart: true,
                                      loop: true,
                                      cursorClassName:'curr'
                                    }}
                              />
                  </p>
              </div>
          </div>

          <div className="right_side w-[40%]">
              <img src={about} alt=""  className='w-[100%]' />
          </div>
        </div>

        <div className="skillset_section text-white flex flex-col pt-[5rem] items-center gap-[4rem]">
              <h1 className='text-5xl' >Professional <span className='text-green-300'>Skillset</span></h1>   
              <div className='row1 flex gap-[6rem]'>
                                    
                 
                  <div class="holographic-card">
                    <h2><CgCPlusPlus/></h2>
                  </div>
                  
                  <div className='holographic-card'>
                    <h2><DiJsBadge/></h2>
                  </div>
                  <div className='holographic-card'>
                    <h2><DiHtml5/></h2>
                  </div>
                  <div className='holographic-card'>
                    <h2><IoLogoCss3/></h2>
                  </div>
              </div>      

              <div className='row2 flex gap-[6rem]'>
                  <div className='holographic-card'>
                    <h2><RiTailwindCssFill/></h2>
                  </div>
                  <div className='holographic-card'>
                    <h2><DiGit/></h2>
                  </div>
                  <div className='holographic-card'>
                    <h2><DiNodejs/></h2>
                  </div>
                  <div className='holographic-card'>
                    <h2><DiReact/></h2>
                  </div>
              </div>      

              <div className='row3 flex gap-[6rem]'>
                  <div className='holographic-card'>
                   <h2> C</h2>
                  </div>
                  <div className='holographic-card'>
                   <h2> <SiExpress/></h2>
                  </div>
                  <div className='holographic-card'>
                   <h2> <SiMongodb/></h2>
                  </div>
              </div>      
        </div>

        <div className="tools_I_used text-white flex flex-col items-center gap-[4rem] pt-[8rem] pb-[6rem]">
              <h1 className='text-5xl'><span className='text-green-300' >Tools</span> I use</h1>
              <div className='flex gap-[4rem]'>
                  <div className='holographic-card'>
                    <h2><VscVscode/></h2>
                  </div>
                  <div className='holographic-card'>
                   <h2> <DiGithubBadge/></h2>
                  </div>
                  <div className='holographic-card'>
                   <h2> <CgWindows/></h2>
                  </div>
                  <div className='holographic-card'>
                   <h2> <SiPostman/></h2>
                  </div>
                  <div className='holographic-card'>
                   <h2> <SiWondersharefilmora/></h2>
                  </div>
              </div>     
        </div>
        <Footer/>
    </div>
  )
}

export default About

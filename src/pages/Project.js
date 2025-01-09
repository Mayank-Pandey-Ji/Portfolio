import React from 'react'
import Navbar from './Navbar'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
const Project = () => {

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
    <div className='flex flex-col items-center'>

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
                        value: 250,
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
    </div>
  )
}

export default Project

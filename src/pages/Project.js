import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
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
    <div className='flex flex-col items-center bg-[#02050a] w-screen min-h-screen'>

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
                            mode: "attract",
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
                "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ffffff", "#e0e0e0", "#d0d0d0"], 
      "random": true
    },
    "shape": {
      "type": "circle" 
    },
    "opacity": {
      "value": 0.1, 
      "random": true,
      "anim": {
        "enable": true, 
        "speed": 0.2, 
        "opacity_min": 0.05, 
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true, 
        "speed": 2, 
        "size_min": 0.1, 
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 0.5, 
      "direction": "none", 
      "random": true,
      "straight": false,
      "out_mode": "out", 
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "background": {
   
  },
                detectRetina: true,
            }}
        />
}


      <Navbar/>
        <div className='parent-section'>
            <Card/>
            <h1 className='pt-[10rem]'>Projects To be Added</h1>
        </div>
    </div>
  )
}

export default Project

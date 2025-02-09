import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import pssgn from '../assets/passGn.png'
import devd from '../assets/devde.png'
import shcart from '../assets/shoping_cart.png'
import weather from '../assets/weather.png'
import Footer from './Footer';
import rgif from '../assets/rgif.png'
import port from '../assets/port.png'
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
        <div className='parent-section pt-[100rem] flex flex-col items-center w-[1300px] pb-[3rem]'>
            <h1 className='text-4xl text-white opacity-80'>My Recent <span className='text-green-500'>Works</span></h1>
            <h3 className='text-xl text-white opacity-65 mb-8 pt-4'>Here are a few projects I've worked on recently.</h3>
            <div className='flex justify-around flex-wrap gap-[7rem]'>
              <Card  image={pssgn}
                title="Password Generator"
                description="A user-friendly Random Password Generator that lets you create secure passwords with customizable length and character types (uppercase, lowercase, numbers, and symbols). Enhance your online security with strong, unpredictable passwords!"
                githubLink="https://github.com/Mayank-Pandey-Ji/Password-Generator"
                demoLink="https://mayank-pandey-ji.github.io/Password-Generator/"
                />

              <Card  image={devd}
                title="Dev Detective"
                description="Dev Detective is a GitHub profile lookup tool that allows you to quickly find user details, including repositories, followers, and more. Just enter a username and explore GitHub profiles with ease!"
                githubLink="https://github.com/Mayank-Pandey-Ji/Dev-Detective"
                demoLink="https://mayank-pandey-ji.github.io/Dev-Detective/"
                />

              <Card  image={shcart}
                title="Shoping Cart"
                description="A modern and interactive shopping app that lets users browse, add products to the cart, and experience a seamless online shopping journey. Built for speed, convenience, and an engaging UI!"
                githubLink="https://github.com/Mayank-Pandey-Ji/Shopping-App"
                demoLink="https://shopping-app-sigma-eight.vercel.app/"
                />

              <Card  image={weather}
                title="Weather App"
                description="A clean and efficient Weather App that provides real-time weather updates, including temperature, humidity, and conditions for any location. Stay informed with accurate forecasts!"
                githubLink="https://github.com/Mayank-Pandey-Ji/Weather-App/"
                demoLink="https://mayank-pandey-ji.github.io/Weather-App/"
                />

              <Card  image={rgif}
                title="Random Gif Generator"
                description="A fun and interactive web app built with React.js that fetches and displays random GIFs using the GIPHY API. Users can also search for specific GIFs based on keywords, making it an engaging experience. With a sleek and responsive UI, this app delivers instant entertainment at the click of a button! !"
                githubLink="https://github.com/Mayank-Pandey-Ji/Random-GIF"
                demoLink="https://mayank-pandey-ji.github.io/Random-GIF/"
                />

              <Card  image={port}
                title="My PortFolio"
                description="A modern and interactive portfolio showcasing my skills, projects, and experience as a web developer. Built with React.js & Tailwind CSS, it features smooth animations, a responsive design, and a dynamic introduction using Typewriter effects. This portfolio highlights my journey in MERN stack development, problem-solving, and freelancing while offering visitors an engaging experience. "
                githubLink="https://github.com/Mayank-Pandey-Ji/Portfolio"
                demoLink="https://portfolio-79dx.vercel.app/"
                />
            </div>

        </div>
      <Footer/>
    </div>
  )
}

export default Project

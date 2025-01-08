import React from 'react'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';
import profile from '../assets/profile.png';
import download from '../assets/download.png'
import Footer from './Footer';

const Home = () => {
 
  return (
    <div className=" homesection bg-cover bg-center min-h-screen text-green-300 flex flex-col items-center w-screen" >
      <Navbar/>
        <div className=' flex mt-[9rem]  max-w-[1300px] items-center justify-between'>
            <div className="leftpart flex flex-col w-[50%] ">
                <div className="intro flex flex-col gap-4">
                  <h1 className='flex items-center'>
                    <span className='text-white text-6xl min-w-[21.3rem] font-mono font-extrabold' >
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

                    
                    <span className="wave text-6xl" role="img" aria-labelledby="wave">
                    👋🏻
                    </span>
                    
                  </h1>

                  <h2 className='text-white text-2xl'>I'm <span className=' text-green-300 font-extrabold tracking-wider text-5xl px-3'>Mayank Pandey</span></h2>

                    <h2 className='text-white text-4xl font-mono font-semibold '>
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

                <div className="description text-white opacity-65 mt-10 ">
                I’m a 3rd-year BTech student in Electronics, passionate about web development and problem-solving. Proficient in the MERN stack and DSA, I’m honing my skills on platforms like LeetCode and CodeChef. Beyond coding, I love football, sketching, and gaming, and I’ve mentored over 10,000 students as a tutor. I’m always eager to learn, grow, and collaborate to build impactful solutions.
                </div>

                <div className="resume mt-7">
                      <button className=' liquid btn'>
                              download resume
                      </button>
                </div>
            </div>    

            <div className="rightpart relative w-[50%]">
                    <img src={download}  className=' frame absolute w-[75%]  translate-y-8 rotate-1' alt="" />
                    <img src={profile} alt="" className=' w-[100%] ml-[7rem] '/>
            </div>
        </div>

      <Footer/>

    </div>
  )
}

export default Home

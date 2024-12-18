import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import cat from '../assets/immg.png'
const Greet = () => {

  const navigate = useNavigate();
  useEffect(() => {
    // Navigate to Home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000); 

    return ()=> clearTimeout(timer); } , [navigate])

    // const d = new Date();
    // let time = d.getHours();

  // if(time >=5 && time < 12)
  // {
  //   return <div className='bg-gradient-to-tr from-stone-900 to-slate-900 w-screen h-screen flex justify-center items-center'>
  //     <motion.p className='text-green-400'
  //       style={{
  //         textAlign: "center",
  //         fontSize: "30px",
  //         fontWeight: "bold",
  //         fontFamily:"Noto+Sans"
          
  //       }}
  //       initial={{ scale: 0 }} // Start completely zoomed out
  //       animate={{ scale: [0,1.5 , 1.5, 5] , opacity:[1 ,1 , 1 ,0] , y:[20 , -40 , -40 , -400] , filter:["blur(0px)" , "blur(0px)" , "blur(0px)", "blur(3px)"]}} // Zoom in, pause, then zoom out
  //       transition={{
  //         times: [0, 0.5, 0.6, 1], // Control timing between keyframes
  //         duration: 2, // Total animation time
  //         ease: "easeOut", // Smooth easing
  //         delay: 0.2, // Optional: Delay before animation starts
  //       }}
  //     >
  //       Good Morning
  //     </motion.p>
  //   </div>
  // }
  // else if(time > 12 && time < 17)
  // {
  //   return <div className='bg-gradient-to-tr from-stone-900 to-slate-900 w-screen h-screen flex justify-center items-center'>
  //     <motion.p className='text-green-400'
  //       style={{
  //         textAlign: "center",
  //         fontSize: "30px",
  //         fontWeight: "bold",
  //         fontFamily:"Noto+Sans"
          
  //       }}
  //       initial={{ scale: 0 }} // Start completely zoomed out
  //       animate={{ scale: [0,1.5 , 1.5, 5] , opacity:[1 ,1 , 1 ,0] , y:[20 , -40 , -40 , -400] , filter:["blur(0px)" , "blur(0px)" , "blur(0px)", "blur(3px)"]}} // Zoom in, pause, then zoom out
  //       transition={{
  //         times: [0, 0.5, 0.6, 1], // Control timing between keyframes
  //         duration: 2, // Total animation time
  //         ease: "easeOut", // Smooth easing
  //         delay: 0.2, // Optional: Delay before animation starts
  //       }}
  //     >
  //       Good Afternoon
  //     </motion.p>
  //   </div>
  // } 
  // else 
  // {
  //   return <div className='bg-gradient-to-br from-violet-900 to-neutral-900 w-screen h-screen flex justify-center items-center'>
  //     <motion.p className='text-yellow-100'
  //       style={{
  //         textAlign: "center",
  //         fontSize: "45px",
  //         fontWeight: "bold",
  //         fontFamily:""
          
  //       }}
  //       initial={{ scale: 0 }} // Start completely zoomed out
  //       animate={{ scale: [0,1.5 , 1.5, 5] , opacity:[1 ,1 , 1 ,0] , y:[20 , -40 , -40 , -400] , filter:["blur(0px)" , "blur(0px)" , "blur(0px)", "blur(3px)"]}} // Zoom in, pause, then zoom out
  //       transition={{
  //         times: [0, 0.5, 0.6, 1], // Control timing between keyframes
  //         duration: 2, // Total animation time
  //         ease: "easeOut", // Smooth easing
  //         delay: 0.2, // Optional: Delay before animation starts
  //       }}
  //     >
  //       Good Evening
  //     </motion.p>
  //   </div>
  // }

  return (
    <div className='bg-gradient-to-br from-violet-900 to-neutral-900 w-screen h-screen flex justify-center items-center'>
    <motion.p className='text-yellow-100'
        style={{
          textAlign: "center",
          fontSize: "45px",
          fontWeight: "bold",
          fontFamily:""
          
        }}
        initial={{ scale: 0 }} // Start completely zoomed out
        animate={{ scale: [0,1.5 , 1.5, 5] , opacity:[1 ,1 , 1 ,0] , y:[20 , -40 , -40 , -400] , filter:["blur(0px)" , "blur(0px)" , "blur(0px)", "blur(3px)"]}} // Zoom in, pause, then zoom out
        transition={{
          times: [0, 0.5, 0.6, 1], // Control timing between keyframes
          duration: 2, // Total animation time
          ease: "easeOut", // Smooth easing
          delay: 0.2, // Optional: Delay before animation starts
        }}
      >
        Hey!
      </motion.p>
        {/* <img src={cat} className='' /> */}
      
    </div>
  );
}

export default Greet

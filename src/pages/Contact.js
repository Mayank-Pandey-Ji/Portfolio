import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { FaPhone , FaLocationDot,FaYoutube,FaGithub,FaXTwitter ,FaInstagram ,FaLinkedinIn} from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { MdEmail } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [ init, setInit ] = useState(false);
  const [fname , setfname] = useState("");
  const [lname , setlname] = useState("");
  const [email , setemail] = useState("");
  const [sending, setSending] = useState(false);

  // validation errors
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    reply_to: "",
    message: ""
  });
  
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

      const form = useRef();

  const validate = () => {
    const e = { first_name: "", last_name: "", reply_to: "", message: "" };
    let valid = true;

    if (!fname.trim()) {
      e.first_name = "First name is required";
      valid = false;
    }

    if (!lname.trim()) {
      e.last_name = "Last name is required";
      valid = false;
    }

    // simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      e.reply_to = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email.trim())) {
      e.reply_to = "Enter a valid email";
      valid = false;
    }

    const messageValue = form.current?.message?.value ?? "";
    if (!messageValue.trim()) {
      e.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(e);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // validate before sending
    if (!validate()) {
      // focus first invalid field if possible
      if (form.current) {
        if (errors.first_name && form.current.first_name) form.current.first_name.focus();
        else if (errors.last_name && form.current.last_name) form.current.last_name.focus();
        else if (errors.reply_to && form.current.reply_to) form.current.reply_to.focus();
        else if (errors.message && form.current.message) form.current.message.focus();
      }
      return;
    }

    setSending(true);

    emailjs.sendForm(
      'service_7by0qnk',       // Replace with your EmailJS service ID
      'template_z52zfir',      // Replace with your EmailJS template ID
      form.current,
      'jf3DmR0CLM45rp_Kp'        // Replace with your EmailJS public key
    ).then((result) => {
        alert("Message sent successfully! 🚀");
        form.current.reset();
        // reset controlled fields too
        setfname("");
        setlname("");
        setemail("");
        setErrors({ first_name: "", last_name: "", reply_to: "", message: "" });
        setSending(false);
      }, (error) => {
        alert("Failed to send message 😞");
        console.log(error.text);
        setSending(false);
      });
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
              <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-[2rem]' noValidate>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="first_name">First Name</label>
                  <input
                    className={`bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md ${errors.first_name ? 'ring-2 ring-red-500' : ''}`}
                    type="text" id='first_name' placeholder='Mayank' name='first_name' value={fname} onChange={(e)=> { setfname(e.target.value); if (errors.first_name) setErrors(prev=>({...prev, first_name: ""})); }} />
                  {errors.first_name && <span className='text-xs text-red-400 mt-1'>{errors.first_name}</span>}
                </div>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="last_name">Last Name</label>
                  <input
                    className={`bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md ${errors.last_name ? 'ring-2 ring-red-500' : ''}`}
                    type="text" id='last_name' placeholder='Pandey' name='last_name' value={lname} onChange={(e)=> { setlname(e.target.value); if (errors.last_name) setErrors(prev=>({...prev, last_name: ""})); }} />
                  {errors.last_name && <span className='text-xs text-red-400 mt-1'>{errors.last_name}</span>}
                </div>
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="email">Email</label>
                  <input
                    className={`bg-[#4e5665] bg-opacity-20 placeholder:opacity-30 pl-[1rem] h-[2.3rem] rounded-md ${errors.reply_to ? 'ring-2 ring-red-500' : ''}`}
                    type="email" id='email' placeholder='abcde@fgh.com' name='reply_to' value={email} onChange={(e)=> { setemail(e.target.value); if (errors.reply_to) setErrors(prev=>({...prev, reply_to: ""})); }} />
                  {errors.reply_to && <span className='text-xs text-red-400 mt-1'>{errors.reply_to}</span>}
                </div>
                
                <div className='flex flex-col justify-center'>
                  <label className='opacity-60' htmlFor="message">Your Message</label>
                  <input className={`bg-[#4e5665] bg-opacity-20 pl-[1rem] h-[12rem] rounded-md ${errors.message ? 'ring-2 ring-red-500' : ''}`} type="text" name='message' id='message'/>
                  {errors.message && <span className='text-xs text-red-400 mt-1'>{errors.message}</span>}
                </div>
                <button className='liquid btn w-[25%] h-[50px] flex justify-center items-center' type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send'}</button>
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

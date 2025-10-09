import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePic from "../assets/profile-picture.png";

const Introduction = () => {
  return (
    <motion.section
      initial={{ opacity: 0.8, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
     viewport={{ amount: 0.1}}
    >
    <div className='flex max-md:flex-col max-md:gap-5 w-full pt-10 max-md:pt-5 bg-amber-50 h-[100vh]'>
      <div className='w-[60%] max-md:w-full flex flex-col gap-2 max-md:items-center max-md:justify-center'>
      <h1 className='big text-6xl max-md:text-2xl max-lg:text-3xl max-md:text-center'>AAYUSHMAN MUKHERJEE</h1>
      <p className='text-5xl max-lg:text-2xl max-md:text-xl poppins mt-10 max-md:mt-5'>
        <Typewriter
          words={["Data Analyst", "Full Stack MERN Developer"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>
      <p className='poppins text-3xl max-lg:text-2xl max-md:text-[15px] mt-20 max-md:mt-10 ml-10 max-md:ml-0 underline'>Contact me</p>
      <div className=' text-gray-600  flex gap-5 ml-10 max-md:ml-0'>
        <button className='p-2 rounded-full border hover:bg-green-500 transition-all duration-200'><a href="https://github.com/aayushmanmukherjee" target='_blank'><Github/></a></button>
        <button className='p-2 rounded-full border hover:bg-green-500 transition-all duration-200'><a href="https://www.linkedin.com/in/aayushman-mukherjee" target='_blank'><Linkedin/></a></button>
        <button className='p-2 rounded-full border hover:bg-green-500 transition-all duration-200'><a href="mailto:aayushmanmukherjee01@gmail.com" target='_blank'><Mail/></a></button>
      </div>
      <p className='cursive ml-30 max-lg:ml-10 max-md:ml-0 mt-20 max-md:mt-10 text-5xl max-lg:text-xl max-md:text-sm max-md:text-center font-bold text-gray-600 italic'>"In case I don't see ya, good afternoon, good evening, and good night!"</p>
      </div>
      <div className='w-[40%] max-md:w-full mr-5 max-md:mr-0 max-md:h-full max-md:flex max-md:justify-center'>
  <div className="relative w-[70%] max-md:w-[90%] max-lg:w-[90%] h-[50%] max-md:h-[90%] overflow-hidden rounded-full">
    <img
      src={profilePic}
      alt="Profile picture"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-transparent to-black/50 pointer-events-none"></div>
  </div>
</div>
    </div>
    </motion.section>
  )
}

export default Introduction

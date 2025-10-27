import React from 'react'
import { motion } from "framer-motion";
import { File, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section
  initial={{ opacity: 0.8, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.2, ease: "easeOut" }}
  viewport={{ amount: 0.1 }}
  className="overflow-x-hidden" 
>
  <div className='bg-black'>
    <div className='flex w-full pt-10 max-md:pt-5 max-h-[50vh] max-md:flex-col max-md:gap-5'>
      
     
      <div className="w-[40%] max-md:w-full max-md:text-center ml-5 max-md:ml-0"> 
        <h2 className="big text-6xl max-lg:text-3xl max-md:text-2xl text-white">REACH ME AT</h2>
      </div>
      
      
      <div className="w-[60%] max-md:w-full ml-50 max-md:ml-0"> 
        <ul className='flex sm:flex-col gap-5 max-md:gap-2 max-md:justify-center max-md:items-center max-md:flex-wrap'>
          <li>
            <a href='https://drive.google.com/file/d/1bvvWjeJPg5Sb232EUjAca0yak_pF6TI8/view?usp=sharing' target='_blank' className='flex border rounded-full py-1 px-2 w-[50%] max-md:w-[100px] justify-center items-center gap-2 cursor-pointer bg-white hover:bg-green-500 transition-all duration-200'>
              <span className='poppins text-xl max-md:text-[10px] font-bold'>Resume</span><File/>
            </a>
          </li>
          <li>
            <a href='mailto:aayushmanmukherjee01@gmail.com' target='_blank' className='flex border rounded-full py-1 px-2 w-[50%] max-md:w-[100px] justify-center items-center gap-2 cursor-pointer hover:bg-green-500 bg-white transition-all duration-200'>
              <span className='poppins text-xl max-md:text-[10px] font-bold'>Email</span><Mail/>
            </a>
          </li>
          <li>
            <a href='https://github.com/aayushmanmukherjee' target='_blank' className='flex border rounded-full py-1 px-2 w-[50%] max-md:w-[100px] justify-center items-center gap-2 cursor-pointer hover:bg-green-500 bg-white transition-all duration-200'>
              <span className='poppins text-xl max-md:text-[10px] font-bold'>Github</span><Github/>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/aayushman-mukherjee' target='_blank' className='flex border rounded-full py-1 px-2 w-[50%] max-md:w-[100px] justify-center items-center gap-2 cursor-pointer hover:bg-green-500 bg-white transition-all duration-200'>
              <span className='poppins text-xl max-md:text-[10px] font-bold'>Linkedin</span><Linkedin/>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
    
    <p className='poppins text-xl max-md:text-sm text-center py-10 text-gray-400'>
      Developed by <span className='cursive text-2xl max-md:text-xl text-white font-bold'>Aayushman Mukherjee</span>
    </p>
  </div>
</motion.section>
  )
}

export default Contact

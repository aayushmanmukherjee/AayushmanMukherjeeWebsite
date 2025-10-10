import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import css from '../assets/css.png'
import express from '../assets/express.png'
import git from '../assets/git.png'
import html1 from '../assets/html.png'
import js from '../assets/js.png'
import matplotlib from '../assets/matplotlib.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import node from '../assets/nodejs.png'
import numpy from '../assets/numpy.png'
import pandas from '../assets/pandas.png'
import python from '../assets/python.webp'
import react from '../assets/react.png'
import seaborn from '../assets/seaborn.svg'
import tableau from '../assets/tableau.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {
    const controls = useAnimation()

    useEffect(() => {
  controls.start({
  y: ["15%", "-100%"],
  transition: {
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",     
    repeatDelay: 0          
  },
});
  }, [controls]);

  return (
    <motion.section
          initial={{ opacity: 0.8, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ amount: 0.1}} 
        >
    <div className='h-[100vh] w-full flex flex-col gap-3 py-10 max-md:py-5'>
      <div className='w-full max-md:text-center ml-5'>
         <h2 className="big text-6xl max-lg:text-3xl max-md:text-2xl">MY SKILLS</h2>
      </div>
      <div className="w-full overflow-hidden full">
<motion.div className="flex flex-col items-center justify-center" animate={controls}>
        <img src={html1} className="mb-2 max-md:w-[60%] w-[30%] h-30 max-md:h-16" />
        <img src={css} className="mb-2 max-md:w-[60%] w-[30%] h-30 max-md:h-16" />
        <img src={js} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={tailwind} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={react} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={node} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={express} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={mongodb} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={python} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={numpy} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={pandas} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={matplotlib} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={seaborn} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={mysql} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={tableau} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
        <img src={git} className="mb-2 h-30 max-md:w-[60%] w-[30%] max-md:h-16" />
      </motion.div>
      </div>
    </div>
    </motion.section>
  )
}

export default Skills

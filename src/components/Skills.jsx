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
import scikit from '../assets/scikit.png'
import tensorflow from '../assets/tensorflow.png'


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
      viewport={{ amount: 0.1 }}
    >
   
  <div className="min-h-screen w-full flex flex-col gap-6 py-10 max-md:py-5">
    
    <div className="w-full text-left max-md:text-center px-5">
      <h2 className="big text-6xl max-lg:text-3xl max-md:text-2xl">MY SKILLS</h2>
    </div>

    <div className="relative w-full h-full flex flex-wrap justify-center gap-5">
      
        {[python, scikit, tensorflow, mysql, numpy, pandas, matplotlib, seaborn, tableau, git, html1, css, js, tailwind, react, node, express, mongodb].map(
          (imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              className="w-auto min-w-24 h-auto max-h-24 object-contain hover:scale-110 hover:cursor-pointer transition-all duration-200"
            />
          )
        )}
    </div>
  </div>
 </motion.section>
  )
}

export default Skills

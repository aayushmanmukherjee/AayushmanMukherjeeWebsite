import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0.8, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ amount: 0.1 }}
    >
      <div className="bg-teal-50 w-full min-h-[100vh] flex flex-col pt-10 max-md:pt-5">
        <div className="text-6xl max-lg:text-3xl big max-md:text-2xl max-md:text-center">
          PROJECTS I HAVE <br />
          BUILT TILL NOW
        </div>
        <div className="mt-10 max-md:mt-5 flex flex-wrap justify-center gap-5 ">
          <Card
            title="Rock Music Analysis"
            desc="Conducted an in-depth analysis of rock songs (1956-1999) using Python (Pandas, NumPy, Matplotlib, Seaborn) to un-
cover trends in popularity, song features, and artist influence, with clear visualizations and actionable insights."
            date="October, 2025"
            link="https://github.com/aayushmanmukherjee/RockMusicDataAnalysis"
            domain="Exploratory Data Analysis"
          />
          <Card
            title="Community - Social Media Web App"
            desc="Built a social platform for family and close friends to connect using MERN stack, featuring WhatsApp-like group and an Instagram-style feed, with secure authentication, interactions, and seamless media sharing to
enhance user engagement and bonding."
            domain="MERN Fullstack Development"
            link="https://github.com/aayushmanmukherjee/Community"
            date="August, 2025"
          />
          <Card
            title="Workday - Task Management Web App"
            desc="Built a MERN-based productivity app implementing the Eisenhower Matrix for day-to-day task prioritization with secure authentication, and a responsive UI"
            date="September, 2025"
            domain="MERN Fullstack Development"
            link="https://github.com/aayushmanmukherjee/Workday"
          />
          <Card
            title="MovieFinder"
            desc="Built a MERN-based movie finding website, where users can search movies, actors and directors. They can then read about them and also save their favourite or next-watch movies in a personal list."
            link="https://github.com/aayushmanmukherjee/film-finder"
            date="July, 2025"
            domain="MERN Fullstack Development"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

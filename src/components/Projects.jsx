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
      <div className="bg-green-500 w-full min-h-[100vh] flex flex-col pt-10 max-md:pt-5">
        <div className="text-6xl max-lg:text-3xl big max-md:text-2xl max-md:text-center ml-5">
          MY PROJECTS
        </div>
        <div className="mt-10 max-md:mt-5 flex flex-wrap justify-center gap-5 pb-5">
          <Card
            title="Unemployment Rate Analysis in India"
            desc="Performed data-driven analysis of unemployment trends across Indian states using Python libraries to uncover re-
gional disparities, COVID-19 impact, and long-term employment patterns through insightful visualizations."
            date="October, 2025"
            link="https://github.com/aayushmanmukherjee/UnemplymentIndiaStates"
            domain="Exploratory Data Analysis"
          />
          <Card
            title="Rock Music Analysis"
            desc="Conducted data-driven analysis of rock songs using Python libraries to identify trends in popularity, song features,
and artist influence through clear, insightful visualizations."
            date="October, 2025"
            link="https://github.com/aayushmanmukherjee/RockMusicDataAnalysis"
            domain="Exploratory Data Analysis"
          />
          <Card
            title="Community - Social Media Web App"
            desc="Built a MERN-based social platform enabling secure authentication, group chats, and media sharing, improving user
connectivity and engagement through real-time communication and interactive features."
            domain="MERN Fullstack Development"
            link="https://github.com/aayushmanmukherjee/Community"
            date="August, 2025"
          />
          <Card
            title="Workday - Task Management Web App"
            desc="Built a MERN-based productivity app using the Eisenhower Matrix to help users prioritize daily tasks effectively,
featuring secure authentication and a responsive, user-friendly interface."
            date="September, 2025"
            domain="MERN Fullstack Development"
            link="https://github.com/aayushmanmukherjee/Workday"
          />
         
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

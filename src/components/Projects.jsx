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
            title="IMDb Top 1000 Movies Analysis"
            desc="Analyzed IMDb’s top 1000 movies using SQL to uncover trends in ratings, genres, and directors across decades. Built an interactive Tableau dashboard highlighting audience vs. critic preferences, genre evolution, and top performing directors."
            date="November, 2025"
            link="https://github.com/aayushmanmukherjee/IMDB_Top_1000_Movies_Analysis"
            domain="SQL+Tableau"
          />
          <Card
            title="Restaurant Market Analysis"
            desc="Analyzed restaurant data using SQL and Pandas to compute KPIs like average rating, median cost, and cuisine popularity. Built an interactive Tableau dashboard to identify top localities, pricing trends, and market gaps for new restaurant entry."
            date="October, 2025"
            link="https://github.com/aayushmanmukherjee/RestaurantAnalysis"
            domain="SQL+Tableau"
          />
          <Card
            title="Unemployment Rate Analysis in India"
            desc="Analyzed unemployment rate data across Indian states using Python (Pandas, NumPy, Matplotlib, Seaborn) to study regional disparities, COVID-19 impact, and long-term unemployment trends. Created visual dashboards and trend analyses to highlight state-wise variations and identify key factors influencing post-pandemic recovery."
            date="October, 2025"
            link="https://github.com/aayushmanmukherjee/UnemplymentIndiaStates"
            domain="Exploratory Data Analysis"
          />
          <Card
            title="Rock Music Analysis"
            desc="Conducted data-driven analysis of rock songs using Python libraries to identify trends in popularity, song features, and artist influence through clear, insightful visualizations."
            date="October, 2025"
            link="https://github.com/aayushmanmukherjee/RockMusicDataAnalysis"
            domain="Exploratory Data Analysis"
          />
          <Card
            title="Community - Social Media Web App"
            desc="Developed a full-stack social platform using the MERN stack (MongoDB, Express.js, React, Node.js) with JWT authentication and real-time group chat functionality. Implemented media sharing, and responsive UI to enhance user engagement and ensure secure, scalable performance."
            domain="MERN Fullstack Development"
            link="https://github.com/aayushmanmukherjee/Community"
            date="August, 2025"
          />
          <Card
            title="Workday - Task Management Web App"
            desc="Built a MERN-based productivity app using the Eisenhower Matrix to help users prioritize daily tasks effectively, featuring secure authentication and a responsive, user-friendly interface."
            date="September, 2025"
            domain="MERN Fullstack Development"
            link="https://github.com/aayushmanmukherjee/Workday"
          />
        </div> {/* ✅ properly closed this div */}
      </div>
    </motion.section>
  );
};

export default Projects;

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { File } from "lucide-react";

const About = () => {
  return (
    <motion.section
  initial={{ opacity: 0.8, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.2, ease: "easeOut" }}
  viewport={{ amount: 0.1 }}
  className="overflow-x-hidden bg-black w-full h-screen flex pt-10 max-md:pt-5 max-md:flex-col max-md:gap-5 pb-2"
>
  <div className="w-[40%] ml-5 max-md:w-full max-md:ml-0 text-left max-md:text-center">
    <h2 className="big text-5xl max-lg:text-3xl max-md:text-2xl text-white">
      ABOUT ME
    </h2>
  </div>

  <div className="w-[60%] max-md:w-full mr-5 max-md:mr-0 flex flex-col max-md:items-center">
    
    <p className="text-4xl max-md:text-xl max-md:text-center cursive font-extrabold h-20 text-white">
      <Typewriter
        words={["Hello!", "नमस्ते!", "Hola!", "Bonjour!"]}
        loop
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </p>

    <div className="poppins text-xl max-md:text-sm max-md:text-center mt-10 max-md:mt-5 text-white px-2">
      My name is Aayushman Mukherjee. <br />
      I am a final-year Electrical and Electronics Engineering student from Vellore Institute of Technology, Vellore. <br />
      I love developing websites and exploring data — I have hands-on experience in 
      <span className="font-bold"> MERN full-stack development</span> and 
      <span className="font-bold"> Python-based data analysis.</span>
      <br />
      <div className="mt-5 max-md:mt-2">
        Other than coding, I love listening to music, watching movies, playing video games, and following football and cricket. <br />
        I'm also passionate about photography and new consumer tech — always curious and excited to discuss the latest trends.
      </div>
    </div>

    <button className="py-1 mt-10 rounded-full border bg-white text-black hover:bg-green-500 w-40 transition-all duration-200">
      <a
        href="https://drive.google.com/file/d/1bvvWjeJPg5Sb232EUjAca0yak_pF6TI8/view?usp=sharing"
        target="_blank"
        className="flex justify-center items-center poppins font-bold"
      >
        My Resume <File className="ml-2" />
      </a>
    </button>
  </div>
</motion.section>
  );
};

export default About;

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
      viewport={{ amount: 0.1}} 
    >
    <div className="bg-teal-50 w-full h-[100vh] flex pt-10 max-md:pt-5 max-md:flex-col max-md:gap-5">
      <div className="w-[40%] ml-30 max-md:ml-0 max-md:w-full max-md:text-center">
        <h2 className="big text-6xl max-lg:text-3xl max-md:text-2xl">ABOUT ME</h2>
      </div>
      <div className="w-[60%] max-md:w-full mr-5 max-md:mr-0 flex flex-col max-md:items-center">
        <p className="text-4xl max-md:text-xl max-md:text-center cursive font-extrabold text-gray-600 h-20">
          <Typewriter
            words={["Hello!", "नमस्ते!", "Hola!", "Bonjour!"]}
            loop
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p className="poppins text-xl max-md:text-sm max-md:text-center mt-10 max-md:mt-5">
            My name is Aayushman Mukherjee. <br /> I am a final year electrical and electronics engineering student from Vellore Institute of Technology, Vellore. <br />
            I love developing websites and exploring data, I have hands-on experience in <span className="font-bold ">MERN full-stack development</span> and <span className="font-bold ">Python-based data analysis.</span> <br />
            <p className="mt-5 max-md:mt-2">Other than coding I love listening to music, watching movies, playing video games, watching football and cricket and I also love photography. <br /> I am also always curious about new consumer tech and love discussing about them. <br /></p>
        </p>
        <button className="py-1 mt-10 rounded-full border  hover:bg-green-500 w-40"><a href="https://drive.google.com/file/d/1Xav1-Rh82ET33jxw1uy9Ra8VxBNtdXCW/view?usp=sharing" target="_blank" className="flex justify-center items-center poppins font-bold">My resume <File/></a></button>
      </div>
    </div>
    </motion.section>
  );
};

export default About;

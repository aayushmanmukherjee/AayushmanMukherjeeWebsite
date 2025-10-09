import React, { useEffect, useState } from 'react'
import Introduction from './components/Introduction'
import { Typewriter } from "react-simple-typewriter";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(()=>setLoading(false),2000)
    return () => clearTimeout(timer)
  },[])

  if(loading) {
    return (
      <div className='h-screen w-screen flex justify-center items-center bg-amber-50'>
        <h1 className='cursive text-3xl max-md:text-xl font-extrabold'>
          <Typewriter
                    words={["Aayushman Mukherjee"]}
                    typeSpeed={50}
                  />
        </h1>
      </div>
    )
  }
  return (
    <>
      <Introduction/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App

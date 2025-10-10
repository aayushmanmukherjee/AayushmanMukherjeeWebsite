import { Github, PlusCircle, XCircle } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "framer-motion";

const Card = ({title, desc, date, link, domain}) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
  return (
    <motion.div
  animate={{ rotateY: show ? 360 : 0 }} 
  transition={{ duration: 1, ease: "easeInOut" }} 
>
    <div className='flex flex-col rounded-lg shadow py-2 px-1 hover:scale-105 transition-all duration-200 bg-white w-[300px] h-[300px]'>
        <div className='flex justify-end'>
      <button onClick={handleShow} className='rounded-full cursor-pointer hover:bg-green-500 transition-all duration-200'>
        {show ? <XCircle size={40} className='rounded-full'/> : <PlusCircle size={40} className=' rounded-full'/> }
        </button>
      </div>
      
      {show ? (
       <p className="text-sm poppins py-2 font-bold">{desc}</p>
      ) : (
         <div>
          <h3 className="poppins font-extrabold text-2xl">{title}</h3>
          <p className="poppins font-bold mt-2 text-gray-500">Date: {date}</p>
          <p className="poppins font-bold mt-2">Domain: {domain}</p>
          <button className='border-2 rounded-full w-30 mt-5 hover:bg-green-500 transition-all duration-200'><a href={link} target='_blank'>Project link</a></button>
        </div>
      )}
    </div>
    </motion.div>
  )
}

export default Card

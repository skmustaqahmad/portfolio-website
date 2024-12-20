import React from 'react'
import {BsDownload} from "react-icons/bs"
import avatarIng from "../assets/hero.png"
import CV from "../assets/cv.pdf"

const Hero = () => {
  return (
    <div className='text-black flex flex-col-reverse md:flex-row justify-center items-center py-10 px-5 sm:px-10 lg:px-40 bg-gradient-to-t from-white to-yellow-50' >
        <div className='w-full md:w-1/2 mb-10 text-center md:text-left'>
            <h3 className='text-base md:text-lg lg:text-xl mb-0 md:mb-2 text-yellow-500'>Hello, I am </h3>
            <h1 className=' text-2xl md:text-4xl lg:text-6xl my-0 md:-my-1 font-bold py-2 md:py-2 gap-2'> Mustaq Coding</h1>
            <h3 className='text-base md:text-xl lg:text-2xl text-green-500 gap-2'>Web developer & UI/UX Desginer</h3>
            <p className='text-sm md:text-lg lg:text-xl tracking-tighter'>
                 I’m a passionate Web Developer and UI/UX Designer with a focus on creating responsive, user-centric websites and applications. I work with technologies like HTML, CSS, JavaScript, and React to build seamless digital experiences. Whether designing intuitive user interfaces or developing efficient web solutions, I prioritize functionality, design, and user satisfaction in every project.
            </p>
            <div className='flex items-center md:justify-start gap-4 mt-5 '>
              <button className='bg-yellow-500 px-10 py-1 rounded-lg mr-4 hover:bg-yellow-400'>Hire me</button>
              <a className='flex items-center text-yellow-300 font-bold' herf={CV} download="CV.pdf">
                      Download CV <BsDownload className='ml-2 text-lg'/>
              </a>
           </div>
        </div>
        <div className='w-full md:w-1/2 px-10 md:px-0 flex justify-center items-center md:justify-end mb-20 md:mb-0'>
            <img className='max-w-full h-auto' src={avatarIng} alt="Avatar"></img>
        </div>
    </div>
  )
}

export default Hero
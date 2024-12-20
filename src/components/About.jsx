import React from 'react'
import aboutImg from "../assets/aboutImg.png"
import CV from "../assets/cv.pdf"
import {FaRegHandshake, FaRegFolderOpen} from "react-icons/fa"
import { MdSupportAgent } from 'react-icons/md'
import { BsDownload } from 'react-icons/bs'

const About = () => {
  return (
    <div id='About' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-6 lg:px-14 flex flex-row items-center justify-between'>
           <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30'>
              <img src={aboutImg} alt='About me' className='w-full h-auto  object-cover' />
           </div>
{/*right section */}        
           <div className='w-full md:w-1/2 md:pl-12'>
             <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-4'> A Bit</h3>
             <h2 className='text-4xl md:text-6xl font-bold text-gray-800  mb-6'>About me</h2>
             <p className='text-gray-600 mb-6'>Hello! I'm Mustaq, a passionate and detail-oriented Web Developer with a knack for creating intuitive, visually appealing, and functional websites. With experience in HTML, CSS, JavaScript, and frameworks like React, I specialize in building responsive and dynamic web applications.

I thrive on solving problems and bringing creative ideas to life through code. Whether it's developing seamless user interfaces or working on backend integrations with MySQL and MongoDB, I ensure every project is crafted with precision and purpose.

Beyond coding, I enjoy collaborating with teams, exploring the latest web trends, and constantly learning new technologies. I'm excited to contribute to innovative projects and create meaningful digital experiences.</p>
              <div className='flex flex-wrap mb-6 '>
                  <div className='flex items-center w-1/2 mb-4'>
                     <FaRegHandshake className='text-yellow-500 text-xl mr-4'/>
                     <div>
                         <h4 className='text-gray-700 font-bold'>1 year</h4>
                         <p className='text-gray-700'>Experience</p>
                      </div>
                   </div>
                </div>
                <div className='flex items-center w-1/2 mb-4'>
                     <MdSupportAgent className='text-yellow-500 text-xl mr-4'/>
                     <div>
                         <h4 className='text-gray-700 font-bold'>24/7</h4>
                         <p className='text-gray-700'>Customer Support</p>
                      </div>
                   </div>
                <div/>
                <div className='flex items-center'> 
                    <button className='bg-yellow-500  px-8 rounded-lg py-3 mr-4 hover:bg-yellow-400'>Hire Me</button>
                    <a className=' flex items-center text-yellow-500 font-semibold' herf={CV} download="CV.pdf">Download CV<BsDownload className='ml-2 text-lg'/></a>
                </div>   
            </div>
        </div>
    </div>
   
  )
}

export default About
import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import CV from "../assets/cv.pdf"
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false)
    const items =[
        {id:1,text:"About", to:"About"},
        {id:2,text:"Services", to:"Services"},
        {id:3,text:"Work", to:"Works"},
        {id:4,text:"Testimonials",to:"Testimonials"},
        {id:5,text:"Contact",to:"Contact"},
    ]
  return (
    <div className='bg-yellow-50 text-black w-full'>
        <div className='container mx-auto p-4 hidden md:flex justify-between items-center'>
            <div className='text-xl md:text-2xl font-bold flex items-center gap-1'>
                <span className='text-black'>Mustaq</span>
                <span className='text-yellow-500'>Coding</span>
            </div>
            <div className='hidden md:flex space-x-6 items-center list-none text-lg'>
                {items.map(({id, text, to}) => (
                    <li key={id} className='hover:text-yellow-400 duration-200 cursor-pointer'><Link to={to} smooth={true} duration={500}>{text}</Link></li>

                ))}
            </div>
            <a href={CV}  download ="CV.pdf"className='text-lg  bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500'>Download CV</a>
        </div>
        <div className='flex w-full justify-between items-center md:hidden p-2 shadow-sm'>
            <div className='text-xl font-bold flex items-center gap-2'>
                <span className='text-black'>Mustaq</span>
                <span className='text-yellow-500'>Coding</span>
            </div>
            <div className='flex justify-center gap-2'>
                <div onClick={() => setMenu(!menu)}>
                    {menu ? (<IoClose size={30} className='text-black'/>)
                   :(<MdOutlineMenu size={30} className='text-black'/>)}
                </div> 
            </div>      
        </div>
        {menu && (
            <div className='md:hidden bg-yellow-50 justify-center items-center gap-2 text-lg list-none text-black flex flex-col shadow-sm'>
                {items.map(({id, text, to}) => (
                    <li key={id} className='hover:text-yellow-400 duration-200 cursor-pointer  border-b w-11/12'><Link to={to} smooth={true} duration={500}>{text}</Link></li>
                ))}
                 <a  href={CV}  download ="CV.pdf"className='text-lg  bg-yellow-400 text-black px-4 py-2  mt-2 rounded hover:bg-yellow-500'>Download CV</a>
            </div>
        )}
    </div>

  )
}

export default Navbar
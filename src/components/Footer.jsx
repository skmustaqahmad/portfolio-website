import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white mt-12 flex flex-col items-center'>
        <div className='container flex flex-col md:flex-row justify-between'>
            <div className='mb-8 md:mb-0 md:w-1/4 text-center md:text-start'>
                <h2 className='text-3xl font-semibold text-yellow-500'>Mustaq Coding</h2>
                <p className='mt-1 text-gray-500 md:pr-5'> I'm Mustaq, a passionate Web Developer skilled in creating intuitive and functional websites using modern technologies like HTML, CSS, JavaScript, and React. 
                 Always eager to learn and contribute to innovative projects.</p>
            </div>
            <div className='flex justify-between md:w-3/4'>
                <div className='space-y-4'>
                    <h3 className='font-medium text-gray-700'>Explore</h3>
                    <ul className='text-gray-500 space-y-2'>
                        <li><a href='#'>Support</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Blog</a></li>   
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h3 className='font-medium text-gray-700'>Explore</h3>
                    <ul className='text-gray-500 space-y-2'>
                        <li><a href='#'>Terms of  Use</a></li>
                        <li><a href='#'>privacy Policy</a></li>  
                    </ul>
                </div> 
                <div className='space-y-4'>  
                    <h3 className='font-medium text-gray-700'>Social</h3>
                    <ul className='text-gray-500 space-y-2'>
                        <li><a href='#'>Twitter</a></li>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>Linkedin</a></li>   
                    </ul>
                </div>
            </div>
        </div>
        <div className='mt-8 bg-yellow-500 h-2 w-full'></div>
    </div>
  )
}

export default Footer
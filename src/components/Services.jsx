import React from 'react'
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import {FaArrowRight} from "react-icons/fa"

const Services = () => {
  return (
    <div  id='Services'className='bg-white py-16 px-8'>
        <div className='container mx-auto px-6 lg:px-24 text-center'>
            <div className='mb-12'>
                <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Services</h3>
                <h2 className='text-4xl font-bold text-gray-800 mb-4'> Check My Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
                    <img src={service1} alt='service1' className='w-full h-48 object-cover rounded-lg  mb-4'/> 
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Weather Dashboard Design </h3>
                    <p className='text-gray-600 mb-4'>The Weather Dashboard is a user-friendly web application designed to provide real-time weather updates and forecasts. Featuring a city search, 5-day forecast, temperature unit toggle, and favorite city management, it delivers an engaging and visually appealing experience. Built with React, it leverages the OpenWeatherMap API and supports CRUD operations, making it a practical tool for weather tracking.</p>
                </div>
                <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
                    <img src={service2} alt='service1' className='w-full h-48 object-cover rounded-lg  mb-4'/> 
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Livestockify Dashboard Design</h3>
                    <p className='text-gray-600 mb-4'>The Livestockify Dashboard is a comprehensive platform designed to streamline livestock management. It features intuitive navigation, real-time updates, and data visualization, with key sections like Farm Overview, Device Management, Alerts, and Actionable Insights. Optimized for web and mobile, it supports data export and integration, empowering users to monitor and enhance farm performance effectively.</p>
                </div>
                <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
                <img src={service3} alt='service1' className='w-full h-48 object-cover rounded-lg  mb-4'/> 
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Facebook Login Page</h3>
                    <p className='text-gray-600 mb-4'>The Facebook Login Page is a simple and clean user interface designed for authentication. It features a login form with fields for an email/phone number and password, along with options for forgotten passwords and account creation. Styled with HTML, CSS, and responsive design principles, it replicates Facebook's professional and accessible design.</p>
                </div>
            </div>

        </div>
        <div className='mt-8 text-right'> 
             <a className='flex items-center justify-end text-yellow-500 font-semibold hover:text-yellow-400'> 
                Explore All Services<FaArrowRight className='ml-2'/>
            </a>
        </div>
    
    </div>
  )
}

export default Services
import React from 'react'
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"

const Work = () => {
    const casestudies = [
        {id:1,
          title:"Bakery Landing Page Design ",
          description:"A web developer creates the look and feel of a website, including the user interface and navigation menus. They incorporate content like images, videos, and graphics to make the site visually appealing",
          workImage:work1,
        },
        {id:2,
            title:" Shoes Store Ecommerce Landing Page",
            description:"A web developer creates the look and feel of a website, including the user interface and navigation menus. They incorporate content like images, videos, and graphics to make the site visually appealing",
            workImage:work2,
        },
        {id:3,
            title:" ClaerMix Landing Page",
            description:"A web developer creates the look and feel of a website, including the user interface and navigation menus. They incorporate content like images, videos, and graphics to make the site visually appealing",
            workImage:work3,
        }
    ]
  return (
    <div id='Works' className='container mx-auto px-4 py-12'>
        <h3 className='text-yellow-500 font-semibold text-center uppercase text-xl mb-2'> Work</h3>
        <h2 className='text-4xl font-bold text-center mb-12'> My Case Studies</h2>
        {casestudies.map((study, index) =>(
            <div key={study.id} className={` flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${ index % 2 === 0 ? "lg:flex-row-reverse":"" } `}>
                <div className=' w-full lg:w-1/3 p-4'>
                    <img src={study.workImage} className=' w-full h-full object-cover rounded-lg shadow-lg'/>
                </div>
                <div className='w-full lg:w-1/2 p-4'>
                    <div className='flex items-center mb-4'>
                        <span className='text-3xl font-bold text-yellow-500 mr-2'>{`0${index + 1}`}</span>
                        <h3 className=' text-2xl font-semibold'>{study.title}</h3>
                    </div>
                    <p className='text-gray-600 mb-4'>{study.description}</p>
                    <button className='px-4 py-2  border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-full'>Details</button>
                </div>
            </div>

    
         ))}
    </div>
  )
}

export default Work
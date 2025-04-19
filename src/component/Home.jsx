import React from 'react'
//import '../'
export function Home() {
  return (
    <div className='min-h-142 max-height-screen flex justify-center items-center h-60 bg-gray-900'>
       <div className='text-center'> 
          <img src="../../public/n-pass.jpg" alt="head.jpg" className='w-32 h-32 rounded-full mx-auto object-cover'/>
          <h1 className='text-3xl font-bold mt-2 text-white'>Hello, i'm Nitish Kumar</h1>
          <p className='text-xl font-semibold font-serif text-gray-500 p-5'>Full Stack Web Developer</p>
          <div className='space-x-5'>
              <a href="https://www.linkedin.com/in/nitish-kumar-98n" target='_blank'><span className='bi bi-linkedin hover:text-blue-500 text-xl text-gray-300'></span></a>
              <a href="#" target='_blank'><span className='bi bi-github hover:text-blue-500 text-xl text-gray-300' ></span></a>
              <a href="https://www.kmrnitish98@gmail.com" target='_blank'><span className='bi bi-envelope-fill hover:text-blue-500 text-xl text-gray-300'></span></a>
          </div>
          <div>
              <button className='bg-blue-700 text-white mt-7 font-semibold hover:bg-blue-500 rounded-full px-5 py-3 transition duration-200 animate-bounce'>
                <a href="/public/resume nitish.pdf" download>Download My Resume</a>
              </button>
          </div>
       </div> 
    </div>
  )
}

export default Home

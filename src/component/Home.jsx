import React from 'react'
//import '../'
export function Home() {
  return (
    <div className='min-h-142 max-height-screen flex justify-center items-center h-60 bgimg'>
       <div className='text-center'> 
          <img src="../../public/n-pass.jpg" alt="head.jpg" className='w-32 h-32 rounded-full mx-auto object-cover'/>
          <h1 className='text-3xl font-bold mt-2 text-white'>Hello, i'm Nitish Kumar</h1>
          <p className='text-xl font-semibold font-serif text-gray-500 p-5'>Full Stack Web Developer</p>
          <div className='flex justify-center gap-4 mt-4 text-2xl text-white'>
              <a href="https://www.linkedin.com/in/nitish-kumar-98n" target='_blank' className='hover:text-blue-400'><i className='bi bi-linkedin '></i></a>
              <a href="#" target='_blank'className='hover:text-blue-400'><i className='bi bi-github' ></i></a>
              <a href="https://www.kmrnitish98@gmail.com" target='_blank' className='hover:text-blue-400'><span className='bi bi-envelope-fill'></span></a>
          </div>
          <div>
              <button className='bg-blue-600 text-white mt-7 font-semibold hover:bg-blue-500 rounded-full px-5 py-2 transition duration-300 animate-bounce'>
                <a href="/public/resume nitish.pdf" download>Download My Resume</a>
              </button>
          </div>
       </div> 
    </div>
  )
}

export default Home

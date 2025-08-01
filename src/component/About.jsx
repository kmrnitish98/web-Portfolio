import React from 'react'
import work from '../../public/aboutMe.jpg'
export function About() {
  return (
    <div className='min-x-screen '>
      
      <div className='flex flex-col md:flex-row items-center justify-center mx-5 gap-6 mt-20'>
        <div className='mt-16'>
         <img src={work} alt="AbouteMe.jpg" className='w-350 h-120' />
        </div>
        <div className='mt-7'>
          <h1 className='font-bold text-3xl text-gray-500 mb-3'>Aboute </h1>
          <div>
              <p> I’m Nitish kumar and i’m a student of MCA 2 sem. A motivated Computer Science
 graduate seeking an entry-level software development role to apply problem
solving and coding skills in real-world projects, while continuing to grow and learn in
 a dynamic tech environment. </p>
          </div>
          <div>
             <h1 className='font-bold text-2xl text-gray-500 my-3 mt-3'>My Skill's</h1>
              <ul className='flex flex-wrap  items-center gap-3 skill'>
                <ul>
                  <h2 className='font-black ms-5 text-xl text-green-900 '> 1. Programming Langauge / Scripting</h2>
                  <ul className='flex my-2 ms-15'>
                    <li className='font-black text-gray-600'>TypeScript</li>
                    <li className=' ms-3 font-black text-gray-600'> , JavaScript</li>
                  </ul>
                  <h2 className='font-black ms-5 text-xl text-green-900'>2. Frontend Development</h2>
                  <ul className='ms-15 my-2'>
                     <h3 className='font-bold ms-2  mb-2'>Markup & Styling</h3>
                     <ul className='flex '>
                       <li className='font-black text-gray-600'>CSS</li>
                       <li className='font-black mx-2 text-gray-600'> , HTML</li>
                       <li className='font-black text-gray-600'> , SASS</li>
                       <li className='font-black ms-2 text-gray-600'> , LESS</li>  
                     </ul>
                     <h3 className='font-bold ms-2  '>Frameworks & Libraries</h3>
                     <ul className='flex'>
                        <li className='font-black text-gray-600'> JQuery</li>
                        <li className='font-black  mx-2 text-gray-600'> , React JS</li>
                        <li className='font-black text-gray-600'> , Tailwind</li>
                        <li className='font-black ms-2 text-gray-600'> , Bootstrap</li>
                     </ul>
                  </ul>
                  <ul>
                    <h3 className='font-black  ms-5 text-xl text-green-900'> 3. Backend Development</h3>
                    <ul className='flex ms-15 mt-2'>
                    <li className='font-black ms-1 text-gray-600'>Express JS</li>
                      <li className='font-black mx-2 text-gray-600'> , Node JS</li>
                    </ul>
                  </ul>
                  <ul>
                     <h3 className='font-black ms-5 text-xl text-green-900'> 4. Database</h3>
                     <ul className='flex ms-15 mt-1'>
                        <li className='font-black text-gray-600 '>MongoDB </li>
                        <li  className='font-black ms-1 text-gray-600' >, MySql</li>
                     </ul>
                  </ul>
                </ul>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About


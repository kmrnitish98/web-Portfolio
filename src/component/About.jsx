import React from 'react'

export function About() {
  return (
    <div className='min-x-screen '>
      
      <div className='flex items-center justify-center mx-5 gap-6'>
        <div className='mt-16'>
         <img src="../../public/aboutMe.jpg" alt="AbouteMe.jpg" className='w-350 h-120' />
        </div>
        <div className='mt-7'>
          <h1 className='font-bold text-3xl text-gray-500 mb-3'>Aboute </h1>
          <div>
              <p>I'm Nitish Kumar And I'm a Student of MCA 2 Semester. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint hic deserunt dolorum vero nesciunt rem totam sed voluptate quod, dignissimos ad fugiat eum voluptatem error? Itaque error rerum nesciunt ipsam. </p>
          </div>
          <div>
             <h1 className='font-bold text-2xl text-gray-500 my-3 mt-3'>My Skill's</h1>
              <ul className='flex flex-wrap  items-center gap-3 skill'>
                <ul>
                  <h2 className='font-black ms-5 text-xl text-green-900 '> 1. Programming Langauge / Scripting</h2>
                  <ul className='flex my-2 ms-15'>
                    <li className='font-bold'><span className='text-blue-700 py-1 px-1.5 text-xs border border-blue-800 rounded-full bg-gray-900'>TS</span>TypeScript</li>
                    <li className=' ms-3 font-bold '><span className='text-amber-500 py-1 px-1.5 text-xs border border-amber-600 rounded-full bg-gray-900'>JS</span>JavaScript</li>
                  </ul>
                  <h2 className='font-black ms-5 text-xl text-green-900'>2. Frontend Development</h2>
                  <ul className='ms-15 my-2'>
                     <h3 className='font-bold ms-2 text-gray-500 mb-2'>Markup & Styling</h3>
                     <ul className='flex '>
                       <li className=''><span className='flex items-center'><img src="../../public/css-3.png" alt="" className='w-8 h-8 border border-blue-700 rounded-full p-1 bg-gray-900' /> <span  className='font-bold ms-1'> CSS</span></span></li>
                       <li className='mx-2'><span className='flex items-center'><img src="../../public/html (1).png" alt="" className='w-8 h-8 border border-blue-700 rounded-full p-1 bg-gray-900' /> <span  className='font-bold ms-1'> HTML</span></span></li>
                       <li className='font-bold'><span className='text-xs rounded-full text-sky-400 border-2 border-sky-800  bg-gray-900 py-1.5 px-1 '>sass</span>SASS</li>
                       <li className='font-bold ms-2 '><span className='text-xs rounded-full text-amber-400 border-2 border-amber-400 bg-gray-900 py-1.5 px-1 '>less</span>LESS</li>  
                     </ul>
                     <h3 className='font-bold ms-2 text-gray-400 '>Frameworks & Libraries</h3>
                     <ul className='flex'>
                        <li className=''><span className='flex items-center '><img src="../../public/jQuery.png" alt="" className='w-8 h-8 border border-blue-700 rounded-full p-1 bg-gray-900' /><span className='font-bold ms-1'>JQuery</span></span></li>
                        <li className=' mx-2 '><span className='flex items-center '><img src="../../public/react.png" alt="" className='w-8 h-8 border border-blue-700 rounded-full p-1 bg-gray-900' /> <span  className='font-bold ms-1'> React JS</span></span></li>
                        <li className=''><span className='flex items-center '><img src="../../publiC/Tailwind CSS.png" alt="" className='w-8 h-8 border border-blue-700 rounded-full p-1 bg-gray-900' /> <span  className='font-bold ms-1'> Tailwind</span></span></li>
                        <li className=' ms-2'><span className='flex items-center '><img src="../../public/bootstrap.png" alt="" className='w-8 h-8 border border-purple-700 rounded-full p-1 bg-gray-900' /> <span  className='font-bold ms-1'> Bootstrap</span></span></li>
                     </ul>
                  </ul>
                  <ul>
                    <h2 className='font-black  ms-5 text-xl text-green-900'> 3. Backend Development</h2>
                    <ul className='flex ms-15 mt-2'>
                    <li className='font-bold ms-1'><span className='text-amber-500 py-1 px-1.5 border border-amber-600 rounded-full bg-gray-900'>EX</span> Express JS</li>
                      <li className=' mx-2'><span className='flex items-center '><img src="../../public/node.png" alt="" className='w-8 h-8 border border-blue-700 rounded-full p-1 bg-gray-900' /> <span  className='font-bold ms-1'> Node JS</span></span></li>
                    </ul>
                  </ul>
                  <ul>
                     <h2 className='font-black ms-5 text-xl text-green-900'> 4. Database</h2>
                     <ul className='flex ms-15 mt-1'>
                        <li className='font-bold '><span className='flex items-center ms-1'><img src="../../public/MongoDB.png" alt="" className='w-8 h-8 border border-blue-700 rounded-full p-1 bg-gray-900' /> MongoDB</span></li>
                        <li  className='font-bold ms-1' ><span className='flex items-center ms-1'><img src="../../public/mysql.png" alt="" className='w-8 h-8 border border-blue-700 rounded-full p-1 bg-gray-900' /> MySql</span></li>
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


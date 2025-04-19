import React from 'react'
import { NavLink } from 'react-router-dom'
 function Navbar() {
  return (
    <div>
        <nav className='w-full z-20  bg-gray-200 '>
           <div className='max-w-screen flex flex-wrap items-center justify-around mx-auto p-4'>
              <NavLink to='' className='font-black text-3xl ms-1'><span><span className='text-gray-500'>Port</span><span className='text-gray-800'>Folio</span></span></NavLink>
              <ul className='flex flex-col md:p-0 mt-4 font-bold text-lg md:flex-row md:space-x-9 md:mt-0 dark:border-gray-600 '>
                 <li className=' '>
                    <NavLink to='/' className='hover:text-blue-800 text-gray-800'>Home</NavLink>
                 </li>
                 <li className=' '>
                    <NavLink to='/about' className='hover:text-blue-800 text-gray-800'>Aboute</NavLink>
                 </li>
                 <li className=' '>
                    <NavLink to='/project' className='hover:text-blue-800 text-gray-800'>Project</NavLink>
                 </li>
                 <li className=' '>
                    <NavLink to='/contact' className='hover:text-blue-800 text-gray-800'>Contact</NavLink>
                 </li>
              </ul>
              <h3 className='bi bi-moon-stars-fill text-gray-800'></h3>
           </div>    
        </nav>
    </div>
  )
}
export default Navbar

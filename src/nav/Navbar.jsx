import  { useState } from 'react'
import { NavLink } from 'react-router-dom'
 function Navbar() {

   const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div>
        <nav className='w-full z-20  bg-gray-200 '>
           <div className='max-w-7xl flex  items-center justify-around mx-auto p-4'>
              <NavLink to='/' className='font-black text-3xl ms-1'>
               <span className='text-gray-500'>Port</span>
               <span className='text-gray-800'>Folio</span>
   
               </NavLink>
              <button onClick={()=>setMenuOpen(!menuOpen)} className='text-2xl md:hidden focus:outline-none'><i className='bi bi-list'></i></button>
              <ul className={`flex flex-col mt-4 font-bold text-lg md:flex-row md:space-x-9 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-200 md:bg-transparent transition-all duration-300 ease-in-out ${menuOpen?'block': 'hidden md:flex'}`}>
                 <li className='p-3 md:p-0 '>
                    <NavLink to='/' className='hover:text-blue-800 text-gray-800' onClick={()=>{setMenuOpen(false)}}>Home</NavLink>
                 </li>
                 <li className=' p-3 md:p-0'>
                    <NavLink to='/about' className='hover:text-blue-800 text-gray-800' onClick={()=>{setMenuOpen(false)}}>Aboute</NavLink>
                 </li>
                 <li className=' p-3 md:p-0'>
                    <NavLink to='/project' className='hover:text-blue-800 text-gray-800' onClick={()=>{setMenuOpen(false)}}>Project</NavLink>
                 </li>
                 <li className='p-3 md:p-0 '>
                    <NavLink to='/contact' className='hover:text-blue-800 text-gray-800' onClick={()=>{setMenuOpen(false)}}>Contact</NavLink>
                 </li>
              </ul>
           </div>    
        </nav>
    </div>
  )
}
export default Navbar

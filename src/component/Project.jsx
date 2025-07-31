
import React from 'react'
 
export function Project() {
  return (
    <div >
      <h2 className='text-center font-black text-2xl my-4'>My Project</h2>
      <div className='flex justify-between m-3'>
        <div className='flex-wrap w-2xl m-2' >
          <div ><img src="/public/ecomus-1.JPG" alt=""/></div>
          <div className='flex justify-around mt-4'><div className='font-bold text-amber-600'>Ecomus</div><div className='transition duration-200 animate-bounce '><a href="#" className='hover:text-blue-500 bo font-bold bi bi-eye'> Preview</a></div></div>
        </div>
        <div className='flex-wrap w-2xl m-2' >
          <div ><img src="/public/flip-clone-1.JPG" alt=""  /></div>
          <div className='flex justify-around mt-4'><div className='font-bold text-amber-600'>FlipClone [html-css]</div><div className='transition duration-200 animate-bounce '><a href="#" className='hover:text-blue-500 bo font-bold bi bi-eye'> Flip-Clone</a></div></div>
       </div>
       <div className='flex-wrap w-2xl m-2' >
          <div ><img src="/public/Capture.JPG" alt=""  /></div>
          <div className='flex justify-around mt-4'><div className='font-bold text-amber-600'> YouTube-Nareshit</div><div className='transition duration-200 animate-bounce '><a href="#" className='hover:text-blue-500 bo font-bold bi bi-eye'> Preview</a></div></div>
       </div>
      </div>
    </div>
  )
}

export default Project


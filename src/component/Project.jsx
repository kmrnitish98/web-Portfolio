
import React from 'react'
import flip from '../../public/flip-clone-1.jpg'
import ecomus from '../../public/ecomus-1.jpg'
import naresh from '../../public/Capture.jpg'
export function Project() {
  return (
    <div className='mt-30' >
      <h2 className='text-center font-black text-2xl my-4'>My Project</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='flex-wrap w-1xs m-2' >
          <div ><img src={ecomus} alt=""/></div>
          <div className='flex justify-around mt-4'><div className='font-bold text-amber-600'>Ecomus</div><div className='transition duration-200 animate-bounce '><a href="#" className='hover:text-blue-500 bo font-bold bi bi-eye'> Preview</a></div></div>
        </div>
        <div className='flex-wrap w-1xs m-2' >
          <div ><img src={flip} alt=""  /></div>
          <div className='flex justify-around mt-4'><div className='font-bold text-amber-600'>FlipClone [html-css]</div><div className='transition duration-200 animate-bounce '><a href="#" className='hover:text-blue-500 bo font-bold bi bi-eye'> Flip-Clone</a></div></div>
       </div>
       <div className='flex-wrap w-1xs m-2' >
          <div ><img src={naresh}alt=""  /></div>
          <div className='flex justify-around mt-4'><div className='font-bold text-amber-600'> YouTube-Nareshit</div><div className='transition duration-200 animate-bounce '><a href="#" className='hover:text-blue-500 bo font-bold bi bi-eye'> Preview</a></div></div>
       </div>
      </div>
    </div>
  )
}

export default Project


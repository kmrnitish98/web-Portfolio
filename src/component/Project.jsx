
import React from 'react'
import myImg from '../assets/todo.jpg'
import myImg2 from '../assets/big.jpg'
import myImg3 from '../assets/marks.jpg'
import myImg4 from '../assets/age.jpg'
export function Project() {
   
  const proCard=[
    {
      name:'TODO',
      info:'This project is built in React with CRUD operations.',
      view:'https://appoint-esi2.onrender.com',
      img:myImg,
    },
    {
      name:'CountDown',
      info:'This project is built in HTML CSS JAVASCRIPT BOOTSTRAP.',
      view:'https://kmrnitish98.github.io/CountDown/',
      img:myImg2,
    },
    {
      name:'Marks Calculate',
      info:'This project is built in HTML CSS JAVASCRIPT BOOTSTRAP.',
      view:'https://kmrnitish98.github.io/MarksCalculate/',
      img:myImg3,
    },
    {
      name:'Age Calculate',
      info:'This project is built in HTML CSS JAVASCRIPT BOOTSTRAP.',
      view:'https://kmrnitish98.github.io/Alpha_AgeCal/',
      img:myImg4,
    },
    ]

  return (
    <div className='mt-30' >
      <h2 className='text-center font-black text-2xl my-4'>My Project</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 p-2'>
        {
          proCard.map((project,index)=>  
          <div className='card  w-150 mb-5'key={index} >
              <img src={project.img} alt="projectImg"className='card-img-top rounded'/>
              <div className='card-body p-1 '>
                 
                 <span className='text-sm text-gray-600 font-bold'>{project.info}</span>
                 <div className='flex justify-between mt-3 mb-3'><div className='text-amber-900 text-xl font-extrabold '>{project.name}</div><a href={project.view} target='_blanck' className='bi bi-eye-fill hover:underline text-amber-800'>Preview</a></div>
              </div>
          </div> )
        }
      </div>
    </div>
  )
}

export default Project


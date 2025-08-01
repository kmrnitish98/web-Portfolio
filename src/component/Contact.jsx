import React from 'react'
import TextField from '@mui/material/TextField'
//import TextField from '@mui/material/TextField'

export function Contact() {
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-2 mt-35 mb-10 gap-6 px-4'>
          <div className='flex justify-center items-center  mt-lg-3 '>
                <form action="https://formsubmit.co/kmrnitish98@gmail.com" method='POST' className='bg-gray-100 rounded-2xl p-5 shadow-xl/30'>
                   <input type="hidden" name='_captcha' value={false}/>
                   <h2 className='text-center font-black text-2xl'>Contact</h2>
                  <ul>
                    <dt className='font-bold'>Name</dt>
                    <dd><input type="text" name='Name' placeholder='Enter Name' className='border border-gray-400 py-2 px-7 '/></dd>
                    <dt className='mt-4 font-bold'>Email</dt>
                    <dd><input type="email" name='email' placeholder='Enter Email Address' className='border border-gray-400 py-2 px-7'/></dd>
                    <dt className='mt-4 font-bold'>Subject</dt>
                    <dd><input type="text" name='sub' placeholder='Subject' className='border border-gray-400 py-2 px-7'/></dd>
                    <dt className='mt-4 font-bold'>Message</dt>
                    <dd><textarea name="msg" id="" placeholder='Message' className='border border-gray-400 py-2 px-2 w-3xs'></textarea></dd>
                  </ul>
                  <button type='submit' className='bi bi-send bg-gray-400 hover:bg-gray-200 font-bold py-2 px-3 mt-4 rounded-4xl'> Send Message</button>
                </form>
          </div>
          <div className=' flex justify-center items-center mb-10'>
              <div className=''>
                <div> 
                  <h1 className='bi bi-geo-alt font-bold text-xl text-gray-500'> Location</h1>
                  <h2 className='ms-7'> Hydrabad,India</h2>
                </div>
                <div className='my-7'>
                  <h1 className='bi bi-envelope-at font-bold text-xl text-gray-500'> Email</h1>
                  <h2><a href="kmrnitish98@gmail.com" className='hover:text-blue-600 ms-7'> kmrnitish98@gmail.com</a></h2>
                </div>
                <div className=''>
                  <h1 className='bi bi-telephone font-bold text-xl text-gray-500 '> Mobile Phone Number</h1>
                  <h2 className='ms-6'> +91 7541989350</h2>
                </div>
              </div>
          </div>
       </div>
    </div>
  )
}
export default Contact

import React from 'react';
import heroimg from "../assets/heroing.jpg";



const Contact = () => {
  return (
<>

<div  className='relative h-screen  bg-center bg-cover h-100' 
    style={{backgroundImage:`url(${heroimg})`}}>
    
      <div 
      className='absolute  inset-0 flex flex-col justify-center items-center'>
        <h4 
        className='text-4xl md:text-6xl text-white font-bold mb-4'>Contact</h4>
        
      </div>
    </div>

     <div className='bg-white  rounded-lg shadow-lg p-6 mx-auto w-[330px] lg:w-[650px] my-4 '>
     <h3 className='font-bold text-xl mb-4 text-center'>Get In Touch</h3>
     <form>
       <div className='mb-4'>
       <label className='block text-gray-700 mb-2'>Name</label>
       <input type='text' 
       className='w-full p-2 border border-gray-300 rounded outline-none'
       placeholder='Enter your name' />

       </div>
       <div className='mb-4'>
       <label className='block text-gray-700 mb-2'>Email</label>
       <input type='email' 
       className='w-full p-2 border border-gray-300 rounded outline-none'
       placeholder='Enter your email' />

       </div>
       <div className='mb-4'>
       <label className='block text-gray-700 mb-2'>Message</label>
       <textarea type='text' 
       className='w-full p-2 border border-gray-300 rounded outline-none'
       placeholder='Write a Message' />

       </div>
       <button type='submit' className='py-2 px-4 bg-blue-500 w-[100px] mx-24 lg:mx-60 text-white rounded'>Send Me</button>
     </form>

     </div>


</>

    
    
  )
}

export default Contact;
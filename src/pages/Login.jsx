import React from 'react'
import img from "../assets/destination3.jpg" ;


const Login = () => {
  return (
    <div className='container  mx-auto px-4 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div>
        <img src={img} alt='img' className='border rounded-lg pt-10' />
        </div>

      <div className='bg-white rounded-lg shadow-lg p-6  lg:w-[400px] w-full my-auto '>
         <h3 className='font-bold text-xl mb-4 text-center text-blue-500'>Log In</h3>
         <form>
         <div className='mb-4'>
          <label className='block text-gray-800 mb-2'>Email ID</label>
           <input type='email' 
            className='w-full p-2 border border-gray-300 rounded outline-none'
             placeholder='Enter your email id' />

          </div>
          <div className='mb-4'>
          <label className='block text-gray-700  mb-2'>Password</label>
          <input type='text' 
          className='w-full p-2  outline-none border border-gray-300 rounded'
           placeholder='Enter your password' />

      </div>
      
      <button type='submit' className='py-2 px-4 w-[120px] bg-blue-500  mx-28 text-white rounded'>Log In</button>
    </form>

    </div>

        
      </div>
</div>

  )
}

export default Login;
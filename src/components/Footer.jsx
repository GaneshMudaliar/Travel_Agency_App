import React from 'react'
import {Link} from "react-router-dom";
import {FaInstagram,FaTwitter,FaFacebook}  from "react-icons/fa"

const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-2xl font-bold text-blue-500 mb-4'>Travel</h2>
          <p className='mb-4'>Your trusted partner for unforgettable travel experience.Explore the world with us.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <div className='flex flex-col mt-4 space-y-2'>
            <Link to="/" >Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>

          </div>
        </div>
        <div>
          <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
          <div className='flex space-x-4 mb-4'>
            <FaFacebook className='text-blue-500 hover:text-blue-600' />
            <FaInstagram className='text-blue-500 hover:text-blue-600' />
            <FaTwitter className='text-blue-500 hover:text-blue-600' />
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input type="email" placeholder="Enter Your Email"
            className='w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600' />
            <button
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded-lg border border-blue-600'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer;
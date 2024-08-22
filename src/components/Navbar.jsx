import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {FaTimes , FaBars} from "react-icons/fa";



const Navbar = () => {

const [isOpen , setIsOpen] = useState(false);

  return (
    <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
      <div className='container px-4 flex justify-between items-center h-16'>
      {/* logo section */}


        <Link to="/" className="text-2xl font-bold text-blue-500">Travel</Link>
        {/* menu */}
          <div className='hidden md:flex space-x-4 items-center font-bold text-sm'>
            <Link to="/" className="px-6 py-2 hover:bg-blue-600 hover:text-white ">Home</Link>

            <Link to="/about"
            className="px-6 py-2 hover:bg-blue-600 hover:text-white ">About</Link>

            <Link to="/gallery"
            className="px-6 py-2 hover:bg-blue-600 hover:text-white ">Gallery</Link>

            <Link to="/contact"
            className="px-6 py-2 hover:bg-blue-600 hover:text-white ">Contact</Link>

            <Link to="/login"
            className="px-6 py-2 border text-white bg-blue-500 hover:bg-blue-600 ">Login</Link> 

          </div>

          {/* Menu Bar */}
          <div className='md:hidden'>
          <button 
          onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes/> : <FaBars/>} 
          </button>

          </div>
      </div>

      {/* For small devices */}

       {isOpen &&  (
        <div className='md:hidden flex space-y-6 py-4 flex-col bg-white items-center font-bold text-sm'>
            <Link to="/" onClick={() => setIsOpen(!isOpen)} className="px-6 py-2 hover:bg-blue-600 hover:text-white ">Home
            </Link>

            <Link to="/about" onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-2 hover:bg-blue-600 hover:text-white ">About</Link>

            <Link to="/gallery" onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-2 hover:bg-blue-600 hover:text-white ">Gallery</Link>

            <Link to="/contact" onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-2 hover:bg-blue-600 hover:text-white ">Contact</Link>
            
            <Link to="/login"
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-2  text-white border bg-blue-500 hover:bg-blue-600  ">Login</Link> 

        </div>
        
          
       )}
    </nav>
  )
}

export default Navbar;
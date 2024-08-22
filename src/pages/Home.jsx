import React from 'react'
import Destination from '../components/Destination'
import Service from "../components/Service";
import heroimg from "../assets/heroing.jpg";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    {/* hero section */}
    <div 
    className='relative h-screen  bg-center bg-cover' 
    style={{backgroundImage:`url(${heroimg})`}}>
    
      <div 
      className='absolute  inset-0 flex flex-col justify-center items-center'>
        <h1 
        className='text-4xl md:text-6xl text-white font-bold mb-4'>Explore the World with us</h1>
        <p
        className='text-white text-lg md:text-2xl mb-8'>Discover amazing place with exclusive deals</p>
        <Link to ="/login"
        className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-600  transform transition duration-300 hover:scale-105'>Get Started</Link>
      </div>
    </div>

    
    <Destination />
    <Service />
</>
  )
}

export default Home;
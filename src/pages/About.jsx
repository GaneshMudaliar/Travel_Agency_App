import React from 'react'
import heroimg from "../assets/heroing.jpg";
import img6 from "../assets/destination6.jpg" ;



const About = () => {
  return (
    <>
    <div 
    className='relative h-screen  bg-center bg-cover h-100' 
    style={{backgroundImage:`url(${heroimg})`}}>
    
      <div 
      className='absolute  inset-0 flex flex-col justify-center items-center'>
        <h4 
        className='text-4xl md:text-6xl text-white font-bold mb-4'>About</h4>
        
      </div>
    </div>


<div className='mx-auto px-4 container py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div>
        <img src={img6} alt='img' />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-3xl font-bold mb-4'>Who we are</h3>
          <p className='text-gray-700 mb-4'>We are a passionate travel agency commite to provide the best travel experiences for our clients.Our dedicated team brings a wealth of expertise and a deep-rooted love for travel. With years of collective experience in the tourism sector, we pride ourselves on delivering top-notch services, personalized attention, and a deep understanding of travelers' needs</p>
          <h3 className='text-3xl font-bold mb-4'>Our Mission</h3>
          <p className='text-gray-700 mb-4'>Our mission is to curate journeys that transcend the ordinary, offering a seamless blend of cultural immersion, adventure, and relaxation. Whether you seek a tranquil retreat amidst the serene landscapes, adrenaline-pumping adventures, or a cultural rendezvous, we tailor our offerings to exceed expectations.</p>
        </div>
      </div>
</div>
</>

  )
}

export default About;
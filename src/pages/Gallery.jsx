import React from 'react';
import heroimg from "../assets/heroing.jpg";
import img1 from "../assets/destination1.jpg" ;
import img2 from "../assets/destination2.jpg" ;
import img3 from "../assets/destination3.jpg" ;
import img4 from "../assets/destination4.jpeg" ;
import img5 from "../assets/destination5.webp" ;
import img6 from "../assets/destination6.jpg" ;


const image = [img1,img2,img3,img4,img5,img6];


const Gallery = () => {
  return (
    <div>
    <div 
    className='relative h-screen  bg-center bg-cover h-100' 
    style={{backgroundImage:`url(${heroimg})`}}>
    
      <div 
      className='absolute  inset-0 flex flex-col justify-center items-center'>
        <h4 
        className='text-4xl md:text-6xl text-white font-bold mb-4'>Gallery</h4>
        
      </div>
    </div>
      <div className='container mx-auto px-4 py-12'>
      <div className='gap-6 grid grid-cols-1 md:grid-cols3 lg:grid-cols-4'>
      {image.map((img,index) => (
        <div key={index} className='rounded-lg overflow-hidden shadow-md'>
        <img  src={img} alt="img" 
          className='w-full h-full object-cover
          transform transition duration-300 hover:scale-110'
        />

        </div>
      ))

      }

      </div>

      </div>
    </div>
  )
}

export default Gallery;
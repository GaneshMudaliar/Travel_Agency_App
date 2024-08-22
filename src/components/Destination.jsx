import React from 'react';
import Place1 from "../assets/destination5.webp";
import Place2 from "../assets/destination2.jpg";
import Place3 from "../assets/destination1.jpg";
import Place4 from "../assets/destination4.jpeg";



const places = [
  {
    id:1,
    img: `${Place1}`,
    title: "Varansi"
  },
  {
    id:2,
    img: `${Place2}`,
    title: "Manali"
  },
  {
    id:3,
    img: `${Place3}`,
    title: "Mumbai"
    },
  {
    id:4,
    img: `${Place4}`,
    title: "Rameswaram"
  }
]

const Destination = () => {
  return (
    <div className='py-8 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8 '>Popular Destination</h2>
        

        <div 
         className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {places.map((city) => (
            
            <div key={city.id} 
             className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer '>
               <img src={city.img} alt='img'
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-x-110" />
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2 '>{city.title}</h3>
                <p className='text-gray-600'>{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Destination;
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Destination = ({ places }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          🌍 Popular Destinations
        </h2>

        {/* Arrow Buttons */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            <FaArrowLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-scroll space-x-6 px-4 pb-4 no-scrollbar"
          >
            {places.map((city) => (
              <div
                key={city.id}
                className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex-shrink-0"
              >
                <img
                  src={city.img}
                  alt={city.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{city.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{city.description}</p>
                  <p className="text-blue-600 font-semibold">
                    ₹{city.price.toLocaleString()} – {city.duration} days
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

Destination.propTypes = {
  places: PropTypes.array.isRequired,
};

export default Destination;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Destination from '../components/Destination';
import Service from '../components/Service';
import BookingForm from '../components/BookingForm';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import heroimg from '../assets/heroing.jpg';

// Image imports
import Place1 from "../assets/destination5.webp";
import Place2 from "../assets/destination2.jpg";
import Place3 from "../assets/destination1.jpg";
import Place4 from "../assets/destination4.jpeg";

// Static data (can be replaced with API later)
const allDestinations = [
  {
    id: 1,
    img: Place1,
    title: "Varanasi",
    description: "Spiritual capital of India along the Ganges River.",
    price: 8000,
    duration: 3,
  },
  {
    id: 2,
    img: Place2,
    title: "Manali",
    description: "Scenic mountain town in Himachal Pradesh.",
    price: 9500,
    duration: 5,
  },
  {
    id: 3,
    img: Place3,
    title: "Mumbai",
    description: "Bustling metropolis with rich culture, food, and nightlife.",
    price: 11000,
    duration: 4,
  },
  {
    id: 4,
    img: Place4,
    title: "Rameswaram",
    description: "Sacred island town with ancient temples and serene beaches.",
    price: 6000,
    duration: 2,
  },
  {
    id: 5,
    img: 'https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg',
    title: "Goa",
    description: "Famous for beaches, nightlife, Portuguese heritage and seafood.",
    price: 10500,
    duration: 4,
  },
  {
    id: 6,
    img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/13/86/af/8e.jpg',
    title: "Jaipur",
    description: "The Pink City known for palaces, forts and rich heritage.",
    price: 7500,
    duration: 3,
  },
  {
    id: 7,
    img: Place2,
    title: "Darjeeling",
    description: "Hill station known for tea gardens, toy train, and Himalayan views.",
    price: 8800,
    duration: 4,
  },
  {
    id: 8,
    img: 'https://www.gokitetours.com/wp-content/uploads/2025/01/10-Best-Places-to-Visit-in-Andaman-and-Nicobar-in-2025.webp',
    title: "Andaman Islands",
    description: "Tropical paradise with clear water, coral reefs and scuba diving.",
    price: 13500,
    duration: 6,
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ maxPrice: '', maxDuration: '' });

  const filteredDestinations = allDestinations.filter((place) => {
    const matchesSearch = place.title.toLowerCase().includes(searchTerm.toLowerCase());
    const withinPrice = !filters.maxPrice || place.price <= parseFloat(filters.maxPrice);
    const withinDuration = !filters.maxDuration || place.duration <= parseFloat(filters.maxDuration);
    return matchesSearch && withinPrice && withinDuration;
  });

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${heroimg})` }}
        aria-label="Hero section with world travel background"
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
            Explore the World with Us
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 drop-shadow">
            Discover amazing places with exclusive deals
          </p>
          <Link
            to="/login"
            className="border border-white text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Search & Filter Section */}
      <div className="px-6 py-10 bg-white">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterPanel filters={filters} setFilters={setFilters} />
      </div>

      {/* Destination Section */}
      <Destination places={filteredDestinations} />

      {/* Other Sections */}
      <Service />
      <BookingForm />
    </>
  );
};

export default Home;

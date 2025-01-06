import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaConciergeBell,
  FaUser,
  FaChild,
} from "react-icons/fa";
import hotelData from "../data/hotels.json";
import { MdOutlineStarPurple500 } from "react-icons/md";
import SearchFilterBar from "../Components/SearchFilterBar";

// Assuming you have a function to fetch hotel data
const fetchHotelData = (id) => {
  // This would typically be an API call, but for now, I'll simulate it
  const hotels = hotelData;
  return hotels.find((hotel) => hotel.id === parseInt(id));
};

const HotelCertainPage = () => {
  const { id } = useParams(); // Access the hotel ID from the URL
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    // Fetch the hotel data when the component mounts
    const fetchedHotel = fetchHotelData(id);
    setHotel(fetchedHotel);
  }, [id]); // Run this effect when the id changes

  const [filters, setFilters] = useState({
    priceRange: [],
    starRating: [],
    location: "",
    checkInDate: "",
    checkOutDate: "",
    rooms: 1,
    adults: 1,
    children: 0,
  });

  useEffect(() => {
    if (!hotel) {
      return;
    }

    const applyFilters = () => {
      let filteredRooms = hotel.rooms;

      // Filter by price range
      if (filters.priceRange.length === 2) {
        const [minPrice, maxPrice] = filters.priceRange;
        filteredRooms = filteredRooms.filter(
          (room) => room.price >= minPrice && room.price <= maxPrice
        );
      }

      // Add more filtering logic (e.g., star rating, location, etc.) as needed

      setHotel((prevHotel) => ({
        ...prevHotel,
        rooms: filteredRooms,
      }));
    };

    applyFilters();
  }, [filters, hotel]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  const handleSearch = (searchParams) => {
    setFilters(searchParams);
  };

  return (
    <div className="lg:mx-48 md:mx-16 mx-8 hotel-detail-page">
      <div className="mb-28"></div>
      <SearchFilterBar onSearch={handleSearch} />
      {/* Photo Gallery */}
      <div className="photo-gallery flex md:flex-row flex-col gap-4 mb-8">
        <div className="main-image w-3/6">
          <img
            src={hotel.images[0]}
            alt={`${hotel.name} main view`}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="side-images flex flex-col w-2/7 gap-2">
          {hotel.images.slice(1, 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${hotel.name} view ${index + 2}`}
              className="w-full h-auto rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Hotel Information */}
      <div className="hotel-info border border-gray-500 p-4 bg-white text-black rounded-md mb-4">
        <h1 className="md:text-2xl text-xl font-bold">{hotel.name}</h1>

        <div className="flex flex-row">
          {[...Array(hotel.stars)].map((_, index) => (
            <MdOutlineStarPurple500
              key={index}
              className="text-orange-500 mb-2"
            />
          ))}
        </div>

        <div className="location text-sm">
          {hotel.address}, {hotel.city}
        </div>
        <div className="border-t border-t-neutral-400 mt-2">
          <p className="text-sm mt-2">{hotel.description}</p>
        </div>
      </div>

      {/* Amenities */}
      <div className="amenities bg-white p-4 text-black rounded-md mb-4">
        <h2 className="text-xl font-bold mb-4">Amenities</h2>
        <ul className="flex flex-row justify-evenly">
          {hotel.amenities.includes("wifi") && (
            <li className="flex flex-col items-center justify-center">
              <FaWifi className="w-12 mb-2 text-blue-500" />{" "}
              <p className="text-sm">Free Wi-Fi</p>
            </li>
          )}
          {hotel.amenities.includes("pool") && (
            <li className="flex flex-col items-center justify-center">
              <FaSwimmingPool className="w-12 mb-2 text-blue-600" />
              <p className="text-sm">Swimming Pool</p>
            </li>
          )}
          {hotel.amenities.includes("concierge") && (
            <li className="flex flex-col items-center justify-center">
              <FaConciergeBell className="w-14 mb-2 text-blue-500" />
              <p className="text-sm">Concierge Service</p>
            </li>
          )}
        </ul>
      </div>

      {/* Booking Options */}
      <div className="booking-options">
        <h2 className="text-2xl font-bold mt-6 mb-4">Available Rooms</h2>
        {hotel.rooms.map((room, index) => (
          <div
            key={index}
            className="room-option bg-white text-black p-4 rounded-md mb-4 flex flex-row gap-4"
          >
            {/* Room Image */}
            <div className="room-image w-1/5">
              <img
                src={room.image}
                alt={`${room.type} view`}
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Room Details */}
            <div className="room-details w-3/5">
              <h3 className="font-bold text-lg mb-2">{room.type}</h3>
              <ul className="text-sm mb-4">
                {room.benefits.map((benefit, idx) => (
                  <li key={idx}>• {benefit}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <FaUser /> <span>{room.adults} Adults</span>
                <FaChild /> <span>{room.children} Children</span>
              </div>
            </div>

            {/* Price and Booking */}
            <div className="room-booking w-1/5 text-center">
              <p className="font-bold text-xl mb-2">RM {room.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCertainPage;

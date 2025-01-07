import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HotelCard from "./HotelCard";
import hotelsData from "../data/hotels.json";

const HotelList = ({ filters }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Load all hotels from the initial dataset
    setHotels(hotelsData);
  }, []);

  // Filter hotels based on location (name or city)
  const filteredHotels = hotels.filter((hotel) => {
    const searchTerm = filters.location.toLowerCase(); // Normalize search term
    const hotelName = hotel.name.toLowerCase();
    const hotelCity = hotel.location.toLowerCase();

    // Check if either the hotel name or the city contains the search term
    return hotelName.includes(searchTerm) || hotelCity.includes(searchTerm);
  });

  return (
    <div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <div className="mb-16 text-center">
            <p>No hotels found for the selected location.</p>
          </div>
        )}
      </div>
    </div>
  );
};
HotelList.propTypes = {
  filters: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default HotelList;

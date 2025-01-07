import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HotelCard from "./HotelCard";
import hotelsData from "../data/hotels.json";

const HotelList = ({ filters }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setHotels(hotelsData);
  }, []);

  const filteredHotels = hotels.filter((hotel) => {
    const searchTerm = filters.location.toLowerCase();
    const hotelName = hotel.name.toLowerCase();
    const hotelCity = hotel.location.toLowerCase();
    return hotelName.includes(searchTerm) || hotelCity.includes(searchTerm);
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <div className="text-center">
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

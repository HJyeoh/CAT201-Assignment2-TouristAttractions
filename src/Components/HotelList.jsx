import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";
import NewHotelCard from "./NewHotelCard"; // Import the new card component
import hotelsData from "../data/hotels.json";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Load all hotels
    setHotels(hotelsData);
  }, []);

  return (
    <div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {hotels.map((hotel) => (
          <NewHotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;

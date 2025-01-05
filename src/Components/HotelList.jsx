import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FilterBar from "./FilterBar";
import HotelCard from "./HotelCard";
import NewHotelCard from "./NewHotelCard"; // Import the new card component
import hotelsData from "../data/hotels.json";
import roomsData from "../data/rooms.json";

const HotelList = ({ filters }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const filterHotels = () => {
      const filteredHotels = hotelsData.filter((hotel) => {
        const matchesLocation =
          !filters.location ||
          hotel.location.toLowerCase().includes(filters.location.toLowerCase());

        const availableRooms =
          roomsData.find((room) => room.hotelId === hotel.id)?.rooms || [];
        const matchesRoom = availableRooms.some(
          (room) =>
            room.adults >= filters.adults &&
            room.children >= filters.children &&
            room.price >= (filters.minPrice || 0) &&
            room.price <= (filters.maxPrice || Infinity)
        );

        return matchesLocation && matchesRoom;
      });

      setHotels(filteredHotels);
      console.log("Filtered hotels: ", filteredHotels);
    };

    filterHotels();
  }, [filters]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 -translate-y-6">
      <FilterBar filters={filters} setFilters={() => {}} />
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <NewHotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

HotelList.propTypes = {
  filters: PropTypes.shape({
    location: PropTypes.string,
    adults: PropTypes.number,
    children: PropTypes.number,
    minPrice: PropTypes.string,
    maxPrice: PropTypes.string,
  }).isRequired,
};

export default HotelList;

import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchFilterBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    onSearch({ location, checkInDate, checkOutDate, rooms, adults, children });
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 -translate-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 text-gray-300">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a destination or hotel name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="date"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
        <input
          type="date"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
        <input
          type="number"
          min="1"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />
        <input
          type="number"
          min="1"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Adults"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
        />
        <input
          type="number"
          min="0"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Children"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleSearch}
        >
          Search Now
        </button>
      </div>
    </div>
  );
};
SearchFilterBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFilterBar;

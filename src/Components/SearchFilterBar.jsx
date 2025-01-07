import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchFilterBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch({ location });
  };

  // Handle reset
  const handleReset = () => {
    setLocation(""); // Clear the location input
    onSearch({ location: "" }); // Notify parent component with the reset filter
  };

  return (
    <div className="bg-white shadow-md rounded-full p-2 -translate-y-8 flex items-center gap-2 text-gray-400 w-[95%] relative">
      {/* Location Input */}
      <div className="flex items-center gap-2 flex-grow text-gray-300">
        <input
          type="text"
          placeholder="Search Hotel or Place"
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Search Button */}
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        onClick={handleSearch}
      >
        Search
      </button>

      {/* Reset Button */}
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

SearchFilterBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFilterBar;

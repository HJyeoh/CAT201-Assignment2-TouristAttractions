import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchFilterBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", location); // Debug log
    onSearch({ location });
  };

  const handleReset = () => {
    console.log("Resetting filters."); // Debug log
    setLocation("");
    onSearch({ location: "" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search on Enter key press
    }
  };

  return (
    <div className="bg-white shadow-md rounded-full p-2 flex items-center gap-2 text-gray-400 w-full relative my-8">
      <div className="flex items-center gap-2 flex-grow text-gray-300">
        <input
          type="text"
          placeholder="Search Hotel or Place"
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          value={location}
          onChange={(e) => {
            console.log("Typed:", e.target.value); // Debug log
            setLocation(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        className="bg-blue-500 text-white md:px-6 md:py-2 p-2 rounded-full hover:bg-blue-600 transition"
        onClick={handleSearch}
      >
        Search
      </button>
      <button
        className="bg-green-500 text-white md:px-6 md:py-2 p-2 rounded-full hover:bg-green-600 transition"
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

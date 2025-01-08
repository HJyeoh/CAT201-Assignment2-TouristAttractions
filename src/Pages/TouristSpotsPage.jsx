import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sections } from '../Asset/Tourist_Spots'; // Import the data from the external file

const categories = ["All", "Nature and Adventure", "History and Heritage", "Culture and Spirituality", "Urban Exploration"];

const TouristSpotsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter spots by search term (case-insensitive)
  const filterSpots = (spots) => {
    return spots.filter(spot =>
      spot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Get the spots based on the selected category
  const getFilteredSpots = () => {
    if (selectedCategory === 'All') {
      // Combine all sections into one list
      const allSpots = [
        ...sections.natureAdventure,
        ...sections.historyHeritage,
        ...sections.cultureSpirituality,
        ...sections.urbanExploration,
      ];
      return filterSpots(allSpots);
    }

    // Filter by category
    switch (selectedCategory) {
      case "Nature and Adventure":
        return filterSpots(sections.natureAdventure);
      case "History and Heritage":
        return filterSpots(sections.historyHeritage);
      case "Culture and Spirituality":
        return filterSpots(sections.cultureSpirituality);
      case "Urban Exploration":
        return filterSpots(sections.urbanExploration);
      default:
        return [];
    }
  };

  return (
    <div className="container mx-auto py-6 px-4 sm:px-8">
      {/* Search and Category Controls */}
      <div className="mb-8 mt-2 flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 sm:mb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Filter by ${category}`}
              className={`px-4 py-2 border rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                selectedCategory === category
                  ? "bg-gray-600 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for tourist spots..."
          aria-label="Search tourist spots"
          className="px-4 py-2 border rounded w-full sm:w-1/3 text-black"
        />
      </div>

      {/* Display Filtered Tourist Spots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {getFilteredSpots().length === 0 ? (
          <div className="text-center text-lg font-bold text-gray-600">No spots found</div>
        ) : (
          getFilteredSpots().map((spot, index) => (
            <Link 
              to={spot.link} 
              key={index} 
              className="text-center transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={spot.img}
                alt={spot.name}
                className="w-40 h-40 object-cover mb-2 sm:mb-3 rounded-full mx-auto transition-all duration-300 ease-in-out"
              />
              <p className="text-sm sm:text-lg font-semibold">{spot.name}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default TouristSpotsPage;

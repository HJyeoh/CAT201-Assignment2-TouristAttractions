import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RelatedSpots = ({ currentSpotId, sections, title = "Related Spots", maxSpots = 3, hoverEffect = true }) => {
  // Check if sections exist and are not empty
  if (!sections || Object.keys(sections).length === 0) {
    return <p>No related spots available.</p>;
  }

  // Flatten the sections to get all spots and exclude the current spot
  const allSpots = Object.values(sections)
    .flat()
    .filter(spot => spot.link !== `/${currentSpotId}`);
  
  // Randomly shuffle spots and limit the number of spots to display
  const randomSpots = allSpots.length > maxSpots 
    ? allSpots.sort(() => 0.5 - Math.random()).slice(0, maxSpots)
    : allSpots.sort(() => 0.5 - Math.random());

  return (
    <div className="mt-12 w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {randomSpots.length > 0 ? (
          randomSpots.map((relatedSpot, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg ${
                hoverEffect ? "hover:bg-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out" : ""
              }`}
            >
              {/* Ensure image exists */}
              {relatedSpot.img && (
                <img
                  src={relatedSpot.img}
                  alt={relatedSpot.name || "Related Tourist Spot"}
                  className="w-full h-40 object-cover mb-4 rounded transition-all duration-300 ease-in-out"
                />
              )}
              <h3 className="text-lg font-bold text-white mb-2">{relatedSpot.name || "Unnamed Spot"}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {relatedSpot.description || "No description available."}
              </p>
              {/* Replace a href with Link */}
              <Link to={relatedSpot.link} className="text-blue-500 hover:underline">
                Learn More
              </Link>
            </div>
          ))
        ) : (
          <p>No related spots available.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedSpots;

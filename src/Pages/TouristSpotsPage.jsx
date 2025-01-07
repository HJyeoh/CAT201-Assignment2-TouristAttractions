import React from 'react';
import { Link } from 'react-router-dom';
import { sections } from '../Asset/Tourist_Spots'; // Import the data from the external file

const TouristSpotsPage = () => {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-8">
      {/* Nature and Adventure Section */}
      <section className="mb-16 mt-12 sm:mb-24 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Nature and Adventure</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.natureAdventure.map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img src={spot.img} alt={spot.name} className="w-full h-40 object-cover mb-2 sm:mb-3" />
              <p className="text-sm sm:text-lg font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* History and Heritage Section */}
      <section className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">History and Heritage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.historyHeritage.map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img src={spot.img} alt={spot.name} className="w-full h-40 object-cover mb-2 sm:mb-3" />
              <p className="text-sm sm:text-lg font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Culture and Spirituality Section */}
      <section className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Culture and Spirituality</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.cultureSpirituality.map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img src={spot.img} alt={spot.name} className="w-full h-40 object-cover mb-2 sm:mb-3" />
              <p className="text-sm sm:text-lg font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Urban Exploration Section */}
      <section className="mb-12 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Urban Exploration</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.urbanExploration.map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img src={spot.img} alt={spot.name} className="w-full h-40 object-cover mb-2 sm:mb-3" />
              <p className="text-sm sm:text-lg font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TouristSpotsPage;

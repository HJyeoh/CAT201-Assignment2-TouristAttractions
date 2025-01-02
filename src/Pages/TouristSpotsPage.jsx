import React from 'react';
import { Link } from 'react-router-dom';
import { sections } from '../Asset/Tourist_Spots'; // Import the data from the external file

const TouristSpotsPage = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Nature and Adventure Section */}
      <section className="mb-24 mt-16">
        <h2 className="text-3xl font-bold text-center mb-4">Nature and Adventure</h2>
        <div className="grid grid-cols-3 gap-6">
          {sections.natureAdventure.map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img src={spot.img} alt={spot.name} className="w-full h-48 object-cover mb-2" />
              <p className="text-lg font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* History and Heritage Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-4">History and Heritage</h2>
        <div className="grid grid-cols-3 gap-6">
          {sections.historyHeritage.map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img src={spot.img} alt={spot.name} className="w-full h-48 object-cover mb-2" />
              <p className="text-lg font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Culture and Spirituality Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-4">Culture and Spirituality</h2>
        <div className="grid grid-cols-3 gap-6">
          {sections.cultureSpirituality.map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img src={spot.img} alt={spot.name} className="w-full h-48 object-cover mb-2" />
              <p className="text-lg font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Urban Exploration Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">Urban Exploration</h2>
        <div className="grid grid-cols-3 gap-6">
          {sections.urbanExploration.map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img src={spot.img} alt={spot.name} className="w-full h-48 object-cover mb-2" />
              <p className="text-lg font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TouristSpotsPage;

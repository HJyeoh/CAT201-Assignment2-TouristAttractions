import React from 'react';
import { useParams } from 'react-router-dom';
import { sections } from '../Asset/Tourist_Spots'; 
import VideoEmbed from '../Components/VideoEmbed';
import GoogleMapEmbed from '../Components/GoogleMapEmbed';
import RelatedSpots from '../Components/RelatedSpots';

const TouristSpotsCertainPage = () => {
  const { spotId } = useParams(); // Get the 'spotId' from the URL

  // Find the spot that matches the 'spotId' from the sections
  const spot = Object.values(sections).flat().find(s => s.link === `/${spotId}`);

  if (!spot) {
    return <p>Spot not found!</p>;
  }

  return (
    <div className="flex flex-col items-center mt-20 mb-12 ml-10 mr-10">
      <div className="flex flex-col md:flex-row items-center mb-10 w-full">
        <img
          src={spot.img}
          alt={spot.name}
          className="w-500 h-500 object-cover mb-6 md:mb-0 md:mr-6" 
        />
        <div>
          <h1 className="text-4xl font-bold mb-10">{spot.name}</h1>
          <p className="text-xl text-white">{spot.description}</p>
        </div>
      </div>

      {/* Google Maps */}
      <h2 className="text-2xl font-bold mt-20 mb-6">Location</h2>
      <GoogleMapEmbed mapLink={spot.googleMapsLink} />

      {/* YouTube Video Section */}
      <div className="mt-20 w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Related Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spot.videos && spot.videos.map((videoLink, index) => (
            <VideoEmbed key={index} videoLink={videoLink} />
          ))}
        </div>
      </div>
     
      <div className='mt-20 mb-20'><
        RelatedSpots 
        currentSpotId={spotId}  
        sections={sections} 
        title="Related Spots" 
        maxSpots={3} 
        hoverEffect={true}
      />
      </div>
      

      
    </div>
  );
};

export default TouristSpotsCertainPage;

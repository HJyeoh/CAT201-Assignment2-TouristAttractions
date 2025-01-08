import React from 'react';
import { useParams } from 'react-router-dom';
import { sections } from '../Asset/Tourist_Spots';
import VideoEmbed from '../Components/VideoEmbed';
import GoogleMapEmbed from '../Components/GoogleMapEmbed';
import RelatedSpots from '../Components/RelatedSpots';

const TouristSpotsCertainPage = () => {
  const { spotId } = useParams(); // Get the 'spotId' from the URL
  
  window.scrollTo(0, 0);

  // Find the spot that matches the 'spotId' from the sections
  const spot = Object.values(sections).flat().find((s) => s.link === `/${spotId}`);

  if (!spot) {
    return <p className="text-center mt-20 text-lg font-medium">Spot not found!</p>;
  }

  return (
    <div className="flex flex-col items-center mt-12 mb-12 px-4 sm:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center w-full gap-8">
        {/* Keep the initial picture size */}
        <img
          src={spot.img}
          alt={spot.name}
          className="w-full sm:w-96 md:w-[600px] h-auto object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">{spot.name}</h1>
          <p className="text-base sm:text-lg text-white leading-relaxed">{spot.description}</p>
        </div>
      </div>

      {/* Google Maps */}
      <h2 className="text-xl sm:text-2xl font-bold mt-12 mb-6 text-center">Location</h2>
      <GoogleMapEmbed mapLink={spot.googleMapsLink} />

      {/* Related Videos Section */}
      {spot.videos && spot.videos.length > 0 && (
        <div className="mt-12 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Related Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spot.videos.map((videoLink, index) => (
              <VideoEmbed key={index} videoLink={videoLink} />
            ))}
          </div>
        </div>
      )}

      {/* Related Spots Section */}
      <div className="mt-12 w-full">
        <RelatedSpots
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

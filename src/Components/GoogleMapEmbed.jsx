import React from 'react';

const GoogleMapEmbed = ({ mapLink }) => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src={mapLink} // Link to the Google Maps location
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;

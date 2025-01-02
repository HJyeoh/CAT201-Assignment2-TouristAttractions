import React from 'react';
import { sections } from '../Asset/Tourist_Spots';

const VideoEmbed = ({ videoLink }) => {
  return (
    <div className="flex justify-center">
      <iframe
        width="100%"
        height="315"
        src={videoLink}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;

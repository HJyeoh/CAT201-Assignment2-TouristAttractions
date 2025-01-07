import React from "react";
import PropTypes from "prop-types";
import HotelCard from "./HotelCard";

const RelatedHotel = ({ hotels }) => {
  // Filter hotels with a rating greater than 7
  const filteredHotels = hotels.filter((hotel) => hotel.rating > 7);

  // Shuffle and pick 3 random hotels
  const randomHotels = filteredHotels
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="related-hotels">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {randomHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

RelatedHotel.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
      stars: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RelatedHotel;

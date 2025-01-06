import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const truncatedDescription =
    hotel.description.length > 100
      ? `${hotel.description.slice(0, 100)}...more`
      : hotel.description;

  const handleCardClick = () => {
    navigate(`/hotel/${hotel.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-md flex flex-col lg:flex-row overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
      onClick={handleCardClick} // Ensure this is on the parent div
    >
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full lg:w-1/3 h-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold mb-1 text-black">
            {hotel.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            ⭐ {Math.floor(hotel.rating)} ({hotel.reviews} Reviews)
          </p>
          <p className="text-sm text-gray-700 mb-4">{truncatedDescription}</p>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from propagating to the parent
              console.log("Button Clicked!");
            }}
          >
            Select
          </button>
          <div className="text-right">
            <p className="text-lg font-semibold text-blue-500">
              RM {hotel.price}
            </p>
            <p className="text-sm text-gray-500">Taxes incl.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default HotelCard;

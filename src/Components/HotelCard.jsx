import React from "react";
import PropTypes from "prop-types";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  // Format rating to one decimal place
  const formattedRating = hotel.rating.toFixed(1);

  // Determine the rating description
  let ratingDescription = "";
  if (formattedRating > 9) {
    ratingDescription = "Excellent";
  } else if (formattedRating > 8) {
    ratingDescription = "Very Good";
  } else if (formattedRating > 7) {
    ratingDescription = "Good";
  }

  // Handle card click
  const handleCardClick = () => {
    navigate(`/hotel/${hotel.id}`); // Redirect to a specific hotel page using the hotel ID
  };

  return (
    <div
      className="hotel-card flex flex-col items-left text-left bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform transform cursor-pointer z-10"
      onClick={handleCardClick} // Add onClick handler here
    >
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="text-left px-4 pb-4 flex flex-col">
        <h3 className="md:text-xl text-lg font-bold text-black">
          {hotel.name}
        </h3>

        <div className="flex flex-row my-1 mb-2 items-center">
          {[...Array(hotel.stars)].map((_, index) => (
            <MdOutlineStarPurple500 key={index} className="text-orange-500" />
          ))}
          <div className="rounded-xl bg-[#FEBB02] px-2 py-1 mx-2">
            <p className="text-gray-700 text-xs font-semibold">
              {formattedRating}
            </p>
          </div>
          <p className="text-gray-700 font-semibold text-sm mr-1">
            {ratingDescription}{" "}
          </p>
          <p className="text-gray-700 text-sm">({hotel.reviews} ratings)</p>
        </div>

        <div className="flex flex-row items-baseline mb-2">
          <FaLocationDot className="text-gray-500 mr-2" />
          <p className="text-lg text-gray-700">{hotel.city}</p>
        </div>
        <p className="text-black font-normal text-md mb-2">
          From{" "}
          <span className="text-blue-500 font-bold text-xl">
            RM {hotel.price}
          </span>{" "}
          / per night
        </p>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired, // Ensure `id` is included
  }).isRequired,
};

export default HotelCard;

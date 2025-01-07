import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaWifi,
  FaSwimmingPool,
  FaConciergeBell,
  FaUser,
  FaChild,
} from "react-icons/fa";
import hotelData from "../data/hotels.json";
import { MdOutlineStarPurple500, MdOutlineFreeBreakfast } from "react-icons/md";
import GoogleMapEmbed from "../Components/GoogleMapEmbed";
import RelatedHotel from "../Components/RelatedHotel";

const fetchHotelData = (id) => {
  const hotels = hotelData;
  return hotels.find((hotel) => hotel.id === parseInt(id));
};

const HotelCertainPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [filteredRooms, setFilteredRooms] = useState([]); // Separate state for filtered rooms

  const [filters, setFilters] = useState({
    priceRange: [],
    starRating: [],
    location: "",
    checkInDate: "",
    checkOutDate: "",
    rooms: 1,
    adults: 1,
    children: 0,
  });

  useEffect(() => {
    const fetchedHotel = fetchHotelData(id);
    setHotel(fetchedHotel);
    if (fetchedHotel) {
      setFilteredRooms(fetchedHotel.rooms); // Initialize filtered rooms
    }
  }, [id]);

  useEffect(() => {
    if (!hotel) return;

    const applyFilters = () => {
      let rooms = hotel.rooms;

      if (filters.priceRange.length === 2) {
        const [minPrice, maxPrice] = filters.priceRange;
        rooms = rooms.filter(
          (room) => room.price >= minPrice && room.price <= maxPrice
        );
      }

      // Add more filtering logic here if needed

      setFilteredRooms(rooms); // Update filtered rooms instead of hotel
    };

    applyFilters();
  }, [filters, hotel]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:mx-32 md:mx-16 mx-8 hotel-detail-page mb-8">
      <div className="mb-24"></div>

      {/* Photo Gallery */}
      <div className="photo-gallery flex md:flex-row flex-col md:gap-4 gap-2 md:mb-8 mb-4">
        <div className="main-image md:w-3/6 w-full">
          <img
            src={hotel.images[0]}
            alt={`${hotel.name} main view`}
            className="w-full h-[101%] rounded-md"
          />
        </div>
        <div className="side-images md:w-[50%]">
          <div className="grid md:grid-cols-2 grid-cols-4 md:gap-4 gap-2">
            {hotel.images.slice(1, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${hotel.name} view ${index + 2}`}
                className=" h-auto rounded-md"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hotel Information */}
      <div className="hotel-info border border-gray-500 p-4 bg-white text-black rounded-md mb-4">
        <h1 className="md:text-2xl text-xl font-bold">{hotel.name}</h1>

        <div className="flex flex-row">
          {[...Array(hotel.stars)].map((_, index) => (
            <MdOutlineStarPurple500
              key={index}
              className="text-orange-500 mb-2"
            />
          ))}
        </div>

        <div className="location text-sm">
          {hotel.address}, {hotel.city}
        </div>
        <div className="border-t border-t-neutral-400 mt-2">
          <p className="text-sm mt-2">{hotel.description}</p>
        </div>
      </div>

      {/* Amenities */}
      <div className="amenities bg-white p-4 text-black rounded-md mb-4">
        <h2 className="text-xl font-bold mb-4">Amenities and facilities</h2>
        <ul className="flex flex-row justify-evenly">
          {hotel.amenities.includes("breakfast") && (
            <li className="flex flex-col items-center justify-center">
              <MdOutlineFreeBreakfast className="w-14 mb-2 text-blue-500" />
              <p className="text-sm">Breakfast</p>
            </li>
          )}
          {hotel.amenities.includes("wifi") && (
            <li className="flex flex-col items-center justify-center">
              <FaWifi className="w-12 mb-2 text-blue-500" />{" "}
              <p className="text-sm">Free Wi-Fi</p>
            </li>
          )}
          {hotel.amenities.includes("pool") && (
            <li className="flex flex-col items-center justify-center">
              <FaSwimmingPool className="w-12 mb-2 text-blue-600" />
              <p className="text-sm">Swimming Pool</p>
            </li>
          )}
          {hotel.amenities.includes("concierge") && (
            <li className="flex flex-col items-center justify-center">
              <FaConciergeBell className="w-14 mb-2 text-blue-500" />
              <p className="text-sm">Concierge Service</p>
            </li>
          )}
        </ul>
      </div>

      {/* Booking Options */}
      <div className="booking-options">
        <h2 className="text-2xl font-bold mt-6 mb-4">Available Rooms</h2>
        {filteredRooms.map((room, index) => (
          <div
            key={index}
            className="room-option bg-white text-black p-4 rounded-md mb-4 flex flex-row gap-4"
          >
            {/* Room Image */}
            <div className="room-image lg:w-1/5 w-2/5">
              <img
                src={room.image}
                alt={`${room.type} view`}
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Room Details */}
            <div className="room-details md:w-3/5">
              <h3 className="font-bold text-lg mb-2">{room.type}</h3>
              <ul className="text-md mb-4">
                {room.benefits.map((benefit, idx) => (
                  <li key={idx}>• {benefit}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-gray-700">
                <FaUser className="" /> <span>{room.adults} Adults</span>
                <FaChild /> <span>{room.children} Children</span>
              </div>
              <div className="md:hidden text-justify">
                <p className="font-bold text-xl my-2">
                  RM {room.price}{" "}
                  <span className="font-normal text-base ">/ per night</span>
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Book Now
                </button>
              </div>
            </div>

            {/* Price and Booking */}
            <div className="room-booking lg:w-1/5 md:w-2/5 text-center items-center justify-center p-8 hidden md:block">
              <p className="font-bold text-xl mb-2">RM {room.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-6 mb-4">Location </h2>
        <GoogleMapEmbed mapLink={hotel.googleMapsLink} />
      </div>
      <RelatedHotel hotels={hotelData} />
    </div>
  );
};

export default HotelCertainPage;

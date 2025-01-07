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
  const [filteredRooms, setFilteredRooms] = useState([]);

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
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);

    const fetchedHotel = fetchHotelData(id);
    setHotel(fetchedHotel);
    if (fetchedHotel) {
      setFilteredRooms(fetchedHotel.rooms);
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

      setFilteredRooms(rooms);
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
      <div
        id="top"
        className="photo-gallery grid grid-cols-1 md:grid-cols-5 gap-4 md:mb-8 mb-4 max-h-[533px] overflow-hidden"
      >
        {/* Main Image */}
        <div className="main-image col-span-1 md:col-span-3 max-h-[533px] overflow-hidden">
          <img
            src={hotel.images[0]}
            alt={`${hotel.name} main view`}
            className="w-full h-full rounded-md object-cover"
            loading="lazy" // Ensure lazy loading is supported for faster load
          />
        </div>
        {/* Side Images */}
        <div className="side-images grid md:grid-cols-2 grid-cols-4 md:col-span-2 gap-4">
          {hotel.images.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${hotel.name} view ${index + 2}`}
              className="w-full h-full rounded-md object-cover max-h-[533px]"
              loading="lazy"
            />
          ))}
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
              <FaWifi className="w-12 mb-2 text-blue-500" />
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
            className="room-option bg-white text-black rounded-md mb-4 flex flex-row gap-4"
          >
            {/* Room Image */}
            <div className="room-image lg:w-1/5 w-2/5">
              <img
                src={room.photo}
                alt={`${room.type} view`}
                className="w-full h-full rounded-l-md"
                loading="lazy"
              />
            </div>

            {/* Room Details */}
            <div className="room-details md:w-3/5 p-4">
              <h3 className="font-bold text-lg mb-2">{room.type}</h3>
              <ul className="text-md mb-4">
                {room.benefits.map((benefit, idx) => (
                  <li key={idx}>• {benefit}</li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-gray-700">
                <FaUser /> <span>{room.adults} Adults</span>
                {room.children > 0 && (
                  <>
                    <FaChild /> <span>{room.children} Children</span>
                  </>
                )}
              </div>
              <div className="md:hidden text-justify">
                <p className="font-bold text-xl my-2">
                  RM {room.price}{" "}
                  <span className="font-normal text-base">/ per night</span>
                </p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() =>
                    room.link
                      ? window.location.assign(room.link)
                      : alert("This room is not available now!")
                  }
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Price and Booking */}
            <div className="room-booking lg:w-1/5 md:w-2/5 text-center items-center justify-center p-8 py-14 hidden md:block">
              <p className="font-bold text-xl mb-2">RM {room.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() =>
                  room.link
                    ? window.location.assign(room.link)
                    : alert("This room is not available now!")
                }
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-6 mb-4">Location</h2>
        <GoogleMapEmbed mapLink={hotel.googleMap} />
      </div>
      <RelatedHotel hotels={hotelData} />
    </div>
  );
};

export default HotelCertainPage;

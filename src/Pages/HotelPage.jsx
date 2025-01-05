import { useState } from "react";
import SearchFilterBar from "../Components/SearchFilterBar";
import HotelList from "../Components/HotelList";

const HotelPage = () => {
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

  const handleSearch = (searchParams) => {
    setFilters(searchParams);
  };
  return (
    <div className="lg:mx-32 md:mx-16 mx-8">
      <SearchFilterBar onSearch={handleSearch} />
      <HotelList filters={filters} />
    </div>
  );
};

export default HotelPage;

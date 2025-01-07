import { useState } from "react";
import SearchFilterBar from "../Components/SearchFilterBar";
import HotelList from "../Components/HotelList";

const HotelPage = () => {
  const [filters, setFilters] = useState({ location: "" });

  const handleSearch = (searchParams) => {
    console.log("Filters updated:", searchParams); // Debug log
    setFilters((prevFilters) => ({ ...prevFilters, ...searchParams }));
  };

  return (
    <div className="lg:mx-32 md:mx-16 mx-8">
      <SearchFilterBar onSearch={handleSearch} />
      <HotelList filters={filters} />
    </div>
  );
};

export default HotelPage;

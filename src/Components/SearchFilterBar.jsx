import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";

const SearchFilterBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestsDropdownOpen, setGuestsDropdownOpen] = useState(false);
  const [locationFocus, setLocationFocus] = useState(false);
  const [checkInFocus, setCheckInFocus] = useState(false);
  const [checkOutFocus, setCheckOutFocus] = useState(false);

  const handleSearch = () => {
    onSearch({ location, checkInDate, checkOutDate, rooms, adults, children });
  };

  return (
    <div className="bg-white shadow-md rounded-full p-4 -translate-y-8 flex flex-wrap items-center gap-4 text-gray-400 w-[95%] relative">
      {/* Location Input */}
      <div className="flex items-center gap-2 flex-grow md:flex-none w-full md:w-auto text-gray-300">
        <input
          type="text"
          placeholder="Search Hotel or Place"
          className={`w-full md:w-auto border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            locationFocus ? "text-black" : "text-gray-400"
          }`}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onFocus={() => setLocationFocus(true)}
          onBlur={() => setLocationFocus(false)}
        />
      </div>

      {/* Check-In and Check-Out Dates */}
      <div className="flex items-center gap-2 flex-grow md:flex-none w-full md:w-auto">
        <div className="relative">
          <input
            type="date"
            className={`w-full md:w-auto border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              checkInFocus ? "text-black" : "text-gray-400"
            }`}
            value={checkInDate}
            onFocus={() => {
              setCheckInFocus(true);
              setGuestsDropdownOpen(false);
            }}
            onBlur={() => setCheckInFocus(false)}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <span className="text-gray-500 mx-2">to</span>
        <div className="relative">
          <input
            type="date"
            className={`w-full md:w-auto border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              checkOutFocus ? "text-black" : "text-gray-400"
            }`}
            value={checkOutDate}
            onFocus={() => {
              setCheckOutFocus(true);
              setGuestsDropdownOpen(false);
            }}
            onBlur={() => setCheckOutFocus(false)}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
      </div>

      {/* Guests (Rooms, Adults, Children) */}
      <div className="relative flex items-center gap-2 flex-grow md:flex-none w-full md:w-auto">
        <FaUser className="text-gray-500" />
        <div
          className="flex items-center justify-between w-full border border-gray-300 rounded-full px-4 py-2 cursor-pointer"
          onClick={() => setGuestsDropdownOpen(!guestsDropdownOpen)}
        >
          {`${rooms} Rooms, ${adults} Adults, ${children} Children`}
        </div>
        {guestsDropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-xl shadow-lg mt-2 z-30">
            {/* Rooms */}
            <div className="flex items-center justify-between px-4 py-2">
              <span>Rooms</span>
              <div className="flex items-center">
                <button
                  className="px-2 py-1"
                  onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}
                >
                  -
                </button>
                <span>{rooms}</span>
                <button
                  className="px-2 py-1"
                  onClick={() => setRooms(rooms + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {/* Adults */}
            <div className="flex items-center justify-between px-4 py-2">
              <span>Adults</span>
              <div className="flex items-center">
                <button
                  className="px-2 py-1"
                  onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}
                >
                  -
                </button>
                <span>{adults}</span>
                <button
                  className="px-2 py-1"
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {/* Children */}
            <div className="flex items-center justify-between px-4 py-2">
              <span>Children</span>
              <div className="flex items-center">
                <button
                  className="px-2 py-1"
                  onClick={() => setChildren(children > 0 ? children - 1 : 0)}
                >
                  -
                </button>
                <span>{children}</span>
                <button
                  className="px-2 py-1"
                  onClick={() => setChildren(children + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

SearchFilterBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFilterBar;

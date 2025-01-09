import React, { useState } from "react";
import { Link } from "react-router-dom";
import events from "../data/events.json";

const quarters = {
  "Jan-Mar": [1, 2, 3],
  "Apr-Jun": [4, 5, 6],
  "Jul-Sep": [7, 8, 9],
  "Oct-Dec": [10, 11, 12],
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const EventsPage = () => {
  const [selectedQuarter, setSelectedQuarter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const isEventInQuarter = (event, quarterMonths) => {
    const eventStartMonth = new Date(event.startDate).getMonth() + 1;
    const eventEndMonth = event.endDate
      ? new Date(event.endDate).getMonth() + 1
      : eventStartMonth;

    return quarterMonths.some((month) => {
      return (
        (eventStartMonth <= month && eventEndMonth >= month) ||
        eventStartMonth === month ||
        eventEndMonth === month
      );
    });
  };

  const filteredEvents = events.filter((event) => {
    const matchesQuarter =
      selectedQuarter === "All" ||
      isEventInQuarter(event, quarters[selectedQuarter]);
    const matchesSearchTerm =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.details.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesQuarter && matchesSearchTerm;
  });

  return (
    <div className="p-8">
      <div className="mb-6 flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        {["All", "Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"].map((quarter) => (
          <button
            key={quarter}
            onClick={() => setSelectedQuarter(quarter)}
            className={`px-4 py-2 border rounded hover:bg-gray-600 ${
              selectedQuarter === quarter
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            {quarter}
          </button>
        ))}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search events..."
          className="px-4 py-2 border rounded w-full md:w-1/3 text-black"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="p-4 shadow-md flex flex-col transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            <Link to={`/events/${event.id}`}>
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-auto mb-4 aspect-[4/3] object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-2">
                Date: {formatDate(event.startDate)}{" "}
                {event.endDate && `- ${formatDate(event.endDate)}`}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

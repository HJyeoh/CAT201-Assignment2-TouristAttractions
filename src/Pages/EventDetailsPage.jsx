import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/events.json"; 


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

const EventDetailsPage = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  window.scrollTo(0, 0);

  return (
    <div className="p-8 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <img
          src={event.poster}
          alt={event.title}
          className="w-96 h-auto mb-4 md:mb-0 md:mr-8 object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
          <p className="text-gray-400 mb-2">
            Date: {formatDate(event.startDate)}{" "}
            {event.endDate && `- ${formatDate(event.endDate)}`}
          </p>
          <p className="text-gray-600">{event.details}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;

import { Link } from 'react-router-dom';
import { sections } from '../Asset/Tourist_Spots'; // Data for Tourist Spots
/*import foodData from '../Asset/Food'; // Data for Food
import hotelData from '../Asset/Hotels'; // Data for Hotels*/
import events from '../data/events.json'; // Data for Events

const HomePage = () => {
  
  const getTopThree = (data) => data.slice(0, 3);

  return (
    <div className="container mx-auto px-4 mt-20">

      {/* Tourist Spots Section */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Tourist Spots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getTopThree(sections.natureAdventure).map((spot, index) => (
            <Link to={spot.link} key={index} className="text-center">
              <img
                src={spot.img}
                alt={spot.name}
                className="w-full h-48 sm:h-56 md:h-48 object-cover mb-4 rounded-lg mx-auto"
              />
              <p className="text-sm sm:text-base font-semibold">{spot.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Food & Beverages Section */}
    {/*  <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Foods & Beverages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getTopThree(foodData).map((food, index) => (
            <Link to={`/food/${food.id}`} key={index} className="text-center">
              <img
                src={food.img}
                alt={food.name}
                className="w-full h-48 sm:h-56 md:h-48 object-cover mb-4 rounded-lg mx-auto"
              />
              <p className="text-sm sm:text-base font-semibold">{food.name}</p>
            </Link>
          ))}
        </div>
      </section>*/}

      {/* Hotels Section */}
      {/*<section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getTopThree(hotelData).map((hotel, index) => (
            <Link to={`/hotel/${hotel.id}`} key={index} className="text-center">
              <img
                src={hotel.img}
                alt={hotel.name}
                className="w-full h-48 sm:h-56 md:h-48 object-cover mb-4 rounded-lg mx-auto"
              />
              <p className="text-sm sm:text-base font-semibold">{hotel.name}</p>
            </Link>
          ))}
        </div>
      </section>*/}

      {/* Events & Festivals Section */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Events & Festivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getTopThree(events).map((event, index) => (
            <Link to={`/events/${event.id}`} key={index} className="text-center">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-48 sm:h-56 md:h-48 object-cover mb-4 rounded-lg mx-auto"
              />
              <p className="text-sm sm:text-base font-semibold">{event.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

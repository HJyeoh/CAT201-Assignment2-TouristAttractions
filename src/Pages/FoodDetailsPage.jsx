import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import foods from "../data/foods.json";
import locations from "../data/locations.json";

const FoodDetailsPage = () => {
  const { id } = useParams();
  const currentFood = foods.find((food) => food.id === parseInt(id));
  const foodLocations = locations.find((location) => location.foodId === parseInt(id));

  // Ensure the page scrolls to the top when loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!currentFood) return <div>Food not found!</div>;

  return (
    <div className="p-4 sm:p-8 mt-12 sm:mt-24">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Main Image */}
        <div className="flex-shrink-0 w-full sm:w-96 md:w-[600px] mb-4 sm:mb-0">
          <img
            src={currentFood.image}
            alt={currentFood.name}
            className="w-full h-auto object-cover rounded-md transition-transform transform hover:scale-105 ease-in-out duration-300"
          />
        </div>

        {/* Text Information */}
        <div className="text-center sm:text-left mt-6 sm:mt-0 sm:max-w-[600px]">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-4">
            {currentFood.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-100 leading-relaxed">{currentFood.description}</p>
        </div>
      </div>

      {/* Must-Try Spots Section */}
      <section className="mt-8 sm:mt-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-md py-2">
          Must-Try Spots
        </h2>

        {foodLocations ? (
          foodLocations.locations.map((location, index) => (
            <div key={index} className="max-w-screen-xl mx-auto mb-8">
              <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
                {/* Location Title */}
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">{location.locationName}</h3>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
                  {/* Location Images */}
                  <div className="flex flex-col sm:flex-row sm:w-full gap-4 sm:gap-6">
                    <div className="flex justify-center sm:w-[48%] w-full">
                      <img
                        src={location.image1}
                        alt={`${location.locationName} 1`}
                        className="object-cover rounded-md w-full h-[250px] sm:h-[300px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex justify-center sm:w-[48%] w-full">
                      <img
                        src={location.image2}
                        alt={`${location.locationName} 2`}
                        className="object-cover rounded-md w-full h-[250px] sm:h-[300px]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Location Description */}
                  <div className="sm:w-1/2 flex flex-col justify-center mt-4 sm:mt-0">
                    <p className="text-gray-600 text-base">{location.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-600">No locations found.</p>
        )}
      </section>
    </div>
  );
};

export default FoodDetailsPage;

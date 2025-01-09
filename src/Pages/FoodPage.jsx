import React, { useState } from "react";
import { Link } from "react-router-dom";
import foodData from "../data/foods.json"; // Adjust the path as needed

const categories = ["All", "Desserts", "Main Courses", "Snacks", "Drinks"];

const FoodPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering the food items based on category and search term
  const filteredFood = foodData.filter((food) => {
    const matchesCategory =
      selectedCategory === "All" || food.category === selectedCategory;
    const matchesSearchTerm =
      food.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  

  return (
    <div className="p-8">
      {/* Category and Search Controls */}
      <div className="mb-6 flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            aria-label={`Filter by ${category} category`}
            className={`px-4 py-2 border rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
              selectedCategory === category
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            {category}
          </button>
        ))}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search food..."
          aria-label="Search food"
          className="px-4 py-2 border rounded w-full md:w-1/3 text-black"
        />
      </div>

      {/* Conditional Rendering for Filtered Results */}
      {filteredFood.length === 0 ? (
        <div className="text-center text-lg font-bold text-gray-600">
          Food item not found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
          {filteredFood.map((food) => (
            <Link
              key={food.id}
              to={`/food/${food.id}`}
              className="p-4 shadow-md flex flex-col bg-black rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-auto mb-4 aspect-[4/3] object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{food.name}</h3>
              <p className="text-gray-400 mb-2">Category: {food.category}</p>
              <p className="text-gray-400 mb-2">Price Range: RM {food.priceRange}</p>
              <p className="text-gray-500">{food.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodPage;

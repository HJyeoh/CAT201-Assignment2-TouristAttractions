import React, { useEffect } from "react";

const AboutPage = () => {

  window.scrollTo(0, 0);
  
  return (
    <div className="container mx-auto px-4 sm:px-8 py-12 bg-gray-900 text-white">
      {/* Meet Our Team Section */}
      <div className="mt-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Member 1 */}
          <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img
              src="/member/member1.jpg"
              alt="Member 1"
              className="w-32 h-32 rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-yellow-400 hover:text-blue-500 transition duration-300">
              Yeoh Hao Jing
            </h3>
            <p className="text-gray-400">Leader</p>
          </div>

          {/* Member 2 */}
          <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img
              src="/member/member2.jpg"
              alt="Member 2"
              className="w-32 h-32 rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-yellow-400 hover:text-blue-500 transition duration-300">
              Woo Pei Wen
            </h3>
            <p className="text-gray-400">Member 2</p>
          </div>

          {/* Member 3 */}
          <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img
              src="/member/member3.jpg"
              alt="Member 3"
              className="w-32 h-32 rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-yellow-400 hover:text-blue-500 transition duration-300">
              Liew Choy Yein
            </h3>
            <p className="text-gray-400">Member 3</p>
          </div>

          {/* Member 4 */}
          <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img
              src="/member/member4.jpg"
              alt="Member 4"
              className="w-32 h-32 rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-yellow-400 hover:text-blue-500 transition duration-300">
              Chua Pei Jun
            </h3>
            <p className="text-gray-400">Member 4</p>
          </div>
        </div>
      </div>

      {/* Why Choose Penang Go Fun! Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4">
          Why Choose <span className="text-yellow-400">Penang Go Fun!</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          Penang Go Fun! is your ultimate travel companion for exploring the
          best of Penang, Malaysia. Our platform brings together the island's
          must-visit tourist spots, delicious food experiences, and top-rated
          hotels in one place, making it easy for you to discover and plan your
          trip. From breathtaking landmarks to vibrant events and festivals,
          Penang Go Fun! helps you navigate through the island’s best offerings
          while allowing you to easily view and book the perfect hotel for your
          stay. Your next unforgettable adventure in Penang starts here!
        </p>
      </div>

      {/* Enquiries Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4">
          Enquiries
        </h2>
        <p className="text-lg sm:text-xl text-gray-400">
          For any questions or more information, feel free to contact us at:
        </p>
        <p className="text-lg sm:text-xl text-yellow-400 font-semibold mt-4">
          <a href="mailto:catsuperinteresting@usm.my">
            catsuperinteresting@usm.my
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

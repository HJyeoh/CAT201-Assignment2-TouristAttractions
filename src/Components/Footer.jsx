import { Link } from "react-router-dom";
import logo from "../Asset/logo.png"; // Replace with the correct path to your logo

function Footer() {
  return (
    <div className="bg-gray-700 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="mx-auto h-25" />
        </div>

        {/* Links to pages */}
        <div className="flex flex-wrap justify-center space-x-6">
          <Link to="/" className="hover:text-gray-400 hover:underline text-xs sm:text-base">
            Home
          </Link>
          <Link
            to="/touristSpots"
            className="hover:text-gray-400 hover:underline text-xs sm:text-base"
          >
            Tourist Spots
          </Link>
          <Link to="/food" className="hover:text-gray-400 hover:underline text-xs sm:text-base">
            Food
          </Link>
          <Link to="/hotel" className="hover:text-gray-400 hover:underline text-xs sm:text-base">
            Hotel
          </Link>
          <Link to="/events" className="hover:text-gray-400 hover:underline text-xs sm:text-base">
            Events
          </Link>
          <Link to="/about" className="hover:text-gray-400 hover:underline text-xs sm:text-base">
            About
          </Link>
        </div>

        {/* Small text for copyright or other info */}
        <div className="mt-4 text-xs sm:text-base text-gray-400">
          © 2025 Penang Go Fun. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;

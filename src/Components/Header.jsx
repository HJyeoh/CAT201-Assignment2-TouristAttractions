import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import home_header from '../Asset/Home_img.png';
import touristSpots_header from '../Asset/TouristSpots_header_60.png';

const headerImages = {
  home: home_header,
  touristSpots: touristSpots_header,
  food: 'https://via.placeholder.com/1920x600?text=Food+Header',
  hotel: 'https://via.placeholder.com/1920x600?text=Hotel+Header',
  events: 'https://via.placeholder.com/1920x600?text=Events+Header',
};

const pageTexts = {
  home: 'Welcome to Penang!',
  touristSpots: 'Explore Beautiful Tourist Spots',
  food: 'Delicious Food Awaits You',
  hotel: 'Find Your Perfect Stay',
  events: 'Exciting Events Coming Soon',
};

const allowedPaths = ['/', '/touristSpots', '/food', '/hotel', '/events']; // Paths where the header should be shown

function Header() {
  const location = useLocation();
  const navigate = useNavigate(); 

  // Determine the current page based on the route
  const currentPage = location.pathname.substring(1) || 'home'; // Default to 'home' if no route
  const headerImage = headerImages[currentPage] || headerImages.home; // Fallback to home header
  const pageText = pageTexts[currentPage] || pageTexts.home; // Fallback to home page text

  // Check if the current path is allowed
  if (!allowedPaths.includes(location.pathname)) {
    return null; 
  }

  const headerHeight = currentPage === 'home' ? '808px' : '500px'; 
  const textHeight = currentPage === 'home' ? '400px' : '300px'; 
  const fontSize = currentPage === 'home' ? 'clamp(3rem, 8vw, 6rem)' : 'clamp(2rem, 6vw, 4rem)';

  const handleTouristSpotsRedirect = () => {
    navigate('/touristSpots'); 
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />
      
      <img
        src={headerImage}
        alt={`${currentPage} Header`}
        className="w-full object-cover"
        style={{ height: headerHeight, zIndex: 1 }} 
      />

      {/* Text Overlay below Navbar */}
      <div
        className="absolute left-0 w-full text-white font-bold flex flex-col justify-center items-center mt-20"
        style={{
          top: '150px', 
          backgroundColor: 'transparent', 
          zIndex: 1, 
          height: textHeight, 
          fontSize: fontSize, 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          padding: '20px 0', 
        }}
      >
      
        {pageText}

        {currentPage === 'home' && (
          <button
            onClick={handleTouristSpotsRedirect}
            className="text-3xl border-none mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300"
          >
            Explore More
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import TouristSpotsPage from './Pages/TouristSpotsPage';
import FoodPage from './Pages/FoodPage';
import HotelPage from './Pages/HotelPage';
import EventsPage from './Pages/EventsPage';
import Footer from './Components/Footer';
import TouristSpotsCertainPage from './Pages/TouristSpotsCertainPage'; 
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Header />
      
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/touristSpots" element={<TouristSpotsPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/events" element={<EventsPage />} />
        
        <Route path="/:spotId" element={<TouristSpotsCertainPage />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

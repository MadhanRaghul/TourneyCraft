import React from 'react';
import Welcome from './Welcome';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // Get the current location
  const location = useLocation();

  // Function to handle scrolling to the Home component
  const scrollToHome = () => {
    const homeElement = document.getElementById('create');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='Navbar'>
          <div className='actualNavbar'>
              <img src="/logo.png" alt="TourneyCraft Logo" />
              <div className='navLinks'>
                  {/* Conditionally render the Create link based on the current location */}
                  <Link to="/">Home</Link>
                  {location.pathname === "/" && (
                    <Link to="" onClick={scrollToHome}>Create</Link>
                  )}
                  <Link to="">Tourneys</Link>
                  {location.pathname === "/" && (
                    <Link to="" onClick={scrollToContact}>Contact</Link>
                  )}
              </div>
          </div>
      </div>

      <Routes>
        <Route path='/' element={<Welcome />} />
        
      </Routes>
    </>
  );
};

export default Navbar;

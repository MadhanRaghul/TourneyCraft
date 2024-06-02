import React from 'react';
import Welcome from './Welcome';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

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

import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='actualNavbar'>
            <img src="/logo.png" alt="TourneyCraft Logo" />
            <div className='navLinks'>
                <a href="">Home</a>
                <a href="">Create</a>
                <a href="">Tourneys</a>
                <a href="">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
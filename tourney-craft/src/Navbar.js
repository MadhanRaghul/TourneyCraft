import React from 'react'
import Welcome from './Welcome'
import Elite8 from './Elite8'
import { Routes, Route, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
          <div className='actualNavbar'>
              <img src="/logo.png" alt="TourneyCraft Logo" />
              <div className='navLinks'>
                  <Link to="/">Home</Link>
                  <Link to="/elite8">Create</Link>
                  <Link to="">Tourneys</Link>
                  <Link to="">Contact</Link>
              </div>
          </div>
      </div>

      <Routes>
        <Route path='/welcome' element={<Welcome />}/>
       {/*  <Route path='/elite8' element={<Elite8 />}/> */}
      </Routes>

      
    </>
  )
}

export default Navbar
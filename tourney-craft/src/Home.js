import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home' id='create'>

            <div className='heading'>
              <h1>Make your own Tourney!</h1>
            </div>

            <div className='cards'>
                <Cards image = '/elite8.jpg'
                       type = ' Fast paced Short and Simple tourney!' />
                <Cards image = '/sweet16.jpg'
                       type = 'Average sized tourney for long matches' />
                <Cards image = '/sweet16.jpg'
                       type = 'Coming soon' />
            </div>
            
            <div className='description'>
              <h2>Crafting tournament brackets made simple on our platform</h2>
            </div>






    </div>
  )
}

export default Home
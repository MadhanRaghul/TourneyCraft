import React from 'react'
import Cards from './Cards'

const Home = () => {
  return (
    <div className='Home' id='create'>

            <div className='heading'>
              <h1>Make your own Tourney!</h1>
            </div>

            <div className='cards'>
                <Cards image = '/elite8.jpg'
                       type = ' Fast paced Short and Simple tourney!'
                       link = '/Elite8' />
                <Cards image = '/sweet16.jpg'
                       type = 'Average sized tourney for long matches'
                       link = 'Sweet16' />
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
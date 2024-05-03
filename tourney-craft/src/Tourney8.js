// Tourney8.js
import React, { useEffect, useState } from 'react';

const Tourney8 = () => {
  const [elite8Data, setElite8Data] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem('elite8Data'));
    if (storedData) {
      setElite8Data(storedData);
    }
  }, []);

  return (
    <div className='Tourney8'>
      {elite8Data ? (
        <>
            <h1>{elite8Data.name}</h1>

            <div className='container'>

                <div className='cont'>
                    <div className='match'>
                        <h2>{elite8Data.one}</h2> <hr />
                        <h2>{elite8Data.two}</h2>
                    </div>
                    <div className='match'>
                        <h2>{elite8Data.three}</h2> <hr />
                        <h2>{elite8Data.four}</h2>
                    </div>
                </div>
               
                <div className='cont'>
                    <div className='match'>
                        <h2>tbd</h2> <hr />
                        <h2>tbd</h2>
                    </div>
                </div>

                <div className='cont'>
                    <div className='match'>
                        <h2>tbd</h2> <hr />
                        <h2>tbd</h2>
                    </div>
                </div>

                <div className='cont'>
                    <div className='match'>
                        <h2>tbd</h2> <hr />
                        <h2>tbd</h2>
                    </div>
                </div>

                <div className='cont'>
                    <div className='match'>
                        <h2>{elite8Data.five}</h2> <hr />
                        <h2>{elite8Data.six}</h2>
                    </div>
                    <div className='match'>
                        <h2>{elite8Data.seven}</h2> <hr />
                        <h2>{elite8Data.eight}</h2>
                    </div>
                </div>

            </div>

        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Tourney8;

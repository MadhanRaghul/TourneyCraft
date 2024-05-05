import React, { useEffect, useState } from 'react';

const Tourney8 = () => {
  const [elite8Data, setElite8Data] = useState(null);
  const [q1, setQ1] = useState(localStorage.getItem('q1') || 'TBD');
  const [q2, setQ2] = useState(localStorage.getItem('q2') || 'TBD');
  const [q3, setQ3] = useState(localStorage.getItem('q3') || 'TBD');
  const [q4, setQ4] = useState(localStorage.getItem('q4') || 'TBD');

  const [f1, setF1] = useState(localStorage.getItem('f1') || 'TBD');
  const [f2, setF2] = useState(localStorage.getItem('f2') || 'TBD');

  const [showPops, setShowPops] = useState(false); // State to control visibility of pops div
  const [showWinner, setShowWinner] = useState(false); // State to control visibility of pops div


  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem('elite8Data'));
    if (storedData) {
      setElite8Data(storedData);
    }
  }, []);

  const handleQ1 = () => {
    setF1(q1);
    localStorage.setItem('f1', q1);
  };

  const handleQ2 = () => {
    setF1(q2);
    localStorage.setItem('f1', q2);
  };

  const handleQ3 = () => {
    setF2(q3);
    localStorage.setItem('f2', q3);
  };

  const handleQ4 = () => {
    setF2(q4);
    localStorage.setItem('f2', q4);
  };

  const handle5 = () => {
    setQ1(elite8Data.five);
    localStorage.setItem('q1', elite8Data.five);
  };
  
  const handle8 = () => {
    setQ1(elite8Data.eight);
    localStorage.setItem('q1', elite8Data.eight);
  };
  
  const handle3 = () => {
    setQ2(elite8Data.three);
    localStorage.setItem('q2', elite8Data.three);
  };
  
  const handle6 = () => {
    setQ2(elite8Data.six);
    localStorage.setItem('q2', elite8Data.six);
  };
  
  const handle1 = () => {
    setQ3(elite8Data.one);
    localStorage.setItem('q3', elite8Data.one);
  };
  
  const handle4 = () => {
    setQ3(elite8Data.four);
    localStorage.setItem('q3', elite8Data.four);
  };
  
  const handle7 = () => {
    setQ4(elite8Data.seven);
    localStorage.setItem('q4', elite8Data.seven);
  };
  
  const handle2 = () => {
    setQ4(elite8Data.two);
    localStorage.setItem('q4', elite8Data.two);
  };

  const handleFinalsClick = () => {
    setShowPops(true); // Set showPops state to true when finals div is clicked
  };

  const handleWinner = () => {
    setShowWinner(true); // Set showPops state to true when finals div is clicked
  };

  return (
    <div className='Tourney8'>
      {elite8Data ? (
        <>
          <h1>{elite8Data.name}</h1>
          <div className='container'>
            <div className='cont'>
              <div className='match' id='m1'>
                <h2 onClick={handle5}>{elite8Data.five}</h2> <hr />
                <h2 onClick={handle8}>{elite8Data.eight}</h2>
              </div>
              <div className='match' id='m2'>
                <h2 onClick={handle3}>{elite8Data.three}</h2> <hr />
                <h2 onClick={handle6}>{elite8Data.six}</h2>
              </div>
            </div>
            <div className='cont' >
              <div className='match' id='s1'>
                <h2 onClick={handleQ1}>{q1}</h2> <hr />
                <h2 onClick={handleQ2}>{q2}</h2>
              </div>
            </div>
            <div className='cont'>
            <div className='match' id='finals' onClick={f1 !== 'TBD' && f2 !== 'TBD' ? handleFinalsClick : null}>
                <h2>{f1}</h2> <hr />
                <h2>{f2}</h2>
              </div>
            </div>
            <div className='cont'>
              <div className='match' id='s2'>
                <h2 onClick={handleQ3}>{q3}</h2> <hr />
                <h2 onClick={handleQ4}>{q4}</h2>
              </div>
            </div>
            <div className='cont'>
              <div className='match' id='m3'>
                <h2 onClick={handle1}>{elite8Data.one}</h2> <hr />
                <h2 onClick={handle4}>{elite8Data.four}</h2>
              </div>
              <div className='match' id='m4'>
                <h2 onClick={handle7}>{elite8Data.seven}</h2> <hr />
                <h2 onClick={handle2}>{elite8Data.two}</h2>
              </div>
            </div>
          </div>

          {showPops && (
            <div className='pops'>
              <h1>Who is the Winner?</h1>
              <h2 onClick={handleWinner}>{f1}</h2>
              <h3>vs</h3>
              <h2>{f2}</h2>
            </div>
          )}

          {showWinner && (
            <div className='winner'>
              <h2>And the Winner is...</h2>
              <h1>{f1}</h1>
              <h2>CONGRATULATIONS!!</h2>
            </div>
          )}

        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Tourney8;

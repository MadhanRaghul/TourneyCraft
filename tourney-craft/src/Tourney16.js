import React, { useEffect, useState } from 'react';

const Tourney16 = () => {
  const [x1, setX1] = useState(localStorage.getItem('x1') || 'TBD');
  const [x2, setX2] = useState(localStorage.getItem('x2') || 'TBD');
  const [x3, setX3] = useState(localStorage.getItem('x3') || 'TBD');
  const [x4, setX4] = useState(localStorage.getItem('x4') || 'TBD');
  const [x5, setX5] = useState(localStorage.getItem('x5') || 'TBD');
  const [x6, setX6] = useState(localStorage.getItem('x6') || 'TBD');
  const [x7, setX7] = useState(localStorage.getItem('x7') || 'TBD');
  const [x8, setX8] = useState(localStorage.getItem('x8') || 'TBD');

  const [sweet16Data, setSweet16Data] = useState(null);
  const [q1, setQ1] = useState(localStorage.getItem('q1') || 'TBD');
  const [q2, setQ2] = useState(localStorage.getItem('q2') || 'TBD');
  const [q3, setQ3] = useState(localStorage.getItem('q3') || 'TBD');
  const [q4, setQ4] = useState(localStorage.getItem('q4') || 'TBD');

  const [f1, setF1] = useState(localStorage.getItem('f1') || 'TBD');
  const [f2, setF2] = useState(localStorage.getItem('f2') || 'TBD');

  const [showPops, setShowPops] = useState(false);
  const [showWinner1, setShowWinner1] = useState(false);
  const [showWinner2, setShowWinner2] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('sweet16Data'));
    if (storedData) {
      setSweet16Data(storedData);
    }
  }, []);

  const handle9 = () => {
    setX1(sweet16Data.nine);
    localStorage.setItem('x1', sweet16Data.nine);
  };

  const handle15 = () => {
    setX1(sweet16Data.fifteen);
    localStorage.setItem('x1', sweet16Data.fifteen);
  };

  const handle4 = () => {
    setX2(sweet16Data.four);
    localStorage.setItem('x2', sweet16Data.four);
  };

  const handle12 = () => {
    setX2(sweet16Data.twelve);
    localStorage.setItem('x2', sweet16Data.twelve);
  };

  const handle7 = () => {
    setX3(sweet16Data.seven);
    localStorage.setItem('x3', sweet16Data.seven);
  };

  const handle16 = () => {
    setX3(sweet16Data.sixteen);
    localStorage.setItem('x3', sweet16Data.sixteen);
  };

  const handle2 = () => {
    setX4(sweet16Data.two);
    localStorage.setItem('x4', sweet16Data.two);
  };

  const handle10 = () => {
    setX4(sweet16Data.ten);
    localStorage.setItem('x4', sweet16Data.ten);
  };

  const handle3 = () => {
    setX5(sweet16Data.three);
    localStorage.setItem('x5', sweet16Data.three);
  };

  const handle14 = () => {
    setX5(sweet16Data.fourteen);
    localStorage.setItem('x5', sweet16Data.fourteen);
  };

  const handle11 = () => {
    setX6(sweet16Data.eleven);
    localStorage.setItem('x6', sweet16Data.eleven);
  };

  const handle5 = () => {
    setX6(sweet16Data.five);
    localStorage.setItem('x6', sweet16Data.five);
  };

  const handle1 = () => {
    setX7(sweet16Data.one);
    localStorage.setItem('x7', sweet16Data.one);
  };

  const handle8 = () => {
    setX7(sweet16Data.eight);
    localStorage.setItem('x7', sweet16Data.eight);
  };

  const handle13 = () => {
    setX8(sweet16Data.thirteen);
    localStorage.setItem('x8', sweet16Data.thirteen);
  };

  const handle6 = () => {
    setX8(sweet16Data.six);
    localStorage.setItem('x8', sweet16Data.six);
  };

  const handleX1 = () => {
    setQ1(x1);
    localStorage.setItem('q1', x1);
  };

  const handleX2 = () => {
    setQ1(x2);
    localStorage.setItem('q1', x2);
  };

  const handleX3 = () => {
    setQ2(x3);
    localStorage.setItem('q3', x3);
  };

  const handleX4 = () => {
    setQ2(x4);
    localStorage.setItem('q3', x4);
  };

  const handleX5 = () => {
    setQ3(x5);
    localStorage.setItem('q1', x5);
  };

  const handleX6 = () => {
    setQ3(x6);
    localStorage.setItem('q1', x6);
  };

  const handleX7 = () => {
    setQ4(x7);
    localStorage.setItem('q2', x7);
  };

  const handleX8 = () => {
    setQ4(x8);
    localStorage.setItem('q2', x8);
  };

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

  const handleFinalsClick = () => {
    setShowPops(true);
  };

  const handleWinner1 = () => {
    setShowWinner1(true);
  };

  const handleWinner2 = () => {
    setShowWinner2(true);
  };

  return (
    <div className='Tourney16'>
      {sweet16Data ? (
        <>
          <h1>{sweet16Data.name}</h1>
          <div className='container'>
            <div className='cont'>
              <div className='match' id='x1'>
                <h2 onClick={handle9}>{sweet16Data.nine}</h2> <hr />
                <h2 onClick={handle15}>{sweet16Data.fifteen}</h2>
              </div>
              <div className='match' id='x2'>
                <h2 onClick={handle4}>{sweet16Data.four}</h2> <hr />
                <h2 onClick={handle12}>{sweet16Data.twelve}</h2>
              </div>
              <div className='match' id='x3'>
                <h2 onClick={handle7}>{sweet16Data.seven}</h2> <hr />
                <h2 onClick={handle16}>{sweet16Data.sixteen}</h2>
              </div>
              <div className='match' id='x4'>
                <h2 onClick={handle2}>{sweet16Data.two}</h2> <hr />
                <h2 onClick={handle10}>{sweet16Data.ten}</h2>
              </div>
            </div>
            <div className='cont'>
              <div className='match' id='m1'>
                <h2 onClick={handleX1}>{x1}</h2> <hr />
                <h2 onClick={handleX2}>{x2}</h2>
              </div>
              <div className='match' id='m2'>
                <h2 onClick={handleX3}>{x3}</h2> <hr />
                <h2 onClick={handleX4}>{x4}</h2>
              </div>
            </div>
            <div className='cont'>
              <div className='match' id='s1'>
                <h2 onClick={handleQ1}>{q1}</h2> <hr />
                <h2 onClick={handleQ2}>{q2}</h2>
              </div>
            </div>
            <div className='cont'>
              <div
                className='match'
                id='finals'
                onClick={
                  f1 !== 'TBD' && f2 !== 'TBD' ? handleFinalsClick : null
                }
              >
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
                <h2 onClick={handleX5}>{x5}</h2> <hr />
                <h2 onClick={handleX6}>{x6}</h2>
              </div>
              <div className='match' id='m4'>
                <h2 onClick={handleX7}>{x7}</h2> <hr />
                <h2 onClick={handleX8}>{x8}</h2>
              </div>
            </div>
            <div className='cont'>
              <div className='match' id='x5'>
                <h2 onClick={handle3}>{sweet16Data.three}</h2> <hr />
                <h2 onClick={handle14}>{sweet16Data.fourteen}</h2>
              </div>
              <div className='match' id='x6'>
                <h2 onClick={handle11}>{sweet16Data.eleven}</h2> <hr />
                <h2 onClick={handle5}>{sweet16Data.five}</h2>
              </div>
              <div className='match' id='x7'>
                <h2 onClick={handle1}>{sweet16Data.one}</h2> <hr />
                <h2 onClick={handle8}>{sweet16Data.eight}</h2>
              </div>
              <div className='match' id='x8'>
                <h2 onClick={handle13}>{sweet16Data.thirteen}</h2> <hr />
                <h2 onClick={handle6}>{sweet16Data.six}</h2>
              </div>
            </div>
          </div>
          {showPops && (
            <div className='pops'>
              <h1>Who is the Winner?</h1>
              <h2 onClick={handleWinner1}>{f1}</h2>
              <h3>vs</h3>
              <h2 onClick={handleWinner2}>{f2}</h2>
            </div>
          )}
          {showWinner1 && (
            <div className='winner'>
              <h2>And the Winner is...</h2>
              <h1>{f1}</h1>
              <h2>CONGRATULATIONS!!</h2>
              <img src='/party.gif' alt='' />
              <img src='/Fireworks.gif' alt='' />
            </div>
          )}
          {showWinner2 && (
            <div className='winner'>
              <h2>And the Winner is...</h2>
              <h1>{f2}</h1>
              <h2>CONGRATULATIONS!!</h2>
              <img src='/party.gif' alt='' />
              <img src='/Fireworks.gif' alt='' />
            </div>
          )}
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Tourney16;

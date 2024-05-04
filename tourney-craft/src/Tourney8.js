import React, { useEffect, useState } from 'react';

const Tourney8 = () => {
  const [elite8Data, setElite8Data] = useState(null);
  const [q1, setQ1] = useState(localStorage.getItem('q1') || 'TBD');
  const [q2, setQ2] = useState(localStorage.getItem('q2') || 'TBD');
  const [q3, setQ3] = useState(localStorage.getItem('q3') || 'TBD');
  const [q4, setQ4] = useState(localStorage.getItem('q4') || 'TBD');

  const [f1, setF1] = useState(localStorage.getItem('f1') || 'TBD');
  const [f2, setF2] = useState(localStorage.getItem('f2') || 'TBD');
  
  const [f1History, setF1History] = useState([]);
  const [f2History, setF2History] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem('elite8Data'));
    if (storedData) {
      setElite8Data(storedData);
    }
  }, []);

  const handleQ1 = () => {
    const newQ1 = elite8Data.five;
    setF1History([...f1History, f1]);
    setF1(newQ1);
    localStorage.setItem('f1', newQ1);
  };

  const handleQ2 = () => {
    const newQ2 = elite8Data.six;
    setF1History([...f1History, f1]);
    setF1(newQ2);
    localStorage.setItem('f1', newQ2);
  };

  const handleQ3 = () => {
    const newQ3 = elite8Data.three;
    setF2History([...f2History, f2]);
    setF2(newQ3);
    localStorage.setItem('f2', newQ3);
  };

  const handleQ4 = () => {
    const newQ4 = elite8Data.seven;
    setF2History([...f2History, f2]);
    setF2(newQ4);
    localStorage.setItem('f2', newQ4);
  };

  const undo = () => {
    if (f1History.length > 0) {
      const previousF1 = f1History[f1History.length - 1];
      setF1(previousF1);
      localStorage.setItem('f1', previousF1);
      setF1History(f1History.slice(0, -1));
    }
    if (f2History.length > 0) {
      const previousF2 = f2History[f2History.length - 1];
      setF2(previousF2);
      localStorage.setItem('f2', previousF2);
      setF2History(f2History.slice(0, -1));
    }
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

  return (
    <div className='Tourney8'>
      {elite8Data ? (
        <>
        
          <div className='title'>
            <h1>{elite8Data.name}</h1> <button onClick={undo}>Undo</button>
          </div>

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
              <div className='match' id='finals'>
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
          
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Tourney8;

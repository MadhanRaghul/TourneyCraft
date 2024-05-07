import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Elite8 = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleTeam = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "one":
        setOne(value);
        break;
      case "two":
        setTwo(value);
        break;
      case "three":
        setThree(value);
        break;
      case "four":
        setFour(value);
        break;
      case "five":
        setFive(value);
        break;
      case "six":
        setSix(value);
        break;
      case "seven":
        setSeven(value);
        break;
      case "eight":
        setEight(value);
        break;
      default:
        break;
    }
  };

  const handleCreate = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Clear localStorage for q1, q2, q3, q4, f1, and f2
    localStorage.removeItem('q1');
    localStorage.removeItem('q2');
    localStorage.removeItem('q3');
    localStorage.removeItem('q4');
    localStorage.removeItem('f1');
    localStorage.removeItem('f2');

    const elite8Data = { name, one, two, three, four, five, six, seven, eight };
    localStorage.setItem('elite8Data', JSON.stringify(elite8Data));
    navigate('/tourney8');
  };

  return (
    <div className='Elite8'>
      <h1>ELITE EIGHT</h1>
      <div className='table'>
        <form onSubmit={handleCreate}>
        <input className='nameBar' type="text" value={name} placeholder='name of the tourney...' required onChange={handleName} />
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><input type="text" name="one" value={one} onChange={handleTeam} required/></td>
              </tr>
              <tr>
                <td>2</td>
                <td><input type="text" name="two" value={two} onChange={handleTeam} required/></td>
              </tr>
              <tr>
                <td>3</td>
                <td><input type="text" name="three" value={three} onChange={handleTeam} required/></td>
              </tr>
              <tr>
                <td>4</td>
                <td><input type="text" name="four" value={four} onChange={handleTeam} required/></td>
              </tr>
              <tr>
                <td>5</td>
                <td><input type="text" name="five" value={five} onChange={handleTeam} required/></td>
              </tr>
              <tr>
                <td>6</td>
                <td><input type="text" name="six" value={six} onChange={handleTeam} required/></td>
              </tr>
              <tr>
                <td>7</td>
                <td><input type="text" name="seven" value={seven} onChange={handleTeam} required/></td>
              </tr>
              <tr>
                <td>8</td>
                <td><input type="text" name="eight" value={eight} onChange={handleTeam} required/></td>
              </tr>
            </tbody>
          </table>
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  );
};

export default Elite8;

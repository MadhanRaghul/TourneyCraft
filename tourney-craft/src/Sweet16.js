import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sweet16 = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [nine, setNine] = useState("");
  const [ten, setTen] = useState("");
  const [eleven, setEleven] = useState("");
  const [twelve, setTwelve] = useState("");
  const [thirteen, setThirteen] = useState("");
  const [fourteen, setFourteen] = useState("");
  const [fifteen, setFifteen] = useState("");
  const [sixteen, setSixteen] = useState("");
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
      case "nine":
        setNine(value);
        break;
      case "ten":
        setTen(value);
        break;
      case "eleven":
        setEleven(value);
        break;
      case "twelve":
        setTwelve(value);
        break;
      case "thirteen":
        setThirteen(value);
        break;
      case "fourteen":
        setFourteen(value);
        break;
      case "fifteen":
        setFifteen(value);
        break;
      case "sixteen":
        setSixteen(value);
        break;
      default:
        break;
    }
  };

  const handleCreate = (event) => {
    event.preventDefault();
    localStorage.removeItem('x1');
    localStorage.removeItem('x2');
    localStorage.removeItem('x3');
    localStorage.removeItem('x4');
    localStorage.removeItem('x5');
    localStorage.removeItem('x6');
    localStorage.removeItem('x7');
    localStorage.removeItem('x8');
    localStorage.removeItem('q1');
    localStorage.removeItem('q2');
    localStorage.removeItem('q3');
    localStorage.removeItem('q4');
    localStorage.removeItem('f1');
    localStorage.removeItem('f2');

    const sweet16Data = { name, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen };
    localStorage.setItem('sweet16Data', JSON.stringify(sweet16Data));
    navigate('/tourney16');
  };

  return (
    <div className='Sweet16'>
      <h1>SWEET SIXTEEN</h1>
      <div className='table'>
        <form id='theForm' onSubmit={handleCreate}>
        <input id='nameBar' type="text" value={name} placeholder='Name of the tourney...' required onChange={handleName} />
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
                <td><input type="text" name="one" value={one} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>2</td>
                <td><input type="text" name="two" value={two} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>3</td>
                <td><input type="text" name="three" value={three} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>4</td>
                <td><input type="text" name="four" value={four} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>5</td>
                <td><input type="text" name="five" value={five} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>6</td>
                <td><input type="text" name="six" value={six} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>7</td>
                <td><input type="text" name="seven" value={seven} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>8</td>
                <td><input type="text" name="eight" value={eight} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>9</td>
                <td><input type="text" name="nine" value={nine} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>10</td>
                <td><input type="text" name="ten" value={ten} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>11</td>
                <td><input type="text" name="eleven" value={eleven} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>12</td>
                <td><input type="text" name="twelve" value={twelve} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>13</td>
                <td><input type="text" name="thirteen" value={thirteen} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>14</td>
                <td><input type="text" name="fourteen" value={fourteen} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>15</td>
                <td><input type="text" name="fifteen" value={fifteen} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
              <tr>
                <td>16</td>
                <td><input type="text" name="sixteen" value={sixteen} onChange={handleTeam} maxLength={15} required/></td>
              </tr>
            </tbody>
          </table>
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  );
};

export default Sweet16;

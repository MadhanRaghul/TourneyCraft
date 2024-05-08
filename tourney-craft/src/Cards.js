import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  return (
    <div className='Cards'>
        <div className='cardHolder'>
          <img src={props.image} alt="cant load the image" />
          <h3>{props.type}</h3>
          <Link to={props.link}>Create!</Link>
        </div>
    </div>
  )
}

export default Cards;

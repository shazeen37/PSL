import React from 'react';
import './card-style.css';
import img1 from '../../../img/vector-video-player-941434_1280.png';

const Card = () => {
  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={img1} alt='image 1/' className='card-img-top' />
      </div>
      <div className='card-body text dark'>
        <h4 className='card-tital'> Water </h4>

        <a herf='#' className='btn btn-outline-success'>
          {' '}
          Go Anywhere
        </a>
      </div>
    </div>
  );
};
export default Card;

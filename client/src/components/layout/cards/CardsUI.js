import React from 'react';
import { Link } from 'react-router-dom';
import './card-style.css';
import ReactPlayer from 'react-player';
import img1 from '../../../img/vector-video-player-941434_1280.png';

const Card = () => {
  return (
    <div className='cardVideo text-center shadow'>
      <div className='overflow'>
        <ReactPlayer
          url='../../../../../public/4b114fd3-e117-418b-a792-3b859e3fff60-hand_close7.mp4'
          playing
          loop
        />
      </div>
      <div className='cardVideo-body text dark'>
        <h4 className='cardVideo-tital'> Hand Gesture </h4>

        <a herf='#' className='btn btn-outline-success'>
          {' '}
          Go Anywhere
        </a>
      </div>
    </div>
  );
};
export default Card;

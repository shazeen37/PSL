import React from 'react';
import PropTypes from 'prop-types';

const category = () => {
  return (
    <div>
      <div className='containier-fluid d-flex justify-content-center'>
        <a herf='#' className='btn btn-Success-category'>
          <i class='fas fa-hospital-alt w3-xxxlarge'></i>
          Hospital
        </a>
        <a herf='#' className='btn btn-Success-category'>
          <i class='fas fa-school w3-xxxlarge'></i>
          Education
        </a>{' '}
        <a herf='#' className='btn btn-Success-category'>
          <i class='fas fa-building w3-xxxlarge'></i>
          Office
        </a>{' '}
        <a herf='#' className='btn btn-Success-category'>
          <i class='fas fa-balance-scale-right w3-xxxlarge'></i>
          Court
        </a>
      </div>
      <div className='containier-fluid d-flex justify-content-center'>
        <a herf='#' className='btn btn-Success-category'>
          <i class='fab fa-avianex w3-xxxlarge'></i>
          Airport
        </a>
        <a herf='#' className='btn btn-Success-category'>
          <i class='fas fa-baseball-ball w3-xxxlarge'></i>
          Sport
        </a>{' '}
        <a herf='#' className='btn btn-Success-category'>
          <i class='fas fa-binoculars w3-xxxlarge'></i>
          Travel
        </a>{' '}
        <a herf='#' className='btn btn-Success-category'>
          <i class='fas fa-utensils w3-xxxlarge'></i>
          Food
        </a>
      </div>
    </div>
  );
};

export default category;

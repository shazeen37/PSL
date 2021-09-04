import React from 'react';
import { searchByCategory } from '../actions/dictionary';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
const category = ({ searchByCategory }) => {
  return (
    <div>
      <div className='containier-fluid d-flex justify-content-center'>
        <a herf='#' className='btn btn-Success-category' onClick={(e) => {
          e.preventDefault();
          searchByCategory('Hospital');
        }}>
          <i className='fas fa-hospital-alt w3-xxxlarge'></i>
          Hospital
        </a>
        <a herf='#' className='btn btn-Success-category' onClick={(e) => {
          e.preventDefault();
          searchByCategory('Education');
        }}>
          <i className='fas fa-school w3-xxxlarge'></i>
          Education
        </a>{' '}
        <a herf='#' className='btn btn-Success-category' onClick={(e) => {
          e.preventDefault();
          searchByCategory('Office');
        }}>
          <i className='fas fa-building w3-xxxlarge'></i>
          Office
        </a>{' '}
        <a herf='#' className='btn btn-Success-category' onClick={(e) => {
          e.preventDefault();
          searchByCategory('Court');
        }}>
          <i className='fas fa-balance-scale-right w3-xxxlarge'></i>
          Court
        </a>
      </div>
      <div className='containier-fluid d-flex justify-content-center'>
        <a herf='#' className='btn btn-Success-category' onClick={(e) => {
          e.preventDefault();
          searchByCategory('Airport');
        }}>
          <i className='fab fa-avianex w3-xxxlarge'></i>
          Airport
        </a>
        <a herf='#' className='btn btn-Success-category' onClick={(e) => {
          e.preventDefault();
          searchByCategory('Sport');
        }}>
          <i className='fas fa-baseball-ball w3-xxxlarge'></i>
          Sport
        </a>{' '}
        <a herf='#' className='btn btn-Success-category' onClick={(e) => {
          e.preventDefault();
          searchByCategory('Travel');
        }}>
          <i className='fas fa-binoculars w3-xxxlarge'></i>
          Travel
        </a>{' '}
        <a herf='#' className='btn btn-Success-category' onClick={(e) => {
          e.preventDefault();
          searchByCategory('Food');
        }}>
          <i className='fas fa-utensils w3-xxxlarge'></i>
          Food
        </a>

        
      </div>
      
    </div>
  );
};

category.propTypes = {
};
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, { searchByCategory })(category);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import '../components/layout/cards/card-style.css';
import ReactPlayer from 'react-player';
const GesturesUI = ({
  dictionary: { video, gestureName, status, category, avatar, user, date },
}) => {
  return (
    <div>
      <div className='card text-center shadow'>
        <div className='overflow'>
          <ReactPlayer url={video} playing loop className='card-img-top' />
        </div>
        <div className='card-body text dark'>
          <h4 className='card-tital'> {gestureName} </h4>
          <p>category: {category}</p>
          <p>Region: Punjab</p>
        </div>
      </div>
    </div>
  );
};

GesturesUI.propTypes = {
  dictionary: PropTypes.object.isRequired,
};

export default connect(null, {})(GesturesUI);

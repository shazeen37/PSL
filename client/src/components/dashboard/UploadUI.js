import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import './UploadsStyles.css';
import ReactPlayer from 'react-player';

const UploadUI = ({
  auth,
  uploads: { video, gestureName, status, avatar, user, date },
}) => (
  <div className='card text-center shadow'>
    <div className='overflow'>
      <ReactPlayer url={video} playing loop className='card-img-top' />
    </div>
    <div className='card-body text dark'>
      <h4 className='card-tital'> {gestureName} </h4>
      <p>Status: {status}</p>
      <p>Region: Punjab</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <Link to='/edit-Upload' className='btn btn-light'>
        <i className='far fa-edit text-primary'></i> Edit
      </Link>
      <Link to='/delete' className='btn btn-light'>
        <i className='far fa-trash-alt text-primary'></i> Delete
      </Link>
    </div>
  </div>
);

UploadUI.propTypes = {
  uploads: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(UploadUI);

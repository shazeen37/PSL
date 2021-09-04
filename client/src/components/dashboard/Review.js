import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUpload } from '../../actions/uploads';
import ReactPlayer from 'react-player';
import './UploadsStyles.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Review = ({ getUpload, uploads: { upload, loading } }) => {
  useEffect(() => {
    getUpload();
  }, [getUpload]);
  return loading || upload === null ? (
    <div>No post found to be reviewed</div>
  ) : (
    <Fragment>
        <div className='containier-fluid d-flex justify-content-center'>
          <div className='card text-center shadow'>
            <div className='overflow'>
              <ReactPlayer
                url={upload.video}
                playing
                loop
                className='card-img-top'
              />
            </div>
            <div className='card-body text dark'>
              <h4 className='card-tital'> {upload.gestureName} </h4>
              <p>Status: {upload.status}</p>
              <p className='post-date'>
                Posted on <Moment format='YYYY/MM/DD'>{upload.date}</Moment>
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
               <Link to={`/review/${upload._id}`} className='btn btn-primary my-1' >Give Review</Link>
               
              </form>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

Review.propTypes = {
  getUpload: PropTypes.func.isRequired,
  uploads: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  uploads: state.uploads,
});
export default connect(mapStateToProps, { getUpload })(Review);

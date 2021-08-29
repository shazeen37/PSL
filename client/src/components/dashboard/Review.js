import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUpload } from '../../actions/uploads';
import { Provider } from 'react-redux';
import store from '../../store';
import Alerts from '../../components/layout/Alerts';
import setAuthToken from '../../utils/setAuthToken';
import UploadsUI from './UploadUI';
import ReactPlayer from 'react-player';
import './UploadsStyles.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { giveReview } from '../../actions/dictionary';

const Review = ({ getUpload, giveReview, uploads: { upload, loading } }) => {
  useEffect(() => {
    getUpload();
  }, [getUpload]);
  const [status, setstatus] = useState('');
  return loading || upload === null ? (
    <div>Loading ....</div>
  ) : (
    <Fragment>
      <container>
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
                  giveReview({ status });
                }}
              >
               <Link to={`/review/${upload._id}`} className='btn btn-primary my-1' >Give Review</Link>
               
              </form>
            </div>
          </div>
        </div>
      </container>
    </Fragment>
  );
};

Review.propTypes = {
  getUpload: PropTypes.func.isRequired,
  uploads: PropTypes.object.isRequired,
  giveReview: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  uploads: state.uploads,
});
export default connect(mapStateToProps, { getUpload, giveReview })(Review);

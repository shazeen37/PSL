import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUpload } from '../../actions/uploads';
import ReactPlayer from 'react-player';
import './UploadsStyles.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { giveReview } from '../../actions/dictionary';

const ReviewUI = ({ getUpload, giveReview, uploads: { upload, loading } }) => {
  useEffect(() => {
    getUpload();
  }, [getUpload]);
  const [status, setstatus] = useState('');
  return loading || upload === null ? (
    <div>Loading ....</div>
  ) : (
    <Fragment>
      
      <div className="rowG">
  <div className="column" >
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
              
            </div>
          </div>
        </div>
  </div>
  <div className='column'>
    <div className='mt-20'>
      <div className='row border-underline'>
        <div className='col-item text-center'>Evaluation</div>
        <div className='col-rate'>5</div>
        <div className='col-rate'>4</div>
        <div className='col-rate'>3</div>
        <div className='col-rate'>2</div>
        <div className='col-rate'>1</div>
      </div>
    </div>
    <div className='mt-20'>
      <div className='row'>
        <div className='col-item text-right px-2-c'>Shape</div>
        <div className='col-rate'>5</div>
        <div className='col-rate'>4</div>
        <div className='col-rate'>3</div>
        <div className='col-rate'>2</div>
        <div className='col-rate'>1</div>
      </div>
    </div>
    <div className='mt-20'>
      <div className='row'>
        <div className='col-item text-right px-2-c'>Location</div>
        <div className='col-rate'>5</div>
        <div className='col-rate'>4</div>
        <div className='col-rate'>3</div>
        <div className='col-rate'>2</div>
        <div className='col-rate'>1</div>
      </div>
    </div>
    <div className='mt-20'>
      <div className='row'>
        <div className='col-item text-right px-2-c'>Non-Manual Features</div>
        <div className='col-rate'>5</div>
        <div className='col-rate'>4</div>
        <div className='col-rate'>3</div>
        <div className='col-rate'>2</div>
        <div className='col-rate'>1</div>
      </div>
    </div>
    <div className='mt-20'>
      <div className='row'>
        <div className='col-item text-right px-2-c'>Orientation</div>
        <div className='col-rate'>5</div>
        <div className='col-rate'>4</div>
        <div className='col-rate'>3</div>
        <div className='col-rate'>2</div>
        <div className='col-rate'>1</div>
      </div>
    </div>
    <div className='mt-20 mb-20'>
      <div className='row'>
        <div className='col-item text-right px-2-c'>Movement</div>
        <div className='col-rate'>5</div>
        <div className='col-rate'>4</div>
        <div className='col-rate'>3</div>
        <div className='col-rate'>2</div>
        <div className='col-rate'>1</div>
      </div>
    </div>
    <div className='mt-60'>
      <div className='row border-upperline'>Overall Decision</div>
    </div>
    <div className='mt-20'>
      <div className='row'>
        <div className='col-accept'>Accept</div>
        <div className='col-reject'>Reject</div>
        <div className='col-pendng'>Pending</div>
      </div>
    </div>
  </div>
</div>
    
    </Fragment>
  );
};

ReviewUI.propTypes = {
  getUpload: PropTypes.func.isRequired,
  uploads: PropTypes.object.isRequired,
  giveReview: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  uploads: state.uploads,
});
export default connect(mapStateToProps, { getUpload, giveReview })(ReviewUI);

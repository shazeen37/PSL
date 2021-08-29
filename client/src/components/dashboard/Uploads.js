import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUploads } from '../../actions/uploads';
import { Provider } from 'react-redux';
import store from '../../store';
import Alerts from '../../components/layout/Alerts';
import setAuthToken from '../../utils/setAuthToken';
import UploadsUI from './UploadUI';
import './UploadsStyles.css';

import { loadUser } from '../../actions/auth';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Uploads = ({ getUploads, uploads: { uploads, loading } }) => {
  useEffect(() => {
    getUploads();
  }, [getUploads]);
  return loading ? (
    <div>Loading ....</div>
  ) : (
    <Fragment>
      <div className='containier-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col'>
            <div className='col-md-4'>
              {' '}
              {uploads.map((uploads) => (
                <UploadsUI key={uploads._id} uploads={uploads} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Uploads.propTypes = {
  getUploads: PropTypes.func.isRequired,
  uploads: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  uploads: state.uploads,
});
export default connect(mapStateToProps, { getUploads })(Uploads);

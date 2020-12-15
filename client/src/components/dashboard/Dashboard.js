import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loadUser } from '../../actions/auth';
import { DashboardAction } from './DashboardAction';
import Uploads from './Uploads';
import Review from './Review';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [displayuserpost, toggleDUP] = useState(true);
  const [displayusercall, toggleDUC] = useState(false);
  const [displayuserreview, toggleDUR] = useState(false);

  return loading && profile == null ? (
    <h1 className='large text=primary'>Dashboard</h1>
  ) : (
    <Fragment>
      <div className='dashboard'>
        <div className='profile-header'>
          <div className='profile-img'>
            <img src={user.avatar} alt='image 1/' width='200' />
          </div>
          <div className='profile-nav-info'>
            <h3 className='user-name'> {user.name} </h3>
            <div className='address'>
              <p className='state'>
                {' '}
                {profile.status},
                <span className='country'> {profile.location}</span>
              </p>
            </div>
          </div>
          <div className='profile-option'>
            <div className='notification'>
              <i className='fa fa-bell'></i>
              <span className='alert-message'>1</span>
            </div>
          </div>
        </div>
        <div className='main-bd'>
          <div className='left-side'>
            <div className='profile-side'>
              <p className='mobile-no'>
                <i className='fa fa-phone'> +9328937209320</i>
              </p>
              <p className='user-email'>
                <i className='fa fa-envelope'> {user.email}</i>
              </p>
              <div className='user-bio'>
                <h3>Bio</h3>
                <p className='bio'>{profile.bio}</p>
              </div>

              <div>
                <Link to='/edit-profile'>
                  <button className='createbtn'>
                    <i className='fas fa-user-circle'></i> Edit Profile
                  </button>
                </Link>
              </div>
              <div>
                <Link to='/upload'>
                  <button className='chatbtn'>
                    <i className='fas fa-upload'></i> Upload Gesture
                  </button>
                </Link>
              </div>
              <div>
                <button className='chatbtn' onClick={() => deleteAccount()}>
                  <i className='fas fas-user-minus'></i> Delete Account
                </button>
              </div>
            </div>
          </div>

          <div className='right-side'>
            <div className='navi'>
              <ul>
                <li
                  onClick={() => {
                    if (displayuserpost === false) {
                      toggleDUP(!displayuserpost);
                    }
                    if (displayusercall === true) {
                      toggleDUC(!displayusercall);
                    }
                    if (displayuserreview === true) {
                      toggleDUR(!displayuserreview);
                    }
                  }}
                  className='user-post active'
                >
                  Posts
                </li>
                <li
                  onClick={() => {
                    if (displayuserpost === true) {
                      toggleDUP(!displayuserpost);
                    }
                    if (displayusercall === false) {
                      toggleDUC(!displayusercall);
                    }
                    if (displayuserreview === true) {
                      toggleDUR(!displayuserreview);
                    }
                  }}
                  className='user-review'
                >
                  Calls For Gesture
                </li>
                <li
                  onClick={() => {
                    if (displayuserpost === true) {
                      toggleDUP(!displayuserpost);
                    }
                    if (displayusercall === true) {
                      toggleDUC(!displayusercall);
                    }
                    if (displayuserreview === false) {
                      toggleDUR(!displayuserreview);
                    }
                  }}
                  className='user-setting'
                >
                  Review
                </li>
              </ul>
            </div>
            <div className='profile-body'>
              {displayuserpost && (
                <Fragment>
                  <h1> </h1>
                  <div className='tabcontainer'>
                    <Uploads />
                  </div>
                </Fragment>
              )}
              {displayusercall ? (
                <Fragment>
                  <div>
                    <h1>Calls for Gesture</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec,
                      vulputate eget, arcu.
                    </p>
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
              {displayuserreview ? (
                <Fragment>
                  <div className='tabcontainer'>
                    <Review />
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
              <uploads />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);

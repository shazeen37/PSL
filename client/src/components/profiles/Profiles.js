import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <div>
      <h1 class='large text-primary'>Users</h1>
      <p class='lead'>
        <i class='fab fa-connectdevelop'></i> Pakistan Sign Language Corpus
      </p>
      <div class='profiles'>
        <div class='profile bg-light'>
          <img
            class='round-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <div>
            <h2>John Doe</h2>
            <p>Editor</p>
            <p>Seattle, WA</p>
            <a href='profile.html' class='btn btn-primary'>
              View Profile
            </a>
          </div>

          <ul>
            <li class='text-primary'>
              <i class='fas fa-check'></i> HTML
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> CSS
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> JavaScript
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> Python
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> C#
            </li>
          </ul>
        </div>

        <div class='profile bg-light'>
          <img
            class='round-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <div>
            <h2>John Doe</h2>
            <p>Contributer</p>
            <p>Seattle, WA</p>
            <a href='profile.html' class='btn btn-primary'>
              View Profile
            </a>
          </div>

          <ul>
            <li class='text-primary'>
              <i class='fas fa-check'></i> HTML
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> CSS
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> JavaScript
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getProfiles })(Profiles);

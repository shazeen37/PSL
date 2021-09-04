import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout, loadUser } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>
          {'  '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/dictionary'>Dictionary</Link>
      </li>
      <li>
        <Link to='/translator'>Translator</Link>
      </li>
      <li>
        <Link to='/sentence'>Sentence</Link>
      </li>
      <li>
      <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          {'  '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/dictionary'>Dictionary</Link>
      </li>
      <li>
        <Link to='/translator'>Translator</Link>
      </li>
      <li>
        <Link to='/sentence'>Sentence</Link>
      </li>

      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
     
    </ul>
    
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-american-sign-language-interpreting'></i>{' '}
          Pakistan Sign Language
        </Link>
      </h1>
      {loading ? null : (
        <Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
      )}
    </nav>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);

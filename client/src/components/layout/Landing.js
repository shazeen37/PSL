import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        <h1 className='x-large'>Pakistan sign language corpus</h1>
        <p className='lead'>Crowd Sourcing for Pakistan sign language corpus</p>
        <div className='buttons'>
          <Link to='/register' className='btn btn-primary'>
            Sign Up
          </Link>
          <Link to='/login' className='btn btn-light'>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Landing;

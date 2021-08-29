import React, { useState, useEffect } from 'react';
import { getsentence } from '../actions/sentense';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux' 
export const Sentense = ({getsentence,sentences: { sentence, loading }}) => {
  useEffect(() => {
    getsentence();
  }, [getsentence]);
  const [Data, setData] = useState(null);
  const [Ssentence, setsentence] = useState(null);

  
  return (
    <div className='active-cyan-3 active-cyan-4 mb-4'>
      <p></p>
      <div className='card ' style={{ height: '10rem', width: '70rem' }}>
        <div
          className='card-header'
          style={{ height: '10rem', width: '70rem' }}
        >
          Translation Needed for this English Sentense
        </div>
        <div className='card-body' style={{ height: '10rem', width: '65rem' }}>
          <h4 className='containier-fluid d-flex justify-content-center'>
            {' '}
            {'  '}
            {Data}
          </h4>
        </div>
      </div>
     <div className='margin'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          
        }}
      >
        <input
          className='form-control'
          type='text'
          placeholder='Enter Your Sign language Translation here'
          aria-label='Search'
          value={Ssentence}
          onChange={(e) => setsentence(e.target.value)}
        />
        <div className='containier-fluid d-flex justify-content-center'>
          <input type='submit' className='btn btn-Success' />
        </div>
      </form>
      </div>
    </div>
  );
};
Sentense.propTypes = {
  getsentence: PropTypes.func.isRequired,
  sentences: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  sentences: state.sentences,
});
export default connect(mapStateToProps, { getsentence })(Sentense);


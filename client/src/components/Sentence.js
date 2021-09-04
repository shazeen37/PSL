import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getsentence, givetranslation } from '../actions/sentense';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { useSelector } from 'react-redux' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Sentense = ({getsentence, givetranslation,sentence: { sentence, loading2 }}) => {
  
  const [translation, settranslation] = useState(null);
  const [Ssentence, setSsentence] = useState('');
  const data = useSelector(state => sentence)
  useEffect(() => {
    getsentence();
    setSsentence(loading2 || !sentence.sentence ? '' : sentence.sentence)
  }, [getsentence]);
  
 
 
  
  return loading2  ?(<p>loading..</p>):(
    <div className='active-cyan-3 active-cyan-4 mb-4'>
      <p className='large'>Submit your suggestions to us!</p>
   {sentence.sentence===('')?(<p>loading</p>):(      <div className='card ' style={{ height: '10rem', width: '70rem' }}>
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
            
          {sentence.sentence}
          </h4>
        </div>
      </div>)}
     <div className='margin'>
      <form
        onSubmit={(e) => {
         
        
          console.log("Hello")
          if(translation==null){ 
            console.log("HelloW")
            toast.warn(
            'Enter Something To submit! '
          );}
          else{
            e.preventDefault();
            console.log('helloSs')
          givetranslation(Ssentence,translation)}
          
        }}
      >
        <input
          className='form-control'
          type='text'
          placeholder='Enter Your Sign language Translation here'
          aria-label='Search'
          value={translation}
          onChange={(e) => settranslation(e.target.value)}
        />
             <small className='form-text'>Thank you for your feedback and being part of the community!</small>
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
  givetranslation: PropTypes.func.isRequired,
  sentence: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  sentence: state.sentence,
});
export default connect(mapStateToProps, { getsentence, givetranslation })(Sentense);


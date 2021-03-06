import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Translator = () => {
  const [Data, setData] = useState(null);
  const [sentence, setsentence] = useState(null);

  function tst(sentense) {
    console.log('ttst');
    var test = encodeURIComponent(sentence);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://206.189.152.188/psl-engtosign/psl/getpsl.php?sentence=${test}`
      )
      .then(function (res) {
        console.log(res.data);
        setData(res.data);
      })
      .catch(console.error);
  }
  return (
    <div className='active-cyan-3 active-cyan-4 mb-4'>
      <p>Enter any English sentense to get a sign language sentense</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          tst(sentence);
        }}
      >
        <input
          className='form-control'
          type='text'
          placeholder='Search'
          aria-label='Search'
          value={sentence}
          onChange={(e) => setsentence(e.target.value)}
        />
        <div className='containier-fluid d-flex justify-content-center'>
          <input type='submit' className='btn btn-Success' />
        </div>
      </form>
      <div className='card ' style={{ height: '10rem', width: '70rem' }}>
        <div
          className='card-header'
          style={{ height: '10rem', width: '70rem' }}
        >
          Sign Language Sentense
        </div>
        <div className='card-body' style={{ height: '10rem', width: '65rem' }}>
          <h4 className='containier-fluid d-flex justify-content-center'>
            {' '}
            {'  '}
            {Data}
          </h4>
        </div>
      </div>
      <a href='#' className='btn btn-Success'>
        Give Suggestions
      </a>
    </div>
  );
};
export default Translator;

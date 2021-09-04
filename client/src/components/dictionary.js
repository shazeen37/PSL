import React, { Fragment, useEffect, useState } from 'react';
import GestureUI from './GesturesUI';
import Category from './category';
import PropTypes from 'prop-types';
import { search, cancelSearch } from '../actions/dictionary';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
const DictionaryPage = ({ search, cancelSearch, dictionary: { results, resultsloading } }) => {

  const [word, setword] = useState('');
  console.log(word);
  console.log(results);
  return (
    <div>
      <h3>Search Gesture by Word</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(word);
        }}
      >
        <div className='active-cyan-3 active-cyan-4 mb-4'>
          <input
            className='form-control'
            type='text'
            placeholder='Search'
            aria-label='Search'
            value={word}
            onChange={(e) => setword(e.target.value)}
          />
        </div>
        <div className='containier-fluid d-flex justify-content-center'>
          <input type='submit' className='btn btn-Success' value='Search' />
        </div>
      </form>

      <div>
      
      </div>
      {resultsloading  ? (
        <Fragment>
          <h1 className='x-largee'>PSL Dictionary</h1>
          <Category />
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <div className='containier-fluid d-flex justify-content-center'>
              <div className='row'>
                <div className='col'>
                  <div className='col-md-4'>
                    {results.map((dictionary) => (
                      <GestureUI key={dictionary._id} dictionary={dictionary} />
                    ))}
                  </div>
                  <div className='col-md-12'>
                    <button type='button' className='btn btn-Success w-100-p' onClick={(e) => { cancelSearch() }}>Go back</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
DictionaryPage.propTypes = {
  search: PropTypes.func.isRequired,
  cancelSearch: PropTypes.func.isRequired,
  dictionary: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  dictionary: state.dictionary,
});
export default connect(mapStateToProps, { search, cancelSearch })(DictionaryPage);

import React, { Fragment, useEffect, useState } from 'react';
import GestureUI from './GesturesUI';
import Category from './category';
import PropTypes from 'prop-types';
import { search } from '../actions/dictionary';
import { connect } from 'react-redux';

const DictionaryPage = ({ search, dictionary: { dictionarys, loading } }) => {
  useEffect(() => {
    search();
  }, [search]);
  const [word, setword] = useState('');
  console.log(word);
  console.log(dictionarys);
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
        <Category />
      </div>

      {loading && dictionarys === null ? (
        <Fragment>
          <h3>loading</h3>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <div className='containier-fluid d-flex justify-content-center'>
              <div className='row'>
                <div className='col'>
                  <div className='col-md-4'>
                    {dictionarys.map((dictionary) => (
                      <GestureUI key={dictionary._id} dictionary={dictionary} />
                    ))}
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
  dictionary: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  dictionary: state.dictionary,
});
export default connect(mapStateToProps, { search })(DictionaryPage);

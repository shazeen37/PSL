import axios from 'axios';
import { setAlert } from './alert';

import { GIVE_REVIEW, REVIEW_ERROR, SEARCH, SEARCH_ERROR } from './types';

//Give Review
export const giveReview = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/dictionary', formData, config);
    dispatch({
      type: GIVE_REVIEW,
      payload: res.data,
    });

    dispatch(setAlert('Review Given', 'success'));
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//search
export const search = (word) => async (dispatch) => {
  try {
    console.log(word);
    console.log('Hello');
    const res = await axios.get(`api/dictionary/search/${word}`);

    dispatch({
      type: SEARCH,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

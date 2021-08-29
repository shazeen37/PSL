import axios from 'axios';
import { setAlert } from './alert';

import { GET_SENTENSE_ERROR, GET_SENTENSE } from './types';

//Give Review
export const givetranslation = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    await axios.post('/api/dictionary', formData, config);
  

    dispatch(setAlert('Thanks For Contributing', 'success'));
  } catch (err) {
    dispatch(setAlert('Something went wrong', 'success'));
  }
};

//search
export const getsentence = () => async (dispatch) => {
  try {
    console.log("hello")
    const res = await axios.get('/api/sentence/daily/random');
console.log(res)
    dispatch({
      type: GET_SENTENSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_SENTENSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

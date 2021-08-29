import axios from 'axios';
import { setAlert } from './alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_SENTENSE_ERROR, GET_SENTENSE } from './types';

//Give Review
export const givetranslation = (sentence,translation) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(`/api/sentence/${sentence}`, translation);
  console.log(res)
  dispatch(setAlert('Thanks For Contributing!', 'success'));
    
  } catch (errors) {
   
    errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    await axios.post('/api/dictionary', formData, config);
  

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

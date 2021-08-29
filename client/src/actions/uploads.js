import axios from 'axios';
import { GET_UPLOADS, UPLOADS_ERROR, GET_UPLOAD, UPLOAD_ERROR } from './types';

//Get Upload
export const getUpload = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/upload/indiviual');

    dispatch({
      type: GET_UPLOAD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UPLOAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
//Get Uploads
export const getUploads = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/upload');

    dispatch({
      type: GET_UPLOADS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UPLOADS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

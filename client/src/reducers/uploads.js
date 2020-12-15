import {
  GET_UPLOADS,
  UPLOADS_ERROR,
  GET_UPLOAD,
  UPLOAD_ERROR,
} from '../actions/types';

const initialState = {
  upload: null,
  uploads: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_UPLOAD:
      return {
        ...state,
        upload: payload,
        loading: false,
      };
    case GET_UPLOADS:
      return {
        ...state,
        uploads: payload,
        loading: false,
      };

    case UPLOADS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPLOAD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

import { GET_SENTENSE, GET_SENTENSE_ERROR } from '../actions/types';

const initialState = {
  sentence: null,
  sentences: [],
  loading2: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SENTENSE:
      return {
        ...state,
        sentence: payload,
        loading2: false,
      };
    
    case GET_SENTENSE_ERROR:
      return {
        ...state,
        error: payload,
        loading2: false,
      };
    default:
      return state;
  }
}

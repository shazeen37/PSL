import { GIVE_REVIEW, REVIEW_ERROR, SEARCH, SEARCH_ERROR, GET_UPLOAD, CANCEL_SEARCH } from '../actions/types';

const initialState = {
  dictionary: null,
  dictionarys: [],
  loading: true,
  results:[],
  resultsloading:true,
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
    
    case GIVE_REVIEW:
      return {
        ...state,
        dictionarys: [...state.dictionarys, payload],
        loading: false,
      };

      case  SEARCH:
        return {
          ...state,
          results: payload,
          resultsloading: false,
        };

    case  CANCEL_SEARCH:
      return {
        ...state,
        resultsloading: true,
      };
     
   
    case SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        resultsloading: false,
      };


      case REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

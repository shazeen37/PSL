import { GIVE_REVIEW, REVIEW_ERROR, SEARCH } from '../actions/types';

const initialState = {
  dictionary: null,
  dictionarys: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GIVE_REVIEW:
      return {
        ...state,
        dictionarys: [...state.dictionarys, payload],
        loading: false,
      };
    case SEARCH:
      return {
        ...state,
        dictionarys: payload,
        loadding: false,
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

import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import uploads from './uploads';
import dictionary from './dictionary';
import sentences from './sentense'
export default combineReducers({
  alert,
  auth,
  profile,
  post,
  uploads,
  dictionary,
  sentences
});

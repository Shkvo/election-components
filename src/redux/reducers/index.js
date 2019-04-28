import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import votes from './votes';
import regions from './regions';
import candidates from './candidates';

export default combineReducers({
  user,
  users,
  votes,
  regions,
  candidates
});
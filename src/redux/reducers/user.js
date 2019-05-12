import { CREATE_USER_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.data;

    default:
      return state;
  }
};
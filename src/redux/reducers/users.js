import { FETCH_TOTAL_USERS_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TOTAL_USERS_SUCCESS:
      return {
        ...state,
        total: action.data
      }
    default:
      return state;
  }
};
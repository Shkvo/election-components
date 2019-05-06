import { FETCH_CANDIDATES_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES_SUCCESS:
      return {
        ...state,
        list: action.data
      }
    default:
      return state;
  }
};
import { FETCH_VOTES_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VOTES_SUCCESS:
      return {
        ...state,
        list: action.data.list,
        total: action.data.total
      }
    default:
      return state;
  }
};
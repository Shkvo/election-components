import { FETCH_CANDIDATES_SUCCESS, DELETE_CANDIDATE_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES_SUCCESS:
      return {
        ...state,
        list: action.data
      }

    case DELETE_CANDIDATE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.data.id)
      }
    default:
      return state;
  }
};
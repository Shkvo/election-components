import { FETCH_REGIONS_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_REGIONS_SUCCESS:
      return {
        ...state,
        list: action.data
      }
    default:
      return state;
  }
};
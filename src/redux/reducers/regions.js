import { FETCH_REGIONS_SUCCESS, DELETE_REGION_SUCCESS, CREATE_REGION_SUCCESS, UPDATE_REGION_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_REGIONS_SUCCESS:
      return {
        ...state,
        list: action.data
      };

    case DELETE_REGION_SUCCESS:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.data.id)
      };

    case CREATE_REGION_SUCCESS:
      return {
        ...state,
        list: [action.data, ...state.list]
      };

    case UPDATE_REGION_SUCCESS:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.data.id) {
            return action.data;
          }
          return item
        })
      };
    default:
      return state;
  }
};
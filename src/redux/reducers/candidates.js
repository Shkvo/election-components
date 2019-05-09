import {
  FETCH_CANDIDATES_SUCCESS,
  DELETE_CANDIDATE_SUCCESS,
  CREATE_CANDIDATE_SUCCESS,
  UPDATE_CANDIDATE_SUCCESS,
} from "../types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES_SUCCESS:
      return {
        ...state,
        list: action.data
      };

    case DELETE_CANDIDATE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.data.id)
      };

    case CREATE_CANDIDATE_SUCCESS:
      return {
        ...state,
        list: [action.data, ...state.list]
      };

    case UPDATE_CANDIDATE_SUCCESS:
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

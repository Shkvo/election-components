import { CREATE_USER_SUCCESS, LOGIN_USER_SUCCESS, FETCH_USER_SUCCESS, FETCH_VOTE_BY_USER_ID_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.data;

    case LOGIN_USER_SUCCESS:
      return action.data.user;

    case FETCH_USER_SUCCESS:
      return action.data;

    case FETCH_VOTE_BY_USER_ID_SUCCESS:
      return {
        ...state,
        isVoted: action.data
      }

    default:
      return state;
  }
};
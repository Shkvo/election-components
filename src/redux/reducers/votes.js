import {
  FETCH_VOTES_SUCCESS,
  FETCH_VOTES_BY_REGION_SUCCESS,
  CREATE_VOTE_SUCCESS,
  CREATE_VOTE_FAILED
} from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VOTES_SUCCESS:
    case FETCH_VOTES_BY_REGION_SUCCESS:
      const labels = [];
      const data = [];

      action.data.list.forEach(item => {
        const label = `${item.candidate.firstName} ${item.candidate.lastName}`;
        const value = Math.round((100 / action.data.total) * item.votes);

        labels.push(label);
        data.push(value);
      });

      return {
        ...state,
        data,
        labels,
        list: action.data.list,
        total: action.data.total
      };

    case CREATE_VOTE_SUCCESS:
      return {
        ...state,
        isVoteCreated: true
      };

    case CREATE_VOTE_FAILED:
      return {
        ...state,
        isVoteCreated: false
      };

    default:
      return state;
  }
};

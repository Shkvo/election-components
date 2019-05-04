import { FETCH_VOTES_SUCCESS } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VOTES_SUCCESS:
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
      }
    default:
      return state;
  }
};
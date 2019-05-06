import { FETCH_VOTES, FETCH_VOTES_BY_REGION } from '../types';

export const fetchVotes = () => ({
  type: FETCH_VOTES
});

export const fetchVotesByRegion = id => ({
  type: FETCH_VOTES_BY_REGION,
  data: { id }
});
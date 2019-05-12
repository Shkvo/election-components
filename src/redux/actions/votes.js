import { FETCH_VOTES, FETCH_VOTES_BY_REGION, CREATE_VOTE } from '../types';

export const fetchVotes = () => ({
  type: FETCH_VOTES
});

export const fetchVotesByRegion = id => ({
  type: FETCH_VOTES_BY_REGION,
  data: { id }
});

export const createVote = vote => ({
  type: CREATE_VOTE,
  data: { vote }
});

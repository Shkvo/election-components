import { FETCH_CANDIDATES, DELETE_CANDIDATE } from '../types';

export const fetchCandidates = () => ({
  type: FETCH_CANDIDATES
});

export const deleteCandidate = id => ({
  type: DELETE_CANDIDATE,
  data: { id }
});

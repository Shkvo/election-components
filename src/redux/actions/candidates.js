import {
  FETCH_CANDIDATES,
  DELETE_CANDIDATE,
  CREATE_CANDIDATE,
  UPDATE_CANDIDATE
} from '../types';

export const fetchCandidates = () => ({
  type: FETCH_CANDIDATES
});

export const deleteCandidate = id => ({
  type: DELETE_CANDIDATE,
  data: { id }
});

export const createCandidate = candidate => ({
  type: CREATE_CANDIDATE,
  data: { candidate }
});

export const updateCandidate = candidate => ({
  type: UPDATE_CANDIDATE,
  data: { candidate }
});

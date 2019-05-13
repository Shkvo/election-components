import { CREATE_USER, LOGIN_USER, FETCH_USER, FETCH_VOTE_BY_USER_ID } from '../types';

export const createUser = user => ({
  type: CREATE_USER,
  data: { user }
});

export const login = user => ({
  type: LOGIN_USER,
  data: { user }
});

export const fetchUser = id => ({
  type: FETCH_USER,
  data: { id }
});

export const fetchVoteByUserId = id => ({
  type: FETCH_VOTE_BY_USER_ID,
  data: { id }
});

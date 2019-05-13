const apiUrl = `http://localhost:5000`;
const token = localStorage.getItem('token') || '';

const _fetch = async (url, params = {}) => {
  const response = await fetch(`${apiUrl}/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: token
    },
    ...params
  });

  return response.json();
};

export const fetchVotes = async () => await _fetch('votes/overall');

export const fetchVotesByRegion = async id => await _fetch(`votes/region/${id}`);

export const createVote = async vote => await _fetch(`votes`, {
  method: 'POST',
  body: JSON.stringify({ vote })
});

export const fetchCandidates = async () => await _fetch('candidates');

export const deleteCandidate = async id => await _fetch(`candidates/${id}`, {
  method: 'DELETE'
});

export const createCandidate = async candidate => await _fetch(`candidates`, {
  method: 'POST',
  body: JSON.stringify({ candidate })
});

export const updateCandidate = async candidate => await _fetch(`candidates/${candidate.id}`, {
  method: 'PUT',
  body: JSON.stringify({ candidate })
});

export const fetchRegions = async () => await _fetch('regions');

export const deleteRegion = async id => await _fetch(`regions/${id}`, {
  method: 'DELETE'
});

export const createRegion = async region => await _fetch(`regions`, {
  method: 'POST',
  body: JSON.stringify({ region })
});

export const updateRegion = async region => await _fetch(`regions/${region.id}`, {
  method: 'PUT',
  body: JSON.stringify({ region })
});

export const fetchTotalUsers = async () => await _fetch('users/total');

export const createUser = async user => await _fetch(`users`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ user })
});

export const login = async user => await _fetch(`users/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});

export const fetchUser = async id => await _fetch(`users/${id}`);

export const fetchVoteByUserId = async id => _fetch(`votes/${id}`);

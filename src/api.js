const apiUrl = `http://localhost:5000`;
const _fetch = async (url, params = {}) => {
  const response = await fetch(`${apiUrl}/${url}`, params);

  return response.json();
};

export const fetchVotes = async () => await _fetch('votes/overall');

export const fetchVotesByRegion = async id => await _fetch(`votes/region/${id}`);

export const createVote = async vote => await _fetch(`votes`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ vote })
});

export const fetchCandidates = async () => await _fetch('candidates');

export const deleteCandidate = async id => await _fetch(`candidates/${id}`, {
  method: 'DELETE'
});

export const createCandidate = async candidate => await _fetch(`candidates`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ candidate })
});

export const updateCandidate = async candidate => await _fetch(`candidates/${candidate.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ candidate })
});

export const fetchRegions = async () => await _fetch('regions');

export const deleteRegion = async id => await _fetch(`regions/${id}`, {
  method: 'DELETE'
});

export const createRegion = async region => await _fetch(`regions`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ region })
});

export const updateRegion = async region => await _fetch(`regions/${region.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ region })
});

export const fetchTotalUsers = async () => await _fetch('users/total');

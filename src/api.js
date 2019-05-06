const apiUrl = `http://localhost:5000`;
const _fetch = async (url, params = {}) => {
  const response = await fetch(`${apiUrl}/${url}`, params);

  return response.json();
};

export const fetchVotes = async () => await _fetch('votes/overall');

export const fetchRegions = async () => await _fetch('regions');

export const fetchCandidates = async () => _fetch('candidates');

export const fetchVotesByRegion = async id => await _fetch(`votes/region/${id}`);

export const fetchTotalUsers = async () => await _fetch('users/total');

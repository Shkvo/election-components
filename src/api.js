const apiUrl = `http://localhost:5000`;
const _fetch = async (url, params = {}) => {
  const response = await fetch(`${apiUrl}/${url}`, params);

  return response.json();
};

export const fetchVotes = async () => await _fetch(`votes/overall`);

export const fetchRegions = async () => await _fetch(`regions`);

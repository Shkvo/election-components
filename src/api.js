const apiUrl = `http://localhost:5000`;
const _fetch = (url, params) => fetch(`${apiUrl}/${url}`, params || {});

export const fetchVotes = async () => {
  const response = await _fetch(`votes/overall`);

  return response.json();
};
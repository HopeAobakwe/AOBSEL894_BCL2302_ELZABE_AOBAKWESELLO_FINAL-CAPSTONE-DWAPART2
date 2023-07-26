import Fuse from 'fuse.js';

const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
  const response = await fetch(`${API_BASE_URL}/shows`);
  const data = await response.json();
  return data;
};

export const fetchShowDetails = async (showId) => {
  const response = await fetch(`${API_BASE_URL}/shows/${showId}`);
  const data = await response.json();
  return data;
};

export const fetchSeasons = async () => {
  const response = await fetch(`${API_BASE_URL}/seasons`);
  const data = await response.json();
  return data;
};

export const fuzzySearchSeasons = (seasons, query) => {
  const fuse = new Fuse(seasons, {
    keys: ['number'], // Use 'number' or any other key that you want to perform a fuzzy search on
    includeScore: true,
    threshold: 0.4, // Adjust this threshold as needed for better/faster matches
  });

  const results = fuse.search(query);
  const fuzzySearchResults = results.map((result) => result.item);

  return fuzzySearchResults;
};

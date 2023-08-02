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

export const fuzzySearchShows = (shows, query) => {
  const fuse = new Fuse(shows, {
    keys: ['title'],
    includeScore: true,
    threshold: 0.4,
  });

  const results = fuse.search(query);
  const fuzzySearchResults = results.map((result) => result.item);

  return fuzzySearchResults;
};

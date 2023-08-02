import React, { useState, useEffect } from 'react';
import { fetchShows } from '../api';
import Show from '../components/Show';


import Fuse from 'fuse.js';

const Home = ({ onShowSelect }) => {
  const [shows, setShows] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState(null);

  useEffect(() => {
    const getShows = async () => {
      const data = await fetchShows();
      setShows(data);
      setFilteredShows(data);
    };
    getShows();
  }, []);

  const handleAddToFavorites = (episode) => {
    if (!favorites.some((favEpisode) => favEpisode.id === episode.id)) {
      episode.showTitle = filteredShows.find((show) => show.id === episode.showId).title;
      episode.season = episode.seasonNumber; // assuming 'seasonNumber' property is present
      episode.addedToFavoritesAt = new Date().toISOString();
      setFavorites((prevFavorites) => [...prevFavorites, episode]);
    }
  };

  const handleRemoveFromFavorites = (episodeId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((episode) => episode.id !== episodeId));
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    filterShows(e.target.value, genreFilter);
  };

  const handleGenreFilter = (genre) => {
    setGenreFilter(genre);
    filterShows(searchQuery, genre);
  };

  const filterShows = (query, genre) => {
    let filteredData = shows;
    if (genre) {
      filteredData = shows.filter((show) => show.genres.includes(genre));
    }

    if (query) {
      const fuse = new Fuse(filteredData, { keys: ['title'] });
      filteredData = fuse.search(query).map((result) => result.item);
    }

    setFilteredShows(filteredData);
  };

  const sortShowsByTitleAZ = () => {
    const sortedData = [...filteredShows].sort((a, b) => a.title.localeCompare(b.title));
    setFilteredShows(sortedData);
  };

  const sortShowsByTitleZA = () => {
    const sortedData = [...filteredShows].sort((a, b) => b.title.localeCompare(a.title));
    setFilteredShows(sortedData);
  };

  const sortShowsByDateAsc = () => {
    const sortedData = [...filteredShows].sort((a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated));
    setFilteredShows(sortedData);
  };

  const sortShowsByDateDesc = () => {
    const sortedData = [...filteredShows].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    setFilteredShows(sortedData);
  };

  return (
    <div className="container">
      <header>
        <h1>Podcast App</h1>
        <input type="text" placeholder="Search by title..." value={searchQuery} onChange={handleSearchInputChange} />
        
        <div className="sort-buttons">
          <button onClick={sortShowsByTitleAZ}>Sort A-Z</button>
          <button onClick={sortShowsByTitleZA}>Sort Z-A</button>
          <button onClick={sortShowsByDateAsc}>Sort by Date Asc</button>
          <button onClick={sortShowsByDateDesc}>Sort by Date Desc</button>
        </div>
      </header>
      <div className="home">
        {filteredShows.map((show) => (
          <Show key={show.id} show={show} onShowSelect={onShowSelect} />
        ))}
      </div>
      {/* <Favorites favorites={favorites} onRemoveFromFavorites={handleRemoveFromFavorites} />  */}
     </div>
  );
};

export default Home;

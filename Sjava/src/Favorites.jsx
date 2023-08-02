import React, { useState } from 'react';
import Episode from './components/Episodes';


const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  const [sortedFavorites, setSortedFavorites] = useState([...favorites]);

  const handleSortByTitleAZ = () => {
    const sortedData = [...sortedFavorites].sort((a, b) => a.showTitle.localeCompare(b.showTitle));
    setSortedFavorites(sortedData);
  };

  const handleSortByTitleZA = () => {
    const sortedData = [...sortedFavorites].sort((a, b) => b.showTitle.localeCompare(a.showTitle));
    setSortedFavorites(sortedData);
  };

  const handleSortByDateAsc = () => {
    const sortedData = [...sortedFavorites].sort((a, b) => new Date(a.addedToFavoritesAt) - new Date(b.addedToFavoritesAt));
    setSortedFavorites(sortedData);
  };

  const handleSortByDateDesc = () => {
    const sortedData = [...sortedFavorites].sort((a, b) => new Date(b.addedToFavoritesAt) - new Date(a.addedToFavoritesAt));
    setSortedFavorites(sortedData);
  };

  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      <select>
        <option onClick={handleSortByTitleAZ}>Sort A-Z</option>
        <option onClick={handleSortByTitleZA}>Sort Z-A</option>
        <option onClick={handleSortByDateAsc}>Sort by Date Asc</option>
        <option onClick={handleSortByDateDesc}>Sort by Date Desc</option>
      </select>
      {sortedFavorites.length === 0 ? (
        <p>No favorite episodes yet.</p>
      ) : (
        sortedFavorites.map((favorite) => (
          <div key={favorite.id} className="favorite-episodes">
            <h3>{favorite.showTitle} - Season {favorite.season}</h3>
            <p>Added on: {new Date(favorite.addedToFavoritesAt).toLocaleString()}</p>
            <Episode
              episode={favorite}
              onToggleFavorite={onRemoveFromFavorites}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;


import React, { useState } from 'react';
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  // Function to add an episode to favorites
  const addToFavorites = (episode) => {
    if (!favorites.some((fav) => fav.id === episode.id)) {
      setFavorites([...favorites, { ...episode, addedAt: new Date() }]);
    }
  };
  // Function to remove an episode from favorites
  const removeFromFavorites = (episodeId) => {
    setFavorites(favorites.filter((fav) => fav.id !== episodeId));
  };
  // Function to arrange favorites by show titles (A-Z)
  const sortByTitleAscending = () => {
    setFavorites([...favorites].sort((a, b) => a.showTitle.localeCompare(b.showTitle)));
  };
  // Function to arrange favorites by show titles (Z-A)
  const sortByTitleDescending = () => {
    setFavorites([...favorites].sort((a, b) => b.showTitle.localeCompare(a.showTitle)));
  };
  // Function to arrange favorites by date updated (ascending)
  const sortByDateAscending = () => {
    setFavorites([...favorites].sort((a, b) => a.addedAt - b.addedAt));
  };
  // Function to arrange favorites by date updated (descending)
  const sortByDateDescending = () => {
    setFavorites([...favorites].sort((a, b) => b.addedAt - a.addedAt));
  };
  return (
    <div>
      <h2>My Favorites</h2>
      <button onClick={sortByTitleAscending}>Sort by Show Title (A-Z)</button>
      <button onClick={sortByTitleDescending}>Sort by Show Title (Z-A)</button>
      <button onClick={sortByDateAscending}>Sort by Date Added (Ascending)</button>
      <button onClick={sortByDateDescending}>Sort by Date Added (Descending)</button>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <h3>Show: {favorite.showTitle}</h3>
            <p>Season: {favorite.season}</p>
            <p>Title: {favorite.title}</p>
            <p>Date Added: {favorite.addedAt.toLocaleString()}</p>
            <button onClick={() => removeFromFavorites(favorite.id)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Favorites;

// this component manages a list of favorite podcast episodes, allowing users to add, 
// remove, and sort episodes based on
//  different criteria. It provides a
//   UI interface for displaying the 
//   list of favorites along 
//   with options to sort and remove episodes
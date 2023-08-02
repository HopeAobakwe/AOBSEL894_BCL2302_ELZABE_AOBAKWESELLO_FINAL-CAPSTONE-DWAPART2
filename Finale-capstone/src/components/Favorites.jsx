// Inside the 'Favorites' component
import React, { useState } from 'react';

function Favorites({ favoriteEpisodes }) {
  const handleRemoveFromFavorites = (episodeId) => {
    // Implement logic to remove episode from favorites
  };

  return (
    <div>
      <h1>Favorites</h1>
      {favoriteEpisodes.length === 0 ? (
        <p>No favorite episodes yet.</p>
      ) : (
        favoriteEpisodes.map((episode) => (
          <div key={episode.id}>
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
            <button onClick={() => handleRemoveFromFavorites(episode.id)}>Remove from Favorites</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;



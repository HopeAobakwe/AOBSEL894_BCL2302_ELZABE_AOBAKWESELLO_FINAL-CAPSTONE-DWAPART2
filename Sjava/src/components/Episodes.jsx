import React from 'react';
import Favorites from '../Favorites';

const Episode = ({ episode, onToggleFavorite }) => {
  const handleToggleFavorite = () => {
    onToggleFavorite(episode);
  };

  return (
    <div className="episode">
      <h3>{episode.title}</h3>
      <p>{episode.description}</p>
    
    </div>
  );
};

export default Episode;

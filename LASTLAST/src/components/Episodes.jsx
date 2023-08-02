import React from 'react';

const Episode = ({ episode, onToggleFavorite }) => {
  const handleToggleFavorite = () => {
    onToggleFavorite(episode);
  };

  return (
    <div className="episode">
      <h3>{episode.title}</h3>
      <p>{episode.description}</p>
      <audio controls>
        <source src={episode.audioURL} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handleToggleFavorite}>
        {episode.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default Episode;

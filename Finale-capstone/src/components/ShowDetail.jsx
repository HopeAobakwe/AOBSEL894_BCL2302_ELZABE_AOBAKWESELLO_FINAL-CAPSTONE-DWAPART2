
import React, { useState } from 'react';

function ShowDetail({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode);
    setIsPlaying(true);
  };

  return (
    <div>
      <h1>{show.title}</h1>
      <p>{show.description}</p>

      {/* Display the list of episodes */}
      {show.episodes.map((episode) => (
        <div key={episode.id}>
          <img src={episode.image} alt={show.tittle}/>
          <h3>{episode.title}</h3>
          <p>{episode.description}</p>
          <button onClick={() => handleEpisodeSelect(episode)}>Play</button>
          {/* Add episode to favorites */}
          <button onClick={() => handleAddToFavorites(episode)}>Add to Favorites</button>
        </div>
      ))}

      {/* Display the audio player */}
      {selectedEpisode && (
        <div>
          <audio controls autoPlay={isPlaying}>
            <source src={selectedEpisode.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default ShowDetail;


import React, { useState, useEffect } from 'react';
import { fetchShowDetails } from '../api';
// import Season from '../components/Season';

const ShowDetails = ({ match }) => {
  const showId = match.params.id;
  const [show, setShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    const getShowDetails = async () => {
      const data = await fetchShowDetails(showId);
      setShow(data);
    };
    getShowDetails();
  }, [showId]);

  const handleSeasonSelect = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
  };

  const renderSeasons = () => {
    return (
      <div className="seasons">
        {show.seasons.map((season) => (
          <div key={season.seasonNumber}>
            <h3>Season {season.seasonNumber}</h3>
            <p>Number of Episodes: {season.episodes.length}</p>
            <button onClick={() => handleSeasonSelect(season.seasonNumber)}>View Episodes</button>
          </div>
        ))}
      </div>
    );
  };

  const renderEpisodes = () => {
    const selectedSeasonData = show.seasons.find((season) => season.seasonNumber === selectedSeason);
    return (
      <div className="episodes">
        <button onClick={() => setSelectedSeason(null)}>Back to Seasons</button>
        <h2>Episodes - Season {selectedSeasonData.seasonNumber}</h2>
        {selectedSeasonData.episodes.map((episode) => (
          <div key={episode.id} className="episode">
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
            <audio controls>
              <source src={episode.audioURL} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button onClick={() => handleAddToFavorites(episode)}>
              {episode.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    );
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details">
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      {selectedSeason ? renderEpisodes() : renderSeasons()}
    </div>
  );
};

export default ShowDetails;

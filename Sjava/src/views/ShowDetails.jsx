import React, { useState, useEffect } from 'react';
import { fetchShowDetails } from '../api';
import Season from '../components/Seasons'; // Correct the import statement here
import Episode from '../components/Episodes';




const ShowDetails = ({ showId }) => {
  const [showDetails, setShowDetails] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    const getShowDetails = async () => {
      const data = await fetchShowDetails(showId);
      setShowDetails(data);
    };
    getShowDetails();
  }, [showId]);

  const handleSeasonSelect = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
  };

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{showDetails.title}</h2>
      <p>{showDetails.description}</p>
      <div>
        {showDetails.seasons.map((season) => (
          <Season key={season.number} season={season} onSeasonSelect={handleSeasonSelect} />
        ))}
      </div>
      {selectedSeason && (
        <div>
          <h3>Season {selectedSeason}</h3>
          {showDetails.episodes
            .filter((episode) => episode.season === selectedSeason)
            .map((episode) => (
              <Episode key={episode.id} episode={episode} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowDetails;

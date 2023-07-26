import React, { useEffect, useState } from 'react';

const Season = ({ onSeasonSelect }) => {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    // Fetch seasons data from the API
    fetch('https://podcast-api.netlify.app/seasons')
      .then((response) => response.json())
      .then((data) => setSeasons(data))
      .catch((error) => console.error('Error fetching seasons:', error));
  }, []);

  return (
    <div>
      {seasons.map((season) => (
        <div className="season" key={season.number}>
          <img src={season.imageUrl} alt={`Preview of Season ${season.number}`} />
          <h2>Season {season.number}</h2>
          <p>Episodes: {season.episodes.length}</p>
          <button onClick={() => onSeasonSelect(season.number)}>View Episodes</button>
        </div>
      ))}
    </div>
  );
};

export default Season;
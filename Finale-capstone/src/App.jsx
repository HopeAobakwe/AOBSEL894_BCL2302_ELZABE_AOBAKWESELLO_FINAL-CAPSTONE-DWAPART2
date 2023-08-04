import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'


function App() {
  const [view, setView] = useState('showList');
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await axios.get('https://podcast-api.netlify.app/shows');
      setShows(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching shows:', error);
      setLoading(false);
    }
  };

  const handleShowDetail = (showId) => {
    setSelectedShow(showId);
    setView('showDetail');
  };

  const handleSeasonSelect = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
    setView('seasonDetail');
  };

  const handleBackToShows = () => {
    setSelectedShow(null);
    setSelectedSeason(null);
    setView('showList');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {view === 'showList' && (
        <div>
          <h1>All Shows</h1>
          {shows.map((show) => (
            <div key={show.id}>
              <img className="img" src={show.image} alt={show.tittle}/> 
              <h2>{show.title}</h2>
              <p>{show.description}</p>

              <button onClick={() => handleShowDetail(show.id)}>View Details</button>
            </div>
          ))}
        </div>
      )}

      {view === 'showDetail' && selectedShow && (
        <div>
          <h1>{selectedShow.title}</h1>
          <p>{selectedShow.description}</p>
          <button onClick={() => handleBackToShows()}>Back to Shows</button>
          <button onClick={() => {
            console.log(selectedShow) 
            setView('seasonList')}}>View Seasons</button>
        </div>
      )}

      {view === 'seasonList' && selectedShow && (
        <div>
          <h1>{selectedShow.title} - Seasons</h1>
          {selectedShow.seasons.map((season) => (
            <div key={season.number}>
              <h3>Season {season.number}</h3>
              <p>{season.description}</p>
              <button onClick={() => handleSeasonSelect(season.number)}>View Episodes</button>
            </div>
          ))}
          <button onClick={() => handleBackToShows()}>Back to Shows</button>
        </div>
      )}

      {view === 'seasonDetail' && selectedShow && selectedSeason && (
        <div>
          <h1>{selectedShow.title} - Season {selectedSeason}</h1>
          {/* Display episodes of the selected season */}
          <button onClick={() => handleBackToShows()}>Back to Shows</button>
          <button onClick={() => setView('seasonList')}>Back to Seasons</button>
        </div>
      )}
    </div>
  );
}

export default App;
 



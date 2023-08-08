import React, { useState, useEffect, Fragment } from 'react';
import Favorites from './Favorites'; 
import Login from './login';
import axios from 'axios';
import Header from './Header';
import Hero from './Hero';

const PodcastData = () => {
  const [previewData, setPreviewData] = useState([]);
  const [showData, setShowData] = useState(null);
  const [loadingPreview, setLoadingPreview] = useState(true);
  const [loadingShow, setLoadingShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [Favorites, setFavorites] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [selectedSeason, setSelectedSeason] = useState(null);
 
  const [isLoggedIn, setIsLoggedIn]=useState('signUpPhase')
  const genreTitleMapping = {
    1: 'Personal Growth',
    2: 'True Crime and Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family',
  };

  const playEpisode = (episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  };



  const pauseEpisode = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  const formatDate= (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  

  const fetchShows = async () => {
    try {
      const response = await axios.get('https://podcast-api.netlify.app/shows');
      const data = response.data;
      setPreviewData(data);
      setLoadingPreview(false);
    } catch (error) {
      console.error('Error fetching shows:', error);
    }
  };


  
  const fetchShowDetails = async (showId) => {
    try {
      setLoadingShow(true);
      const response = await axios.get(`https://podcast-api.netlify.app/id/${showId}`);
      const data = response.data;
      setShowData(data);
      setSelectedSeason(null);
      setLoadingShow(false);
    } catch (error) {
      console.error('Error fetching show details:', error);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const addToFavorites = (show) => {
    setFavorites((prevFavorites) => [...prevFavorites, show]);
  };

  const removeFromFavorites = (showId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((show) => show.id !== showId));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleShowClick = (showId) => {
    fetchShowDetails(showId);
  };

  const handleSeasonClick = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
  };
  // const handlefavouritesClick = (favorites.show.${id}) => {
  //   setSelectedshow(show.id);
  // };



  useEffect(() => {
    let filteredShows = previewData.filter((show) =>
      show.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    if (sortBy === '[A-Z]') {
      filteredShows.sort((a, b) => a.title.localeCompare(b.title));
    } else if(sortBy == '[Z-A]'){
      filteredShows.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === 'genre') {
      filteredShows.sort((a, b) => a.genres - b.genres);
    } else if (sortBy === 'Oldest') {
      filteredShows.sort((a, b) => new Date(a.updated) - new Date(b.updated));
    } else if (sortBy === 'Latest') {
      filteredShows.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    }
  
    setFilteredData(filteredShows);
  }, [previewData, searchQuery, sortBy]);
  


  const [selectedPreviewId, setSelectedPreviewId] = useState(null);
  const toggleDescription = (previewId) => {
    setSelectedPreviewId((prevId) => (prevId === previewId ? null : previewId));
  };



  if (loadingPreview) {
    return <div>Loading initial data...</div>;
  }

  

  if (!showData) {
    return ( 
      
      <div className="podcast-data-container">
         
            <Header
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              sortBy={sortBy}
              handleSortChange={handleSortChange}
            />
            <Hero />
            <ul className="preview-list">
              {filteredData.map((show) => (
                <li key={show.id} className="preview-item">
                  <div className="image">
                    <img src={show.image} alt={show.title} className="preview-image" />
                   
                  </div>
                  <div className="infos">
                    <h3>Title: {show.title}</h3>
                    <p>Seasons: {show.seasons}</p>
                    <p>Last Updated: {formatDate(show.updated)}</p>
                  </div>
                  
                  {selectedPreviewId === show.id && (
                    <div className="preview-description">{show.description}</div>
                  )}
                  <button onClick={() => toggleDescription(show.id)}>Description</button>
                  <button onClick={() => handleShowClick(show.id)}>Seasons</button>
                  <button onClick={() => addToFavorites(show)}>Add to Favorites</button>
                </li>
              ))}
            </ul>
       
      </div>
    );
  }
  

  return (
   
    <div className="seas-data-container">
      <button onClick={() => setShowData(null)}>Back to Show List</button>
      <div>
        <h2>{showData.title}</h2>
        {showData.seasons.map((season) => (
          <div key={season.number}>
            <h3>Season {season.number}</h3>
            {selectedSeason === season.number ? (
              <ul>
                {season.episodes.map((episode) => (
                  <Fragment key={episode.id}>
                    <h4>{episode.name}</h4>
                    <li>{episode.title}</li>
                    <p>{episode.description}</p>
                    <audio controls>
                      <source src={episode.file} />
                    </audio>
                  </Fragment>
                  
                ))}
              </ul>
            ) : (
              <div>
                <img className="seas" src={season.image} alt={`Season ${season.number}`} />
                <div>{season.episodes.length} Episodes</div>
                <button onClick={() => handleSeasonClick(season.number)}>View Episodes</button>
              </div>
            )}
          </div> 
        ))}
      </div>
      
    </div>
  );
};

export default PodcastData;

// This code essentially creates a podcast application 
// that allows users to browse, search,
//  sort, and manage their favorite podcast shows and episodes.
//   It offers a rich user experience with the ability 
//   to explore show details and listen to episodes within the app.
import React from 'react';
const PreviewList = ({
  previews,
  fetchShowData,
  addToFavorites,
  removeFromFavorites,
  genreTitleMapping,
  favorites,
  playEpisode,
}) => {
  return (
    <ul className="preview-list">
      
      {previews.map((preview) => (
        <li key={preview.id} className="preview-item">
          <img src={preview.image} alt={preview.title} className="preview-image" />
          <div className="preview-details">
            <h3>{preview.title}</h3>
            <p>Genre: {genreTitleMapping[preview.genre]}</p>
            {/* Show details will be displayed directly here */}
            <button onClick={() => playEpisode(preview)}>Play</button>
            {favorites.some((fav) => fav.id === preview.id) ? (
              <button onClick={() => removeFromFavorites(preview.id)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => addToFavorites(preview)}>Add to Favorites</button>
            )}
          </div>
        </li>
      ))}
    </ul>
    
  );
};
export default PreviewList;
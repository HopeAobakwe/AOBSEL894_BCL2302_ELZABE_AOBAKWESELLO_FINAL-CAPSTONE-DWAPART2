import React from 'react';

const GenreFilter = ({ genres, onGenreFilter }) => {
  return (
    <div className="genres">
      {genres.map((genre) => (
        <button key={genre} onClick={() => onGenreFilter(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;

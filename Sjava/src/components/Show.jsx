import React from 'react';



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

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
const Show = ({ show, onShowSelect }) => {
  return (
    <div className="show">
      <img src={show.image} alt={`Preview of ${show.title}`} />
      <h2>{show.title}</h2>
      <p>Seasons{show.seasons}</p>
      <p>Updated:{formatDate(show.updated)}</p>
      <p>Genres:{show.genres.map((genreId) => genreTitleMapping[genreId]).join(', ')}</p>
      <p>Discription:{show.description}</p>
      <button onClick={() => onShowSelect(show.id)}>View Details</button>
    </div>
  );
};

export default Show;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3aWVzdXFhamFwbHdxcW9paWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5NzA3MDEsImV4cCI6MjAwNjU0NjcwMX0.2gVSrg6WfzP5D_ym7KYlVaUqs5w55cUExxB32h5NWiE
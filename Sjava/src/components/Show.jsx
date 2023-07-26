import React from 'react';

const Show = ({ show, onShowSelect }) => {
  return (
    <div className="show">
      <img src={show.image} alt={`Preview of ${show.title}`} />
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      <button onClick={() => onShowSelect(show.id)}>View Details</button>
    </div>
  );
};

export default Show;

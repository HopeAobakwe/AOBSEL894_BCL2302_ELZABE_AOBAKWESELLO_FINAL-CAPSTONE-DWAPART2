import React, { useState } from 'react';
import Home from '../src/views/Home';
import ShowDetails from '../src/views/ShowDetails';




const App = () => {
  const [audioSource, setAudioSource] = useState('');

  const handleAudioSourceChange = (source) => {
    setAudioSource(source);
  };

  // We can use a simple state variable to keep track of the current page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to switch the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let content = null;

  // Determine which component to render based on the current page
  switch (currentPage) {
    case 'home':
      content = <Home handlePageChange={handlePageChange} />;
      break;
    case 'showDetails':
      content = <ShowDetails handlePageChange={handlePageChange} />;
      break;
    case 'favorites':
      content = <Favorites handlePageChange={handlePageChange} />;
      break;
    default:
      content = <Home handlePageChange={handlePageChange} />;
      break;
  }

  return (
    <div className="app">
      {content}
      <AudioPlayer audioSource={audioSource} />
    </div>
  );
};

export default App;

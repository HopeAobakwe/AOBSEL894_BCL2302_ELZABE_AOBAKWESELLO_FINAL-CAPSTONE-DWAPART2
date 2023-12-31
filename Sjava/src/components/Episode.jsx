import React from 'react';

const Episode = ({ episode, isPlaying, onTogglePlay, onPause }) => {
  // Function to handle play/pause button click
  const handleTogglePlay = () => {
    if (isPlaying) {
      onPause();
    } else {
      onTogglePlay();
    }
  };

  return (
    <div className="audio-player">
      <h2>Audio Player</h2>
      <h3>{episode.title}</h3>
      <audio src={episode.audioUrl} controls={true} autoPlay={isPlaying} />
      <button onClick={handleTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default Episode;

// this component encapsulates an audio player with play/pause 
// functionality and a button to toggle playback state.
//  It's designed to be reusable, allowing you to provide 
//  different episodes and playback controls via props.
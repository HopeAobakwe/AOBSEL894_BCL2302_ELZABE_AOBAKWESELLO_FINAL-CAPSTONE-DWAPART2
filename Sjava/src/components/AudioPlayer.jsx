import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ episode, isPlaying, onTogglePlay, onPause }) => {
  // Create a reference to the audio element using useRef
  const audioRef = useRef(null);

  // Pause the audio when the component unmounts
  useEffect(() => {
    return () => {
      audioRef.current.pause(); // Pause the audio when the component is unmounted
    };
  }, []);

  // Function to handle play/pause button click
  const handleTogglePlay = () => {
    if (isPlaying) {
      onPause(); // Call the onPause callback function if audio is currently playing
    } else {
      onTogglePlay(); // Call the onTogglePlay callback function if audio is currently paused
    }
  };

  // Function to handle audio play/pause based on isPlaying prop
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play(); // Play the audio when isPlaying is true
    } else {
      audioRef.current.pause(); // Pause the audio when isPlaying is false
    }
  }, [isPlaying]);

  return (
    <div className="audio-player">
      <h2>Audio Player</h2>
      <h3>{episode.title}</h3>
      {/* Audio element with reference to the audioRef and attributes for source, controls, and autoPlay */}
      <audio ref={audioRef} src={episode.audioUrl} controls={true} autoPlay={isPlaying} />
      {/* Play/Pause button with click event handler */}
      <button onClick={handleTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default AudioPlayer;

//  this component creates an audio 
// player with play/pause functionality.
//  It uses useRef to reference the
//   audio element, and two useEffect 
//   hooks to manage the audio playback
//    state and handle cleanup when the
//     component is unmounted. The play/pause button and audio controls are provided in the UI.
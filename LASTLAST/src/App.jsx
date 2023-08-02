import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import ShowDetails from './views/ShowDetails';
import Favorites from './views/Favorites';
import AudioPlayer from './components/AudioPlayer';

const App = () => {
  const [audioSource, setAudioSource] = useState('');

  const handleAudioSourceChange = (source) => {
    setAudioSource(source);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/show/:id" component={ShowDetails} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
        <AudioPlayer audioSource={audioSource} />
      </div>
    </Router>
  );
};

export default App;

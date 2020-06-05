import React from 'react';
import { Router } from '@reach/router';
import Pokemon from './components/Pokemon'
import Starwars from './components/Starwars'
import Got from './components/Got';


function App() {
  return (
    <div>
      <Router>
        <Pokemon path="/" />
        <Starwars path="/starwars" />
        <Got path="/got" />
      </Router>
    </div>
  );
}

export default App;

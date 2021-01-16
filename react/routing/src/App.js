import './App.css';
import React from 'react';

import{Router} from '@reach/router';
import  Phrase  from "./components/phrase";

function App() {
  return (
    <div className="App">
      <Router>
        <Phrase path ="/:phrase"/>
        <Phrase path="/:phrase/:color/:colors"/>
      </Router>
    </div>
  );
}

export default App;

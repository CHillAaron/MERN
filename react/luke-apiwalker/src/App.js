import './App.css';
import React from 'react';
import { Router} from "@reach/router";
import Form from './components/form'
import Display from './components/display'

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  
  return (
    <div className="App">
        
      <Form />
      
      <Router>
        {/* <Film path="films"/> */}
        <Display path="/starwars/:category/:id" />
      </Router>
    </div> 
  );
}

export default App;

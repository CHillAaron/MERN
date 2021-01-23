import './App.css';
import React from 'react';
import { Router} from "@reach/router";
import Form from './components/form'
import People from './components/people'

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  
  return (
    <div className="App">
        
      <Form />
      
      <Router>
        {/* <Film path="films"/> */}
        <People path="/starwars/:category/:id" />
      </Router>
    </div> 
  );
}

export default App;

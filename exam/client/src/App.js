import './App.css';
import { Router } from "@reach/router";
import Main from "./components/main"
import Form from './components/form'
import PetInfo from "./components/details"
import Update from "./components/update"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1> 
      <Router>
        <Main path="/" />
        <Form path="/new" />
        <PetInfo path="/shelter/:id" />
        <Update path="/shelter/update/:id" />
      </Router>
    </div>
  );
}

export default App;

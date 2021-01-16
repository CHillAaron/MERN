import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  
  return (
    <div className="App">
      <PersonCard  last= {"Doe"} first={"Jane"} age={45} hair={"Black"}/>
      <PersonCard  last= {"Smith"} first={"John"} age={88} hair={"Brown"}/>
      <PersonCard  last= {"Fillmore"} first={"Millard"} age={50} hair={"Brown"}/>
      <PersonCard  last= {"Smith"} first={"Maria"} age={62} hair={"Brown"}> </PersonCard>
    </div>
  );
}

export default App;

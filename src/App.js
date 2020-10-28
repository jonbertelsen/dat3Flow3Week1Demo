import React, { Component } from 'react'
import './App.css';
import Fans from './Fans/fans'
import Tid from './Tid'

const App = () => {
  return (
    <div className="App">
      <h1>Velkommen til Medina</h1>
      <Fans />
      <Tid besked="Ingen beskeder i dag!!" />
    </div>
  );

  //return React.createElement('div', null, React.createElement('p', null, 'Velkommen i p-tag'))



}

export default App;

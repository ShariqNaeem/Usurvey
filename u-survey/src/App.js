import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Usurvey from './Usurvey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div id="body">
          <Usurvey />
        </div>
      </div>
    );
  }
}

export default App;

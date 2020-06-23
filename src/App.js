import React from 'react';
import { Component } from 'react';
import './App.css';
import Bottonestart from './components/bottone/bottone-start.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Bottonestart></Bottonestart>
        </header>
      </div>
    );
  }
}

export default App;

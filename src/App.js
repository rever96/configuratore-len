import React from 'react';
import { Component } from 'react';
import './App.scss';
import Bottonestart from './components/bottone/bottone-start.component';

import img1 from './assets/1.jpg';
import img2 from './assets/2.png';

class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${img1})`,
        }}
        className='App'
      >
        <header className='App-header'>
          <div
            className='logo'
            style={{
              backgroundImage: `url(${img2})`,
            }}
          ></div>
          <Bottonestart></Bottonestart>
        </header>
      </div>
    );
  }
}

export default App;

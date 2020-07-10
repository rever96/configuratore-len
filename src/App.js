import React from 'react';
import { Component } from 'react';
import './App.scss';
import Bottonestart from './components/bottone/bottone-start.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domandeJson: null,
      impostazioni: {},
    };

    fetch('assets/domande.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((r) => r.json())
      .then((domandeJson) => {
        this.setState({
          domandeJson,
        });
      });
    fetch('assets/impostazioni.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((r) => r.json())
      .then((impostazioni) => {
        this.setState({
          impostazioni,
        });
      });
  }

  componentDidMount() {
    document.onkeydown = function (e) {
      if (e.keyCode === 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        return false;
      }
    };
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/assets/images/background.jpg'
          })`,
          height: '100%',
        }}
        className='App'
      >
        <header className='App-header'>
          <Bottonestart
            impostazioni={this.state.impostazioni}
            domandeJson={this.state.domandeJson}
          ></Bottonestart>
        </header>
      </div>
    );
  }
}

export default App;

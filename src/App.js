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

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/assets/images/background.jpg'
          })`,
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

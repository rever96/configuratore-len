import React from 'react';
import './riassunto_end.scss';
import { reset } from '../../actions';
import { connect } from 'react-redux';

class RiassuntoEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pp: false,
    };
  }
  ricomincia = () => {
    this.props.end();
    this.props.dispatch(reset());
  };

  render() {
    return (
      <>
        <div
          style={{ width: '100%', ...this.props.impostazioni.textStyle }}
          justify='center'
          align='top'
        >
          <div>
            <h1 style={{ color: '#fff', ...this.props.impostazioni.textStyle }}>
              Completato!
            </h1>
            <h2 style={{ color: '#fff', ...this.props.impostazioni.textStyle }}>
              Totale preventivo{' '}
              <span style={{ color: '#0f0' }}>
                €{' '}
                {this.props.store
                  .getState()
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.opzioneScelta.prezzo,
                    0
                  )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </span>
            </h2>
            <h2
              style={{ color: '#fff', ...this.props.impostazioni.textStyle }}
              level={2}
            >
              Contattaci per definire il progetto!
            </h2>
          </div>
        </div>

        <div className='container'>
          <form
            action='mailto:info@infiniteofficine.com'
            method='post'
            className='form'
            encType='text/plain'
          >
            <input
              autoComplete='new-password'
              type='text'
              placeholder='Nominativo'
              name='nominativo'
            />
            <input
              autoComplete='new-password'
              type='email'
              name='email'
              placeholder='Email'
            />
            <input type='text' placeholder='Oggetto' name='oggetto' />
            <input
              name='configurazione'
              type='hidden'
              value={this.props.store
                .getState()
                .map((opzione, key) => {
                  return (
                    ' - ' +
                    opzione.domanda +
                    ': ' +
                    opzione.opzioneScelta.descrizione +
                    '\n'
                  );
                })
                .toString()
                .split(',')
                .join('')}
            ></input>
            <textarea placeholder='Contenuto' name='contenuto' />
            <label className='container1'>
              Acconsento al trattamento dei dati come descritto nella{' '}
              <a href='https://www.infiniteofficine.com/IO/privacy-policy.html'>
                privacy policy
              </a>
              <input
                type='checkbox'
                checked={this.state.pp ? 'checked' : false}
                onChange={(v) => {
                  this.setState({
                    pp: !this.state.pp,
                  });
                }}
              />
              <span className='checkmark'></span>
            </label>
            {this.state.pp && (
              <button
                style={{ ...this.props.impostazioni.textStyle }}
                type='submit'
                id='login-button'
              >
                Contattaci
              </button>
            )}
            {!this.state.pp && (
              <button
                style={{ ...this.props.impostazioni.textStyle }}
                type='submit'
                id='login-button'
                disabled
              >
                Contattaci
              </button>
            )}
          </form>
        </div>
        <div style={{ position: 'absolute', bottom: '30px' }}>
          <button
            style={{ ...this.props.impostazioni.textStyle }}
            onClick={this.ricomincia}
            className='button'
          >
            Ricomincia
          </button>
        </div>
      </>
    );
  }
}

export default connect()(RiassuntoEnd);

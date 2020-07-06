import React from 'react';
import './riassunto_end.scss';
import { reset } from '../../actions';
import { connect } from 'react-redux';

const RiassuntoEnd = (props) => {
  function ricomincia() {
    props.end();
    props.dispatch(reset());
  }

  return (
    <>
      <div style={{ width: '100%' }} justify='center' align='top'>
        <div>
          <h1 style={{ color: '#fff' }}>Completato!</h1>
          <h2 style={{ color: '#fff' }}>
            Totale preventivo{' '}
            <span style={{ color: '#0f0' }}>
              €{' '}
              {props.store
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
          <h2 style={{ color: '#fff' }} level={2}>
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
            value={props.store
              .getState()
              .map((opzione, key) => {
                return (
                  opzione.domanda + ': ' + opzione.opzioneScelta.descrizione
                );
              })
              .toString()}
          ></input>
          <textarea placeholder='Contenuto' name='contenuto' />
          <button type='submit' id='login-button'>
            Contattaci
          </button>
        </form>
      </div>
      <div style={{ position: 'absolute', bottom: '30px' }}>
        <button onClick={ricomincia} className='button'>
          Ricomincia
        </button>
      </div>
    </>
  );
};

export default connect()(RiassuntoEnd);

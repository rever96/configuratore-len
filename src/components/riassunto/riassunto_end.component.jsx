import React from 'react';
import './riassunto_end.css';
import { reset } from '../../actions';
import { connect } from 'react-redux';

const RiassuntoEnd = props => {
  function ricomincia() {
    props.end();
    props.dispatch(reset());
  }

  return (
    <>
      <img className="intro-image" src="intro.png" alt=""></img>
      <h1 className="title">
        Il costo per la mia app:
        {props.store
          .getState()
          .reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.opzioneScelta.prezzo,
            0
          )}
      </h1>
      <ul>
        {props.store.getState().map((opzione, key) => {
          return <li key={key}>{opzione.opzioneScelta.descrizione}</li>;
        })}
      </ul>
      <button onClick={ricomincia} className="button text-uppercase js--start">
        Ricomincia da capo
      </button>
    </>
  );
};

export default connect()(RiassuntoEnd);

import './card.css';
import React from 'react';
import { connect } from 'react-redux';
import { nextPasso, prevPasso } from '../../actions';
import Headbar from '../headbar/headbar.component';

const Passo = ({ domanda, dispatch, index, totaleDomande, store }) => {
  console.log(store.getState());
  function handleClick(value, titolo) {
    console.log(value);
    dispatch(nextPasso(value, titolo));
  }

  return (
    <>
      <Headbar
        costoTotale={store
          .getState()
          .reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.opzioneScelta.prezzo,
            0
          )}
        totale={totaleDomande}
        indice={++index}
        onPrevClick={() => dispatch(prevPasso())}
      />
      <section className="section question">
        <h2>{domanda.titolo}</h2>
        <div className={'answer-group row-of-' + domanda.opzioni.length}>
          {domanda.opzioni.map((value, key) => {
            return (
              <Card
                key={key}
                value={value}
                onItemClick={() => handleClick(value, domanda.titolo)}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const Card = props => {
  return (
    <div className="col">
      <div className="answer js--answer" onClick={() => props.onItemClick()}>
        <img
          className="answer-image js--answer-image"
          src={props.value.immagine}
          alt={props.value.descrizione}
        />
        <span className="answer-text">{props.value.descrizione}</span>
      </div>
    </div>
  );
};

export default connect()(Passo);

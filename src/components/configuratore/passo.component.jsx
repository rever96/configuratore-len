import './card.css';
import React from 'react';
import { connect } from 'react-redux';
import { nextPasso, prevPasso } from '../../actions';
import Headbar from '../headbar/headbar.component';
import Footbar from '../footer/footer';

const Passo = ({ domanda, dispatch, index, totaleDomande, store }) => {
  console.log(store.getState());

  let optionClicked = false;

  function handleClick(value, titolo) {
    if (optionClicked) {
      return;
    }
    optionClicked = true;
    console.log(value);
    setTimeout(() => {
      optionClicked = false;
      dispatch(nextPasso(value, titolo));
    }, 500);
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
          )
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        totale={totaleDomande}
        indice={index + 1}
        onPrevClick={() => dispatch(prevPasso())}
      />
      <section className='section question'>
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
      <Footbar totale={totaleDomande} indice={index}></Footbar>
    </>
  );
};

const Card = (props) => {
  return (
    <div className='col'>
      <div
        className='answer js--answer button'
        onClick={() => props.onItemClick()}
      >
        <div>
          <div className='answer-text'>{props.value.descrizione}</div>
          <div className='answer-text'>
            {props.value.prezzo
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '€'}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(Passo);

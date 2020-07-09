import './card.css';
import React from 'react';
import { connect } from 'react-redux';
import { nextPasso } from '../../actions';
import Footbar from '../footer/footer';

import ReactHtmlParser from 'react-html-parser';

const Passo = (props) => {
  const { domanda, dispatch, index, totaleDomande, store } = props;
  let optionClicked = false;

  function handleClick(value, titolo) {
    if (optionClicked) {
      return;
    }
    optionClicked = true;
    setTimeout(() => {
      optionClicked = false;
      dispatch(nextPasso(value, titolo));
    }, 100);
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/assets/images/' + domanda.background
          })`,
          zIndex: '0',
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100vw',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          background: '#00000000',
        }}
      ></div>
      <div
        className='logo'
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/assets/images/' + domanda.immagine
          })`,
        }}
      ></div>
      <section
        style={{ position: 'sticky', top: '50%' }}
        className='section question'
      >
        <div style={{ ...props.impostazioni.textStyle }}>
          {ReactHtmlParser(domanda.titolo)}
        </div>
        <div
          style={{ textAlign: 'center' }}
          className={'answer-group row-of-' + domanda.opzioni.length}
        >
          {domanda.opzioni.map((value, key) => {
            return (
              <Card
                {...props}
                key={key}
                value={value}
                onItemClick={() => handleClick(value, domanda.titolo)}
              />
            );
          })}
        </div>
      </section>
      <Footbar totale={totaleDomande} indice={index}></Footbar>
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          ...props.impostazioni.textStyle,
        }}
      >
        Totale parziale €{' '}
        {store
          .getState()
          .reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.opzioneScelta.prezzo,
            0
          )
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
      </div>
    </>
  );
};

const Card = (props) => {
  return (
    <div
      className='col'
      style={{
        display: 'inline-block',
        marginLeft: '10px',
        marginRight: '10px',
        ...props.impostazioni.textStyle,
      }}
    >
      <div style={{ minWidth: '200px', ...props.impostazioni.textStyle }}>
        <div
          style={{ ...props.impostazioni.textStyle }}
          className='button'
          onClick={() => props.onItemClick()}
        >
          {props.value.descrizione}
        </div>
        <div
          style={{
            marginTop: '15px',
            ...props.impostazioni.textStyle,
          }}
        >
          {props.value.prezzo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') +
            '€'}
        </div>
      </div>
    </div>
  );
};
export default connect()(Passo);

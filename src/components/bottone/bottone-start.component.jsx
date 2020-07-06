import React, { useState } from 'react';

import './bottone.css';
import { Configuratore } from '../configuratore/configuratore.component';

export function Bottonestart() {
  const [index, setIndex] = useState(-1);
  function start() {
    setIndex(0);
  }

  function reset() {
    setIndex(-1);
  }

  if (index === -1) {
    return (
      <>
        <img className='intro-image' src='intro.png' alt=''></img>
        <h1 className='title'>
          Quanto costa aprire il tuo <strong>E-commerce</strong>?
        </h1>
        <p className='subtitle'>
          Calcola rapidamente il costo per creare il tuo{' '}
          <strong>negozio online</strong>, rispondendo a dieci semplici domande.
        </p>
        <button onClick={start} className='button'>
          Raccontaci
        </button>
      </>
    );
  } else {
    return (
      <Configuratore
        index={index}
        setIndex={setIndex}
        end={reset}
        className='Component'
      ></Configuratore>
    );
  }
}

export default Bottonestart;

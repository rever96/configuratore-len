import React, { useState } from 'react';

import './bottone.css';
import { Configuratore } from '../configuratore/configuratore.component';

export function Bottonestart(props) {
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
        <div
          className='logo'
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + '/assets/images/Copertina__Mano_001.png'
            })`,
          }}
        ></div>
        <h1 style={{ ...props.impostazioni.textStyle }} className='title'>
          Quanto costa aprire il tuo <strong>E-commerce</strong>?
        </h1>
        <p style={{ ...props.impostazioni.textStyle }} className='subtitle'>
          Crea un preventivo gratuito per il tuo{' '}
          <strong> negozio online</strong>, seguendo sei semplici passaggi:
        </p>
        <button
          style={{ ...props.impostazioni.textStyle }}
          onClick={start}
          className='button'
        >
          Inizia ora!
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
        {...props}
      ></Configuratore>
    );
  }
}

export default Bottonestart;

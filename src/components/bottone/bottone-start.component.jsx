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
        <img className="intro-image" src="intro.png" alt=""></img>
        <h1 className="title">
          Quanto costa sviluppare la mia <strong>app</strong>?
        </h1>
        <p className="subtitle">
          Calcola rapidamente il costo per creare la tua app, rispondendo a
          queste semplici domande.
        </p>
        <button onClick={start} className="button text-uppercase js--start">
          Calcolare
        </button>
      </>
    );
  } else {
    return (
      <Configuratore
        index={index}
        setIndex={setIndex}
        end={reset}
        className="Component"
      ></Configuratore>
    );
  }
}

export default Bottonestart;

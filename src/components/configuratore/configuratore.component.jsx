import './card.css';
import React from 'react';
import MioPasso from './passo.component';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduceConfig } from '../../reducers/config';
import RiassuntoEnd from '../riassunto/riassunto_end.component';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let storeConfig = createStore(reduceConfig, composeEnhancers());

export const Configuratore = (props) => {
  storeConfig.subscribe(() => {
    props.setIndex(storeConfig.getState().length);
  });

  if (props.index === props.domandeJson.length) {
    return (
      <>
        <RiassuntoEnd store={storeConfig} {...props}></RiassuntoEnd>
      </>
    );
  } else {
    return (
      <Provider store={storeConfig}>
        <MioPasso
          store={storeConfig}
          totaleDomande={props.domandeJson.length}
          {...props}
          domanda={props.domandeJson[props.index]}
        />
      </Provider>
    );
  }
};

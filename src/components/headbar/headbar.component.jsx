import './headbar.css';

import { connect } from 'react-redux';
import React from 'react';

const Headbar = (props) => {
  return (
    <>
      <span className='center-top '>
        {props.indice} / {props.totale}
      </span>
      <span style={{ color: '#0f0' }} className='right-top'>
        {props.costoTotale} euro
      </span>
      <span className='left-top' onClick={() => props.onPrevClick()}>
        {'< indietro'}
      </span>
    </>
  );
};

const mapStateToProps = (state) => ({
  opzioniScelte: state,
});

export default connect(mapStateToProps)(Headbar);

import './card.css';
import React from 'react';
import { connect } from 'react-redux';
import { nextPasso, prevPasso } from '../../actions';
import Headbar from '../headbar/headbar.component';
import { Card } from 'antd';

const { Meta } = Card;

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
          )
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        totale={totaleDomande}
        indice={++index}
        onPrevClick={() => dispatch(prevPasso())}
      />
      <section className='section question'>
        <h2>{domanda.titolo}</h2>
        <div className={'answer-group row-of-' + domanda.opzioni.length}>
          {domanda.opzioni.map((value, key) => {
            return (
              <div
                key={key}
                className='col'
                onClick={() => handleClick(value, domanda.titolo)}
              >
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt='example' src='src/assets/img/prova.png' />}
                >
                  <Meta
                    title={value.descrizione}
                    description={
                      '€' +
                      value.prezzo
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                    }
                  />
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default connect()(Passo);

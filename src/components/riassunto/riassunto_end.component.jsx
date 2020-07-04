import React from 'react';
import './riassunto_end.scss';
import { reset } from '../../actions';
import { connect } from 'react-redux';

import { Col, Row, Typography } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RiassuntoEnd = (props) => {
  function ricomincia() {
    props.end();
    props.dispatch(reset());
  }
  const onFinish = (values) => {
    console.log('Success:', values);
    ricomincia();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let placeholder1 = 'Nominativo';

  return (
    <>
      <Row style={{ width: '100%' }} justify='center' align='top'>
        <Col>
          <Typography.Title style={{ color: '#fff' }} level={1}>
            Completato!
          </Typography.Title>
          <Typography.Title style={{ color: '#fff' }} level={2}>
            Totale preventivo €{' '}
            {props.store
              .getState()
              .reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.opzioneScelta.prezzo,
                0
              )
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </Typography.Title>
          <Typography.Title style={{ color: '#fff' }} level={2}>
            Contattaci per definire il progetto!
          </Typography.Title>
        </Col>
      </Row>

      <div className='container'>
        <form className='form'>
          <input
            autoComplete='new-password'
            type='text'
            placeholder={placeholder1}
          />
          <input autoComplete='new-password' type='text' placeholder='Email' />
          <input type='text' placeholder='Oggetto' />
          <textarea placeholder='Contenuto' />
          <button type='submit' id='login-button'>
            Contattaci
          </button>
        </form>
      </div>
    </>
  );
};

export default connect()(RiassuntoEnd);

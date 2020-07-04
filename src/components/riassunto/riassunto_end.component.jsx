import React from 'react';
import './riassunto_end.css';
import { reset } from '../../actions';
import { connect } from 'react-redux';

import { Form, Input, Button, Col, Row, Typography } from 'antd';

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

      <div style={{ backgroundColor: '#ddd' }}>
        <Form
          layout='vertical'
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Nominativo'
            name='username'
            rules={[{ required: true, message: 'Campo obbligatorio' }]}
          >
            <Input width='50%' />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Campo obbligatorio' }]}
          >
            <Input width='50%' />
          </Form.Item>
          <Form.Item
            label='Oggetto'
            name='object'
            rules={[{ required: true, message: 'Campo obbligatorio' }]}
          >
            <Input width='50%' />
          </Form.Item>

          <Form.Item label='Contenuto' name='contenuto'>
            <Input.TextArea></Input.TextArea>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Contattaci
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default connect()(RiassuntoEnd);

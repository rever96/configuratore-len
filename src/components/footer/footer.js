import './footer.css';

import { connect } from 'react-redux';
import React from 'react';

const Headbar = (props) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          width: '45vw',
          zIndex: '1',
        }}
      >
        <ul className='progressbar'>
          {[...Array(props.totale).keys()].map((key) =>
            props.indice > key ? (
              <li
                style={{ width: 100 / props.totale + '%' }}
                className='active'
                key={key}
              ></li>
            ) : (
              <li style={{ width: 100 / props.totale + '%' }} key={key}></li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  opzioniScelte: state,
});

export default connect(mapStateToProps)(Headbar);

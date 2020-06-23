import './headbar.css';
import { connect } from 'react-redux';
import React from 'react';

const Headbar = props => {
  return (
    <>
      <span className="center-top ">
        {props.indice} / {props.totale}
      </span>
      <span className="right-top">{props.costoTotale} euro</span>
      <span className="left-top" onClick={() => props.onPrevClick()}>
        torna alla domanda precedente
      </span>
    </>
  );
};

const mapStateToProps = state => ({
  opzioniScelte: state
});

export default connect(mapStateToProps)(Headbar);

// import './headbar.css';
// import { connect } from 'react-redux';
// import React from 'react';

// const Headbar = ({ opzioniScelte }) => {
//   console.log(opzioniScelte);
//   return (
//     <>
//       <span className="center-top ">
//         {props.indice} / {props.totale}
//       </span>
//       <span className="right-top"></span>
//       <span className="left-top" onClick={() => props.onPrevClick()}>
//         torna alla domanda precedente
//       </span>
//     </>
//   );
// };

// const mapStateToProps = state => ({
//   opzioniScelte: state
// });

// export default connect(mapStateToProps)(Headbar);

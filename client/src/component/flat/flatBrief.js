import React from 'react';
 import './css/flatBrief.css'
const FlatBrief = (props) => {
  return (
    <div className="briefDiscriptiona">
      <div className="briefDiscription">

        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
        <h3>{props.street} {props.flatNumber} {props.postCode} </h3>
        <h4>{props.description}</h4>

      </div>
    </div>
  );
};

export default FlatBrief;
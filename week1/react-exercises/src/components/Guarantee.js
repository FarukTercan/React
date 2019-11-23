import React from 'react';

function Guarantee(props) {
  return (
    <div className="guarantee-main">
      <img className="guarantee-image" src={props.image} />
      <h1 className="guarantee-title">{props.title}</h1>
      <p className="guarantee-para">{props.para} </p>
    </div>
  );
}

export default Guarantee;

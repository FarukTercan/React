import React from 'react';

function ManipulateData(props) {
  return (
    <div className="weather-main">
      <div className="city">
        <h2 className="title">
          {props.name}, {props.country}
        </h2>
      </div>
      <div className="condition">
        <ul className="list">
          {props.conditions.map(condition => {
            return (
              <div>
                <li className="condition1">{condition.main}</li>
                <li className="condition2">{condition.description} </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="temp-location">
        <p className="min-temp">min temp: {props.min_temp}</p>
        <p className="max-temp">max temp: {props.max_temp}</p>
        <p className="location">
          location: {props.longitude}, {props.latitude}
        </p>
      </div>
    </div>
  );
}

export default ManipulateData;

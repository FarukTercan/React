import React from 'react';

function CityProfile({ city }) {
  const { name, sys, weather, main, coord } = city;

  return (
    <div className="city-main">
      <ul className="city-list">
        <li>
          <h3>
            {name}, {sys.country}
          </h3>
        </li>
        <li>
          <span>Condition :</span> {weather[0].main} / {weather[0].description}
        </li>
        <li>
          <span>Min-Max ( K ) :</span> <span className="min-temp">{main.temp_min}</span> /{' '}
          <span className="max-temp">{main.temp_max}</span>
        </li>
        <li>
          <span>Location :</span> {coord.lon}° to {coord.lat}°
        </li>
      </ul>
    </div>
  );
}

export default CityProfile;

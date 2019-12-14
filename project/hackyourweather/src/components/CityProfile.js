import React from 'react';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { Link } from 'react-router-dom';

function CityProfile(props) {
  const { name, sys, weather, main, coord, id } = props.city;

  function convertKToC(kelvin) {
    if (kelvin < 0) {
      return 'below absolute zero (0 K)';
    } else {
      const celcius = kelvin - 273.15;
      return Math.round(celcius);
    }
  }

  return (
    <div className="city-main">
      <button className="close-city" onClick={() => props.clickDelete(id)}>
        <DeleteForeverTwoToneIcon />
      </button>
      <ul className="city-list">
        <li>
          <Link to={`/${id}`}>
            <h3>
              {name}, {sys.country}
            </h3>
          </Link>
        </li>
        <li>
          <span>Condition :</span> {weather[0].main} / {weather[0].description}
        </li>
        <li>
          <span>Min-Max Degree :</span>{' '}
          <span className="min-temp">{convertKToC(main.temp_min)} °C</span>/{' '}
          <span className="max-temp">{convertKToC(main.temp_max)} °C</span>
        </li>
        <li>
          <span>Location :</span> {coord.lon}° to {coord.lat}°
        </li>
      </ul>
    </div>
  );
}

export default CityProfile;

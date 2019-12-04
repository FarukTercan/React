import React, { useState, useEffect } from 'react';
import CityProfile from './CityProfile';
import Form from './Form';

function Cities() {
  const [cities, setCity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  async function getCity(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}`,
      );
      const data = await response.json();
      if (data.cod === '404') return setErrorState(true);
      setErrorState(false);
      setCity([data]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div>
      <Form onSubmitForm={getCity} />
      {errorState && <h4>City is not found</h4>}
      {loading === false && cities.map(city => <CityProfile key={city.id} city={city} />)}
    </div>
  );
}

export default Cities;

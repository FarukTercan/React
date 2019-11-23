import React from 'react';
import './App.css';
import capitals from './city-weather.json';
import ManipulateData from './components/manipulateData';

function App() {
  return (
    <div>
      <h1 className="header">Weather</h1>
      <div>
        {capitals.map(capital => {
          return (
            <div>
              <ManipulateData
                name={capital.name}
                country={capital.sys.country}
                conditions={capital.weather}
                min_temp={capital.main.temp_min}
                max_temp={capital.main.temp_max}
                latitude={capital.coord.lat}
                longitude={capital.coord.lon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

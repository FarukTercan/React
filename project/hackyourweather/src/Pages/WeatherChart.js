import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function WeatherChart() {
  const { cityId } = useParams();

  //FETCH
  const [forecast, setForecast] = useState([]);
  const [title, setTitle] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  async function getChartData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${api_key}`,
      );
      if (!response.ok) {
        throw new Error('Fetching Error');
      }
      const data = await response.json();

      setForecast(data.list);
      setTitle(data.city);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      setErrorState(true);
    }
  }
  useEffect(() => {
    getChartData();
  }, []);

  return (
    <div className="chart-page">
      <div className="home-btn">
        <Link to="/">
          <button>
            <HomeRoundedIcon />
          </button>
        </Link>
      </div>
      <div>
        <h2>
          {title.name} ({title.country})
        </h2>
        <Link to="/">
          <button className="hourly-btn btn">Hourly Forecast</button>
        </Link>
        <Link to="/daily">
          <button className="daily-btn btn">Daily Forecast</button>
        </Link>
        {errorState === true && <h4>Oops smt wrong</h4>}
      </div>

      <div className="chart" style={{ width: '60%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={forecast} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="main.temp" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeatherChart;

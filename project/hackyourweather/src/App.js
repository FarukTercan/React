import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import WeatherChart from './Pages/WeatherChart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:cityId">
          <WeatherChart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

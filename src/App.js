import WeatherIcons from './WeatherIcons'; 
import Weather from './Weather';
import React from "react";
import './App.css';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <WeatherIcons icon="CLEAR_DAY" color="goldenrod" animate={true} />
         <Weather cityName="Odessa"/>
      </header>
      <p><a href="https://github.com/HannaDevops/react-weather.git" > Open-source code</a>, by
      <a href="www.linkedin.com/in/hloban"> Hanna Loban</a></p>
    </div>
  );
}

export default App;

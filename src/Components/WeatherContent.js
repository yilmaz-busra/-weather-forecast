import React from "react";
import "../../src/App.css";
function WeatherContent(weather) {
  const today = new Date().toLocaleDateString();
  return (
    <div className="weather-container">
      {weather.weather && (
        <div className="weather-card">
          <h2>{weather.weather.name}</h2>
          <p>{weather.weather.weather[0].description}</p>
          <p>{weather.weather.main.temp}°C</p>
          <p>{today}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherContent;

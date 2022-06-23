import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: " Athens",
    temperature: 30,
    date: "Thursday 10:00",
    description: "Clear Sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 35,
    wind: 6,
  };
  return (
    <div className="Weather">
      <div className="container weather-app">
        <div className="row">
          <div className="col-7">
            <form>
              <input
                type="search"
                placeHolder="Enter a city"
                autoComplete="off"
              />
            </form>
          </div>
          <div className="col-5">
            <div className="d-grid gap-2 d-md-block">
              <button className="btn btn-primary search" type="button">
                Search
              </button>
              <button className="btn btn-primary current" type="button">
                Current
              </button>
            </div>
          </div>
        </div>
        <div className="weatherInfo">
          <div className="row">
            <div className="col-6">
              <div className="temperatureContainer">
                <span className="temperature"> {weatherData.temperature}</span>
                <span className="units">
                  <a href="/">°C </a> |<a href="/">°F</a>
                </span>
                <img
                  src={weatherData.imgUrl}
                  alt="weather icon"
                  className="float-left"
                />
              </div>
            </div>
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <h5>{weatherData.date}</h5>
              <h6>
                <strong>{weatherData.description}</strong> Humidity:
                <strong> {weatherData.humidity}</strong> % Wind:
                <strong>{weatherData.wind}</strong> km/h
              </h6>
            </div>
          </div>
        </div>
        <div className="weatherForecast"></div>
        This project was coded by{" "}
        <a
          href="https://glittery-boba-1babca.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Ariola Markou,
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/ariolam/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced.
        </a>
      </div>
    </div>
  );
}

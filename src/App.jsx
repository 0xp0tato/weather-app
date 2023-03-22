import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [cityName, setcityName] = useState("");
  const [finalCity, setfinalCity] = useState("");
  const [temp, settemp] = useState();

  const apiKey = "448b9f1fbc52dc166a3613b1261d45d3";

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )
      .then(function (response) {
        console.log(response);
        setfinalCity(cityName.charAt(0).toUpperCase() + cityName.slice(1));
        settemp(response.data.main.temp);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <div className="search-bar">
        <input className="city-input"></input>
        <button>submit</button>
      </div>
      <div className="weather-image"></div>
      <div className="temp-container"></div>
      <div className="city-container"></div>
      <div className="additional-info">
        <div className="humidity-container"></div>
        <div className="wind-speed-container"></div>
      </div>
    </div>
  );
}

export default App;

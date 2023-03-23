import { useState } from "react";
import "./App.css";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";

function App() {
  const [cityName, setcityName] = useState("");
  const [finalCity, setfinalCity] = useState("London");
  const [temp, settemp] = useState(10);

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
      <div className="search-bar-container">
        <input className="city-input"></input>
        <button type="submit" onClick={handleSubmit}>
          <IoIosSearch style={{ fontSize: "40px" }} />
        </button>
      </div>
      <div className="weather-image">
        <BsFillSunFill style={{ fontSize: "5rem" }} />
      </div>
      <div className="temp-container">{temp}°C</div>
      <div className="city-container">{finalCity}</div>
      <div className="additional-info">
        <div className="humidity-container"></div>
        <div className="wind-speed-container"></div>
      </div>
    </div>
  );
}

export default App;

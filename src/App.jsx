import { useState } from "react";
import "./App.css";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { SiWindicss } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";

function App() {
  const [cityName, setcityName] = useState("");
  const [finalCity, setfinalCity] = useState();
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
      <div className="search-bar-container">
        <input
          className="city-input"
          value={cityName}
          onChange={(e) => setcityName(e.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          <IoIosSearch style={{ fontSize: "40px" }} />
        </button>
      </div>
      <div className="weather-image">
        <BsFillSunFill style={{ fontSize: "5rem" }} />
      </div>
      <div className="temp-container">{temp && <p>{temp}°C</p>}</div>
      <div className="city-container">{finalCity}</div>
      <div className="additional-info">
        <div className="humidity-container">
          <WiHumidity style={{ fontSize: "70px", padding: "5px" }} />
        </div>
        <div className="wind-speed-container">
          <SiWindicss style={{ fontSize: "50px", padding: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default App;

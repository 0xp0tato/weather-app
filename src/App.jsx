import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [cityName, setcityName] = useState("");

  const apiKey = "32090a39b13339be996b7a6f7d859e5b";

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <span className="App">
      <form className="text-card" onSubmit={handleSubmit}>
        <h1 className="app-name">Weather App</h1>
        <input
          className="city-input"
          placeholder="Enter City Name"
          value={cityName}
          onChange={(e) => {
            setcityName(e.target.value);
          }}
        ></input>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <div className="temp-card">
        <h1 className="location">New Delhi</h1>
        <div className="weather-icon"></div>
        <h1 className="temperature">13°C</h1>
        <h1 className="weather-description">Cloudy</h1>
      </div>
    </span>
  );
}

export default App;

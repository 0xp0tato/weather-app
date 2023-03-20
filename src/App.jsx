import "./App.css";

function App() {
  return (
    <span className="App">
      <div className="text-card">
        <h1 className="app-name">Weather App</h1>
        <input className="city-input" placeholder="Enter City Name"></input>
      </div>
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

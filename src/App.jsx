import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7d86334c5233bbd3808f73d75e82c147`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          className="city"
          placeholder="Enter city"
          type = 'text'
          style={{ fontSize: "25px" }}
        />
      </div>
      <div className="results">
        <div className="top" >
          <div className="location" style={{ fontSize: "45px" }}>{data.name}</div>
          <div className="temp" style={{ fontSize: "25px" }}>{data.main ? <h1>{data.main.temp}</h1> : null}</div>
        </div>
        <br/>
        <br/>
        <div className="bottom" >
          <div className="description"><h1>Description</h1></div>
          <div className="feels"><h1>Feels</h1></div>
          <div className="temp-minmax"><h1>Temp Min/Max</h1></div>
          <div className="description" style={{ fontSize: "30px" }}>{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
          <div className="feels" style={{ fontSize: "30px" }}>{data.main ? <p>{data.main.feels_like}</p> : null}</div>
          <div className="temp-minmax" style={{ fontSize: "30px" }}>{data.main ? <p>{data.main.temp_min} / {data.main.temp_max}</p> : null}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
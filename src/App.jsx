import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=bronx&appid=7d86334c5233bbd3808f73d75e82c147";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  // console.log(data);

  return (
    <div className="app">
      <div className="search">
        <input placeholder="Enter city" style={{ fontSize: "25px" }} />
        <button>Search</button>
      </div>
      <div className="results">
        <div className="top" style={{ fontSize: "45px" }}>
          <div className="location">Bronx</div>
          <div className="temp">33°F</div>
        </div>
        <div className="bottom" style={{ fontSize: "25px" }}>
          <div className="description">Cloudy</div>
          <div className="feels">Cool</div>
          <div className="temp-minmax">30°F / 45°F</div>
        </div>
      </div>
    </div>
  );
}

export default App;

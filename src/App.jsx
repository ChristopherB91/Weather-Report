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
          <div className="description">Description</div>
          <div className="feels">Feels</div>
          <div className="temp-minmax">Temp Min/Max</div>
          <div className="description-word">Clear Sky</div>
          <div className="feels-word">271.52</div>
          <div className="temp-minmax-word">271.17/274.98</div>
        </div>
      </div>
    </div>
  );
}

export default App;

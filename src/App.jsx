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

  console.log(data);

  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <input placeholder="Enter city" style={{}} />
        <button>Search</button>
      </div>
      <div className="Results">
        <div className="Location">Bronx</div>
        <div className="Temp">33°F</div>
        <div className="Description">Cloudy</div>
        <div className="Feels">Cool</div>
      </div>
    </div>
  );
}

export default App;

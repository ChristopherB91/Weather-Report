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
        <div className="top" style={{ fontSize: "45px" }}>
          <div className="location">{data.name}</div>
          <div className="temp">33°F</div>
        </div>
        <div className="bottom" style={{ fontSize: "25px" }}>
          <div className="description">Description</div>
          <div className="feels">Feels</div>
          <div className="temp-minmax">Temp Min/Max</div>
          <div className="description">Clear Sky</div>
          <div className="feels">271.52</div>
          <div className="temp-minmax">271.17/274.98</div>
        </div>
      </div>
    </div>
  );
}

export default App;


// useEffect(() => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((result) => setData(result));
//   console.log(data);
//   console.log(location);
// }, []);
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setErrror] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonres = await res.json();
      console.log(jsonres);
      let result = {
        city: city,
        temp: jsonres.main.temp,
        tempMin: jsonres.main.temp_min,
        tempMax: jsonres.main.temp_max,
        humidity: jsonres.main.humidity,
        feelsLike: jsonres.main.feels_like,
        weather: jsonres.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setErrror(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="Submit">
          Search
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such place exists in our API</p>}
    </div>
  );
}

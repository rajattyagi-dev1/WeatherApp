import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setweatherInfo] = useState({
    city: "Delhi",
    feelsLike: 29.76,
    humidity: 63,
    temp: 27.98,
    tempMax: 27.98,
    tempMin: 27.98,
    weather: "broken clouds",
  });
  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

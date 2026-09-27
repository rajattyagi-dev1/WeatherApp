import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox() {
  const INIT_URL =
    "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let info = {
    city: "Delhi",
    feelsLike: 29.76,
    humidity: 63,
    temp: 27.98,
    tempMax: 27.98,
    tempMin: 27.98,
    weather: "broken clouds",
  };
  return (
    <div className="infoBox">
      <h3>WeatherInfo - {info.weather}</h3>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min temp={info.tempMin}&deg;C</p>
              <p>Max temp={info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather}</b> and feels
                like=
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

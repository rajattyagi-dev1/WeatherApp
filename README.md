# 🌤️ Weather App

A simple weather application built with **React.js** that allows users to search for a city and view its current weather information.

This project was built as part of my React learning journey to practice **React state management, props, API integration, asynchronous JavaScript, conditional rendering, and Material UI**.

---

## 🚀 Features

- 🔍 Search weather information by city name
- 🌡️ Display current temperature
- 💧 Display humidity
- 🌡️ Display minimum and maximum temperature
- 🤗 Display feels-like temperature
- 🌥️ Display weather description
- 🖼️ Dynamic weather images based on weather conditions
- ☀️ Sunny, 🌧️ rainy, and ❄️ cold weather icons
- ❌ Error message for invalid/non-existent cities
- 🎨 Material UI components for the search interface and weather card
- 🔐 API key stored using environment variables

---

## 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **Vite**
- **Material UI (MUI)**
- **Material UI Icons**
- **CSS**
- **OpenWeather API**
- **Unsplash**

---

## 📚 React Concepts Practiced

This project helped me practice the following React concepts.

### 🧩 Components

The application is divided into reusable components:

- `WeatherApp`
- `SearchBox`
- `InfoBox`

---

### 📦 Props

Data and functions are passed between components using props.

```jsx
<SearchBox updateInfo={updateInfo} />

<InfoBox info={weatherInfo} />
```

---

### 🔄 State Management

`useState` is used to manage:

- Search city
- Error state
- Weather information

```jsx
const [weatherInfo, setWeatherInfo] = useState({
  city: "",
  temp: 0,
  tempMin: 0,
  tempMax: 0,
  humidity: 0,
  feelsLike: 0,
  weather: "",
});
```

---

### 🎛️ Controlled Components

The city search input is controlled using React state.

```jsx
<TextField value={city} onChange={handleChange} />
```

---

### 🔄 Child → Parent Communication

`SearchBox` sends the fetched weather data to `WeatherApp` using the `updateInfo` callback.

```text
SearchBox
    ↓
updateInfo(newInfo)
    ↓
WeatherApp
    ↓
setWeatherInfo(newInfo)
    ↓
InfoBox
```

---

### ⚡ Async/Await & Fetch

The OpenWeather API is accessed using `fetch()` and `async/await`.

```javascript
let res = await fetch(API_URL);
let jsonRes = await res.json();
```

---

### 🔀 Conditional Rendering

Weather images and icons change according to weather conditions.

```jsx
info.humidity > 80 ? (
  <UmbrellaIcon />
) : info.temp > 20 ? (
  <SunnyIcon />
) : (
  <AcUnitIcon />
);
```

---

## 🌐 API

This application uses the **OpenWeather API** to retrieve current weather information.

The application retrieves:

- 🌡️ Temperature
- 🔽 Minimum temperature
- 🔼 Maximum temperature
- 💧 Humidity
- 🤗 Feels-like temperature
- 🌥️ Weather description

The API uses metric units, so temperatures are displayed in **Celsius**.

```text
units=metric
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

The API key is accessed using:

```javascript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

Make sure `.env` is included in `.gitignore` so that the API key is not uploaded to GitHub.

```text
.env
.env.local
```

---

## 📂 Project Structure

```text
weatherApp/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── App.jsx
│   ├── App.css
│   │
│   ├── WeatherApp.jsx
│   │
│   ├── SearchBox.jsx
│   ├── SearchBox.css
│   │
│   ├── InfoBox.jsx
│   ├── InfoBox.css
│   │
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🔄 Application Flow

```text
User enters city
       ↓
   SearchBox
       ↓
OpenWeather API
       ↓
Weather data received
       ↓
Create weather object
       ↓
updateInfo(newInfo)
       ↓
WeatherApp updates state
       ↓
InfoBox receives updated data
       ↓
Weather information displayed
```

---

## 🖥️ Main Components

### `App.jsx`

The root component that renders the `WeatherApp`.

```jsx
<WeatherApp />
```

---

### `WeatherApp.jsx`

Acts as the main component that stores the weather information and connects the `SearchBox` and `InfoBox` components.

```jsx
<SearchBox updateInfo={updateInfo} />

<InfoBox info={weatherInfo} />
```

---

### `SearchBox.jsx`

Responsible for:

- Taking the city name
- Handling user input
- Calling the OpenWeather API
- Processing the API response
- Handling invalid city errors
- Sending weather data to the parent component

---

### `InfoBox.jsx`

Responsible for displaying:

- City name
- Temperature
- Humidity
- Minimum temperature
- Maximum temperature
- Feels-like temperature
- Weather description
- Dynamic weather image
- Weather-specific Material UI icons

---

## 🎨 Material UI

The project uses **Material UI (MUI)** for several interface components.

### Components

- `TextField`
- `Button`
- `Card`
- `CardContent`
- `CardMedia`
- `Typography`

### Icons

- `AcUnitIcon`
- `UmbrellaIcon`
- `SunnyIcon`

Material UI is used to create the search form, weather card, and weather condition icons.

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weatherApp.git
```

### 2. Navigate to the Project

```bash
cd weatherApp
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create `.env`

Create a `.env` file in the root directory:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite, usually:

```text
http://localhost:5173
```

---

## 🔮 Future Improvements

The current version is a basic weather application. Possible future improvements include:

- 📍 Current-location weather using the Geolocation API
- 📅 Multi-day weather forecast
- 🌙 Dark mode
- ⏳ Loading state while fetching weather
- 🌡️ Celsius/Fahrenheit toggle
- 🌅 More weather-specific images and icons
- 📱 Improved mobile responsiveness
- 🌍 More detailed weather information
- 💾 Recent/search history
- 🌤️ Weather animations
- ⚠️ Improved API error handling

---

## 👨‍💻 Author

**Rajat Tyagi**

CSE (AI/ML) Student | React.js Learner | Full-Stack Development Enthusiast

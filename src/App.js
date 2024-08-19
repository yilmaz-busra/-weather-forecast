import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { usePosition } from "use-position";
import WeatherContent from "./Components/WeatherContent";

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState(""); // Şehir adını tutmak için state
  const { latitude, longitude } = usePosition();

  // Kullanıcıdan enlem ve boylam bilgisine göre hava durumu bilgisi alan fonksiyon
  const getWeatherByCoords = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch (error) {
      alert("Veri alınırken hata oluştu!");
    }
  };

  // Kullanıcının girdiği şehir adına göre hava durumu bilgisi alan fonksiyon
  const getWeatherByCity = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch (error) {
      alert("Veri alınırken hata oluştu!");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherByCoords(latitude, longitude);
  }, [latitude, longitude]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      getWeatherByCity(city);
    }
  };

  return (
    <div className="App">
      <video className="bg-video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + "/hava.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Hava Durumu Uygulaması</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Şehir adı girin..."
            value={city}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Hava Durumunu Getir</button>
        </div>
        <WeatherContent weather={weather} />
      </div>
    </div>
  );
}

export default App;

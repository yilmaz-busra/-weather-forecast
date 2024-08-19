import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";

function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeather = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const lang = navigator.language.split("-")[0];
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch (error) {
      alert("Veri alınırken Hata Oluştu!");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeather(latitude, longitude);
  }, [latitude, longitude]);
  console.log(latitude, longitude, weather);

  return (
    <div className="App">
      <video className="bg-video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + "/hava.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {/* Diğer içerikler buraya gelecek */}
        <h1>Hava Durumu Uygulaması</h1>
        {/* HavaDurumu bileşeniniz burada yer alabilir */}
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import OutfitCard from './components/OutfitCard';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchByCity(city) {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchByCoords(lat, lon) {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Weather fetch failed');
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app container">
      <h1>Weather Outfit Recommender</h1>
      <SearchBar onSearch={fetchByCity} onGeolocate={fetchByCoords} loading={loading}/>
      {weather && <OutfitCard weather={weather} />}
    </div>
  );
}

export default App;
console.log("API key loaded:", import.meta.env.VITE_OPENWEATHER_API_KEY);

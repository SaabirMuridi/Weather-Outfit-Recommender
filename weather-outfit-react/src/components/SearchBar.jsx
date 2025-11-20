import { useState } from 'react';

export default function SearchBar({ onSearch, onGeolocate, loading }) {
  const [city, setCity] = useState('');

  return (
    <div className="searchbar">
      <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={()=>onSearch(city)} disabled={loading}>Get</button>
      <button onClick={()=>{
        if (!navigator.geolocation) return alert("No geolocation");
        navigator.geolocation.getCurrentPosition(pos => onGeolocate(pos.coords.latitude, pos.coords.longitude));
      }}>Use My Location</button>
    </div>
  )
}

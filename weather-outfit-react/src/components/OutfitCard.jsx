export default function OutfitCard({ weather }) {
  const temp = weather.main.temp;
  const desc = weather.weather[0].description;
  const wind = weather.wind.speed;

  function decideOutfit(tempC, desc, wind) {
    let outfit = "";
    if (tempC >= 25) outfit = "T-shirt + shorts (sunglasses recommended) 😎";
    else if (tempC >= 18) outfit = "Light shirt or tee + jeans/shorts 👕";
    else if (tempC >= 10) outfit = "Long-sleeve + light jacket 🧥";
    else if (tempC >= 0) outfit = "Sweater + coat; consider layers 🧣";
    else outfit = "Heavy coat + scarf + gloves ❄️";

    const d = desc.toLowerCase();
    if (d.includes('rain') || d.includes('drizzle')) outfit += " — bring an umbrella ☔";
    if (d.includes('snow')) outfit += " — wear boots and a warm hat 🥾";
    if (wind > 8) outfit += " — it's windy; a windbreaker helps 🌬️";

    return outfit;
  }

  const outfit = decideOutfit(temp, desc, wind);

  return (
    <div className="card">
      <h2>{weather.name}</h2>
      <p>🌡️ {temp.toFixed(1)} °C — {desc}</p>
      <p>💧 Humidity: {weather.main.humidity}% • 🌬️ Wind: {wind} m/s</p>
      <hr />
      <p className="outfit">{outfit}</p>
    </div>
  )
}

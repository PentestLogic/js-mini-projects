const apiKey = 'YOUR_OPENWEATHER_API_KEY';

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    document.getElementById('weatherResult').innerText = 'City not found 🚫';
    return;
  }

  const data = await response.json();
  const { name, main, weather } = data;

  document.getElementById('weatherResult').innerHTML = `
    <h2>${name}</h2>
    <p>🌡️ Temp: ${main.temp}°C</p>
    <p>💧 Humidity: ${main.humidity}%</p>
    <p>🌤️ ${weather[0].description}</p>
  `;
}

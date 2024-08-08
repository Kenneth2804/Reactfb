import React, {useState} from 'react'

export default function Clima() {

  const [ubicacion, setUbicacion] = useState('');
  const [clima, setClima] = useState(null);
  const [error, setError] = useState('');

const obtenerClima = async () =>{
  setError('');
  try {
    const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${ubicacion}`);
    if (!geoResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const geoData = await geoResponse.json();
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error('Ubicación no encontrada');
    }
    const { latitude, longitude } = geoData.results[0];

    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      if (!weatherResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const weatherData = await weatherResponse.json();
      setClima(weatherData.current_weather);

    
  } catch (error) {

    console.error('Error fetching the weather data:', error);
    setError('Hubo un problema al obtener los datos del clima. Por favor, intenta de nuevo.');
    setClima(null); 
    
  }


}

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Clima Actual</h1>
    <input 
      type="text" 
      placeholder="Ubicación" 
      value={ubicacion} 
      onChange={(e) => setUbicacion(e.target.value)} 
    />
   
    <button onClick={obtenerClima}>Obtener Clima</button>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {clima && (
        <div>
          <h2>{ubicacion}</h2>
          <p>{clima.weathercode}</p>
          <p style={{color: "white"}}>Temp: {clima.temperature}°C</p>
        </div>
      )}
    </div>
  )
}

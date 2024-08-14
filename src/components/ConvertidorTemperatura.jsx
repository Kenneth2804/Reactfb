import React, {useState} from 'react'

export default function ConvertidorTemperatura() {
  
    const [celsius, setCelsius] = useState(0)
  
    const convertir = (celsius) => (celsius * 9/5) + 32
  
    return (
    <div>
<input
type="number"
value={celsius}
onChange={(e) => setCelsius(e.target.value)}
placeholder='Celsius'
style={{color: "black"}}
/>
<p style={{color: "white"}}>
{celsius}°C igual a {convertir(celsius)}°F
</p>     
    </div>
  )
}

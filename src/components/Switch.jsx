import React,  { useState } from 'react'

import "../styles/switch.css"


export default function Switch() {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
      };
 
  return (
<div className="switch-container">
  <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
  <div className="switch-handle" />
        </div>

        <p>{isOn ? 'Encendido' : 'Apagado'}</p>

    </div>
  )
}

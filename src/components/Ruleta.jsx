import React, { useState, useRef } from 'react';
import "../styles/ruleta.css";

export default function Ruleta() {

    const [names, setNames] = useState('');
    const [winner, setWinner] = useState('');
    const wheelRef = useRef(null);

    const handleNamesChange = (event) => {
        setNames(event.target.value);
      };

      const getNamesArray = () => {
return names.split(',').map(name => name.trim()).filter(name => name !== '');
      };

const spinWheel = () =>{

    const namesArray = getNamesArray();
    if (namesArray.length === 0) return;

    const randomIndex = Math.floor(Math.random() * namesArray.length);
    const degreesPerSegment = 360 / namesArray.length;
    const randomDegree = (360 * 3) + (degreesPerSegment * randomIndex); 

    wheelRef.current.style.transition = 'transform 4s ease-out';
    wheelRef.current.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
      setWinner(namesArray[randomIndex]);
    }, 4000);


}

    return (
 <div className="wheel-container">
     <h1>Ruleta de Nombres</h1>
        <textarea
          placeholder="Ingresa nombres separados por comas"
          value={names}
          onChange={handleNamesChange}
          rows="4"
          cols="50"
        />
       <div className="wheel" ref={wheelRef}>
          {getNamesArray().map((name, index) => (
            <div
              key={index}
              className="segment"
              style={{
                transform: `rotate(${index * (360 / getNamesArray().length)}deg)`,
                backgroundColor: index % 2 === 0 ? 'lightgreen' : 'lightblue'
              }}
            >
<div
className="text"
 style={{ transform: `rotate(${(360 / getNamesArray().length) / 2}deg)` }}
              >
                {name}
              </div>
            </div>
          ))}
        </div>

        <button onClick={spinWheel}>Girar Ruleta</button>
        <h2>Ganador: {winner}</h2>
    </div>
  )
}

import React, {useState, useEffect} from 'react'
import "../styles/ahorcado.css";

export default function Ahorcado() {

  
  const word = 'javascript';

  const [guessed, setGuessed] = useState('_'.repeat(word.length).split(''));
  const [attempts, setAttempts] = useState(6);
  const [input, setInput] = useState('');

  const handleGuess =() =>{
    if (input === '' || input.length > 1) return;

    if(word.includes(input)){

      const newGuessed = [...guessed];
      for (let i = 0; i < word.length; i++) {
        if (word[i] === input) {
          newGuessed[i] = input;
        }
      }
      setGuessed(newGuessed);

    }else {
      setAttempts(attempts - 1);
    }
    setInput('');


  }

  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  return (
    <div className="hangman-container">
      <h1>Juego del Ahorcado</h1>

      <div className="hangman-figure">
        <div className={`hangman-part ${attempts <= 5 ? 'visible' : ''}`} id="head"></div>
        <div className={`hangman-part ${attempts <= 4 ? 'visible' : ''}`} id="body"></div>
        <div className={`hangman-part ${attempts <= 3 ? 'visible' : ''}`} id="left-arm"></div>
        <div className={`hangman-part ${attempts <= 2 ? 'visible' : ''}`} id="right-arm"></div>
        <div className={`hangman-part ${attempts <= 1 ? 'visible' : ''}`} id="left-leg"></div>
        <div className={`hangman-part ${attempts === 0 ? 'visible' : ''}`} id="right-leg"></div>
      </div>

      <p className="word">Palabra: {guessed.join(' ')}</p>
      <p className="attempts">Intentos restantes: {attempts}</p>

      
      <div className="input-container">
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          maxLength="1" 
          placeholder="Adivina una letra" 
        />
        <button onClick={handleGuess}>Adivinar</button>
      </div>

      {attempts === 0 && <p className="game-over">Perdiste. La palabra era <strong>{word}</strong>.</p>}
      {!guessed.includes('_') && <p className="winner">¡Ganaste! La palabra es <strong>{word}</strong>.</p>}
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import "../styles/ahorcado.css";

const words =
["react", "javascript", "programming", "computer", "developer"];

export default function Ahorcado() {

    const [word, setWord] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [attempts, setAttempts] = useState(6);

    React.useEffect(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setWord(randomWord);
      }, []);

      const handleGuess = (letter) => {
        if (guesses.includes(letter) || attempts <= 0) return;
    
        setGuesses([...guesses, letter]);
    
        if (!word.includes(letter)) {
          setAttempts(attempts - 1);
        }
      };

      const getDisplayWord = () => {
        return word.split('').map(letter => (guesses.includes(letter) ? letter : '_')).join(' ');
      };
    
      const isGameOver = attempts <= 0 || getDisplayWord().indexOf('_') === -1;

  return (
    <div className="hangman-container">
        <h1>Juego del Ahorcado</h1>
        <div className="word-container">
          <p className="word">{getDisplayWord()}</p>
        </div>
        <p>Intentos restantes: {attempts}</p>

        <div>
          {isGameOver ? (
            <h2>{getDisplayWord().indexOf('_') === -1 ? '¡Ganaste!' : '¡Perdiste!'}</h2>
          ) : (
            <div className="button-container">
              {Array.from(Array(26)).map((_, index) => {
                const letter = String.fromCharCode(index + 65).toLowerCase();
                return (
                  <button
                    key={index}
                    onClick={() => handleGuess(letter)}
                    className={`letter-button ${guesses.includes(letter) ? 'disabled' : ''}`}
                    disabled={guesses.includes(letter)}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          )}
 </div>
        {isGameOver && (
          <button
            className="restart-button"
            onClick={() => {
              setWord(words[Math.floor(Math.random() * words.length)]);
              setGuesses([]);
              setAttempts(6);
            }}
          >
            Reiniciar
          </button>
        )}

    </div>
  )
}

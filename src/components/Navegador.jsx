import React, { useState } from 'react';
import "../styles/navegador.css"

export default function Navegador() {

const [history, setHistory] = useState(['https://www.example.com']);
const [currentIndex, setCurrentIndex] = useState(0);
const [inputUrl, setInputUrl] = useState(history[0]);

const handleInputChange = (e) => {
  setInputUrl(e.target.value);
};

const handleGoClick = () => {
  const newHistory = history.slice(0, currentIndex + 1);
  setHistory([...newHistory, inputUrl]);
  setCurrentIndex(newHistory.length);
};

const handleBackClick = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
    setInputUrl(history[currentIndex - 1]);
  }
};

const handleForwardClick = () => {
  if (currentIndex < history.length - 1) {
    setCurrentIndex(currentIndex + 1);
    setInputUrl(history[currentIndex + 1]);
  }
};

return (
  <div className="App">
    <div className="browser-bar">
      <button onClick={handleBackClick} disabled={currentIndex === 0}>Back</button>
      <button onClick={handleForwardClick} disabled={currentIndex === history.length - 1}>Forward</button>
      <input 
        type="text" 
        value={inputUrl} 
        onChange={handleInputChange} 
        placeholder="Enter URL" 
      />
      <button onClick={handleGoClick}>Go</button>
    </div>
    <iframe 
      src={history[currentIndex]} 
      title="browser"
      sandbox="allow-scripts allow-same-origin allow-forms"
    ></iframe>
  </div>
);
}
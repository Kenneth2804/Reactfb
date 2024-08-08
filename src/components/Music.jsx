import React, { useState } from 'react';
import axios from 'axios';
import "../styles/musica.css"

export default function Music() {

    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);

    const searchTracks = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`)
          .then(response => {
            setTracks(response.data.data);
          })
          .catch(error => console.error('Error fetching data from Deezer API:', error));
      };
    
      const playTrack = (track) => {
        setCurrentTrack(track.preview);
      };


    return (
        <div className="container">
        <div className="searchContainer">
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Buscar canción..." 
            className="input" 
          />
      <button onClick={searchTracks} className="button">
          Buscar
        </button>
      </div>

      {currentTrack && <audio controls src={currentTrack} className="audio" />}
      
      <div className="trackList">
        {tracks.map((track) => (
          <div key={track.id} className="trackItem">
            <button onClick={() => playTrack(track)} className="trackButton">
              {track.title}
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

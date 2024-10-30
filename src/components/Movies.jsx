import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://ghibliapi.herokuapp.com/films');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Studio Ghibli Movies</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {movies.map((movie) => (
          <li key={movie.id} style={{ marginBottom: '20px' }}>
            <h2>{movie.title} ({movie.release_date})</h2>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/city.css';

function Country(){

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filteredCountries);
  };

  return(

    <div className='App'>
        <h1>Countries!!!</h1>
        <input
        type="text"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />   

<ul className="countries-list">
        {filteredCountries.map(country => (
          <li key={country.name.common} className="country-item">
            <strong>{country.name.common}</strong>: Capital - {country.capital}
          </li>
        ))}
      </ul>


    </div>

  )

}

export default Country;
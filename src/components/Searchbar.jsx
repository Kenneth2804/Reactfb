import React, { useState } from 'react';

const Searchbar = ({onSearch}) =>{

    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
  

    const handleInputChange = async (e) =>{
        const value = e.target.value;
        setQuery(value);
if (value.length > 1) {
   setIsLoading(true);
   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
   const data = await response.json();
   const filteredSuggestions = data.filter(user =>
   user.name.toLowerCase().includes(value.toLowerCase())
   );
 setSuggestions(filteredSuggestions);
 setIsLoading(false);
          } 

else {
  setSuggestions([]);
     }
    }

    
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await onSearch(query);
    setIsLoading(false);
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
  };
  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        aria-label="Search"
      />
     
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white text-black border border-gray-300 rounded-b-md mt-1">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setQuery(item.name);
                setSuggestions([]);
                onSearch(item.name);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );



}
export default Searchbar;
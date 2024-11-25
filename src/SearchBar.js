import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Initialize query state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (query.trim()) { // Check for non-empty query before calling onSearch
      onSearch(query);
    } else {
      // Handle empty query (optional)
      console.warn('Empty search query!'); // Or display an error message to the user
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-bar-container p-8">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search for books..."
          className="search-input border border-gray-300 p-2 rounded-md"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className="search-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
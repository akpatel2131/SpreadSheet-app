// SearchBar.js
import React, { useState } from 'react';
import useStore from './useStore';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const searchCells = useStore((state) => state.searchCells);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchCells(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search..."
      className="mb-4 border p-2"
    />
  );
};

export default SearchBar;

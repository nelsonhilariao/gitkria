import React, { useState } from 'react';
import './Filters.css'

const Filter = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    props.onSearch(searchText)
  };

  const cleanSearch = () => {
    setSearchText('')
    props.onSearch('')
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.onSearch(searchText)
    }
  };

  return (
    <div className="search-bar" >
      <div className="filters" >
        <input
          type="text"
          placeholder="Buscar repositório"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={handleKeyDown}
        />
        <button onClick={cleanSearch}>x</button>
      </div>
      <button onClick={handleSearch}>Filtrar</button>
    </div>
  );
};

export default Filter;
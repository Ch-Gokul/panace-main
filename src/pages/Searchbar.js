import React, { useState } from 'react';
import './Searchbar.css'
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('TranslatedRecipeName');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText, selectedOption);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <select className="search-dropdown" onChange={handleOptionChange} value={selectedOption}>
        <option value="TranslatedRecipeName">Recipe Name</option>
        <option value="Cuisine">Cuisine</option>
        {/* Add more options if needed */}
      </select>
      <button className="search-button" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;

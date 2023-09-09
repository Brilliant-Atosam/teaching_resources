import React from "react";
import { FiSearch } from "react-icons/fi";
const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-form">
        <input
          type="text"
          className="filter-input"
          placeholder="What are you look for?"
        />
        <select name="" id="" className="filter-select">
          <option value="" className="filter-option">
            all
          </option>
          <option value="" className="filter-option">
            video lessons
          </option>
        </select>
        <FiSearch className="filter-search-icon" />
      </div>
    </div>
  );
};

export default Filter;

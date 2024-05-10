import React from "react";
import "./searchbar.css";
const SearchBar = () => {
  return (
    <div className="searchBar d-flex">
      <form action="" className="d-flex form-control">
        <input
          type="text"
          className="input form-control"
          placeholder="Search For Products"
        />
      </form>
      <button className="btn">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;

import React, { useState, useEffect } from "react";
import "../styles/searchbar.css";

const SearchBar = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/content-feed")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input className="searchbar__input" type="text" placeholder="Search" />
        <div className="searchbar__button" />
      </div>
    </div>
  )
};

export default SearchBar;
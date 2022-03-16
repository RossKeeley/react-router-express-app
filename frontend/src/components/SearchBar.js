import React, { useState, useEffect } from "react";
import "../styles/searchbar.css";

const SearchBar = () => {
  const [data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    fetch("/content-feed")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    let searchString = searchTerm.toLowerCase();
    let searchArray = searchString.trim().split(" ");
    let re = new RegExp(searchArray.join("|"), 'i');
    console.log(searchArray);
    console.log(re);


    let searchResults = data.filter((post) => {
      let regex = new RegExp("/one/i");
      console.log(regex.test(post.text));
      re.test(post.text) ||
      re.test(post.forename) ||
      re.test(post.surname)
    });
    console.log("searchResults: ", searchResults);
    setSearchData(JSON.stringify(searchResults));
    console.log("searchData: ", searchData);
  }
    
  console.log(searchTerm);
  console.log(data);

  return (
    <div className="searchbar-container">
      <form className="searchbar" onSubmit={onSubmit}>
        <input 
          className="searchbar__input" 
          type="text" 
          placeholder="Search" 
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }} 
        />
        <button className="searchbar__button" type="submit" />
      </form>
    </div>
  )
};

export default SearchBar;
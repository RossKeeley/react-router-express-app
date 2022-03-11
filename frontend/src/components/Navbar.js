import React from 'react';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo-image" src="#" alt="" />
        <h1 className="navbar__logo-title">
          <Link className="navbar__logo-title-link" to="/">TBD</Link>
        </h1>
      </div>
      <SearchBar />
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <Link className="navbar__list-item-link" to="about">about</Link>
        </li>
        <li className="navbar__list-item">
          <Link className="navbar__list-item-link" to="contact">contact</Link>
        </li>
        {/* <li><Link to="profile">profile</Link></li> */}
      </ul>
    </div>
  );
};

export default Navbar;
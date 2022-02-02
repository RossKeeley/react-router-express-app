import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo-image" src="#" alt="" />
        <h1 className="navbar__logo-title">
          <Link className="navbar__logo-title-link" to="/">grow</Link>
        </h1>
      </div>
      <div className="navbar__searchbar-container">
        <input className="navbar__searchbar" type="text" />
      </div>
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
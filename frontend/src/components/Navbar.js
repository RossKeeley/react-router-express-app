import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="#" alt="" />
        <h1>GROW</h1>
      </div>
      <div className="navbar__searchbar">
        <input type="text" />
      </div>
      <ul className="navbar__list">
        <li className="navbar__list-item"><Link to="about">about</Link></li>
        <li className="navbar__list-item"><Link to="contact">contact</Link></li>
        {/* <li><Link to="profile">profile</Link></li> */}
      </ul>
    </div>
  );
};

export default Navbar;
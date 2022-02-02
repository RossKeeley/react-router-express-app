import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/footer.css";

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footer__logo">
        <img className="footer__logo-image" src="#" alt="" />
        <h1 className="footer__logo-title">
          <Link className="footer__logo-title-link" to="/">TBD</Link>
        </h1>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-text">C Ross Keeley 2022</p>
      </div>
      <ul className="footer__list">
        <li className="footer__list-item">
          <Link className="footer__list-item-link" to="about">about</Link>
        </li>
        <li className="footer__list-item">
          <Link className="footer__list-item-link" to="contact">contact</Link>
        </li>
        {/* <li><Link to="profile">profile</Link></li> */}
      </ul>
    </div>
  );
};

export default Footer;
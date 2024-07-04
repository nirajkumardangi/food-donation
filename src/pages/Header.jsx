// Header.js
import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
         <div className="social-media">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="contact-info">
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 94 Kanke Block - Ranchi, JH 834006
          </span>
          <span>
            <FontAwesomeIcon icon={faPhoneAlt} /> (+91) 8800 00 1100
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} /> 9.00am - 6.00pm
          </span>
        </div>
      </div>
      <nav className="nav">
        <div className="logo">Donate Food</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Donations</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-buttons">
          <a href="#" className="btn volunteer">Become a Volunteer</a>
          <a href="#" className="btn donate">Donate Now</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

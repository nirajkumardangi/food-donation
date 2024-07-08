// Header.js
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { useMutation } from "@tanstack/react-query";
import LoadingIndicator from "../../Ui/LoadingIndicator";
import { useFirebase } from "../../utility/Storage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Firebase = useFirebase();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: Firebase.signOutFunction,
    onSuccess: () => {
      alert("LogOut successful");
    },
  });

  function handleLogout() {
    mutate();

    navigate("./");
  }

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
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 94 Kanke Block - Ranchi,
            JH 834006
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
        <div className="logo">
          <a href="#">
            <img src="logo.png" alt="logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donations"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Donations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-buttons">
          <NavLink to="#" className="btn volunteer">
            Become a Volunteer
          </NavLink>

          {Firebase.isLogin ? (
            <NavLink className="btn donate" onClick={handleLogout}>
              {isPending ? "Loading..." : "Logout"}
            </NavLink>
          ) : (
            <NavLink to="/auth?mode=login" className="btn donate">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

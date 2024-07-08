// Header.js (Updated without dropdown)
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useMutation } from "@tanstack/react-query";
import { useFirebase } from "../../utility/Storage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className="bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-700 mb-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo.png" className="h-8" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavLink
            to="/auth"
            type="button"
            className="text-white focus:ring-4 focus:outline-none bg-primary-color hover:bg-secondary-color font-light-bold rounded-lg text-sm px-4 py-2 text-center transition-colors duration-500"
          >
            Login
          </NavLink>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-light-bold rounded-lg bg-gray-800 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-gray-900">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-primary-color transition-colors duration-500 md:p-0 md:dark:hover:bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-primary-color transition-colors duration-500 md:p-0 md:dark:hover:bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-primary-color transition-colors duration-500 md:p-0 md:dark:hover:bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donations"
                className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-primary-color transition-colors duration-500 md:p-0 md:dark:hover:bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                Donations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-primary-color transition-colors duration-500 md:p-0 md:dark:hover:bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

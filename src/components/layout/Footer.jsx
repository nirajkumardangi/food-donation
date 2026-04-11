import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-gray-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary-color/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Dedicated to fighting hunger and food insecurity by connecting
              donors with those in need. Together we can create a hunger-free
              world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-color hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-color hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-color hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-display">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-color transition-colors flex items-center gap-2"
                >
                  <span className="text-primary-color text-xs">▹</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  className="hover:text-primary-color transition-colors flex items-center gap-2"
                >
                  <span className="text-primary-color text-xs">▹</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary-color transition-colors flex items-center gap-2"
                >
                  <span className="text-primary-color text-xs">▹</span> Our
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/developers"
                  className="hover:text-primary-color transition-colors flex items-center gap-2"
                >
                  <span className="text-primary-color text-xs">▹</span>{" "}
                  Developers
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-display">
              Information
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-color transition-colors flex items-center gap-2"
                >
                  <span className="text-primary-color text-xs">▹</span> Contact
                  Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-primary-color transition-colors flex items-center gap-2"
                >
                  <span className="text-primary-color text-xs">▹</span> Privacy
                  Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-primary-color transition-colors flex items-center gap-2"
                >
                  <span className="text-primary-color text-xs">▹</span> Terms of
                  Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-display">
              Subscribe
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates and news on our missions directly in your
              inbox.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-primary-color focus:ring-1 focus:ring-primary-color transition-all"
              />
              <button
                type="button"
                className="bg-gradient-to-r from-primary-color to-secondary-color text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Feed Aid Foundation. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-500 font-kalam">
            Made with <span className="text-primary-color">♥</span> to end
            hunger
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useFirebase } from "../../context/FirebaseContext";
import UserIcon from "../../pages/UserIcon";
import Logo from "../ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const Firebase = useFirebase();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutUs" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Developers", path: "/developers" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-deep-space/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-1"
          : "bg-transparent py-2 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 flex items-center group">
            <Logo />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-wide transition-all duration-310 relative py-2 ${
                      isActive
                        ? "text-primary-color"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-color to-secondary-color rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center border-l border-white/10 pl-10 space-x-6">
              {Firebase.isLogin ? (
                <UserIcon />
              ) : (
                <NavLink
                  to="/auth?mode=login"
                  className="bg-gradient-to-r from-primary-color to-secondary-color hover:shadow-[0_0_20px_rgba(247,79,34,0.4)] text-white px-7 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-[1.05] active:scale-95"
                >
                  Sign In
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-6">
            {Firebase.isLogin && <UserIcon />}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 transition-colors"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="text-2xl"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-space/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-4 pb-10 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-4 rounded-2xl text-lg font-bold transition-all ${
                      isActive
                        ? "bg-white/5 text-primary-color border border-white/10 shadow-inner"
                        : "text-gray-300 hover:bg-white/5 hover:text-primary-color"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              {!Firebase.isLogin && (
                <NavLink
                  to="/auth?mode=login"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-6 text-center block w-full bg-gradient-to-r from-primary-color to-secondary-color text-white px-5 py-4 rounded-2xl font-bold shadow-lg text-lg transform active:scale-[0.98] transition-transform"
                >
                  Sign In
                </NavLink>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

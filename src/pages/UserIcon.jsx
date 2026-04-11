import userAvtar from "../assets/userAvtar.png";
import { useFirebase } from "../context/FirebaseContext";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../components/ui/Notification";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UserIcon() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const firebase = useFirebase();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: firebase.signOutFunction,
    onSuccess: () => {
      navigate("/");
    },
  });

  function handleLogout() {
    mutate();
    navigate("./");
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const userPhoto = firebase.user.photoURL;

  return (
    <div className="relative">
      <button
        id="avatarButton"
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none transition-transform active:scale-95"
      >
        <img
          className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-white/10 hover:ring-primary-color transition-all object-cover"
          src={userPhoto ? userPhoto : userAvtar}
          alt="User dropdown"
        />
      </button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            id="userDropdown"
            className="absolute right-0 mt-3 bg-dark-gray/95 backdrop-blur-xl border border-white/10 divide-y divide-white/5 rounded-2xl shadow-2xl w-52 overflow-hidden z-50"
          >
            <div className="px-5 py-4 text-sm">
              <div className="font-bold text-white truncate">
                {firebase.user.displayName ? firebase.user.displayName : "User"}
              </div>
              <div className="text-gray-400 text-xs truncate mt-1">
                {firebase.user.email}
              </div>
            </div>
            <ul
              className="py-2 text-sm text-gray-300"
              aria-labelledby="avatarButton"
            >
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-5 py-2.5 hover:bg-white/5 hover:text-primary-color transition-all"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={`/user/${firebase.user.uid}`}
                  onClick={() => setDropdownOpen(false)}
                  className="block px-5 py-2.5 hover:bg-white/5 hover:text-primary-color transition-all"
                >
                  Profile Settings
                </Link>
              </li>
            </ul>
            <div className="py-2">
              <button
                onClick={() => {
                  handleLogout();
                  setDropdownOpen(false);
                }}
                className="w-full text-left block px-5 py-2.5 text-sm text-red-400 hover:bg-red-400/10 transition-all font-medium"
              >
                {isPending ? <ButtonLoader content="Signing out..." /> : "Sign out"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

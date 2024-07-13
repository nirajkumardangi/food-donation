import userAvtar from "../../src/assets/userAvtar.png";
import { useFirebase } from "../utility/Storage";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../Ui/Notification";
import { useState } from "react";
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
    <div className="fixed top-4 right-20 md:right-7">
      <img
        id="avatarButton"
        type="button"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={userPhoto ? userPhoto : userAvtar}
        alt="User dropdown"
      />

      <div
        id="userDropdown"
        className={`z-10 ${
          dropdownOpen ? "block " : "hidden"
        } fixed top-15 right-5 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <div className="px-4 py-3 text-sm text-gray-100">
          <div>
            {firebase.user.displayName ? firebase.user.displayName : "user"}
          </div>
          <div className="font-medium truncate">{firebase.user.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-100"
          aria-labelledby="avatarButton"
        >
          <li>
            <Link
              to="/dashboard"
              className="block px-4 py-2 hover:hover:bg-gray-600 transition-all duration-500 ease-in-out"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={`/user/${firebase.user.uid}`}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-500 ease-in-out"
            >
              Profile
            </Link>
          </li>
        </ul>
        <div className="py-1">
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white transition-all duration-500 ease-in-out"
            onClick={handleLogout}
          >
            {isPending ? <ButtonLoader content="wait..." /> : "Sign out"}
          </Link>
        </div>
      </div>
    </div>
  );
}

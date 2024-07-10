
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
  const navigate=useNavigate()
   const { mutate, isPending } = useMutation({
    mutationFn: firebase.signOutFunction,
    onSuccess: () => {
      navigate('/')
    },
  });

  function handleLogout() {
    mutate();
    navigate("./");
  }
 
  console.log(firebase.user.photoURL);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const userPhoto=firebase.user.photoURL

  return (
    <div className="fixed top-3 ">
      <img
        id="avatarButton"
        type="button"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={userPhoto ? userPhoto :userAvtar}
        alt="User dropdown"
      />

      <div
        id="userDropdown"
        className={`z-10 ${
          dropdownOpen ? "block " : "hidden"
        } fixed top-15 right-5 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <div className="px-4 py-3 text-sm text-secondary-color">
          <div>
            {firebase.user.displayName ? firebase.user.displayName : "user"}
          </div>
          <div className="font-medium truncate">{firebase.user.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-secondary-color"
          aria-labelledby="avatarButton"
        >
          <li>
            <Link to="/dashboard" className="block px-4 py-2  hover:bg-primary-color ">
              Dashboard
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          
        </ul>
        <div className="py-1">
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-secondary-color hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={handleLogout}
          >
           {isPending ? <ButtonLoader content='wait...'/> :'Sign out'} 
          </Link>
        </div>
      </div>
    </div>
  );
}

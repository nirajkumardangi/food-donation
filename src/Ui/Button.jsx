import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faBox, faTshirt } from "@fortawesome/free-solid-svg-icons";

export default function Button({ content }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset hover:bg-gray-800">
          {content}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink
              to="/donation/form"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faUtensils} className="mr-2" />
              Donation Form
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/donation/meals"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faBox} className="mr-2" />
              Donated Meals
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faTshirt} className="mr-2" />
              Donated Clothes
            </NavLink>
          </MenuItem>
          <form action="#" method="POST">
            {/* Additional form items can be added here if needed */}
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}

Button.propTypes = {
  content: PropTypes.node.isRequired,
};

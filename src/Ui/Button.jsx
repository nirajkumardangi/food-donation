import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Button({ content }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset bg-gray-900 hover:bg-gray-900">
          {content}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              to={'/donation/form'}
            >
             Donation Form
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to='donation/meals'
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
             Donated Meals
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
            Donated Cloths
            </NavLink>
          </MenuItem>
          <form action="#" method="POST">
         
          </form>
        </div>
      </MenuItems>
    </Menu>
  )
}
Button.propTypes = {
  content: PropTypes.node.isRequired,
}